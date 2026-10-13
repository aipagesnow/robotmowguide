import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontDir = path.join(tmpdir(), "robotmowguide-fonts");
mkdirSync(fontDir, { recursive: true });
const fontPath = path.join(fontDir, "Archivo-SemiBold.ttf");

if (!existsSync(fontPath)) {
  const url =
    "https://github.com/google/fonts/raw/main/ofl/archivo/Archivo%5Bwdth%2Cwght%5D.ttf";
  execSync(`curl -fsSL -o "${fontPath}" "${url}"`, { stdio: "inherit" });
}

const fontsConf = path.join(fontDir, "fonts.conf");
writeFileSync(
  fontsConf,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${fontDir}</dir>
  <cachedir>${path.join(fontDir, "cache")}</cachedir>
  <include ignore_missing="yes">/etc/fonts/fonts.conf</include>
</fontconfig>
`,
);
process.env.FONTCONFIG_FILE = fontsConf;
mkdirSync(path.join(fontDir, "cache"), { recursive: true });

const mark = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#123a63"/>
  <path d="M8 8 H24 V16 H8 V24 H22" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/>
  <rect x="22" y="22" width="4" height="4" fill="#e2186f"/>
</svg>`;

async function markPng(size) {
  return sharp(Buffer.from(mark(size))).resize(size, size).png().toBuffer();
}

const appDir = path.join(root, "app");
const publicDir = path.join(root, "public");

const icon32 = await markPng(32);
const apple = await markPng(180);
writeFileSync(path.join(appDir, "icon.png"), icon32);
writeFileSync(path.join(publicDir, "icon.png"), icon32);
writeFileSync(path.join(appDir, "apple-icon.png"), apple);
writeFileSync(path.join(publicDir, "apple-icon.png"), apple);
writeFileSync(path.join(publicDir, "apple-touch-icon.png"), apple);

const ico = await pngToIco([await markPng(16), await markPng(32), await markPng(48)]);
writeFileSync(path.join(appDir, "favicon.ico"), ico);

function gridLines() {
  let lines = "";
  for (let x = 0; x <= 1200; x += 40) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="#dbe7f3" stroke-opacity="0.16"/>`;
  }
  for (let y = 0; y <= 630; y += 40) {
    lines += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#dbe7f3" stroke-opacity="0.16"/>`;
  }
  return lines;
}

const og = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#123a63"/>
  ${gridLines()}
  <g transform="translate(96 210) scale(6)">
    <rect width="32" height="32" fill="#123a63" stroke="#dbe7f3" stroke-width="0.4"/>
    <path d="M8 8 H24 V16 H8 V24 H22" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/>
    <rect x="22" y="22" width="4" height="4" fill="#e2186f"/>
  </g>
  <text x="340" y="300" fill="#ffffff" font-family="Archivo, sans-serif" font-size="64" font-weight="600" font-stretch="118%">RobotMowGuide</text>
  <text x="340" y="370" fill="#dbe7f3" font-family="Archivo, sans-serif" font-size="32" font-weight="500">Robot mowers ranked by lawn size and slope</text>
  <rect x="340" y="400" width="28" height="28" fill="#e2186f"/>
</svg>`;

const ogPng = await sharp(Buffer.from(og)).png().toBuffer();
writeFileSync(path.join(appDir, "opengraph-image.png"), ogPng);
writeFileSync(path.join(appDir, "twitter-image.png"), ogPng);
writeFileSync(path.join(publicDir, "og.png"), ogPng);

const header = readFileSync(path.join(appDir, "favicon.ico")).subarray(0, 4);
if (header[0] !== 0 || header[1] !== 0 || header[2] !== 1 || header[3] !== 0) {
  throw new Error("favicon.ico is not an ICO");
}

console.log("icons written");
