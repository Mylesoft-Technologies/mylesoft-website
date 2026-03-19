const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = `<svg width="512" height="512" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#1e3a5f"/>
  <g opacity="0.1">
    <circle cx="8" cy="8" r="5" fill="#C79639"/>
    <circle cx="24" cy="24" r="7" fill="#C79639"/>
    <circle cx="16" cy="16" r="3" fill="#C79639"/>
  </g>
  <g transform="translate(8, 8)">
    <path d="M2.5 2.5h2.5l1.25 5H5l-0.33-1.25H4.17L3.83 7.5H2.5l1.25-5zm1.25 1.25l-0.17 1.25h0.33l-0.17-1.25z" fill="#C79639"/>
    <path d="M7.5 2.5h2.5c1.38 0 2.5 1.12 2.5 2.5v2.5c0 1.38-1.12 2.5-2.5 2.5H7.5V2.5zm2.5 2.5v2.5h1.25V5H10z" fill="#C79639"/>
    <path d="M13.75 2.5v3.75h-1.25V2.5h-1.25V1.25h3.75v1.25h-1.25z" fill="#C79639"/>
  </g>
  <g opacity="0.8">
    <circle cx="5" cy="5" r="0.5" fill="#C79639"/>
    <circle cx="27" cy="5" r="0.5" fill="#C79639"/>
    <circle cx="5" cy="27" r="0.4" fill="#C79639" opacity="0.6"/>
    <circle cx="27" cy="27" r="0.4" fill="#C79639" opacity="0.6"/>
  </g>
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#C79639;stop-opacity:0.3"/>
      <stop offset="50%" style="stop-color:#A67C2A;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#C79639;stop-opacity:0.1"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#g)" opacity="0.5"/>
</svg>`;

async function generateIcons() {
  const publicDir = path.join(process.cwd(), 'public');
  
  // Generate icon.png (512x512)
  await sharp(Buffer.from(svgBuffer))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon.png'));
  console.log('Generated icon.png (512x512)');
  
  // Generate apple-touch-icon.png (180x180)
  await sharp(Buffer.from(svgBuffer))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png (180x180)');
  
  // Generate favicon.ico (multi-size)
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map(size => 
      sharp(Buffer.from(svgBuffer))
        .resize(size, size)
        .toBuffer()
    )
  );
  
  // Create ICO file (simplified - just use PNG for now)
  await sharp(Buffer.from(svgBuffer))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');
  
  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
