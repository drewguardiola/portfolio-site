# Front-end design reference

Manual reference for visual decisions on this site. Consult before any front-end change. Mirrors what the (currently unavailable) `front-end-design` skill would enforce.

## Reference aesthetic

- SpaceX product pages: full-bleed visuals, restrained typography, technical confidence
- Apple product reveals (iPhone, Mac Pro, Vision Pro pages): big type, generous whitespace, image-forward sections with clear visual rhythm
- Linear.app: disciplined dark UI, tight typography, accent used as punctuation not decoration

**Tuned for an engineering student**, not a SaaS startup. The site should look like a real engineer's portfolio, not a template.

## Palette

- Background: `#0A0A0B` (near-black, slight warmth, never pure `#000`)
- Surface (cards, raised panels): `#111114`
- Text: `#F5F5F7` (warm off-white)
- Muted text: `#8B8B92`
- Borders / dividers: `rgba(255, 255, 255, 0.08)`
- Accent: `#4A8AE8` (aerospace blue)
- Accent hover: `#6BA0F0`

One accent color. Use sparingly: links, focus rings, hover lifts, monospace technical metadata highlights, the "Available for Summer 2026" pill. Never as a fill on large surfaces.

## Typography

- Display + body: Inter (system fallback stack)
- Monospace: JetBrains Mono / Fira Code / IBM Plex Mono (system mono fallback)

Display headings: tight letter-spacing (`-0.02em` to `-0.04em`), heavy weight (700–800), big sizes (clamped 2.5rem → 5.5rem).

Body: 400 weight, line-height 1.6, max measure ~70ch.

Monospace: for technical metadata only (coordinates, project IDs, tool tags, timelines, dimensions). Sells the engineering identity. Use uppercase letter-spaced labels sparingly.

## Motion

- Smooth scroll site-wide
- Section enter: fade + 16px rise on IntersectionObserver
- Card hover: lift 4px + slight border-accent shift
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (gentle exponential out)
- Durations: 200ms (micro), 400ms (transitions), 600ms (enters)

`prefers-reduced-motion: reduce` disables fade-and-rise and parallax. Hover lifts may stay (sub-100ms transforms).

## Hard "no" list

- Glassmorphism overload (one subtle blur on the sticky nav is fine; everything else opaque)
- Neon glow / heavy shadows
- Generic radial gradient blobs
- Emoji as UI decoration
- Bouncing or wobbling icons
- Lorem ipsum
- Tailwind-default-looking project cards (rounded corners + soft shadow + image-on-top is the cliché; give cards real identity)
- Three.js demos, particle physics, or any animation that screams "AI vibe-coded"
- Hero text in accent color (white text on dark; accent only on the availability pill or links)

## Hard "yes" list

- Real quantified impact numbers in every project card (or `[PLACEHOLDER]` in caps)
- Monospace technical metadata
- Image-forward project cards with strong visual identity
- One row of section content per scroll-snap zone where sensible
- Full keyboard navigability with visible focus rings (2px solid accent, 4px offset)

## Screenshot self-check checklist

After any visual change, screenshot at 375 / 768 / 1440 and ask:
1. Does this look template-y? (If yes, cut decoration.)
2. Is the accent doing too much? (One accent moment per viewport, max two.)
3. Is the monospace earning its place? (Only on actual technical metadata.)
4. Is the spacing rhythmic? (No cramped sections, no oceans of empty space.)
5. Does the hero pass the "is this an engineer's site?" test?

Iterate at least twice before declaring a section done.
