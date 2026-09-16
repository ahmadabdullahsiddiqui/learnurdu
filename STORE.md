# Publishing the Ustad browser extension

The extension lives in `extension/` and is regenerated from the website with
`node build-extension.mjs`. It is Manifest V3, requests **no permissions**, runs
fully offline, and loads only its own `app.js` (CSP `script-src 'self'`).

## Package it
Zip the **contents** of `extension/` (so `manifest.json` sits at the zip root):

```
node build-extension.mjs
# from inside extension/, zip everything to a file, e.g.:
#   PowerShell:  Compress-Archive -Path extension\* -DestinationPath dist\ustad-extension-v1.1.0.zip
```

A ready-made zip is produced under `dist/` (git-ignored) by the package step.

## Chrome Web Store
1. https://chrome.google.com/webstore/devconsole (one-time US$5 developer fee).
2. Upload the zip. Fill in:
   - **Category:** Education
   - **Privacy policy URL:** https://ahmadabdullahsiddiqui.github.io/ustad/privacy.html
   - **Data usage:** "Does not collect user data" (true — no permissions, no network).
   - Screenshots (1280×800 or 640×400) and a 128×128 store icon (see `icon-128.png`).
3. Manifest already provides 16/32/48/128 icons and `homepage_url`.

## Firefox Add-ons (AMO)
1. https://addons.mozilla.org/developers/ (free).
2. Upload the same zip. `browser_specific_settings.gecko.id` and
   `strict_min_version` are set.
3. Provide the same **privacy policy URL** and mark data collection as **none**.
4. AMO reviews source; since our JS is plain and unminified, no source-upload
   step is needed, but keep this repo handy.

## Notes / good practice
- Bump `version` in `extension/manifest.json` for every store update.
- The listing description, screenshots and the privacy URL above are all that
  the stores require for a no-permission, offline educational extension.
- Safari: run `xcrun safari-web-extension-converter extension/` on a Mac to
  produce an Xcode project for the App Store (separate process).
