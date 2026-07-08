import { neon } from "@neondatabase/serverless";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let tableReadyPromise;
let db;

function parseBody(req) {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }

  return req.body;
}

async function ensureTable() {
  if (!tableReadyPromise) {
    tableReadyPromise = (async () => {
      const sql = getDb();

      await sql`
        CREATE TABLE IF NOT EXISTS waitlist_signups (
          id BIGSERIAL PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          source TEXT NOT NULL DEFAULT 'landing',
          referrer TEXT,
          user_agent TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS waitlist_signups_created_at_idx
        ON waitlist_signups (created_at DESC);
      `;
    })().catch((error) => {
      tableReadyPromise = undefined;
      throw error;
    });
  }

  return tableReadyPromise;
}

function getDb() {
  if (!db) {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (!connectionString) {
      throw new Error("Missing DATABASE_URL or POSTGRES_URL.");
    }

    db = neon(connectionString);
  }

  return db;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const body = parseBody(req);
  const email = String(body.email || "").trim().toLowerCase();
  const source = String(body.source || "landing").trim().slice(0, 80) || "landing";

  if (!emailPattern.test(email) || email.length > 254) {
    return res.status(400).json({ ok: false, error: "Enter a valid email address." });
  }

  try {
    await ensureTable();

    await getDb()`
      INSERT INTO waitlist_signups (email, source, referrer, user_agent)
      VALUES (
        ${email},
        ${source},
        ${String(req.headers.referer || "").slice(0, 500)},
        ${String(req.headers["user-agent"] || "").slice(0, 500)}
      )
      ON CONFLICT (email)
      DO UPDATE SET
        source = EXCLUDED.source,
        referrer = EXCLUDED.referrer,
        user_agent = EXCLUDED.user_agent,
        updated_at = NOW();
    `;

    return res.status(200).json({
      ok: true,
      message: "You're on the list. We'll email you when the gates open."
    });
  } catch (error) {
    console.error("waitlist_signup_failed", error);

    return res.status(500).json({
      ok: false,
      error: "Waitlist is not connected yet. Please try again shortly."
    });
  }
}
