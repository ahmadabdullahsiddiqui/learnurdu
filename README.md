# Ustad — The Urdu Teacher · استاد

A colourful, kid-friendly Urdu learning app for **English *and* German speakers**:
vocabulary, phrases, the nastaliq script and grammar, with spaced‑repetition
flashcards, quizzes, a memory game and handwriting practice. It's a PWA that runs
from disk, installs to a phone or desktop, and works **fully offline**. **Every
word has built-in spoken audio** that plays offline on any device — including
iPhone/iPad, which have no built-in Urdu voice.

## ▶ Try it

**[ahmadabdullahsiddiqui.github.io/ustad](https://ahmadabdullahsiddiqui.github.io/ustad/)**

Scan to open on your phone, then *Add to Home Screen* to install it as an
offline app:

<img src="assets/qr.png" alt="QR code linking to the app" width="220">

## Features

- **Learn** — 28 topics (21 vocabulary + 7 phrase sets), ~485 words and full
  sentences, plus 10 grammar notes
- **Cards** — Leitner spaced repetition; hard cards return in minutes, known
  cards drift out to 35 days
- **Quiz** — 10 multiple‑choice questions in both directions (EN→UR, UR→EN),
  with a celebration when you ace it
- **Script** — the full nastaliq alphabet, each letter in its isolated / initial
  / medial / final forms
- **Write** — trace letters and words on a canvas with a fade‑in guide, then tap
  **Check** for kid‑friendly feedback
- **Game** — Memory Match: flip and pair each Urdu word with its meaning
- **Pronunciation** — 500+ bundled offline audio clips, plus an optional
  “use my device’s voice” mode, a slow‑speed toggle and a test button
- **English / German** — switch the entire UI (labels, blurbs, grammar notes and
  word meanings) between 🇬🇧 English and 🇩🇪 German from the header
- **Offline & installable** — fonts and audio are bundled locally and a service
  worker caches the app, so it works with no connection
- **Auto‑update** — when a new version is deployed, an open app shows a gentle
  “update available” bar so you can reload when you choose
- Progress (streaks, card scheduling, quiz scores) is stored in `localStorage`
  on the device only (`urdu.ahmadabdullah`), and never sent anywhere.

## Run it

| Way | How | Works on |
|-----|-----|----------|
| Open directly | double‑click `index.html` | any browser |
| Live site / install | the URL above → *Add to Home Screen* | Android, iOS, desktop |
| Browser extension | load the `extension/` folder — see [`extension/README.txt`](extension/README.txt) | Chrome, Edge, Brave, Opera, Firefox |

To test locally with a server (optional):

```
npx serve .
```

`file://` runs the app fine; the PWA install and offline caching only kick in
over HTTPS (or `localhost`).

## Project layout

```
index.html            HTML shell (header, CSP) — loads app.js + styles.css
app.js                the whole app — content, views and logic
styles.css            all styles
fonts.css, fonts/     self‑hosted fonts, bundled for offline use
audio/                pre‑generated offline pronunciation clips (.mp3)
manifest.json, sw.js  PWA manifest and offline service worker
icon-*.png            app icons
assets/qr.png         QR code for the live site
build-extension.mjs   regenerates extension/ from the app files
build-audio.mjs       regenerates audio/ clips from the words in app.js
privacy.html          privacy policy (no data is collected)
extension/            Manifest V3 browser extension
```

## Editing content

All words, phrases, letters and grammar notes live in the `TOPICS`, `ALPHABET`
and `GRAMMAR` arrays near the top of `app.js`. Each vocabulary item is
`[english, urdu, transliteration, optional note]` — add or edit rows and the
flashcards, quizzes, game, writing practice and progress bars pick them up
automatically. German meanings live in the `DE` map and UI labels in the `UI`
map further down.

After editing, regenerate audio and the extension, then bump the version so
installed copies update:

```
node build-audio.mjs              # regenerate audio/ for any new/changed words
node build-extension.mjs          # regenerate extension/
# then bump APP_VERSION in app.js and CACHE in sw.js (e.g. 'ustad-v26')
```

Pushing to `main` redeploys the live site automatically via GitHub Pages. An
already‑open app detects the new version and offers the update bar within ~30s.
