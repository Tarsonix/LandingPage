// Image optimization plugin for Vite
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * Custom Vite plugin to optimize images during build
 */
export default function imageOptimizer(options = {}) {
  const defaultOptions = {
    include: [/\.(jpg|jpeg|png|webp)$/],
    exclude: [],
    quality: 80,
    progressive: true,
    compressionLevel: 9,
    removeMetadata: true,
  };

  const opts = { ...defaultOptions, ...options };

  return {
    name: 'vite-plugin-image-optimizer',
    
    async generateBundle(outputOptions, bundle) {
      const optimizedFiles = [];
      const totalSavingBytes = { value: 0 };
      
      // Process all bundled assets
      for (const fileName in bundle) {
        const file = bundle[fileName];
        
        // Process only image files
        if (shouldOptimize(fileName, opts)) {
          try {
            const source = file.source;
            if (!Buffer.isBuffer(source)) continue;
            
            // Optimize the image based on file type
            const optimizedImage = await optimizeImage(fileName, source, opts, totalSavingBytes);
            
            // Update the bundle with optimized image
            if (optimizedImage) {
              file.source = optimizedImage;
              optimizedFiles.push(fileName);
            }
          } catch (error) {
            console.error(`Error optimizing ${fileName}:`, error);
          }
        }
      }
      
      // Show optimization summary
      if (optimizedFiles.length > 0) {
        console.log(`\nImage Optimization Summary:`);
        console.log(`Optimized ${optimizedFiles.length} image(s)`);
        console.log(`Total savings: ${(totalSavingBytes.value / 1024).toFixed(2)} KB\n`);
      }
    }
  };
}

// Helper function to determine if a file should be optimized
function shouldOptimize(fileName, options) {
  const { include, exclude } = options;
  
  // Check against include patterns
  const shouldInclude = include.some(pattern => {
    return pattern instanceof RegExp ? pattern.test(fileName) : fileName.includes(pattern);
  });
  
  // Check against exclude patterns
  const shouldExclude = exclude.some(pattern => {
    return pattern instanceof RegExp ? pattern.test(fileName) : fileName.includes(pattern);
  });
  
  return shouldInclude && !shouldExclude;
}

// Helper function to optimize images with sharp
async function optimizeImage(fileName, buffer, options, totalSavingBytes) {
  const { quality, progressive, compressionLevel, removeMetadata } = options;
  const ext = path.extname(fileName).toLowerCase();
  
  let imageProcessor = sharp(buffer);
  
  // Remove metadata if configured
  if (removeMetadata) {
    imageProcessor = imageProcessor.withMetadata({ orientation: undefined });
  }
  
  // Apply optimization based on image type
  let optimizedBuffer;
  if (ext === '.jpg' || ext === '.jpeg') {
    optimizedBuffer = await imageProcessor
      .jpeg({ quality, progressive })
      .toBuffer();
  } else if (ext === '.png') {
    optimizedBuffer = await imageProcessor
      .png({ quality, compressionLevel })
      .toBuffer();
  } else if (ext === '.webp') {
    optimizedBuffer = await imageProcessor
      .webp({ quality })
      .toBuffer();
  } else {
    return null;
  }
  
  // Calculate savings
  const originalSize = buffer.length;
  const optimizedSize = optimizedBuffer.length;
  const saving = originalSize - optimizedSize;
  
  // Update total savings
  totalSavingBytes.value += saving;
  
  // Log individual file optimization
  console.log(`Optimized ${fileName}: ${(originalSize / 1024).toFixed(2)} KB → ${(optimizedSize / 1024).toFixed(2)} KB (${(saving / 1024).toFixed(2)} KB saved)`);
  
  return optimizedBuffer;
} 