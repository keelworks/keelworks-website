import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const IMAGE_DIR = "./src/assets/images";
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const SIZE_THRESHOLD_KB = 200; // only compress images larger than this

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      return entry.isDirectory() ? getFiles(fullPath) : fullPath;
    })
  );
  return files.flat();
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const { size } = await stat(filePath);
  const sizeKB = size / 1024;

  if (sizeKB < SIZE_THRESHOLD_KB) return;

  try {
    const instance = sharp(filePath);

    if (ext === ".png") {
      await instance
        .png({ quality: PNG_QUALITY, compressionLevel: 9 })
        .toBuffer()
        .then((buf) => sharp(buf).toFile(filePath));
    } else {
      await instance
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer()
        .then((buf) => sharp(buf).toFile(filePath));
    }

    const { size: newSize } = await stat(filePath);
    const newSizeKB = newSize / 1024;
    const saved = ((1 - newSize / size) * 100).toFixed(1);

    console.log(
      `✓ ${filePath.replace("./src/assets/images/", "")} | ${(sizeKB / 1024).toFixed(1)}MB → ${(newSizeKB / 1024).toFixed(1)}MB (saved ${saved}%)`
    );
  } catch (err) {
    console.error(`✗ Failed: ${filePath} — ${err.message}`);
  }
}

const files = await getFiles(IMAGE_DIR);
console.log(`Found ${files.length} files, compressing images over ${SIZE_THRESHOLD_KB}KB...\n`);
await Promise.all(files.map(compressImage));
console.log("\nDone.");
