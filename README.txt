Roshni Urdu — an English → Urdu learning web app (PWA)
======================================================

FILES
  index.html          the whole app: content, styles and logic in one file
  manifest.json       web app manifest (name, icons, standalone display)
  sw.js               service worker — makes the app work offline
  icon-192.png        app icon
  icon-512.png        app icon, large
  icon-maskable.png   app icon with safe-zone padding for Android

KEEP ALL SIX FILES IN THE SAME FOLDER. The app looks for manifest.json and
sw.js next to index.html.


HOW TO RUN IT
-------------
1. Upload the folder to any web server and open it over HTTPS.
   Example: https://example.com/roshni/  → serves index.html

2. On Android, open that URL in Chrome, then menu (⋮) → "Add to Home screen"
   (or "Install app"). It gets its own icon and runs full-screen.

HTTPS is required. Service workers and the install prompt do not work over
plain http:// (localhost is the one exception, for testing).

To test locally:
   cd roshni-urdu
   python3 -m http.server 8000
   then open http://localhost:8000

Opening index.html directly from disk (file://) still works — the app itself
runs fine — but offline caching and "Add to Home screen" will not.


NOTES
-----
Fonts       The page loads Noto Nastaliq Urdu, IBM Plex Sans/Mono and
            Newsreader from Google Fonts on first visit. To make it fully
            self-contained, download those families and swap the <link> in
            the <head> for local @font-face rules.

Audio       Pronunciation uses the device's built-in text-to-speech with
            lang="ur-PK". If no Urdu voice is installed the app says so once.
            Android: Settings › System › Languages & input › Text-to-speech.

Progress    Streaks, flashcard scheduling and quiz scores are kept in the
            browser's localStorage, under the key "roshni.v1". They stay on
            that one device and are never sent anywhere.

Content     All words, phrases, letters and grammar notes live in the arrays
            TOPICS, ALPHABET and GRAMMAR near the top of the <script> block
            in index.html. Each vocabulary item is
            [english, urdu, transliteration, optional note] — add or edit
            rows there and the flashcards, quizzes and progress bars pick
            them up automatically.

Updating    Bump the CACHE constant at the top of sw.js (e.g. 'roshni-v2')
            whenever you change the app, so installed copies fetch the new
            version instead of serving the cached one.
