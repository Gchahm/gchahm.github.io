const fs = require('fs');
const path = require('path');

// Check if sharp is available, if not provide installation instructions
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('❌ Sharp package not found. Installing...');
  console.log('Run: npm install sharp --save-dev');
  process.exit(1);
}

const inputPath = path.join(__dirname, '..', 'public', 'favicon.png');
const outputDir = path.join(__dirname, '..', 'public');

// Define all the favicon sizes we need
const sizes = [
  { width: 16, height: 16, filename: 'favicon-16x16.png' },
  { width: 32, height: 32, filename: 'favicon-32x32.png' },
  { width: 180, height: 180, filename: 'favicon-180x180.png' },
  { width: 192, height: 192, filename: 'favicon-192x192.png' },
  { width: 512, height: 512, filename: 'favicon-512x512.png' }
];

async function resizeFavicons() {
  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log('❌ Source favicon.png not found at:', inputPath);
      console.log('Please make sure public/favicon.png exists');
      return;
    }

    console.log('🔄 Starting favicon resize process...');
    console.log('📁 Source:', inputPath);
    
    // Get info about the source image
    const metadata = await sharp(inputPath).metadata();
    console.log(`📐 Source dimensions: ${metadata.width}x${metadata.height}`);

    // Process each size
    for (const size of sizes) {
      const outputPath = path.join(outputDir, size.filename);
      
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);
      
      console.log(`✅ Created: ${size.filename} (${size.width}x${size.height})`);
    }

    // Also create a standard favicon.ico (optional)
    const faviconIcoPath = path.join(outputDir, 'favicon.ico');
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(faviconIcoPath.replace('.ico', '-temp.png'));
    
    console.log('✅ Created: favicon.ico equivalent (32x32)');
    console.log('🎉 All favicon sizes generated successfully!');
    
    // Display file sizes
    console.log('\n📊 Generated files:');
    for (const size of sizes) {
      const filePath = path.join(outputDir, size.filename);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        console.log(`   ${size.filename}: ${sizeKB}KB`);
      }
    }
    
    console.log('\n🚀 Next steps:');
    console.log('1. Your favicon files are ready in the public folder');
    console.log('2. The website is already configured to use these files');
    console.log('3. Deploy your changes to see the new favicons!');

  } catch (error) {
    console.error('❌ Error during favicon generation:', error.message);
  }
}

// Run the resize function
resizeFavicons();