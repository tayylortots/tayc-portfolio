/**
 * CENTRALIZED IMAGE ASSETS
 */

// Placeholder image - transparent 1x1 pixel
const PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// =============================================================================
// TAMAGOTCHI GAME SPRITES
// =============================================================================
import basicPng from './sprites/basic.png';
import basic2Png from './sprites/basic 2.png';
import eatFrame1Png from './sprites/eat frame 1.png';
import eatFrame2Png from './sprites/eat frame 2.png';
import happy1Png from './sprites/happy 1.png';
import happy2Png from './sprites/happy 2.png';
import shower1Png from './sprites/shower 1.png';
import shower2Png from './sprites/shower 2.png';
import sleep1Png from './sprites/sleep 1 (2).png';
import sleep2Png from './sprites/sleep 2.png';

export const tamagotchi = {
  characterFrame1: basicPng,
  characterFrame2: basic2Png,
  eatingFrame1: eatFrame1Png,
  eatingFrame2: eatFrame2Png,
  playingFrame1: happy1Png,
  playingFrame2: happy2Png,
  cleaningFrame1: shower1Png,
  cleaningFrame2: shower2Png,
  sleepingFrame1: sleep1Png,
  sleepingFrame2: sleep2Png,
};

// =============================================================================
// CASE STUDY IMAGES
// =============================================================================
import heroImagePng from './case-study/hero/Case Study Image.png';
import problemImagePng from './case-study/problem/Problem.png';
import quote1Png from './case-study/Quotes/Quote 1.png';
import quote2Png from './case-study/Quotes/Quote 2.png';
import quote3Png from './case-study/Quotes/Quote 3.png';
import quote4Png from './case-study/Quotes/Quote 4.png';
import quote5Png from './case-study/Quotes/quote 5.png';
import challenge1Png from './case-study/challenge/Challenge 1.png';
import challenge2Png from './case-study/challenge/Challenge 2.png';
import wireframe1Png from './case-study/wireframes/wireframe solution1.png';
import wireframe2Png from './case-study/wireframes/wireframe solution2.png';
import wireframe3Png from './case-study/wireframes/wireframe solution3.png';
import wireframe4Png from './case-study/wireframes/wireframe solution 4.png';
import beforeImagePng from './case-study/before-after/Before.png';
import afterImagePng from './case-study/before-after/After.png';
import finalImagePng from './case-study/final results image.png';

export const caseStudy = {
  heroImage: heroImagePng,
  problemImage: problemImagePng,
  quoteImage1: quote1Png,
  quoteImage2: quote2Png,
  quoteImage3: quote3Png,
  quoteImage4: quote4Png,
  quoteImage5: quote5Png,
  quoteImage6: PLACEHOLDER,
  challengeAI: challenge1Png,
  challengeLibrarian: challenge2Png,
  searchSuggestions: wireframe1Png,
  channelRecommendations: wireframe2Png,
  libraryItemCard: wireframe3Png,
  searchResults: wireframe4Png,
  beforeImage: beforeImagePng,
  afterImage: afterImagePng,
  finalImage: finalImagePng,
};

// =============================================================================
// PORTFOLIO / WORK PAGE IMAGES
// =============================================================================
import mainPortfolioPng from './case-study/portfolio/Case Study Image.png';
import slouchSlothPng from './sprites/Slouch Sloth.png';
import pinnacklePng from './sprites/Pinnacle.png';
import villainessPng from './sprites/villainess x reborn.jpeg';
import esportsPng from './sprites/Esports.png';
import instagramJpg from './sprites/Instagram.jpg';

export const portfolio = {
  mainPortfolioImage: mainPortfolioPng,
  slouchSloth: slouchSlothPng,
  pinnacle: pinnacklePng,
  villainess: villainessPng,
  esports: esportsPng,
  instagram: instagramJpg,
};

// =============================================================================
// OTHER IMPORTED FRAMES
// =============================================================================
import frame23LogoPng from './sprites/frame23-logo.png';

export const misc = {
  frame19Image: PLACEHOLDER,
  frame23Ellipse: frame23LogoPng,
};
