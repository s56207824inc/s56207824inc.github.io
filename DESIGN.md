---
name: Yuquan Wang, iOS engineer
description: A restrained engineer's portfolio. One shipped feature per screen, a phone recording beside its notes, paged.
colors:
  ground: "#FAFAF9"
  ink: "#16181D"
  muted: "#5D626C"
  hairline: "#E3E3E0"
  raise: "#FFFFFF"
  berry: "#A3123A"
  bezel: "#121316"
  ground-dark: "#101114"
  ink-dark: "#ECEDEF"
  muted-dark: "#9CA1AB"
  hairline-dark: "#272A31"
  raise-dark: "#17191D"
  berry-dark: "#F2648A"
  bezel-dark: "#000000"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "clamp(26px, 2.2vw, 32px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  summary:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  role:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.6
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  focus: "4px"
  track: "4px"
  segment: "8px"
  segment-track: "10px"
  phone-screen: "37px"
  phone: "46px"
  pill: "999px"
  circle: "50%"
spacing:
  page-x: "clamp(20px, 4.4vw, 72px)"
  page-top: "clamp(24px, 5vh, 48px)"
  page-bottom: "clamp(32px, 6vh, 64px)"
  header-gap: "clamp(24px, 6vh, 56px)"
  column-gap: "clamp(56px, 7vw, 112px)"
  detail-width: "520px"
  phone-height: "clamp(360px, calc(100svh - 230px), 600px)"
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "28px"
  xl: "40px"
  xxl: "44px"
components:
  language-toggle:
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "36px"
  pager-step:
    backgroundColor: "{colors.raise}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "44px"
  pager-step-wide:
    backgroundColor: "{colors.raise}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "52px"
  progress-segment:
    rounded: "{rounded.track}"
    width: "32px"
    height: "4px"
  progress-segment-current:
    backgroundColor: "{colors.berry}"
    rounded: "{rounded.track}"
    width: "32px"
    height: "4px"
  phone-frame:
    backgroundColor: "{colors.bezel}"
    rounded: "{rounded.phone}"
    height: "{spacing.phone-height}"
  play-button:
    rounded: "{rounded.circle}"
    size: "36px"
  meta-line:
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
  note-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "20px 40px 20px 0"
  note-text:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "20px 0"
  view-switch-on:
    backgroundColor: "{colors.raise}"
    textColor: "{colors.ink}"
    rounded: "{rounded.segment}"
    height: "34px"
---

# Design System: Yuquan Wang, iOS engineer

## Overview

**Creative North Star: "The Well-Made Résumé"**

The page is a quiet, well-set personal site for an iOS engineer. A slim header holds the name with the role under it on the left, and a LinkedIn icon and a one-button language toggle on the right. Below it, one shipped feature fills the screen: a single phone frame with the screen recording in the first column, and the notes for that feature in the second column, at the same height as the phone. Nothing scrolls at the page level.

The materials are those of the platform the work is about. The face is the system SF Pro stack (PingFang TC for Chinese on Apple devices, Noto Sans TC elsewhere). The ground is near-white, the ink near-black, with one cool muted gray and hairline rules. A single berry accent marks only the current state, link hover and focus. Light and dark follow the system setting, with a full token set for each.

Density is calm and spacious. The recording leads; the text supports it. Secondary facts (date, sample status, technologies) are quiet muted text lines, not badges. Paging is direct: the text changes at once, and only the phone screen cross-fades. Restraint is the brand commitment: the user rejected a themed, decorative design.

**Key Characteristics:**
- One feature per screen, paged with wrap-around; no page scroll on desktop or phone.
- One shared phone frame; the notes column has the same height as the phone.
- System SF Pro stack in both languages; tabular numerals everywhere.
- Near-white ground, near-black ink, one muted gray, hairline rules.
- One berry accent, for the current state, link hover and focus only.
- Secondary facts are muted text joined by "·", never pills or badges.
- The phone frame is the only lifted object.

## Colors

A near-neutral palette with one saturated berry, mirrored in a dark set that the system color scheme selects.

### Primary
- **Deep Berry** (berry; Bright Berry, berry-dark, in dark mode): the fill of the current progress segment, the LinkedIn icon on hover, the focus outline, the text selection tint (22% mix) and the form `accent-color`. Nothing else.

### Neutral
- **Soft Paper White** (ground / ground-dark): the page background.
- **Blue-Black Ink** (ink / ink-dark): the name, the feature title, note text, arrow icons. Also the base for translucent mixes: progress tracks at 13% (28% on hover), the phone view switch track at 7%, scrollbars at 25%, and the hover stroke of round controls at a 35% mix into the hairline.
- **Cool Slate Gray** (muted / muted-dark): the role line, the summary, the date and tag lines, note labels, the LinkedIn icon at rest, the language toggle text.
- **Warm Hairline** (hairline / hairline-dark): 1px rules above and between notes, the stroke of the arrow buttons and the language toggle.
- **Raised White** (raise / raise-dark): the fill of the arrow buttons and of the selected segment in the phone view switch.
- **Device Black** (bezel / bezel-dark): the phone bezel and the empty-screen fill.

### Named Rules
**The One Berry Rule.** The berry marks state, link hover and focus. It is never a fill for a surface, a heading color, or decoration.

**The Two Sets Rule.** Every color token has a light and a dark value. A new surface uses the tokens, never a literal hex, so that dark mode stays complete.

## Typography

**Display Font:** SF Pro Display via `-apple-system` (with Helvetica Neue, PingFang TC, Noto Sans TC, sans-serif)
**Body Font:** SF Pro Text via `-apple-system` (same fallbacks)

**Character:** The face of the iOS platform itself, set plainly. Weight, size and the muted color carry the hierarchy; there is no second family, no uppercase labels and no tracking on small text.

### Hierarchy
- **Display** (700, 22px, 1.25, -0.01em): the name in the header. The same size on phones.
- **Headline** (700, clamp(26px, 2.2vw, 32px), 1.2, -0.02em): the feature title. 23px on phones.
- **Summary** (400, 18px, 1.55, muted): the one-line feature summary. 17px in short desktop windows, 16px on phones.
- **Body** (400, 17px, 1.6): base text and note text. Note text is 16px at 1.5 in short desktop windows.
- **Role** (400, 15px, muted): the role line under the name, one line with an ellipsis. 14px on phones.
- **Label** (500, 15px, muted): note labels. 14px on phones.
- **Caption** (400, 14px, muted): the date and sample line and the tag line.
- **Control** (500, 14px): the language toggle.

### Named Rules
**The Platform Face Rule.** Use the system stack only. Chinese text uses the same stack, which resolves to PingFang TC on Apple devices.

**The Tabular Rule.** Numerals are tabular (`font-variant-numeric: tabular-nums` on the body), so dates and counts do not shift.

## Layout

The page is one viewport high (100svh, body `overflow: hidden`) and at most 1200px wide, centered. It is a two-row grid: the header, then the stage, with a header-gap between them. Padding is page-top above, page-bottom below and page-x at the sides.

The header is one row: the name and role on the left, the LinkedIn icon and the language toggle on the right (20px apart). Its width matches the phone-and-notes block below it, so its edges line up with the phone and the end of the notes column.

The stage centers one block of two columns: the phone (9:19.5, phone-height, which caps at 600px) and the notes column (up to detail-width, 520px), with a column-gap between them. The notes column is exactly as tall as the phone. Its title sits at the top (8px inset); the head (title, summary, date line, tag line) stays fixed and the notes list under it scrolls inside the column if it does not fit, with a 36px fade at the bottom while more is below.

Vertical rhythm in the notes column: 14px from title to summary, 28px to the date line, 8px to the tag line, 44px to the notes. Note rows have 20px vertical padding and a 40px gap after the label.

Paging controls are fixed to the viewport. The progress segments sit at the bottom center (clamp(10px, 2.4vh, 22px) from the edge). At 1024px and wider, the two arrow buttons sit in the side margins, centered in the space beside the content block and 40px below the vertical middle, level with the phone. From 821px to 1023px, the arrows sit in the bottom row on each side of the segments.

Short desktop windows (821px and wider, 820px high or less) tighten the rhythm: 20px above the date line, 32px above the notes, 12px row padding.

At 820px and below: a full-width header, then the feature head, then a two-segment icon switch between the recording and the notes, then that view filling the remaining height, then the pager row (arrows at the ends, segments centered between them). Page padding is 24px at the sides; safe-area insets are respected. Rows are 20px apart.

### Named Rules
**The One Screen Rule.** A feature must fit one viewport. When content grows, the notes list scrolls inside its column; the page never scrolls.

**The Same Height Rule.** The notes column is as tall as the phone. Text starts level with the top of the phone and never extends past its bottom.

## Elevation & Depth

The system is flat. Structure comes from hairline rules and the raise tone. Two shadows exist, each tied to one object.

### Shadow Vocabulary
- **Phone lift** (`box-shadow: 0 1px 2px rgb(0 0 0 / .06), 0 24px 48px -28px rgb(0 0 0 / .3)`): the phone frame only. It sets the recording slightly off the page.
- **Segment lift** (`box-shadow: 0 1px 2px rgb(0 0 0 / .12), 0 2px 6px -2px rgb(0 0 0 / .12)`): the selected segment of the phone view switch, in the iOS segmented-control idiom.

### Named Rules
**The Only Object Rule.** The phone frame is the only lifted object on the page. Text and controls stay flat; the one exception is the selected segment of the phone view switch.

## Shapes

The phone frame uses the device's own geometry: 9:19.5 aspect, a 9px bezel, a 46px outer radius and a 37px screen radius; on phones, a 7px bezel, 36px and 29px. Round controls are true circles (50%): the arrow buttons and the play button. The language toggle is a full pill (999px). Progress segments are 4px tracks with 4px ends. The phone view switch is a 10px track with 8px segments. The focus outline has a 4px radius. Structure lines are 1px hairlines. There are no cards and no boxed panels.

## Components

### Header
Quiet and one row. The name (Display) with the role (Role, muted) under it, 4px apart. On the right, the LinkedIn mark as a 22px icon (muted, berry on hover, color .2s ease) and the language toggle.

### Language toggle
- **Shape:** one pill button, 36px high, at least 44px wide, 12px side padding, hairline stroke, no fill.
- **Content:** the name of the other language ("中文" or "EN"), muted, 14px 500.
- **Hover:** text goes to ink; the stroke darkens to a 35% ink mix.

### Phone frame and recording
- **Frame:** bezel color, rounded to the device shape, phone lift. One frame for all features.
- **Recording:** two stacked video layers fill the screen (object-fit: cover), muted and looping; the recording plays only when shown and starts paused under reduced motion.
- **Change:** the next recording loads in the back layer. When a frame of it is painted, it fades in over the old one (opacity, 280ms, ease-out); the old frame stays until then. A 1.5s timeout forces the change on slow connections. Under reduced motion the change is instant.
- **Play/pause:** a 36px circle at the bottom right (12px inset), black at 40% (60% on hover) with an 8px backdrop blur and a 12px white icon. A tap on the recording also toggles playback.
- **Missing file:** a centered 13px gray message on the bezel fill.

### Meta and tag lines
Quiet muted text, 14px. The date line holds the date and, for placeholders, "Sample recording". The tag line under it (8px gap) lists the technologies. Items are joined by a "·" with 8px on each side. No fills, strokes or pills.

### Notes
A definition list of four rows (part, problem, approach, result) with a hairline over the first row and under every row. The label is muted 15px 500 on the left, the text is 17px ink on the right, 20px vertical padding. On phones, the label stacks over the text (16px above, 4px below) and the hairline stays under each row.

### Pager
- **Progress segments:** one per feature, each a 32px square hit target with a 4px track (13% ink, 28% on hover). The current segment fills with berry (opacity .2s ease). Segments are 6px apart. Each has the feature name as its label and title.
- **Arrow buttons:** circles, 44px (52px at 1024px and wider), raise fill, hairline stroke, an 18px arrow icon (1.6 stroke) in ink, no text. Hover darkens the stroke to a 35% ink mix (.2s ease).
- **Behavior:** paging wraps around. Input: arrow buttons, segments, Left/Right and PageUp/PageDown keys, Home/End, wheel or trackpad (one page per gesture, re-armed after 250ms of quiet), and horizontal or vertical swipes. Notes that can still scroll take the vertical gesture first. The URL hash follows the current feature.
- **Change:** the text switches instantly; nothing moves. Only the phone screen cross-fades.

### Phone view switch
Only at 820px and below. A 7% ink track (10px radius, 3px inset) with two equal 34px icon segments (recording, notes). The selected segment takes the raise fill, ink icon and the segment lift; the other is muted.

### Focus
Every control shows a 2px berry outline with a 3px offset and a 4px radius on keyboard focus.

## Do's and Don'ts

### Do:
- **Do** use the color tokens for every surface and text, so both light and dark sets stay complete.
- **Do** keep the berry for the current state, link hover and focus.
- **Do** keep each feature to one screen: a title, one summary line, a date line, a tag line, four short notes.
- **Do** keep the notes column the same height as the phone, with the title level with the top of the phone.
- **Do** set secondary facts (date, sample status, technologies) as muted 14px text joined by "·".
- **Do** use hairlines (1px) and the raise tone for structure, not boxes.
- **Do** change the text instantly and cross-fade only the phone screen (280ms) after the new frame is painted.
- **Do** keep a visible berry focus outline (2px, 3px offset) on every control.

### Don't:
- **Don't** add a page-level scroll; let the notes list scroll inside its column.
- **Don't** add a second type family or uppercase, tracked labels.
- **Don't** use the berry as a fill for a surface, a heading color or decoration.
- **Don't** put dates, tags or status in pills or badges.
- **Don't** put features in cards or a grid; one feature is on stage at a time.
- **Don't** slide or move text on a page change.
- **Don't** add shadows to text or controls; only the phone frame and the selected view-switch segment are lifted.
- **Don't** add themed decoration (film, paper, marker or similar motifs); the user rejected a themed design.
