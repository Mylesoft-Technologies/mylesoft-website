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
  
  // Generate favicon-32x32.png
  await sharp(Buffer.from(svgBuffer))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');
  
  // Generate og-image.png (1200x630)
  const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#080e18"/>
        <stop offset="100%" style="stop-color:#1A395B"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#C79639"/>
        <stop offset="100%" style="stop-color:#e0b055"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <g opacity="0.08">
      <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#C79639" stroke-width="1"/>
      </pattern>
      <rect width="1200" height="630" fill="url(#grid)"/>
    </g>
    <circle cx="900" cy="100" r="400" fill="#1A395B" opacity="0.5" filter="blur(100px)"/>
    <circle cx="200" cy="500" r="350" fill="#C79639" opacity="0.05" filter="blur(100px)"/>
    <circle cx="600" cy="180" r="60" fill="#1A395B" stroke="#C79639" stroke-width="3"/>
    <text x="600" y="200" font-family="Georgia, serif" font-size="48" font-weight="bold" fill="#C79639" text-anchor="middle">M</text>
    <text x="600" y="320" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#ffffff" text-anchor="middle">MylesCorp Technologies Ltd</text>
    <text x="600" y="380" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#C79639" text-anchor="middle" font-style="italic">Transforming Industries, Empowering Generation.</text>
    <text x="600" y="550" font-family="system-ui, sans-serif" font-size="20" fill="#95A9CC" text-anchor="middle">www.mylescorp.co.ke</text>
    <rect x="0" y="0" width="1200" height="4" fill="url(#gold)"/>
    <circle cx="100" cy="100" r="8" fill="#C79639" opacity="0.3"/>
    <circle cx="1100" cy="530" r="12" fill="#C79639" opacity="0.2"/>
    <circle cx="150" cy="550" r="6" fill="#C79639" opacity="0.25"/>
  </svg>`;
  
  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630)');
  
  console.log('All assets generated successfully!');
}

generateIcons().catch(console.error);
