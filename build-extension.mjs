/* Build the browser-extension copy of the app from the website sources.
 *
 * The website is now already split into external app.js + styles.css (so its
 * CSP can use script-src 'self'), which is exactly what Manifest V3 requires.
 * So the extension is just a copy of the site files, with app.html = index.html
 * plus a small popup min-size. Re-run `node build-extension.mjs` after changes.
 */
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, readdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = dirname(fileURLToPath(import.meta.url));
const ext = join(root, "extension");
mkdirSync(ext, { recursive: true });

// app.html = index.html, with a comfortable minimum size for the toolbar popup.
let appHtml = readFileSync(join(root, "index.html"), "utf8");
const popupStyle = "<style>html,body{min-width:390px;min-height:540px}</style>\n";
appHtml = appHtml.includes("</head>")
  ? appHtml.replace("</head>", popupStyle + "</head>")
  : appHtml.replace(/<header/, popupStyle + "<header");
writeFileSync(join(ext, "app.html"), appHtml, "utf8");

// Flat files copied verbatim.
for (const f of ["app.js", "styles.css", "fonts.css", "icon-192.png", "icon-512.png"]) {
  copyFileSync(join(root, f), join(ext, f));
}

// Copy a whole directory of assets.
const copyDir = (name) => {
  const src = join(root, name), dst = join(ext, name);
  if (!existsSync(src)) return 0;
  mkdirSync(dst, { recursive: true });
  let n = 0;
  for (const f of readdirSync(src)) { copyFileSync(join(src, f), join(dst, f)); n++; }
  return n;
};
const nFonts = copyDir("fonts");
const nAudio = copyDir("audio");

console.log(`Built extension/ → app.html, app.js, styles.css, fonts.css, icons, ${nFonts} fonts, ${nAudio} audio clips`);
