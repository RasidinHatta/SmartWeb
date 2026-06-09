import { Jimp } from "jimp"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(__dirname, "..", "public", "images.jpg")
const dst = join(__dirname, "..", "public", "logo.png")

const img = await Jimp.read(src)

img.scan(0, 0, img.bitmap.width, img.bitmap.height, (x, y, idx) => {
  const r = img.bitmap.data[idx + 0]
  const g = img.bitmap.data[idx + 1]
  const b = img.bitmap.data[idx + 2]
  // Remove near-white pixels (the white background)
  if (r > 230 && g > 230 && b > 230) {
    img.bitmap.data[idx + 3] = 0 // transparent
  }
})

await img.write(dst)
console.log("logo.png written to public/")
