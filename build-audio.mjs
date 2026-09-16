/* Pre-generate spoken-Urdu audio for every vocabulary word and phrase, so the
 * app can play local MP3s — reliable, offline, and working on iPhone/iPad where
 * no Urdu voice is installed. Re-run after adding vocabulary; existing files are
 * skipped, so it resumes safely.
 *
 *   node build-audio.mjs
 *
 * Audio is fetched from Google Translate's TTS (works server-side) and written
 * to audio/<hash>.mp3, where <hash> is cyrb53(urduText) — the same hash the app
 * computes at runtime to find the file.
 */
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));
const audioDir = join(root, "audio");
mkdirSync(audioDir, { recursive: true });

// cyrb53 — must stay identical to audioHash() in index.html
function cyrb53(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h2 >>> 0).toString(16).padStart(8, "0") + (h1 >>> 0).toString(16).padStart(8, "0");
}

// Extract the Urdu (2nd) string of every ['en','urdu','tl'...] vocab item.
// Keep only strings containing Arabic-script chars → excludes alphabet names,
// transliterations and grammar examples (none of which are spoken).
const html = readFileSync(join(root, "app.js"), "utf8");
const re = /\[\s*'((?:[^'\\]|\\.)*)'\s*,\s*'((?:[^'\\]|\\.)*)'/g;
const hasArabic = (s) => /[؀-ۿ]/.test(s);
const set = new Set();
let m;
while ((m = re.exec(html))) {
  // vocab item: ['english', 'اردو', ...] → 2nd string is Urdu
  if (hasArabic(m[2])) set.add(m[2]);
  // alphabet item: ['ا', 'alif', ...] → 1st string is a single Urdu letter
  else if (hasArabic(m[1]) && Array.from(m[1]).length <= 2) set.add(m[1]);
}
const words = [...set];
console.log(`${words.length} unique Urdu strings to voice`);

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchOne(text) {
  const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ur&q=" +
    encodeURIComponent(text) + "&total=1&idx=0&textlen=" + text.length;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, "Referer": "https://translate.google.com/" } });
      const buf = Buffer.from(await res.arrayBuffer());
      const ct = res.headers.get("content-type") || "";
      if (res.ok && ct.includes("audio") && buf.length > 500) return buf;
      throw new Error(`HTTP ${res.status} ${ct} ${buf.length}b`);
    } catch (e) {
      if (attempt === 4) throw e;
      await sleep(600 * attempt); // back off, then retry
    }
  }
}

let made = 0, skipped = 0, failed = [];
for (const w of words) {
  const file = join(audioDir, cyrb53(w) + ".mp3");
  if (existsSync(file)) { skipped++; continue; }
  try {
    const buf = await fetchOne(w);
    writeFileSync(file, buf);
    made++;
    if (made % 25 === 0) console.log(`  …${made} generated`);
    await sleep(140); // be gentle with the endpoint
  } catch (e) {
    failed.push(w + " (" + e.message + ")");
  }
}
console.log(`done: ${made} new, ${skipped} existing, ${failed.length} failed`);
if (failed.length) console.log("FAILED:\n  " + failed.slice(0, 40).join("\n  "));
