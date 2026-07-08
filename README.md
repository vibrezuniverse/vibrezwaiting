# Vibrez Waiting Page

Static same-day landing page for the Vibrez early access waitlist.

## Files

- `index.html` - production landing page
- `thank-you.html` - post-signup confirmation page
- `vibrez-bg.mp4` - autoplaying background video
- `api/waitlist.js` - Vercel serverless waitlist signup endpoint
- `db/waitlist.sql` - table schema used by the endpoint
- `vercel.json` - static Vercel routing/config

## Launch Checklist

1. Attach a Vercel Postgres-compatible database and make `POSTGRES_URL` or `DATABASE_URL` available to production.

2. The API auto-creates the `waitlist_signups` table on first signup. You can also run `db/waitlist.sql` manually.

3. Run a local static server from this folder:

   ```bash
   python3 -m http.server 4173
   ```

4. Verify:

   - `/` loads the landing page.
   - `/thank-you.html` loads the post-signup confirmation page locally. On Vercel, clean URLs expose it as `/thank-you`.
   - `/vibrez-bg.mp4` loads the background video.
   - `POST /api/waitlist` stores an email in `waitlist_signups` and the form redirects successful signups to `/thank-you`.
   - Mobile layout is readable and does not overflow.

5. Deploy on Vercel from the repository root.
