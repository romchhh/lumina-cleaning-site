import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const logoPath = path.join(root, 'public', 'logo.png')
const webpPath = path.join(root, 'public', 'logo.webp')

const input = await readFile(logoPath)
const meta = await sharp(input).metadata()

const maxSide = 256
const pngBuffer = await sharp(input)
  .resize(maxSide, maxSide, { fit: 'inside', withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true, quality: 80 })
  .toBuffer()

const webpBuffer = await sharp(pngBuffer).webp({ quality: 82, effort: 6 }).toBuffer()

await writeFile(logoPath, pngBuffer)
await writeFile(webpPath, webpBuffer)

console.log(
  `logo: ${meta.width}x${meta.height} → PNG ${(pngBuffer.length / 1024).toFixed(1)} KB, WebP ${(webpBuffer.length / 1024).toFixed(1)} KB`,
)
