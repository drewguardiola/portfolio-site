# Design tokens

Authoritative list of CSS custom properties on `:root` in `css/tokens.css`. Edit here first, then code.

## Color

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0A0A0B` | Page background |
| `--color-surface` | `#111114` | Cards, raised panels |
| `--color-surface-2` | `#16161A` | Hover state for surfaces |
| `--color-text` | `#F5F5F7` | Primary text |
| `--color-text-muted` | `#8B8B92` | Secondary text, labels |
| `--color-text-dim` | `#5E5E66` | Tertiary text, deemphasized |
| `--color-border` | `rgba(255, 255, 255, 0.08)` | Dividers, card borders |
| `--color-border-strong` | `rgba(255, 255, 255, 0.16)` | Hover state borders |
| `--color-accent` | `#4A8AE8` | Aerospace blue — links, focus, accents |
| `--color-accent-hover` | `#6BA0F0` | Hover state for accent |
| `--color-accent-dim` | `rgba(74, 138, 232, 0.16)` | Backgrounds for accent pills |

## Type

| Token | Value |
|---|---|
| `--font-sans` | `'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif` |
| `--font-mono` | `'JetBrains Mono', 'IBM Plex Mono', 'SF Mono', Consolas, monospace` |
| `--text-xs` | `0.75rem` |
| `--text-sm` | `0.875rem` |
| `--text-base` | `1rem` |
| `--text-lg` | `1.125rem` |
| `--text-xl` | `1.375rem` |
| `--text-2xl` | `1.75rem` |
| `--text-3xl` | `2.25rem` |
| `--text-4xl` | `3rem` |
| `--text-display` | `clamp(2.5rem, 8vw, 5.5rem)` |
| `--tracking-tight` | `-0.02em` |
| `--tracking-display` | `-0.04em` |
| `--tracking-wide` | `0.08em` |
| `--leading-tight` | `1.1` |
| `--leading-body` | `1.6` |

## Space (8pt scale)

`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px` · `--space-5: 24px` · `--space-6: 32px` · `--space-7: 48px` · `--space-8: 64px` · `--space-9: 96px` · `--space-10: 128px`

## Layout

| Token | Value |
|---|---|
| `--max-w-content` | `1280px` |
| `--max-w-prose` | `70ch` |
| `--gutter` | `clamp(1rem, 4vw, 3rem)` |

## Motion

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--dur-fast` | `200ms` |
| `--dur` | `400ms` |
| `--dur-slow` | `600ms` |

## Radii

`--radius-sm: 4px` · `--radius: 8px` · `--radius-lg: 12px` · `--radius-pill: 999px`

## Shadows (used sparingly)

`--shadow-lift: 0 8px 24px rgba(0, 0, 0, 0.4)` — card hover only.
