const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create OG image SVG (1200x630)
const ogSvgBuffer = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#080e18"/>
      <stop offset="100%" style="stop-color:#1A395B"/>
    </linearGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#C79639"/>
      <stop offset="100%" style="stop-color:#e0b055"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Gold grid texture -->
  <g opacity="0.08">
    <defs>
      <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#C79639" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#grid)"/>
  </g>
  
  <!-- Radial glow top right -->
  <circle cx="900" cy="100" r="400" fill="#1A395B" opacity="0.5" filter="blur(100px)"/>
  
  <!-- Radial glow bottom left -->
  <circle cx="200" cy="500" r="350" fill="#C79639" opacity="0.05" filter="blur(100px)"/>
  
  <!-- Logo Circle -->
  <circle cx="600" cy="180" r="60" fill="#1A395B" stroke="#C79639" stroke-width="3"/>
  <text x="600" y="200" font-family="Georgia, serif" font-size="48" font-weight="bold" fill="#C79639" text-anchor="middle">M</text>
  
  <!-- Main Title -->
  <text x="600" y="320" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#ffffff" text-anchor="middle">MylesCorp Technologies Ltd</text>
  
  <!-- Tagline -->
  <text x="600" y="380" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#C79639" text-anchor="middle" font-style="italic">Transforming Industries, Empowering Generation.</text>
  
  <!-- URL at bottom -->
  <text x="600" y="550" font-family="system-ui, sans-serif" font-size="20" fill="#95A9CC" text-anchor="middle">www.mylescorp.co.ke</text>
  
  <!-- Gold accent bar at top -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#goldGradient)"/>
  
  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="8" fill="#C79639" opacity="0.3"/>
  <circle cx="1100" cy="530" r="12" fill="#C79639" opacity="0.2"/>
  <circle cx="150" cy="550" r="6" fill="#C79639" opacity="0.25"/>
</svg>`;

async function generateOGImage() {
  const publicDir = path.join(process.cwd(), 'public');
  
  // Generate og-image.png (1200x630)
  await sharp(Buffer.from(ogSvgBuffer))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630)');
  
  console.log('OG image generated successfully!');
}

generateOGImage().catch(console.error);
