#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script optimizes all images in the src/assets and public directories
 * to improve website performance by reducing image sizes.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if sharp is installed
try {
  await import('sharp');
} catch (e) {
  console.log('Installing required dependencies...');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
}

const sharp = (await import('sharp')).default;

// Directories to process
const directories = [
  path.join(__dirname, '..', 'src', 'assets'),
  path.join(__dirname, '..', 'public')
];

// Image extensions to process
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Size configurations for responsive images
const sizeConfigurations = {
  // Different sizes for responsive images
  hero: [
    { width: 1920, suffix: 'desktop' },
    { width: 1024, suffix: 'tablet' },
    { width: 640, suffix: 'mobile' }
  ],
  thumbnail: [
    { width: 640, suffix: 'desktop' },
    { width: 320, suffix: 'mobile' }
  ],
  icon: [
    { width: 128, suffix: 'desktop' },
    { width: 64, suffix: 'mobile' }
  ]
};

// Function to check if a file is an image
const isImage = (filePath) => {
  const extension = path.extname(filePath).toLowerCase();
  return imageExtensions.includes(extension);
};

// Function to get size category based on filename
const getSizeCategory = (filename) => {
  if (filename.includes('hero') || filename.includes('banner')) {
    return 'hero';
  } else if (filename.includes('thumbnail') || filename.includes('preview')) {
    return 'thumbnail';
  } else if (filename.includes('icon') || filename.includes('logo')) {
    return 'icon';
  }
  return 'hero'; // Default to hero size
};

// Function to optimize a single image
async function optimizeImage(filePath) {
  try {
    const filename = path.basename(filePath);
    const directory = path.dirname(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const fileNameWithoutExtension = path.basename(filePath, extension);
    
    const category = getSizeCategory(filename);
    const sizeConfig = sizeConfigurations[category];
    
    console.log(`Optimizing ${filename}...`);
    
    // Process each size configuration
    for (const size of sizeConfig) {
      const outputFileName = `${fileNameWithoutExtension}-${size.suffix}${extension}`;
      const outputPath = path.join(directory, outputFileName);
      
      // Skip if the file already exists
      try {
        await fs.access(outputPath);
        console.log(`${outputFileName} already exists, skipping.`);
        continue;
      } catch (e) {
        // File doesn't exist, proceed with processing
      }
      
      const imageProcessor = sharp(filePath).resize(size.width);
      
      // Format-specific optimizations
      if (extension === '.jpg' || extension === '.jpeg') {
        await imageProcessor.jpeg({ quality: 85, progressive: true }).toFile(outputPath);
      } else if (extension === '.png') {
        await imageProcessor.png({ quality: 85, compressionLevel: 9 }).toFile(outputPath);
      } else if (extension === '.webp') {
        await imageProcessor.webp({ quality: 85 }).toFile(outputPath);
      } else if (extension === '.gif') {
        await imageProcessor.gif().toFile(outputPath);
      }
      
      console.log(`Created ${outputFileName}`);
    }
    
    // Get original and optimized file sizes
    const originalSize = (await fs.stat(filePath)).size;
    const totalOptimizedSize = await Promise.all(
      sizeConfig.map(async (size) => {
        const outputPath = path.join(
          directory,
          `${fileNameWithoutExtension}-${size.suffix}${extension}`
        );
        try {
          return (await fs.stat(outputPath)).size;
        } catch (e) {
          return 0;
        }
      })
    ).then(sizes => sizes.reduce((total, size) => total + size, 0));
    
    console.log(`${filename}: Original ${Math.round(originalSize / 1024)}KB, Optimized ${Math.round(totalOptimizedSize / 1024)}KB`);
    
    // Return the savings in KB
    return Math.round((originalSize - totalOptimizedSize) / 1024);
    
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
    return 0;
  }
}

// Function to process all images in a directory
async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(directory, file.name);
      
      if (file.isDirectory()) {
        await processDirectory(filePath);
      } else if (isImage(filePath)) {
        await optimizeImage(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  let totalSavings = 0;
  
  for (const directory of directories) {
    try {
      await fs.access(directory);
      console.log(`Processing ${directory}...`);
      await processDirectory(directory);
    } catch (error) {
      console.log(`Directory ${directory} does not exist or cannot be accessed.`);
    }
  }
  
  console.log(`\nImage optimization complete. Total savings: ${totalSavings}KB`);
}

main().catch(console.error); 