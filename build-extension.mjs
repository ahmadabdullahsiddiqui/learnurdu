/* Build the browser-extension copy of the app from index.html.
 *
 * Extension pages forbid inline <script> (Manifest V3 CSP: script-src 'self'),
 * so we lift the single inline <script> block out of index.html into app.js
 * and point app.html at it. index.html stays the one source of truth — re-run
 * `node build-extension.mjs` after any change to it.
 */
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = dirname(fileURLToPath(import.meta.url));
const ext = join(root, "extension");

const html = readFileSync(join(root, "index.html"), "utf8");

// Grab the inline (src-less) <script> … </script> block.
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) {
  console.error("No inline <script> block found in index.html");
  process.exit(1);
}
const js = m[1];

// app.html = index.html with the inline script replaced by an external ref,
// plus a small min-size so the toolbar popup opens at a comfortable width.
let appHtml = html.replace(m[0], '<script src="app.js"></script>');
// Give the toolbar popup a comfortable minimum size. The source omits the
// optional </head>, so inject just before the <header> that opens the body.
const popupStyle = "<style>html,body{min-width:390px;min-height:540px}</style>\n";
appHtml = appHtml.includes("</head>")
  ? appHtml.replace("</head>", popupStyle + "</head>")
  : appHtml.replace(/<header/, popupStyle + "<header");

writeFileSync(join(ext, "app.js"), js.trimStart() + "\n", "utf8");
writeFileSync(join(ext, "app.html"), appHtml, "utf8");

// Icons the manifest points at.
for (const f of ["icon-192.png", "icon-512.png"]) {
  copyFileSync(join(root, f), join(ext, f));
}

// Bundled fonts (fonts.css + fonts/*.woff2) so the extension is fully offline.
copyFileSync(join(root, "fonts.css"), join(ext, "fonts.css"));
const fontsSrc = join(root, "fonts");
const fontsDst = join(ext, "fonts");
mkdirSync(fontsDst, { recursive: true });
let n = 0;
for (const f of readdirSync(fontsSrc)) {
  copyFileSync(join(fontsSrc, f), join(fontsDst, f));
  n++;
}

console.log(`Built extension/ → app.html, app.js, icons, fonts.css, ${n} font files`);
