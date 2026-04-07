import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const dirs = ["public", "src/assets"];

async function optimizeImages() {
  for (const dir of dirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
          const filePath = path.join(dir, file);
          const { name } = path.parse(filePath);
          const outPath = path.join(dir, `${name}.webp`);
          
          console.log(`Optimizing ${filePath} -> ${outPath}`);
          
          await sharp(filePath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outPath);
            
          // Delete old file
          await fs.unlink(filePath);
          console.log(`Deleted ${filePath}`);
        }
      }
    } catch (e) {
      console.error(`Error processing directory ${dir}:`, e);
    }
  }
}

optimizeImages();
