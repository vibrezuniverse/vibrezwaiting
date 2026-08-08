# Vibrez Landing Page — Rebuild Prompt

**How to use:** paste everything between the `=====` lines into a new Claude conversation.
It contains the full current page spec, so Claude can rebuild or extend it without seeing
the repo. If Claude *does* have filesystem access, point it at `~/dev/vibrezwaiting/`.

**Current state:** static page, live on Vercel, 390 lines of hand-written HTML/CSS/JS in a
single `index.html`, plus `thank-you.html`, `vibrez-bg.mp4`, and a serverless waitlist
endpoint at `api/waitlist.js` writing to Postgres.

---

=====

You are rebuilding the Vibrez early-access landing page. Vibrez Universe Pte. Ltd. is a
Singapore company building a living universe for passion — entertainment, culture, sport,
music, creators. The page's single job is to convert a visitor into a waitlist email.

## Non-negotiable brand law

These come from Vibrez `brand.md` and are binding on every word and pixel. The current
live page **violates the first one three times** — fixing that is the point of this rebuild.

- **Spatial language is districts, buildings, and floors. The container is the universe.**
  Never *city*, never *world*, never *metaverse* in public copy. Inside a building, a floor
  is a number plus a name (Floor 2 — Karaoke). A scene is what is happening on a floor,
  never a place name on its own.
- The map is **isometric**. Not 2D, not 3D. Isometric.
- The currency is **Gold Credits**. Never tokens, never coins.
- The name is **Vibrez**; the entity is **Vibrez Universe Pte. Ltd.** Correct any
  transcription variant (Vibra, Vibre).
- **"Entertainment is the gateway, not the destination"** — the line that bridges the
  Phase 1 product and the larger mission when both must be present.
- The member-facing AI is **Vibe**. *Compass* is internal only and never appears publicly.
- The single signature is **Partagez la passion.** The English line *share the passion* is
  a translation for contexts that need one — **never a second signature.** It should not
  sit under the logo as a standing tagline.
- Tone: warm, human, hopeful. Never cynical, never manipulative, never corporate
  parallelism. Direct and opinionated. Deliberate mystery is valid; over-explaining is not.
- The promise test for every line: *does this make the world feel a little more alive?*

## Locked visual identity

| Token | Value | Use |
|---|---|---|
| `--black` | `#090909` | page background |
| `--bg-alt` | `#121212` | raised surfaces |
| `--white` | `#FFFFFF` | primary text, logo |
| `--muted` | `#B7B7B7` | secondary text |
| `--border` | `#393A39` | hairlines, input borders |
| `--amber` | `#FFBF00` | primary CTA — brand invariant |
| `--amber-hover` | `#FFCC33` | CTA hover |
| `--lime` | `#D6FF00` | gradient partner, success state |

District chip palette: Malachite `#2DEB50`, Tangerine `#FF6D24`, Sapphire `#2D4FEB`,
Watermelon `#EB2D4E`, Ice `#00EAF2`, Amber `#FFBF00`.

- **Headlines:** Barlow Semi Condensed, weight 900, italic.
- **Body:** Lato (400 / 700 / 900).
- **Amber CTA buttons are pill-shaped with black text.** This is a brand invariant — do
  not restyle it.
- The white Vibrez SVG logo carries the branding. Video clips stay clean with no logo
  baked in.
- Aesthetic: clean game-art isometric. Editorial and architectural, never generic.

## What exists today (reproduce or improve, don't discard)

Single-viewport centred layout on near-black, over a fixed full-bleed autoplaying muted
looping `vibrez-bg.mp4` at 50% opacity, with a dark wash and a radial amber glow behind
the content. In order down the page:

1. Inline white Vibrez SVG logo (viewBox `0 0 210 70`) — **remove the "SHARE THE PASSION"
   tagline beneath it**, per the signature rule above.
2. Eyebrow: *Early access waitlist*
3. `<h1>` — currently *"The city that never logs off"* with "logs off" in an amber→lime
   gradient span. **Must be replaced**; "city" is banned. Keep the gradient treatment on
   the final two or three words.
4. Sub-paragraph — currently *"A social city built for play…"*. **Must be replaced** for
   the same reason.
5. Six district chips, each in its own palette colour: Nightlife, Culture, Sports, eSports,
   Music, Creators.
6. Email form → `POST /api/waitlist` with JSON `{ email, source: "landing" }`, button
   *Join the list*, disabled + "Joining…" during flight, redirect to `/thank-you` on
   success, inline error message in Watermelon on failure.
7. Reassurance note: *No spam. One email when the gates open.*
8. Footer: *© 2026 Vibrez Universe Pte. Ltd. · Singapore*

Accessibility and behaviour already in place, keep all of it: visually-hidden form label,
`aria-live="polite"` status region, `:focus-visible` amber outline, `prefers-reduced-motion`
handling, single-column stack under 520px.

## Your tasks

1. **Rewrite the headline and sub-copy** so they obey the language law while hitting
   harder than the originals. Give me **five** headline options, each with its sub-line.
   For each, state in one line what it promises and who it excludes. Recommend one and say
   why. Headlines are short, present-tense, and carry the gradient on the final beat.
2. **Rewrite the meta title, meta description, and OG/Twitter tags** — the violations are
   duplicated there and search engines have them cached.
3. **Decide whether the page stays one viewport or scrolls.** Make the call and defend it
   in three lines. If it scrolls, specify each section and the single job that section does.
4. **Specify the imagery** the page needs, by slot: what it shows, its aspect ratio, and
   where it sits. Do not describe generic "vibrant" art — describe isometric architecture
   with specific content.
5. **Write the code.** A single self-contained `index.html` in the existing style — inline
   CSS custom properties, no build step, no framework, no external dependency beyond Google
   Fonts. Preserve the existing form contract exactly; the endpoint is not changing.
6. **List anything you changed that I did not ask for**, with a one-line reason each.

Do not add: testimonials, fake counters, countdown timers, social proof you cannot
substantiate, or any claim about launch dates that has not been given to you. Deliberate
mystery is the strategy — an empty promise is not.

=====

---

## Notes for Sayed (not part of the prompt)

- The three language-law violations are in `index.html` lines 6–9 (title + meta +
  OG description) and the `<h1>` / `.sub` block near line 300.
- Image prompts for Higgsfield are in `HIGGSFIELD-IMAGE-PROMPTS.md` in this folder —
  generate those first if you want the rebuild to land against real art rather than the
  existing background video.
- The waitlist endpoint and Postgres table are untouched by any of this.
