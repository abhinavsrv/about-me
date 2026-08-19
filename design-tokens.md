# Obsidian Precision — Design Tokens

## Color roles

| Role | Token | Value | Intended use |
| --- | --- | --- | --- |
| Base | `--obsidian` | `#050505` | Primary page field and hero canvas. |
| Surface | `--graphite` | `#101112` | Raised cards, navigation, and controlled depth. |
| Surface high | `--smoke` | `#191B1D` | Interactive glass-dark modules. |
| Primary text | `--cloud` | `#F5F5F0` | Headlines and essential body text. |
| Secondary text | `--mist` | `#A2A7AC` | Metadata, supporting prose, and labels. |
| Accent | `--signal-ice` | `#A9D6FF` | Active states, key metrics, and precise interaction feedback. |
| Rule | `--hairline` | `rgba(255,255,255,.14)` | Dividers and quiet structural boundaries. |

## Type system

The interface uses **DM Sans** for display typography and **IBM Plex Sans** for reading, metadata, and interface controls. Display text starts at `clamp(3.25rem, 9vw, 9rem)` for the hero and uses a tight `0.92` line height. Body text remains between `1rem` and `1.125rem` at `1.6`–`1.75` line height. Technical labels use a 0.70–0.75rem all-caps style with 0.14em tracking.

## Spatial and material system

The base spacing unit is 8px. Major section spacing scales from 104px on small screens to 180px on large screens; inline content uses 20px on phone, 32px on tablet, and 52px on desktop. Surfaces use a 20px radius only for large glass objects and 12px for standard cards; controls use 999px only where a pill silhouette communicates a compact, selectable state.

The depth language is intentionally subtle. Surface separation comes from one-pixel low-opacity rules, dark translucent fill, and a 20–45px diffuse black shadow. Accent glow is reserved for small signal-ice indicators at opacity below 35%, never for text or large backgrounds.

## Responsive breakpoints

The layout will be designed mobile-first with reinforcement at 640px, 900px, 1200px, and 1536px. At large sizes the hero’s type field and portrait will share the stage asymmetrically; at small sizes, the portrait moves below the primary statement and navigation becomes an overlay panel.
