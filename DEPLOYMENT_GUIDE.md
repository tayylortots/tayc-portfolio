# Vercel Deployment Guide

## Image Asset Fix for Production

Your app currently uses `figma:asset` imports which only work in the Figma Make development environment. To deploy to Vercel, you need to replace these with actual hosted image URLs.

### ✅ What's Already Done

I've restructured your code to centralize all image assets in one file: `/src/assets/images.ts`

All components now import from this single file instead of using scattered `figma:asset` imports throughout the codebase.

###  📋 Deployment Checklist

**Step 1: Export Images from Figma**

You need to export **31 images total**:

1. **Tamagotchi Sprites** (10 images) - Used in PLAY section
   - Character idle frames (2)
   - Eating frames (2)
   - Playing frames (2)
   - Cleaning frames (2)
   - Sleeping frames (2)

2. **Case Study Images** (15 images) - Used in UCLA Library case study
   - Hero image
   - Problem screenshot  
   - User quote screenshots (5)
   - Challenge section (3): GIF animation in "But wait!!" section + 2 comparison images ("Students want AI results" vs "Librarians preserve research methods")
   - Wireframe screenshots (4): Search suggestions, channel recommendations, library card, search results
   - Before/after comparison (2)
   - Final results image

3. **Portfolio Images** (6 images) - Used in main work page
   - Main portfolio screenshot
   - Fun project cartridges (5): Slouch Sloth, Pinnacle, Villainess, Esports, Instagram

**Step 2: Host Your Images**

Upload all exported images to one of these services:
- **Imgur** (Free, easy) - https://imgur.com
- **Cloudinary** (Free tier available) - https://cloudinary.com
- **Your own CDN/server**
- **GitHub** (commit to repo in `/public/assets`)

**Step 3: Update the Image URLs**

Open `/src/assets/images.ts` and replace each `PLACEHOLDER` value with your actual hosted image URL.

Example:
```typescript
// Before:
characterFrame1: PLACEHOLDER,

// After:
characterFrame1: "https://i.imgur.com/abc123.png",
```

Each image has a comment showing its original Figma asset ID to help you match them up.

**Step 4: Test Locally**

Run your app locally to verify all images load correctly:
```bash
npm run dev
```

Check:
- ✓ PLAY section Tamagotchi sprites animate properly
- ✓ WORK page portfolio screenshots display
- ✓ Case study page shows all images

**Step 5: Deploy to Vercel**

Once all images are updated and tested locally:
```bash
vercel deploy
```

### 🎯 Priority Order

If you want to deploy quickly, update images in this order:

1. **Main Portfolio** (1 image) - Shows on landing
2. **Fun Project Cartridges** (5 images) - Visible on scroll
3. **Tamagotchi Sprites** (10 images) - PLAY section
4. **Case Study** (15 images) - Only visible when clicked

You can use the placeholder transparent pixel for lower-priority images initially, then update them later.

### 📁 File Structure

```
/src/assets/images.ts          ← Single source of truth for ALL images
/src/app/components/
  ├─ TamagotchiGame.tsx        ← Imports from images.ts
  ├─ AdvancedSearchCaseStudy.tsx ← Imports from images.ts
/src/imports/
  ├─ PortfolioSiteDesign.tsx   ← Imports from images.ts  
  ├─ Frame8.tsx                ← Imports from images.ts
```

### 🔍 Finding the Right Images in Figma

Each image placeholder has a comment with the original Figma asset hash. Example:

```typescript
characterFrame1: PLACEHOLDER, // figma:asset/95bb74d4a80cdd4096c151f7af8f5858dd639496.png
```

The hash `95bb74d4a80cdd4096c151f7af8f5858dd639496` helps you identify which Figma layer to export.

### ❓ Need Help?

If you get stuck:
1. Check browser console for 404 errors on specific images
2. Verify image URLs are publicly accessible
3. Make sure image URLs use `https://` not `http://`
4. Test individual image URLs in your browser first

## Alternative: Commit Images to Repo

Instead of external hosting, you can:

1. Create `/public/images/` folder
2. Export and place all images there
3. Reference them as `/images/filename.png` in `images.ts`
4. Commit them to your repo

This keeps everything in one place but increases repo size.

---

**Questions?** The entire image system is now in one file (`/src/assets/images.ts`), so any future updates are easy to manage!