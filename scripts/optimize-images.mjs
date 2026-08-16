import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gallery = process.argv[2] || "kitchen";
const SRC_DIR = path.join(__dirname, `../src/assets/${gallery}/source`);
const OUT_DIR = path.join(__dirname, `../src/assets/${gallery}`);

const SIZES = [
  { suffix: "1600", width: 1600 },
  { suffix: "800", width: 800 },
];

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.parse(file).name;
  const input = path.join(SRC_DIR, file);

  for (const { suffix, width } of SIZES) {
    const jpgOut = path.join(OUT_DIR, `${name}-${suffix}.jpg`);
    const webpOut = path.join(OUT_DIR, `${name}-${suffix}.webp`);

    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(jpgOut);

    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 76 })
      .toFile(webpOut);

    console.log(`wrote ${path.relative(OUT_DIR, jpgOut)} and .webp`);
  }
}

console.log("Done.");
