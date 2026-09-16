# Security

**Ustad — The Urdu Teacher** is a static, client‑side web app. There is no
server, no login, and no database. The app does **not intentionally transmit**
learning progress or any application data to a backend — progress is stored
only in the visitor's own browser (`localStorage`), and the app makes no
application network requests at runtime (fonts and audio are bundled locally).
(As with any website, the browser still makes ordinary HTTP requests to the
static host, GitHub Pages, to load the files.)

## Protections in place
- **Content‑Security‑Policy**:
  - `script-src 'self'` — **no inline JavaScript**; all script comes from the
    app's own `app.js`, so injected `<script>` cannot execute.
  - `default-src / img-src / font-src / media-src / connect-src / worker-src /
    manifest-src` are all limited to `'self'` (plus `data:` for images), so no
    external resource loads and no outbound connection can be made.
  - `object-src 'none'`, `base-uri 'self'`, `form-action 'none'`.
  - `style-src 'self' 'unsafe-inline'` — the app still uses inline `style=""`
    attributes on generated markup, so inline styles are permitted. This is a
    styling‑only allowance and does not permit script execution.
- **`Referrer-Policy: no-referrer`**.
- **Service worker** only ever caches its own **same‑origin** `GET` responses.
- **Branch protection** on GitHub `main`: force‑pushes and branch deletion are
  disabled, so the history cannot be rewritten or destroyed.
- All dynamic user‑facing values are HTML‑escaped before rendering.

Note: a `<meta>` CSP cannot set `frame-ancestors`, and GitHub Pages does not
allow custom HTTP response headers, so anti‑framing / HSTS headers are not
available on this host. Framing risk is low for a static, credential‑free app.

## Recommended account hygiene (owner)
- Enable **two‑factor authentication** on the GitHub account.
- Keep the repository's collaborator list empty (or minimal & trusted).
- Do not commit tokens, keys or passwords. Rotate any credential if exposed.

## Reporting a vulnerability
Please email **abdullah@powerfolder.com**. Do not open a public issue for
security reports.
