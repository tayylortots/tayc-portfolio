/**
 * CENTRALIZED IMAGE ASSETS
 */

// Placeholder image - transparent 1x1 pixel
const PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// =============================================================================
// TAMAGOTCHI GAME SPRITES
// =============================================================================
export const tamagotchi = {
  characterFrame1: new URL('/src/assets/sprites/basic.png', import.meta.url).href,
  characterFrame2: new URL('/src/assets/sprites/basic 2.png', import.meta.url).href,
  eatingFrame1: new URL('/src/assets/sprites/eat frame 1.png', import.meta.url).href,
  eatingFrame2: new URL('/src/assets/sprites/eat frame 2.png', import.meta.url).href,
  playingFrame1: new URL('/src/assets/sprites/happy 1.png', import.meta.url).href,
  playingFrame2: new URL('/src/assets/sprites/happy 2.png', import.meta.url).href,
  cleaningFrame1: new URL('/src/assets/sprites/shower 1.png', import.meta.url).href,
  cleaningFrame2: new URL('/src/assets/sprites/shower 2.png', import.meta.url).href,
  sleepingFrame1: new URL('/src/assets/sprites/sleep 1 (2).png', import.meta.url).href,
  sleepingFrame2: new URL('/src/assets/sprites/sleep 2.png', import.meta.url).href,
};

// =============================================================================
// CASE STUDY IMAGES
// =============================================================================
export const caseStudy = {
  heroImage: new URL('/src/assets/case-study/hero/Case Study Image.png', import.meta.url).href,
  problemImage: new URL('/src/assets/case-study/problem/Problem.png', import.meta.url).href,
  quoteImage1: new URL('/src/assets/case-study/Quotes/Quote 1.png', import.meta.url).href,
  quoteImage2: new URL('/src/assets/case-study/Quotes/Quote 2.png', import.meta.url).href,
  quoteImage3: new URL('/src/assets/case-study/Quotes/Quote 3.png', import.meta.url).href,
  quoteImage4: new URL('/src/assets/case-study/Quotes/Quote 4.png', import.meta.url).href,
  quoteImage5: new URL('/src/assets/case-study/Quotes/quote 5.png', import.meta.url).href,
  quoteImage6: PLACEHOLDER,
  challengeAI: new URL('/src/assets/case-study/challenge/Challenge 1.png', import.meta.url).href,
  challengeLibrarian: new URL('/src/assets/case-study/challenge/Challenge 2.png', import.meta.url).href,
  searchSuggestions: new URL('/src/assets/case-study/wireframes/wireframe solution1.png', import.meta.url).href,
  channelRecommendations: new URL('/src/assets/case-study/wireframes/wireframe solution2.png', import.meta.url).href,
  libraryItemCard: new URL('/src/assets/case-study/wireframes/wireframe solution3.png', import.meta.url).href,
  searchResults: new URL('/src/assets/case-study/wireframes/wireframe solution 4.png', import.meta.url).href,
  beforeImage: new URL('/src/assets/case-study/before-after/Before.png', import.meta.url).href,
  afterImage: new URL('/src/assets/case-study/before-after/After.png', import.meta.url).href,
  finalImage: new URL('/src/assets/case-study/final results image.png', import.meta.url).href,
};

// =============================================================================
// PORTFOLIO / WORK PAGE IMAGES
// =============================================================================
export const portfolio = {
  mainPortfolioImage: new URL('/src/assets/case-study/portfolio/Case Study Image.png', import.meta.url).href,
  slouchSloth: new URL('/src/assets/sprites/Slouch Sloth.png', import.meta.url).href,
  pinnacle: new URL('/src/assets/sprites/Pinnacle.png', import.meta.url).href,
  villainess: new URL('/src/assets/sprites/villainess x reborn.jpeg', import.meta.url).href,
  esports: new URL('/src/assets/sprites/Esports.png', import.meta.url).href,
  instagram: new URL('/src/assets/sprites/Instagram.jpg', import.meta.url).href,
};

// =============================================================================
// OTHER IMPORTED FRAMES
// =============================================================================
export const misc = {
  frame19Image: PLACEHOLDER,
  frame23Ellipse: new URL('/src/assets/sprites/frame23-logo.png', import.meta.url).href,
};
