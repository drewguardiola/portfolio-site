# Drew Guardiola · Portfolio Site

Personal portfolio for Drew Guardiola (Northwestern McCormick, MechE B.S./M.S. '27). Targeting mechanical / aerospace internships starting Summer 2026.

## V2.8 changes (May 2026)

- Em dashes purged sitewide. Convention: do not use em dashes in any user-facing copy. Replace asides with commas, amplifications with colons, abrupt breaks with periods. The only exempt instance is the "Northwestern University — McCormick School of Engineering" school-name separator (about.html, resume.js). Page title separator is `·` (middle dot).
- Home Toolkit expanded from 8 to 16 skills (4×4 grid). Added: CFD, FEA, Topology Opt., Manual Milling, Sand Casting, Injection Molding, Embedded Systems, DOORS. Eight new SVG icons in `assets/brand/icons/` in the existing line-stroke style. Software + process entries remain intentionally mixed within the grid (not split into themed groups).

## V2.7 changes (May 2026)

- Hero airfoil removed entirely: `js/hero-airfoil.js` deleted, hero SVG element removed from `index.html`, all `.hero__canvas` / `.hf-*` rules and `hf-rotate`/`hf-rotate-rear`/`hf-pitch` keyframes stripped from `css/pages.css`, airfoil parallax block stripped from `js/motion.js`.
- Home-page dot grid removed (it was inside the airfoil SVG, goes away with it). Topo "rings" background on `body` retained site-wide.

## V2.6 changes (May 2026)

- Nav tab "Work" → "Projects" (display only; `work.html` filename preserved). Home heading "Featured Work" → "Featured Projects".
- Project metadata strip simplified: only Tools rendered, as monospace chips. Hidden entirely on Non-Engineering projects (Tools field doesn't apply to hobbies).
- Project subtitle (`.project-hero__summary`): slightly smaller (`--text-lg`), spans full content width (removed `max-width`).
- Hero airfoil clipping fixed: removed static +80px SVG translate and the redundant constant translates baked into `hf-rotate`/`hf-rotate-rear` keyframes so the rotation orbits the SVG center. `.hero__canvas` switched to `overflow: hidden` as a safety net.
- DuoMark cover/lead → image 2. Dice in a Cup cover/lead → image 3, "Simulation Video" section PLACEHOLDER replaced with embedded `dice-in-cup_4.mp4`. LegLatch cover/lead → image 5, "Final Product" section PLACEHOLDER resolved with the same image.

## V2.5 changes (May 2026)

- Home page now uses the same 3-column tile grid as the work page (shared `renderEngineeringGrid` function)
- Hover-list code fully deleted (~170 lines CSS, ~60 lines JS). Shared classes renamed: `.section-label`, `.section-break`
- About page: title → "About Drew", body copy updated, "Photo" label → "Photography"
- Toolkit and Beyond Engineering: fixed to `repeat(4, 1fr)` grid (was `auto-fit` causing 7+1 orphan)
- Upcoming project covers wired: mechatronics_1.png, fea-cloud-city_1.jpg, radial-vibration-bicycle-rim_1.png
- Hero headshot enlarged: 140px mobile, 240px desktop (was 120/160)
- Work page title: reduced bottom padding, `.section::before` accent bar removed
- "All work →" link removed from home Featured Work header

## V2.4 changes (May 2026)

- Work page: 3-column thumbnail grid (16:10 tiles, hover scale/zoom/gradient)
- Non-Engineering section uses 2x2 sub-grid layout
- Upcoming engineering tiles: grayscale + dimmed + COMING SOON badge in natural priority position
- Non-Engineering reordered: Poker (13), Ascend (14), Snowboarding (15), Saxophone (16)
- Four full Non-Engineering project pages with content and images

## V2.3 changes (May 2026)

- Work page: removed redundant "Work" eyebrow and subtitle from header
- Section images: removed forced `aspect-ratio: 4/3` and `object-fit: cover`; images now display at natural dimensions with `max-height: 85vh` cap. Cover images and headshot are unchanged (intentionally cropped).
- About page: headshot now renders from `assets/brand/headshot.jpg` (was placeholder div)
- Resume: PDF embed sized to US Letter aspect ratio with `#view=Fit` for full-page visibility

## V2.2 changes (May 2026)

- Category restructure: `category` field now drives filtering (`"Engineering"` | `"Non-Engineering"`), replaced hardcoded `FUN_PROJECT_IDS`
- DuoMark Stylus, Dice in a Cup, LegLatch recategorized as Engineering
- Home page shows only Engineering projects; work page shows both with labeled accent-line divider
- "Built for aerospace." statement divider removed
- Three full project pages: Two-Stage Gear Transmission, Static Structural FEA, Manufacturing Projects
- Four Non-Engineering stubs: Ascend Consulting, Poker, Saxophone, Snowboarding (all `upcoming: true`)
- Mechatronics flagged `upcoming: true`
- Priority reordering: 16 projects total (12 Engineering, 4 Non-Engineering), all unique priorities 1–16
- CSS stagger animations extended to nth-child(13)

## V2.1 changes (May 2026)

- Project showcase on home + work pages (hover-list in V2.1, replaced by tile grid in V2.4/V2.5)
- Projects split into "Engineering" and "Non-Engineering" groups with labeled divider on work page
- Toolkit icons fixed (CSS `filter: invert(1)`), heading simplified to just "Toolkit"
- Background topo pattern boosted to 0.10 opacity with scroll parallax (0.4×)
- Bolder section reveals (40px translate, 800ms), hero parallax boosted (0.5×)
- Headshot has slow-rotating conic-gradient glow ring
- Mobile hover-list fallback: stacked rows with cover thumbnails

## Stack

Plain HTML + CSS + vanilla JS. No build step. No npm. Run locally with `python -m http.server 8000` (or open `index.html` directly).

## Hard rules

1. **Invoke the `front-end-design` skill before any front-end code change.** Every session. No exceptions. If the skill is unavailable in the harness, consult `docs/front-end-design.md` as a manual stand-in and flag the gap to Drew.
2. **Project data lives in `data/projects.js`.** Resume data lives in `data/resume.js`. Never hardcode project or resume content into HTML. Adding/editing a project = editing the data file only and dropping new images into `assets/projects/<slug>/`.
3. **Screenshot self-check after every visual change.** Puppeteer at 375 / 768 / 1440. Save to `tmp-screenshots/`. Iterate at least twice. Clean the folder at session end.
4. **Do not push to GitHub without an explicit "deploy" command from Drew.** Local-only by default.
5. **No lorem ipsum. No fabricated specs.** Missing content gets `[PLACEHOLDER: fill in]` in caps so it's greppable. Never invent numbers, dates, dimensions, or technical claims.
6. **Dark theme only.** All color / spacing / type / motion tokens live in CSS variables in `:root` (see `docs/design-tokens.md`). No inline colors.
7. **Accessibility floor.** Alt text on every image, semantic HTML5 landmarks (`<nav>`, `<main>`, `<article>`, `<footer>`), AA contrast minimum, full keyboard navigability with visible focus rings, `prefers-reduced-motion` respected.
8. **Voice.** Confident, technical, concise. Active verbs, quantified impact, no buzzwords. Read `docs/voice-and-tone.md` before writing copy.

## File map

```
/index.html        home
/work.html         all projects grid
/project.html      single template, reads ?id=slug
/resume.html       PDF embed + download button
/about.html        bio, education, hobby strip
/contact.html      standalone contact page
/css/              tokens.css, base.css, components.css, pages.css
/js/               data-renderer.js, motion.js, nav.js
/data/             projects.js, resume.js
/assets/brand/     headshot, resume PDF, favicon, icons/*.svg
/assets/projects/<slug>/  per-project images
/docs/             design system + voice reference
```

## Schema notes

### Image captions
Section `images` arrays accept both plain strings and `{ src: string, caption: string }` objects. The renderer normalizes at render time. Use caption objects only when the image needs a label; most images are fine as plain strings.

### Links format
`links` is an array of `{ label: string, url: string }` objects. Empty array `[]` if no links. Rendered as a button row below the metadata strip on the detail page.

### Video support
If an image path ends in `.mp4`, `.mov`, or `.webm`, the renderer emits `<video controls playsinline>` instead of `<img>`.

### Bulleted lists in section body
Lines starting with `- ` in a body text block are rendered as `<ul><li>` instead of `<p>`.

### Upcoming projects
Set `upcoming: true` on a project entry. Cards render dimmed with a "Coming Soon" badge. The detail page shows a stub message instead of full content.

## When asked to add a new project

1. Append one object to the array in `data/projects.js` matching the schema above. Required: `id`, `title`, `category`, `featured`, `priority`, `coverImage`, `tags`, `summary`, `impact`, `role`, `timeline`, `tools`, `sections`. Optional: `links` (array of `{ label, url }`).
2. Create folder `assets/projects/<slug>/` and add images. Use `{ src, caption }` objects in `images` arrays when captions are needed.
3. No HTML edits needed. The card appears on both `/work.html` and `/index.html` automatically (sorted by priority). The detail page renders at `/project.html?id=<slug>`. Set `upcoming: true` for projects without content yet.

## When asked to edit visual style

1. Invoke `front-end-design` skill first.
2. Edit tokens in `css/tokens.css` rather than per-component CSS where possible.
3. Run the screenshot self-check.

## What this site is NOT

- A blog
- A framework demo
- A place for emoji decoration, glassmorphism, neon glow, gradient blobs, or bouncing icons
- A vibe-coded landing page

## Anti-patterns: refuse and ask first

- Adding a JS framework, build step, or package manager
- Pushing to GitHub
- Adding tracking pixels, analytics, or third-party fonts that aren't in this repo
