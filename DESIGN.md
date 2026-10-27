---
name: Zelo Real Estate — Recruiting LP2
description: Warm cream paper, an authoritative serif and one terracotta signature, used for a boutique agency recruiting agents in Trento.
colors:
  terracotta: "#d09f79"
  terracotta-dark: "#b8845c"
  terracotta-text: "#a86f42"
  accent-ink: "#6b4423"
  ink: "#141414"
  ink-soft: "#43403b"
  error: "#b3261e"
  ink-mute: "#6f675f"
  page: "#f7f2ec"
  cream: "#f5f0eb"
  surface: "#ffffff"
  surface-2: "#f2ece3"
  footer-dark: "#161616"
  gray: "#888888"
  line: "rgba(29,27,25,0.10)"
  line-2: "rgba(29,27,25,0.16)"
  dark: "#0d0d0d"
  chart-1: "#a8a8a8"
  chart-2: "#d6d6d6"
  chart-3: "#ededed"
  chart-coord: "#f1e2d7"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(40px, 4.6vw, 68px)"
    fontWeight: 900
    lineHeight: 1.1
  headline:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(32px, 4vw, 54px)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Playfair Display, serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.25
  numeral:
    fontFamily: "Playfair Display, serif"
    fontSize: "42px"
    fontWeight: 900
    lineHeight: 1
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: 1.7
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.22em"
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  avatar: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "22px"
  lg: "44px"
  xl: "60px"
  section-y: "100px"
  section-x: "60px"
  section-y-mobile: "70px"
  section-x-mobile: "24px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "16px 36px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-dark}"
  button-submit:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px"
    width: "100%"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "44px 36px"
  input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 16px"
  field-error:
    textColor: "{colors.error}"
---

# Design System: Zelo Real Estate — Recruiting LP2

## Overview

**Creative North Star: "Lo Studio di Selezione"**

The page feels like a boutique selection studio: warm cream paper, white sheets laid on top of it, a high-contrast serif that speaks with authority, and a single terracotta signature that marks what matters. Everything is squared off and precise, like a tailored dossier handed to an experienced professional. It never reads like a mass job board.

Density is calm and editorial. Sections breathe (100px vertical rhythm), cards are generous (44px padding), and each block carries one idea. Hierarchy comes from serif weight contrast (Playfair 900/700 against Inter 300/400) Headings carry their own weight: there are no eyebrow labels above them. Decoration is not used for hierarchy.

The LP takes the parent site's palette (terracotta and the house logo) but deliberately keeps its own voice. The serif and the boxed cards set it apart from the main zelore.it site, whose type is a geometric sans and which uses pill buttons and a fixed terracotta side rail. That distinction is intentional, not drift.

**Key Characteristics:**
- Cream page (#f7f2ec), with white cards and a light shadow layered on top.
- Playfair Display for every headline, numeral and card title; Inter for everything else.
- One accent colour, terracotta: the light tone fills CTAs, and a deeper tone of the same hue colours highlighted words and numbers.
- Square corners everywhere; the only circles are founder portraits.
- Spaced uppercase only for small functional text (nav, buttons, form labels, the stats panel caption), never as an eyebrow above a heading.

## Colors

A warm, low-saturation earth palette: cream, near-black ink and one terracotta signature.

### Primary
- **Terracotta Zelo** (`terracotta`): the brand signature, taken from the logo (#d09f7a). Used for fills and strokes only: every CTA fill, the "32 visite" squares, the timechart's "Zelo" bar, checkbox accent and list bullets. It is too light to be used as text (2.1:1 on cream).
- **Terracotta Cotta** (`terracotta-dark`): the hover state of terracotta fills. Also used at reduced opacity for the decorative step numerals.
- **Terracotta Bruciata** (`terracotta-text`): the same hue taken deeper so it reads as text. Used for the highlighted word or clause in headlines (`em`) and the hero stat numerals. Contrast is 3.7:1 on cream and 4.2:1 on white, so it passes for large text (≥24px, or ≥18.66px bold) but not for body text.

### Secondary
- **Inchiostro Bruno** (`accent-ink`): dark brown, used where terracotta would be illegible as small text (7.6:1 on cream). Covers the "Da Zelo" ledger column head and tags, founder roles, the "Riservato." lead-in, links in the privacy line, the nav link hover, the focus ring and the form success message.

### Neutral
- **Inchiostro** (`ink`): primary text, near-black like the original site. Also the text colour on terracotta buttons.
- **Inchiostro Tenue** (`ink-soft`): secondary text, leads and form labels.
- **Grigio Caldo** (`ink-mute`): placeholders and timechart captions. Kept at ≥4.5:1 on `surface-2` and white.
- **Nero Etichetta** (`dark`): text on terracotta fills and inside the chart segments.
- **Grigi del grafico** (`chart-1`, `chart-2`, `chart-3`): the traditional-agency bar only (selling, bureaucracy, wasted viewings). **Terracotta Velato** (`chart-coord`): Zelo's 20% "relazione e coordinamento", a pale terracotta so it never reads as the grey bureaucracy segment.
- **Rosso Errore** (`error`): form error text and the border of an invalid field (6.5:1 on white). Used for nothing else.
- **Carta Crema** (`page`): page background for hero, Metodo and Candidatura.
- **Crema** (`cream`): alternate band for the Agente and Percorso sections.
- **Foglio** (`surface`): white cards, the stats panel, the form box and the Fondatori band.
- **Crema Profonda** (`surface-2`): input fills and the avatar placeholder.
- **Notte** (`footer-dark`): footer background only. Footer text is `gray` (#888), which reads at 5.1:1 on it; `gray` is never used as text on light backgrounds.
- **Hairlines** (`line`, `line-2`): dividers, card borders and input borders.

### Named Rules
**The One Signature Rule.** Terracotta is the only chromatic accent. A second hue (blue, green, a brighter orange) never enters the page. Within a section, terracotta marks at most one word of the headline plus the CTA.

**The Ink-on-Terracotta Rule.** Text on a terracotta fill is always `ink` (near-black), never white. White on #d09f79 fails contrast.

**The Fill-Not-Text Rule.** The light `terracotta` (#d09f79) is a fill and stroke colour, never a text colour on light backgrounds. Large accent text (headline highlights, numerals) uses `terracotta-text`; small accent text (anything under 24px regular or 18.66px bold) uses `accent-ink`. Light terracotta text is allowed only on the dark footer.

## Typography

**Display Font:** Playfair Display (with serif). Weights 400/700/900 are loaded.
**Body Font:** Inter (with sans-serif). Weights 300/400/500/600 are loaded.

**Character:** A high-contrast didone serif gives authority and a premium, editorial weight. A neutral grotesque carries the reading load without competing.

### Hierarchy
- **Display** (900, clamp(40px, 4.6vw, 68px), 1.1): hero H1 and the Candidatura H2. The second clause turns Terracotta Bruciata (`terracotta-text`), set as a block on its own line in the hero.
- **Headline** (700, clamp(32px, 4vw, 54px), 1.15): section H2s, optionally with one word in `terracotta-text`.
- **Title** (700, 22px, 1.25): card titles, form title and founder names (20px). Pain cards use 18px.
- **Numeral** (900, 42–64px, 1): stat figures and the "32" band numeral (`terracotta-text`, up to 210px at -0.04em), and the Percorso step indices (decorative, pale terracotta, `aria-hidden`).
- **Lead** (300, 18px, 1.7): hero sub only, max 560px wide.
- **Body** (400, 14–16px, 1.65–1.75): card copy at 14px and section subs at 16px, max about 560px.
- **Label** (400–700, 11–13px, 0.1–0.2em, UPPERCASE): nav, buttons, form labels (12px), founder roles (11px) and the stats panel caption. Never below 11px.
- **Serif italic** (Playfair italic, 18px): the founders' quote.

### Named Rules
**The Serif-Speaks Rule.** Anything that makes a claim (headline, number, card title, quote) is set in Playfair. Anything that explains or labels is set in Inter.

**The Spaced Caps Rule.** Uppercase only appears small (≤13px) and always tracked (≥0.1em). Never set uppercase Playfair.

## Layout

All font sizes are in `rem` (16px base) so text follows the user's browser text-size setting; spacing stays in px. Content sits in a single `<main id="main">`, reached by a "Vai al contenuto" skip link that appears on keyboard focus.

The layout uses a full-bleed section model with alternating background bands: page → cream → page → cream → white → page → footer dark. Sections are padded 100px vertically and 60px horizontally; below 900px this drops to 70px and 24px. Content is bounded by `max-width` per block (hero grid 1180px, section heads 720px, founders 800px). There is no global container.

- **Hero:** 1.15fr / 0.85fr grid. Copy sits on the left; the white stats panel sits on the right as a vertical list split by hairlines.
- **Card rows:** three-column grids with gaps of 20–22px. The Percorso steps use a 2px gap so the white cards read as one segmented strip.
- **Candidatura:** two equal columns with an 80px gap. The persuasion copy and bullet list sit left; the form box sits right.
- **Section heads:** left-aligned by default. Percorso and Fondatori are centred.
- **Single breakpoint at 900px:** every grid collapses to one column, the nav links hide (logo and CTA stay), the form rows stack and the footer centres.
- Anchored sections use `scroll-margin-top: 88px` to clear the fixed nav.

## Elevation & Depth

The system is a soft-layered hybrid. White sheets sit on cream paper, lifted by wide, low-opacity warm shadows plus a hairline border. Shadows are ambient, never hard. Depth increases with importance: cards are lowest, the form box is next, and the hero stats panel is highest.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 4px 30px rgba(20,20,20,0.05)`): the "Da Zelo" cells of the ledger.
- **Form lift** (`box-shadow: 0 16px 50px rgba(29,27,25,0.08)`): the application form box.
- **Panel lift** (`box-shadow: 0 24px 60px rgba(29,27,25,0.10)`): the hero stats panel, the most elevated element.

The hero also carries two very faint terracotta radial glows (8% and 5% opacity) in its corners.

### Named Rules
**The Paper Not Plastic Rule.** Shadows are diffuse and warm-tinted (rgba of 20,20,20 or 29,27,25), with blur ≥30px and opacity ≤10%. No tight drop shadows and no coloured glows on components.

## Shapes

Corners are square: radius 0 on buttons, cards, inputs and the "32 visite" squares. The only curve is the circular founder portrait (180px, with a 2px terracotta border at 40%). Structure comes from 1px hairlines. List bullets are 6px terracotta squares, not dots.

### Named Rules
**The Tailored Corner Rule.** Every container is squared off. A rounded button or card would read as the parent site's pill language and break the LP's distinct tone.

## Components

The overall feel is tailored and squared off: precise edges, spaced small caps and soft ambient lift.

### Buttons
- **Shape:** square corners (0px).
- **Primary:** terracotta fill with ink text, Inter 600 13px uppercase at 0.1em tracking, padding 16px 36px. Labels end with "→".
- **Hover:** fill darkens to terracotta-dark and the button rises 1px (`translateY(-1px)`). Transitions are 0.2s on background and 0.15s on transform.
- **Nav CTA:** a compact primary button (12px, 0.12em, padding 12px 24px) with no lift on hover.
- **Submit:** full-width primary, weight 700, 0.14em tracking, padding 18px. Disabled state uses 0.6 opacity with a not-allowed cursor.

### Cards / Containers
- **Corner style:** square.
- **Background:** white (`surface`) on the cream bands.
- **Border:** 1px hairline.
- **Internal padding:** 44px 36px for step cards, 48px for the form box (28px 20px below 900px).
- **Numbering:** only the Percorso step cards carry "01 / 02 / 03", because there the order is real. The numerals are decorative (`aria-hidden`), terracotta-dark at 50%.
- **Cards are used for the steps only.** Problems and answers are a ledger, not a card row (see below).

### Problem → answer ledger (signature)
Replaces separate pain and pillar card rows. Two columns under small uppercase column heads ("Oggi, in un'agenzia tradizionale" in ink-soft / "Da Zelo Real Estate" in accent-ink), one row per problem, rows split by hairlines. The left cell sits on the page in ink-soft (title 19px); a thin `terracotta-text` arrow (inline SVG) points to the right cell, a white sheet with the card-rest shadow (title 22px, ink). Below 900px the columns stack, the arrow hides and each cell shows its own "Oggi" / "Da Zelo" tag.

### Inputs / Fields
- **Style:** fill in `surface-2`, 1px `line-2` border, square corners, Inter 14px (16px below 900px, so iOS does not zoom), padding 13px 16px, native appearance removed.
- **Labels:** 12px uppercase at 0.1em in ink-soft, sitting above the field.
- **Focus:** the border shifts to `accent-ink` and the shared focus ring appears (2px `accent-ink` outline).
- **Errors:** validated in JS, all at once on submit, then live as the user corrects. Each field shows a 13px `error` message directly beneath it, gets `aria-invalid` and a red border, and focus moves to the first invalid field. Errors name the fix ("usa cifre, spazi e prefisso, es. +39 …").
- **Status:** success text is `accent-ink` at weight 600 and takes focus; a failed send keeps the user's data and offers a contact address.
- **Reassurance:** confidentiality sits *before* the fields, in a `surface-2` box with a hairline border and a bold `accent-ink` "Riservato." lead-in. It is never a footnote under the button.
- **Checkbox:** 20px, `terracotta` accent.
- **Selects:** a drawn 12px chevron in ink-soft sits 16px from the right edge (padding-right 44px), so they never read as text inputs.
- **Hints:** 13px ink-soft help text under a field (e.g. the abilitazione hint), linked with `aria-describedby`. Placeholders show formats only (phone, email, LinkedIn), never sample names.

### Focus
A single focus ring is used everywhere: `outline: 2px solid accent-ink; outline-offset: 3px` (1px on inputs). It is visible on terracotta buttons and on cream.

### Placeholders to confirm
Copy the client has not confirmed yet sits in `<mark class="todo">[… DA CONFERMARE]</mark>`: a terracotta tint with bold accent-ink text, so it cannot ship unnoticed.

### Images
Founder portraits ship as 360px WebP (about 10 KB each, 2× the 176px display) with explicit `width`/`height`, `loading="lazy"` and `decoding="async"`. The original JPGs stay in `assets/images` as sources only.

### Navigation
- Fixed white bar at 95% opacity with a 12px backdrop blur and a hairline bottom border. Padding is 20px 60px (16px 24px on mobile).
- The dark logo SVG sits at 36px high on the left. Centre links are 13px uppercase at 0.1em in ink, turning `accent-ink` on hover. The compact CTA sits on the right.
- Below 900px the links hide and only the logo and CTA remain.

### Stats panel (signature)
A white sheet with the highest lift and a faint terracotta border (28%). A small uppercase caption sits on top (a panel caption, not a heading eyebrow), followed by four rows split by hairlines (70M€, >500k€ valore medio, 137, 400), each with a 42px Playfair numeral in `terracotta-text` and a 13px caption. Below 900px the four stats sit in a 2×2 grid with 34px numerals.

### Timechart (signature)
A comparison of horizontal 100% stacked bars, 46px high with square ends. The traditional-agency bar uses the three chart greys. The Zelo bar uses terracotta for active selling and `chart-coord` for its 20% relazione e coordinamento, each with its own legend entry. Percent labels sit inside the segments in dark ink on every grey and terracotta segment, never white, with a square-dot legend below.

### "32 visite" band (signature)
The proof of the pre-qualification method, set apart from the cards. It sits directly on the cream page, with no card. A giant Playfair 900 "32" in `terracotta-text` sits beside the headline "visite in un solo sabato.", a short paragraph and a grid of 32 terracotta squares, one per viewing (16 per row on desktop, 8 on mobile). It is the page's one authored motion moment: the squares fill in sequence (32ms apart, ease-out) when the band enters view.

### Motion
Sections fade up 18px over 0.6s ease as they enter the viewport (`.reveal` → `.in`). The hidden starting state applies only under `html.js`, set by an inline script in `<head>`, so without JavaScript every section and every "32" square is simply visible. The "32" squares are the only staggered animation. With `prefers-reduced-motion`, the reveal, the squares and smooth scroll are all disabled.

## Do's and Don'ts

### Do:
- **Do** set every headline, numeral and card title in Playfair Display (700/900), and all supporting copy in Inter.
- **Do** highlight one word or clause per headline in `terracotta-text` (#a86f42), and keep the rest in ink.
- **Do** put ink (#141414) text on terracotta fills.
- **Do** use `accent-ink` (#6b4423) for small accent text such as roles, the "Da Zelo" tags and the focus ring.
- **Do** let headings stand alone: no eyebrow label above a section heading.
- **Do** keep corners square and lift white cards off cream with the shadow vocabulary above.
- **Do** alternate `page` and `cream` bands between sections.

### Don't:
- **Don't** round buttons or cards. Pills belong to the parent site; the LP is squared off by design.
- **Don't** introduce a second accent hue or use gradients on components.
- **Don't** set any text in the light `terracotta` (#d09f79) on cream or white; it is 2.1–2.4:1. Use `terracotta-text` for large text and `accent-ink` for small text.
- **Don't** use hard or dark shadows. Blur stays ≥30px and opacity ≤10%.
- **Don't** set uppercase in Playfair, or set untracked uppercase.
