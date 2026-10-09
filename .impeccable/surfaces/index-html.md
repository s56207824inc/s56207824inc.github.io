---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: index.html

Scope: the whole portfolio, one page. Mode: Experience, at the canon register the user chose. Audience: recruiters and iOS hiring managers (Taiwan and abroad), screening in one or two minutes. Content: YouCam Makeup feature recordings plus short technical notes, English with a 中文 switch. Template stage: placeholders until the user fills in features and recordings.

## Direction contract

THESIS: A résumé that shows the work. One feature per screen, no scrolling; the visitor pages through features like a well-made engineer's personal site. Refuses themed decoration, long scrolling case studies, and card grids.

OWN-WORLD: Near-white ground (dark mode supported), near-black ink, one muted gray, hairline rules, one berry accent used only for the current state, links and focus. System SF Pro stack (an iOS engineer's own face); Chinese in PingFang TC on Apple devices (the platform's own CJK face, matching SF), Noto Sans TC elsewhere. A plain phone frame around each recording.

STORY: The visitor reads who this is and the list of features at a glance, watches the current recording, scans four labelled notes, then pages on.

FIRST VIEWPORT: Desktop: a fixed left column (name, role, one line, numbered feature list as navigation, LinkedIn and language) and a right stage with the phone recording beside the title, summary, notes, tags and a prev/next pager with a counter. Phone: compact header, recording or notes behind a segmented control, pager pinned at the bottom, swipe to page.

FORM: The category standard (canon), executed at full craft; previous roll d456af28 was replaced at the user's request. Signature interaction: paging by list, buttons, arrow keys, swipe, and a deep-linkable hash.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- Feature names, dates, notes, tags, recordings: user to supply. Sample recordings ship as labelled placeholders.
