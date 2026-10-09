# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and iOS hiring managers, in Taiwan and abroad. They open the site from a CV, a job application, or the LinkedIn profile, and they decide in one or two minutes whether to invite Yuquan Wang to an interview.

## Product Purpose

A personal portfolio for Yuquan Wang, iOS engineer at Perfect Corp. It shows the features he built in YouCam Makeup as screen recordings, each with a short technical write-up. Success: a reviewer understands what he built and how hard it was, then makes contact.

## Positioning

The evidence is shipped work in a large consumer camera and beauty app, shown as real screen recordings with the engineering behind each one. A generic iOS portfolio with a list of skills cannot show this.

## Operating Context

- Reviewers open the link on a desktop browser during screening, or on a phone from LinkedIn.
- Recordings come from the iOS Simulator or a device: portrait, 9:19.5, 960 px high, 30 fps, no sound, under 5 MB each, with a first-frame poster JPG (see README.md).

## Capabilities and Constraints

- Static HTML/CSS/JS on GitHub Pages. No build step. Updates are edits to `index.html` and a push to `main`.
- Content per feature: name, one-line description, screen recording, technical write-up (his part, technical problems, solutions, public numbers).
- Language: English first, with a switch to Traditional Chinese.
- Do not show internal screens, source code, or unreleased features.
- **Open:** the site is a template now. Feature names, write-ups, and recordings are placeholders until the user fills them in. The number of features is not fixed.

## Brand Commitments

- Look: professional and restrained, like a well-made engineer's personal site (reference bar: Brittany Chiang, Lee Robinson). Not decorative or themed. The user rejected a themed "contact sheet" design as too elaborate (2026-10-09).
- Layout: one feature fits on one screen with no scrolling; visitors page between features.
- Name as shown: Yuquan Wang. Contact: LinkedIn (https://www.linkedin.com/in/%E6%B7%AF%E9%8A%93-%E7%8E%8B-57a98b244).

## Evidence on Hand

- No real recordings yet. `assets/videos/feature-1..4.mp4/.jpg` are synthetic samples made with ffmpeg; the page labels them "Sample recording" until the user replaces them and removes `data-sample`.
- No feature names, write-ups, metrics, testimonials, or press yet. Do not invent them; use labelled placeholders.

## Product Principles

1. The shipped work leads. The recordings are the proof; everything else supports them.
2. Engineering depth must be one step away from every recording, not hidden.
3. A reviewer with two minutes must still leave with a clear picture.
4. Easy to update: adding a feature is copying one block.
