# Security

**Ustad — The Urdu Teacher** is a static, client‑side web app. There is no
server, no login, no database, and no personal data leaves the device: learning
progress is stored only in the visitor's own browser (`localStorage`), and the
app makes **no network requests at runtime** (fonts and audio are bundled).

## Protections in place
- **Content‑Security‑Policy**: every resource is restricted to the app's own
  origin (`'self'`); loading external scripts/styles/fonts/media and any
  outbound connection is blocked, so content cannot be injected or exfiltrated.
- **`Referrer-Policy: no-referrer`** and `object-src 'none'`, `form-action 'none'`.
- **Branch protection** on GitHub `main`: force‑pushes and branch deletion are
  disabled, so the history cannot be rewritten or destroyed.
- All user‑facing text is HTML‑escaped before rendering.

## Recommended account hygiene (owner)
- Enable **two‑factor authentication** on the GitHub account.
- Keep the repository's collaborator list empty (or minimal & trusted).
- Do not commit tokens, keys or passwords. Rotate any credential if exposed.

## Reporting a vulnerability
Please email **abdullah@powerfolder.com**. Do not open a public issue for
security reports.
