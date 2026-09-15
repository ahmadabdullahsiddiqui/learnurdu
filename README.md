# Ustad — The Urdu Teacher · استاد

A colourful, kid-friendly English → Urdu learning app: vocabulary, phrases, the
nastaliq script and grammar, with spaced‑repetition flashcards and quizzes. It's
a single‑file PWA that runs from disk, installs to a phone or desktop, and works
fully offline. **Every word has built-in spoken audio** that plays offline on
any device — including iPhone/iPad, which have no built-in Urdu voice.

## ▶ Try it

**[ahmadabdullahsiddiqui.github.io/ustad](https://ahmadabdullahsiddiqui.github.io/ustad/)**

Scan to open on your phone, then *Add to Home Screen* to install it as an
offline app:

<img src="assets/qr.png" alt="QR code linking to the app" width="220">

## Features

- **Learn** — 15 vocabulary & phrase topics (~250 words) plus 10 grammar notes
- **Cards** — Leitner spaced repetition; hard cards return in minutes, known
  cards drift out to 35 days
- **Quiz** — 10 multiple‑choice questions in both directions (EN→UR, UR→EN)
- **Script** — all 39 letters with isolated / initial / medial / final forms
- **Pronunciation** — built‑in text‑to‑speech with a voice picker, a slow‑speed
  toggle, and a test button
- **Offline** — fonts are bundled locally and a service worker caches the app,
  so it works with no connection
- Progress (streaks, card scheduling, quiz scores) is stored in `localStorage`
  on the device only, and never sent anywhere.

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
index.html            the whole app — content, styles and logic
fonts.css, fonts/     self‑hosted fonts, bundled for offline use
manifest.json, sw.js  PWA manifest and offline service worker
icon-*.png            app icons
assets/qr.png         QR code for the live site
build-extension.mjs   regenerates extension/ from index.html
extension/            Manifest V3 browser extension
```

## Editing content

All words, phrases, letters and grammar notes live in the `TOPICS`, `ALPHABET`
and `GRAMMAR` arrays near the top of the `<script>` block in `index.html`. Each
vocabulary item is `[english, urdu, transliteration, optional note]` — add or
edit rows and the flashcards, quizzes and progress bars pick them up
automatically.

After editing, rebuild the extension and bump the service‑worker cache:

```
node build-extension.mjs          # regenerate extension/
# then bump CACHE in sw.js (e.g. 'ustad-v2') so installed copies update
```

Pushing to `main` redeploys the live site automatically via GitHub Pages.
