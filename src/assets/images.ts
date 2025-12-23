/**
 * CENTRALIZED IMAGE ASSETS
 * 
 * This file contains all image URLs used throughout the application.
 * 
 * TO DEPLOY TO VERCEL:
 * 1. Export all images from Figma
 * 2. Upload them to a hosting service (Imgur, Cloudinary, your own CDN, etc.)
 * 3. Replace the placeholder URLs below with your actual hosted image URLs
 * 
 * The placeholder URLs use a 1x1 transparent pixel data URL to prevent errors.
 * Replace them with your actual image URLs before deployment.
 */

// Placeholder image - transparent 1x1 pixel
const PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// =============================================================================
// TAMAGOTCHI GAME SPRITES
// =============================================================================
export const tamagotchi = {
  // Character idle animation frames
  characterFrame1: new URL('/src/assets/sprites/basic.png', import.meta.url).href,
  characterFrame2: new URL('/src/assets/sprites/basic 2.png', import.meta.url).href,

  // Eating animation frames
  eatingFrame1: new URL('/src/assets/sprites/eat frame 1.png', import.meta.url).href,
  eatingFrame2: new URL('/src/assets/sprites/eat frame 2.png', import.meta.url).href,

  // Playing animation frames
  playingFrame1: new URL('/src/assets/sprites/happy 1.png', import.meta.url).href,
  playingFrame2: new URL('/src/assets/sprites/happy 2.png', import.meta.url).href,

  // Cleaning animation frames
  cleaningFrame1: new URL('/src/assets/sprites/shower 1.png', import.meta.url).href,
  cleaningFrame2: new URL('/src/assets/sprites/shower 2.png', import.meta.url).href,

  // Sleeping animation frames
  sleepingFrame1: new URL('/src/assets/sprites/sleep 1 (2).png', import.meta.url).href,
  sleepingFrame2: new URL('/src/assets/sprites/sleep 2.png', import.meta.url).href,
};// =============================================================================
// CASE STUDY IMAGES - UCLA Library Advanced Search
// =============================================================================
export const caseStudy = {
  // Hero/header image
  heroImage: new URL('/src/assets/case-study/Hero Image/Case Study Image.png', import.meta.url).href,

  // Problem section
  problemImage: new URL('/src/assets/case-study/Problem Image/Problem.png', import.meta.url).href,

  // User research quotes
  quoteImage1: new URL('/src/assets/case-study/Quotes/Quote 1.png', import.meta.url).href,
  quoteImage2: new URL('/src/assets/case-study/Quotes/Quote 2.png', import.meta.url).href,
  quoteImage3: new URL('/src/assets/case-study/Quotes/Quote 3.png', import.meta.url).href,
  quoteImage4: new URL('/src/assets/case-study/Quotes/Quote 4.png', import.meta.url).href,
  quoteImage5: new URL('/src/assets/case-study/Quotes/quote 5.png', import.meta.url).href,
  
  // Challenge section
  challengeGif: PLACEHOLDER, // figma:asset/0c810a2462289cd923d3ef27debf72314797b0cb.png - GIF in "But wait!!" section
  challengeStudentsAI: PLACEHOLDER, // figma:asset/046b91a80680faef6b25a7dfa6f1d8c82f1c5a9e.png - TDLR comparison
  // Challenge section
  challengeAI: new URL('/src/assets/case-study/Challenge Section Images/Challenge 1.png', import.meta.url).href,
  challengeLibrarian: new URL('/src/assets/case-study/Challenge Section Images/Challenge 2.png', import.meta.url).href,

  // Solution wireframes
  searchSuggestions: new URL('/src/assets/case-study/Solution wireframe screenshots/wireframe solution1.png', import.meta.url).href,
  channelRecommendations: new URL('/src/assets/case-study/Solution wireframe screenshots/wireframe solution2.png', import.meta.url).href,
  libraryItemCard: new URL('/src/assets/case-study/Solution wireframe screenshots/wireframe solution3.png', import.meta.url).href,
  searchResults: new URL('/src/assets/case-study/Solution wireframe screenshots/wireframe solution 4.png', import.meta.url).href,

  // Before/After
  beforeImage: new URL('/src/assets/case-study/Before/Before.png', import.meta.url).href,
  afterImage: new URL('/src/assets/case-study/Before/After.png', import.meta.url).href,

  // Final results
  finalImage: new URL('/src/assets/case-study/final results image.png', import.meta.url).href,
};// =============================================================================
// PORTFOLIO / WORK PAGE IMAGES
// =============================================================================
export const portfolio = {
  // Main portfolio image used in Frame8
  mainPortfolioImage: new URL('/src/assets/case-study/Other Main Portfolio Image/Case Study Image.png', import.meta.url).href,

  // Fun projects cartridge images
  slouchSloth: new URL('/src/assets/sprites/Slouch Sloth.png', import.meta.url).href,
  pinnacle: new URL('/src/assets/sprites/Pinnacle.png', import.meta.url).href,
  villainess: new URL('/src/assets/sprites/villainess x reborn.jpeg', import.meta.url).href,
  esports: new URL('/src/assets/sprites/Esports.png', import.meta.url).href,
  instagram: new URL('/src/assets/sprites/Instagram.jpg', import.meta.url).href,
};

// =============================================================================
// OTHER IMPORTED FRAMES (Currently unused in main app flow)
// =============================================================================
export const misc = {
  frame19Image: PLACEHOLDER, // figma:asset/5d2f0bf208b13cdc96318ef0b9c09a877e9d59f0.png
  frame23Ellipse: PLACEHOLDER, // figma:asset/e52af38d80f66efc8982e609c42db11bbe8c8021.png
};

/**
 * DEPLOYMENT CHECKLIST:
 * 
 * □ Export the following priority images from Figma (these are visible in the main flow):
 *   1. Case study images (15 images) - Used in UCLA Library case study
 *   2. Portfolio cartridge images (5 images) - Used in Fun Projects section
 *   3. Tamagotchi sprites (10 images) - Used in PLAY section
 *   4. Main portfolio image (1 image) - Used in work page
 * 
 * □ Upload images to your hosting service
 * 
 * □ Replace PLACEHOLDER values above with actual URLs
 * 
 * □ Test locally to ensure all images load correctly
 * 
 * □ Deploy to Vercel
 */