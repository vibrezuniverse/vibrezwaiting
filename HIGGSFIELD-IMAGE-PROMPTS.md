# Vibrez Landing — Higgsfield Image Prompts

Nine prompts, ready to paste. All built on the locked brand identity: near-black `#090909`,
amber `#FFBF00`, lime `#D6FF00`, clean game-art **isometric**, editorial and architectural.

**Rules baked into every prompt below — don't strip them:**
- No text, no lettering, no signage with readable words, no logos. The white Vibrez SVG is
  overlaid in code; art stays clean.
- Isometric projection. Not top-down, not perspective, not 3D-render-realistic.
- Near-black background with amber and lime as the only light sources.
- No real-world brands, no recognisable real people, no celebrity likeness.

**Suggested settings:** highest quality tier, 16:9 for hero/wide slots, 1:1 for district
tiles, 9:16 for the mobile hero. Generate 4 variations of #1 before committing — the hero
sets the look everything else has to match.

---

## 1 — Hero establishing shot `16:9` (primary)

> Isometric game-art illustration of a vast interconnected entertainment universe floating
> in near-black void. Six distinct architectural districts connected by glowing amber
> walkways, arranged on a subtly tilted isometric grid. Each district is a cluster of
> stylised modular buildings with visible interior floors, cut away like an architectural
> model. Light sources are warm amber #FFBF00 and electric lime #D6FF00 only, spilling from
> windows and walkways onto a matte near-black #090909 ground. Clean flat-shaded game art,
> crisp geometric edges, subtle ambient occlusion, no texture noise. Editorial and
> architectural, premium, uncluttered. Deep negative space in the upper third for headline
> copy. No text, no signage, no logos, no people close enough to read faces.

## 2 — Hero, mobile crop `9:16`

> Same universe as above, recomposed vertically. Isometric tower of stacked entertainment
> floors rising through near-black void, each floor a cut-away showing a different scene —
> a dance floor, a sports viewing lounge, a music stage, a creator studio. Warm amber and
> lime interior lighting spilling outward. Glowing amber walkway spiralling around the
> exterior. Clean flat-shaded isometric game art on matte black #090909. Generous empty
> space at the top. No text, no signage, no logos.

## 3 — Building cutaway, "floors" concept `16:9`

> Isometric architectural cutaway of a single tall entertainment building, front wall
> removed to reveal six stacked interior floors. Each floor is a distinct scene rendered in
> clean flat-shaded game art: a karaoke room, a lounge with screens, a small concert stage,
> a games arcade, a creator studio, a rooftop terrace. Warm amber #FFBF00 spill lighting
> per floor, electric lime #D6FF00 accents on stair cores and edges. Matte near-black
> #090909 surroundings, no city skyline behind. Precise geometric linework, premium
> architectural-model feel. No text, no signage, no logos, no readable faces.

---

## District tiles `1:1` — one per chip

Keep composition identical across all six so they sit as a set: single isometric building
cluster, centred, floating on near-black, one dominant accent colour plus amber rim light.

**4 — Nightlife** (Watermelon `#EB2D4E`)
> Isometric game-art illustration of a nightlife venue cluster floating on near-black
> #090909. Cut-away club interior with a dance floor, DJ booth, and speaker stacks, lit in
> deep watermelon red #EB2D4E with warm amber #FFBF00 rim light on the building edges.
> Clean flat-shaded geometry, crisp edges, premium architectural model feel. Centred
> composition, generous margin. No text, no signage, no logos, no readable faces.

**5 — Culture** (Sapphire `#2D4FEB`)
> Isometric game-art illustration of a cultural venue cluster floating on near-black
> #090909. Cut-away gallery and theatre interior with a proscenium stage, seating tiers,
> and exhibition plinths, lit in deep sapphire blue #2D4FEB with warm amber #FFBF00 rim
> light on the building edges. Clean flat-shaded geometry, crisp edges, premium
> architectural model feel. Centred composition, generous margin. No text, no signage, no
> logos, no readable faces.

**6 — Sports** (Malachite `#2DEB50`)
> Isometric game-art illustration of a sports venue cluster floating on near-black #090909.
> Cut-away stadium bowl and viewing lounge with tiered seating and large blank screens, lit
> in malachite green #2DEB50 with warm amber #FFBF00 rim light on the building edges. Clean
> flat-shaded geometry, crisp edges, premium architectural model feel. Centred composition,
> generous margin. No text, no signage, no scoreboards with numbers, no logos, no readable
> faces.

**7 — eSports** (Ice `#00EAF2`)
> Isometric game-art illustration of an esports arena cluster floating on near-black
> #090909. Cut-away competition stage with paired player pods, tiered audience seating, and
> large blank display panels, lit in ice cyan #00EAF2 with warm amber #FFBF00 rim light on
> the building edges. Clean flat-shaded geometry, crisp edges, premium architectural model
> feel. Centred composition, generous margin. No text, no signage, no logos, no readable
> faces.

**8 — Music** (Tangerine `#FF6D24`)
> Isometric game-art illustration of a live music venue cluster floating on near-black
> #090909. Cut-away concert hall with a stage, lighting rig, and standing floor, lit in
> tangerine orange #FF6D24 with warm amber #FFBF00 rim light on the building edges. Clean
> flat-shaded geometry, crisp edges, premium architectural model feel. Centred composition,
> generous margin. No text, no signage, no logos, no readable faces.

**9 — Creators** (Amber `#FFBF00`)
> Isometric game-art illustration of a creator studio cluster floating on near-black
> #090909. Cut-away production spaces with camera rigs, softboxes, editing desks, and a
> small podcast booth, lit in warm amber #FFBF00 with electric lime #D6FF00 accent edges.
> Clean flat-shaded geometry, crisp edges, premium architectural model feel. Centred
> composition, generous margin. No text, no signage, no logos, no readable faces.

---

## Merging the art back into the page

1. Generate #1 first, 4 variations. Pick the look. Everything else must match its lighting
   and line weight — if a district tile doesn't sit next to the hero, regenerate the tile,
   not the hero.
2. Export at 2× the display size, then run through Higgsfield `upscale_image` to 2K.
3. Convert to `.webp` at quality 82 before committing — the current page loads a video and
   cannot afford heavy PNGs on mobile.
4. Drop into `~/dev/vibrezwaiting/` and reference from `index.html`. The hero replaces or
   layers behind `vibrez-bg.mp4`; district tiles sit inside the existing `.district` chips.
5. Keep the amber CTA pill and the white SVG logo overlaid in code — never baked into art.
