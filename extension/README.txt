Roshni Urdu — browser extension
================================

This is the same app as the website, packaged as a Manifest V3 browser
extension. Clicking the toolbar icon opens Roshni Urdu in a popup.

Works in: Chrome, Edge, Brave, Opera (Chromium) and Firefox.
Safari also supports Web Extensions, but Apple requires them to be
repackaged with Xcode on a Mac (see "Safari" below).


FILES  (generated from ../index.html by ../build-extension.mjs)
  manifest.json   extension manifest
  app.html        the app page (external script, no inline code — MV3 CSP)
  app.js          the app logic, lifted out of index.html
  icon-192.png    toolbar / store icon
  icon-512.png    large icon

Re-run the build after editing the site:
  node build-extension.mjs        (from the project root)


LOAD IT UNPACKED (for testing / personal use)
---------------------------------------------
Chrome / Edge / Brave / Opera
  1. Go to  chrome://extensions   (edge://extensions, brave://extensions …)
  2. Turn on "Developer mode" (top-right).
  3. Click "Load unpacked" and choose this  extension/  folder.
  4. Pin the icon and click it — the app opens in a popup.

Firefox
  1. Go to  about:debugging#/runtime/this-firefox
  2. Click "Load Temporary Add-on…"
  3. Choose  extension/manifest.json
  (Temporary add-ons are removed when Firefox restarts. For a permanent
   install the package must be signed at addons.mozilla.org.)

Safari (macOS, requires Xcode)
  Run Apple's converter, then build/run once in Xcode:
     xcrun safari-web-extension-converter  path/to/extension
  Enable it in Safari › Settings › Extensions.


PUBLISHING
  Chrome Web Store, Microsoft Edge Add-ons and addons.mozilla.org each take
  a ZIP of this folder (zip the *contents*, so manifest.json is at the root
  of the archive). Bump "version" in manifest.json for each update.


NOTES
  Pronunciation uses the device's built-in text-to-speech, and progress is
  stored per browser profile (localStorage). Fonts load from Google Fonts on
  first use; to make the extension fully self-contained, download the Noto
  Nastaliq Urdu / IBM Plex / Newsreader families and swap the <link> in
  app.html for local @font-face rules.
