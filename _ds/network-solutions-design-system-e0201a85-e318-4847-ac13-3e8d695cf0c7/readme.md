# Network Solutions — Design System

A token-first system for **Network Solutions**, the domain registrar and small-business web-services
company (domains, hosting, business email, website builder, SSL and security, marketing services).
The brand voice is practical and unshowy: it sells the *first step* — a domain name — and then the
stack that keeps it running.

## Sources

Everything here was derived from two files the user supplied; there was no codebase, Figma file, or
repository attached.

| Source | What it gave us |
| --- | --- |
| `uploads/netsol-tokens.css` | The complete token set — colour ramps, type scale, spacing, radii, elevation, motion, z-index, the `.ns-on-dark` theme scope. Copied through verbatim; values were **not** rounded or re-derived. |
| `uploads/netsol-design-system.html` | The component layer (buttons, fields, domain search, cards, TLD cards, stats, badges, rating, tabs, accordion, promo bar, notices, footer), the usage-rules table, and the marketing copy used throughout the specimens. Its own header notes it was derived from `networksolutions.com/newhome`. |

**Not supplied, and therefore not present:** logo artwork, licensed brand fonts, product photography,
illustration, an icon set, and any real product screenshots. See *Gaps & substitutions* at the end.

---

## Content fundamentals

**Person and stance.** Second person, addressed to the customer ("your domain", "the site you're
building"). First person appears only as the company plural — "our experts", "we". Never "I".

**Sentence shape.** Short declaratives with plain verbs: *Search for a domain, pick a plan, and check
out.* Instructions lead with the verb. Benefit copy names the concrete thing you get, not an abstraction —
"one login and one bill instead of four", not "a seamless unified experience".

**Casing.** Sentence case everywhere — headings, buttons, badges, nav. The only uppercase is the 12px
eyebrow/overline and footer column headings, both tracked at 0.08em. Product names keep their own
capitalisation ("AI All-Access Pack", "AI Domain Generator").

**Punctuation.** No exclamation marks. Em dashes and mid-sentence commas are fine. Prices are written
in full with the term attached: "$11.99 the first year", "$20/mo". Renewal terms are always disclosed.

**Errors and empty states** say what to do next, never just that something failed:
- ✅ "Add the part after the @ — for example steve@example.com."
- ✅ "That domain is taken. Try one of the suggestions below."
- ✅ "Enter a domain name to search."
- ❌ "Error: invalid input." · ❌ "Get started on your digital journey today!"

**Buttons** are verb + object, 2–4 words: *Find your domain · Get AI pack · Explore VPS plans · Talk to
an expert · Continue to checkout*. Tertiary actions use the arrow link: *Learn more →*.

**Vibe.** Confident utility. Forty years of trading history is used as proof ("1st registrar in the
world", "5.4M+ domains managed"), not as nostalgia. No hype adjectives, no growth-hack tone.

**Emoji: never.** Not in UI, not in marketing copy. The only non-alphabetic glyphs in the system are the
arrow (`→`), the accordion plus, the checkmark in feature lists, and the star rating — all typographic.

---

## Visual foundations

**Colour.** Four anchors: royal blue `#326EEA` (every primary action, link, focus ring), starship lime
`#DFF53D` (emphasis and accents), near-black `#1A1A1A` (ink, and the background of every dark section),
and orange `#FC7439` (pricing and promo emphasis only — never a button fill, never a second primary).
Each is extended into a ramp; new hexes are not allowed, only new ramp steps. Lime on white is ~1.2:1,
so it is a *fill* with near-black text over it — for lime-toned type on white, drop to Lime 700.
Backgrounds alternate white → `--ns-surface-subtle` (`#F5F5F6`) → near-black. Two background colours per
page maximum, plus the subtle grey.

**Type.** Poppins (geometric, display) for anything h4 and larger; Inter (neutral grotesque) for body,
labels, and UI; IBM Plex Mono for token names and code only. Headings run tight — `1.25` leading,
`-0.02em` tracking — and body copy sits at `1.5`, leads at `1.65`. Measure caps at 66–70 characters
(60 for leads). The display sizes are fluid `clamp()` values, so a hero scales without breakpoints.

**Spacing.** 4px base, no in-between values. Component padding lives between 12–32px (cards are 24px),
grid gap is 24px, and section rhythm is a single `--ns-section-y` clamp of 48 → 96px — never hand-tuned
per section. Page container 1200px; prose container 760px.

**Corners.** Nothing is square. Inputs 8px, cards and list rows 16px, big panels 24–32px, and buttons,
chips, badges and the search bar are full pills (999px).

**Cards.** 16px radius, 24px padding, 1px `--ns-border-subtle` hairline, and `--ns-shadow-xs` at rest —
a card is defined by its border first and its shadow second. Three tones: white, lime fill, and
near-black inverse (which also sets `.ns-on-dark` so nested links and buttons re-theme themselves).
The TLD promo tile is the one exception: Blue 900 fill, no border, lime display type.

**Elevation.** Four cool near-black shadows (`rgba(15,15,17,…)`), never warm or coloured. `xs` on resting
cards, `sm` rarely, `md` on hover and on the floating search pill, `lg` for overlays. No inner shadows
anywhere; no glows. Focus is a separate 3px blue halo (`--ns-shadow-focus`) plus a 2px outline.

**Borders.** 1px hairlines for structure (`--ns-border-subtle`), 1.5px for interactive edges (inputs,
outlined buttons, the search pill), 2–3px only as an accent rule — the lime left rule on stat items and
the coloured left rule on notices. On dark, borders become `rgba(255,255,255,.12–.24)`.

**Motion.** 120ms / 200ms / 320ms only, on `cubic-bezier(.2,0,.2,1)` (`--ns-ease-emphasized`
`cubic-bezier(.2,0,0,1)` for entrances and the arrow nudge). Fades and small translations — no bounce,
no spring, no scale-in. Hover lift is 3px maximum. Everything collapses to 1ms under
`prefers-reduced-motion`.

**Hover / press.** Buttons darken one ramp step (Blue 500 → 600, Lime 300 → 400); secondary inverts to a
solid near-black fill; ghost picks up a Blue 50 wash. Cards lift 3px and step from `xs` to `md` shadow.
Links change colour, they never underline-on-hover except in the footer. Press is a 1px downward
translate — no colour change, no scale.

**Focus.** Never removed. 2px `--ns-focus-ring` outline at 2–3px offset; inside `.ns-on-dark` the ring
automatically becomes lime.

**Transparency and blur.** Sparingly and only on dark: white at 8–24% for on-dark borders and hover
washes, lime at 12% for ghost-button hover. No frosted glass, no backdrop blur, no protection gradients —
text is placed on solid fills instead. No gradients of any kind: every surface is a flat colour.

**Layout.** Sticky 72px white header with a hairline bottom border; the lime promo bar sits above it and
scrolls away. Content is centre-constrained to 1200px with 24px gutters. Grids are
`repeat(auto-fit, minmax(…))` so card rows reflow rather than break. The cart summary is the only other
sticky element.

**Imagery.** None was supplied. The visual weight is carried by flat colour blocks, big display type,
and the lime accent instead of photography. If photography is added later, treat it as a full-bleed
band behind a near-black section rather than a card thumbnail, and keep it neutral-to-cool to sit
beside the blue.

---

## Iconography

**There is no icon set in the source.** The uploaded system ships zero SVG, zero icon font, and zero
raster icons. Everything that reads as an icon is typographic:

| Glyph | Where | How |
| --- | --- | --- |
| `→` | `LinkArrow` | CSS `::after` content; translates 4px right on hover |
| `+` → `×` | `Accordion` | CSS `::after`, rotated 45° when open |
| `★ ☆` | `Rating` | Unicode stars in success green |
| `✓` | Plan feature lists | Unicode check, lime on dark / success green on light |

**Rule:** do not hand-draw SVG icons for this brand. If a real icon is unavoidable, pull it from a CDN
set with a matching 1.5–2px stroke (Lucide is the closest match to the 1.5px border language) and flag
it as a substitution — but ask for the brand's real icon assets first. Emoji are never used.

---

## Components

Reusable primitives, grouped by concern. Every one is a `.jsx` + `.d.ts` + `.prompt.md` trio with a
`@dsCard` demo HTML per directory.

**`components/core/`** — `Button`, `LinkArrow`, `Badge`, `Rating`, `Eyebrow`, `SectionHead`, `Wordmark`
**`components/forms/`** — `Field`, `DomainSearch`
**`components/surfaces/`** — `Card`, `TldCard`, `StatStrip`, `Notice`, `PromoBar`
**`components/navigation/`** — `Tabs`, `Accordion`, `SiteFooter`

### Intentional additions

The source is a CSS + HTML document, so a few React-level wrappers exist that have no named counterpart
in it. Each maps 1:1 to markup that *is* in the source:

- **`SectionHead`** — the repeated eyebrow + h2 + lead-paragraph block (`.ns-section-head`).
- **`Field`** — the label / input / help / error group (`.ns-field`), wired with `aria-describedby`.
- **`Wordmark`** — **no logo file was supplied.** The brand name is set in Poppins with a lime dot
  wherever a mark would go. Do not substitute a drawn or remembered Network Solutions logo.

---

## UI kits

**`ui_kits/website/`** — click-through recreation of the networksolutions.com marketing site: homepage
(dark hero + domain search, proof strip, TLD tiles, tabbed product explorer, product cards, FAQ),
domain search results, hosting plans, and cart. See its own README for the flow.

Only one product surface is represented, because only the marketing surface was documented in the
sources. There is no logged-in account dashboard, checkout, or website-builder kit here — building one
would mean inventing designs rather than recreating them.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `elevation`, `layout`, `motion`, `themes` |
| `css/base.css` | Element resets, link colours, focus ring |
| `css/components.css` | The class layer the React components render against |
| `components/<group>/` | React primitives (see list above) |
| `guidelines/*.card.html` | 17 foundation specimen cards — Colors, Type, Spacing, Brand |
| `ui_kits/website/` | Marketing-site UI kit |
| `templates/marketing-landing/` | Starting-point template: full landing page built from the system |
| `thumbnail.html` | Homepage tile for this system |
| `SKILL.md` | Agent Skills wrapper, for use in Claude Code |
| `uploads/` | The two original source files, untouched |

## Usage rules (the short version)

1. One blue primary button per view. Lime is the loudest option — reserve it for the single most
   valuable action, usually on a dark surface.
2. Lime is fill and highlight, never body text and never a border on white.
3. Orange is pricing/promo emphasis only. It is never a button.
4. Dark sections get `.ns-on-dark` on the wrapper; don't override colours inline.
5. Radius: inputs 8, cards 16, buttons and chips pill. No square corners.
6. Section padding is always `--ns-section-y`.
7. Body text meets 4.5:1; large text and UI borders 3:1. Blue 600/700 for links on white.
8. Never remove focus rings.
9. Motion 120–320ms, 3px hover lift maximum.
10. 44px minimum touch target. The 36px small button is for dense UI only.
11. New values extend a ramp — no loose hexes, no off-scale spacing.

---

## Gaps & substitutions — please fix these

- **Fonts are substitutes.** Poppins / Inter / IBM Plex Mono are loaded from Google Fonts because no
  licensed brand binaries were supplied. If Network Solutions has real display and text faces, drop the
  files into `assets/fonts/`, replace the `@import` in `tokens/fonts.css` with `@font-face` rules, and
  point `--ns-font-display` / `--ns-font-body` at them — nothing else changes.
- **No logo.** `Wordmark` is a typographic placeholder, by design.
- **No icons, imagery, or illustration.** Nothing was drawn to fill the gap.
- **No second product surface.** Only the marketing site is recreated.
