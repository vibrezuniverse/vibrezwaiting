# Vibrez Waiting Page

Static same-day landing page for the Vibrez early access waitlist.

## Files

- `index.html` - production landing page
- `vibrez-bg.mp4` - autoplaying background video
- `vercel.json` - static Vercel routing/config

## Launch Checklist

1. Replace the form action in `index.html`:

   ```html
   https://formspree.io/f/REPLACE_WITH_FORM_ID
   ```

   with the real Formspree endpoint.

2. Run a local static server from this folder:

   ```bash
   python3 -m http.server 4173
   ```

3. Verify:

   - `/` loads the landing page.
   - `/vibrez-bg.mp4` loads the background video.
   - The waitlist form submits to Formspree.
   - Mobile layout is readable and does not overflow.

4. Deploy on Vercel as a static project from the repository root.
