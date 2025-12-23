# FONT FIX INSTRUCTIONS - EXACT REPLACEMENTS

## Problem
The syntax `font-['Work_Sans:Light',sans-serif]` does NOT work in Tailwind. Fonts must use proper utility classes.

## Solution
I've added custom font utilities to `/src/styles/theme.css`:
- `.font-press-start` = Press Start 2P
- `.font-vt323` = VT323
- `.font-inria` = Inria Serif  
- `.font-work-sans` = Work Sans

## EXACT REPLACEMENTS - Copy/Paste These

---

### FILE: /src/app/App.tsx

**Line 151** - REPLACE:
```tsx
className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
```
WITH:
```tsx
className="text-[#c0c0c0] text-center font-work-sans font-light"
```

**Line 162** - REPLACE:
```tsx
className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
```
WITH:
```tsx
className="text-[#c0c0c0] text-center font-work-sans font-light"
```

**Line 173** - REPLACE:
```tsx
className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
```
WITH:
```tsx
className="text-[#c0c0c0] text-center font-work-sans font-light"
```

---

### FILE: /src/app/components/AdvancedSearchCaseStudy.tsx

**Line 103** - REPLACE:
```tsx
className="font-['Work_Sans:Light',sans-serif] font-light text-[16px] md:text-[18px] text-white"
```
WITH:
```tsx
className="font-work-sans font-light text-[16px] md:text-[18px] text-white"
```

**Line 116** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2"
```
WITH:
```tsx
className="font-inria text-[16px] text-white mb-2"
```

**Line 117** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 120** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2"
```
WITH:
```tsx
className="font-inria text-[16px] text-white mb-2"
```

**Line 121** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 126** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2"
```
WITH:
```tsx
className="font-inria text-[16px] text-white mb-2"
```

**Line 127** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white"
```

**Line 130** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2"
```
WITH:
```tsx
className="font-inria text-[16px] text-white mb-2"
```

**Line 131** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white"
```

**Line 145** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 148** - REPLACE:
```tsx
className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="flex-1 font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 168** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 171** - REPLACE:
```tsx
className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="flex-1 font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 204** - REPLACE:
```tsx
className="absolute font-['Work_Sans:Regular',sans-serif] font-normal inset-[86.01%_30.24%_10.12%_30.39%] leading-[12.6px] text-white text-[10px] text-center"
```
WITH:
```tsx
className="absolute font-work-sans font-normal inset-[86.01%_30.24%_10.12%_30.39%] leading-[12.6px] text-white text-[10px] text-center"
```

**Line 228** - REPLACE:
```tsx
className="absolute font-['Work_Sans:Regular',sans-serif] font-normal inset-[86.01%_28.5%_10.12%_28.98%] leading-[12.6px] text-white text-[10px] text-center"
```
WITH:
```tsx
className="absolute font-work-sans font-normal inset-[86.01%_28.5%_10.12%_28.98%] leading-[12.6px] text-white text-[10px] text-center"
```

**Line 246** - REPLACE:
```tsx
className="absolute font-['Work_Sans:Regular',sans-serif] font-normal bottom-0 left-0 right-0 leading-[12.6px] text-white text-[10px] text-center"
```
WITH:
```tsx
className="absolute font-work-sans font-normal bottom-0 left-0 right-0 leading-[12.6px] text-white text-[10px] text-center"
```

**Line 296** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 298** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 307** - REPLACE:
```tsx
className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-center text-white mb-[16px]"
```
WITH:
```tsx
className="font-work-sans font-bold text-[16px] text-center text-white mb-[16px]"
```

**Line 313** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[10px] text-center text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[10px] text-center text-white leading-[22px]"
```

**Line 320** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[10px] text-center text-white leading-[normal]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[10px] text-center text-white leading-[normal]"
```

**Line 332** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 334** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px] mb-[60px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px] mb-[60px]"
```

**Line 351** - REPLACE:
```tsx
className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#a9a9a9] leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-bold text-[16px] text-[#a9a9a9] leading-[22px]"
```

**Line 352** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 364** - REPLACE:
```tsx
className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#a9a9a9] leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-bold text-[16px] text-[#a9a9a9] leading-[22px]"
```

**Line 365** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 377** - REPLACE:
```tsx
className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#a9a9a9] leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-bold text-[16px] text-[#a9a9a9] leading-[22px]"
```

**Line 378** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 390** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 392** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 402** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 404** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 413** - REPLACE:
```tsx
className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="flex-1 font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 428** - REPLACE:
```tsx
className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="flex-1 font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 437** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 445** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px]"
```

**Line 457** - REPLACE:
```tsx
className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4"
```
WITH:
```tsx
className="font-work-sans font-semibold text-[16px] text-[#a9a9a9] mb-4"
```

**Line 459** - REPLACE:
```tsx
className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px] mb-[38px]"
```
WITH:
```tsx
className="font-work-sans font-normal text-[16px] text-white leading-[22px] mb-[38px]"
```

**Line 509** - REPLACE:
```tsx
className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
```
WITH:
```tsx
className="text-[#c0c0c0] text-center font-work-sans font-light"
```

---

### FILE: /src/imports/PortfolioSiteDesign.tsx

**Line 81** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[24px] md:text-[32px] text-white mb-6 max-w-[673px]"
```
WITH:
```tsx
className="font-inria text-[24px] md:text-[32px] text-white mb-6 max-w-[673px]"
```

**Line 84** - REPLACE:
```tsx
className="font-['Work_Sans:Light',sans-serif] font-light text-[16px] md:text-[18px] text-white max-w-[673px]"
```
WITH:
```tsx
className="font-work-sans font-light text-[16px] md:text-[18px] text-white max-w-[673px]"
```

**Line 124** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-white"
```
WITH:
```tsx
className="font-inria text-[20px] text-white"
```

**Line 128** - REPLACE:
```tsx
className="font-['Work_Sans:Medium',sans-serif] font-medium text-[8px] text-white tracking-[0.42px]"
```
WITH:
```tsx
className="font-work-sans font-medium text-[8px] text-white tracking-[0.42px]"
```

**Line 133** - REPLACE:
```tsx
className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-white leading-[21px]"
```
WITH:
```tsx
className="font-work-sans font-light text-[14px] text-white leading-[21px]"
```

**Line 150** - REPLACE:
```tsx
className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-white mb-2"
```
WITH:
```tsx
className="font-inria text-[20px] text-white mb-2"
```

**Line 153** - REPLACE:
```tsx
className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-white leading-[21px]"
```
WITH:
```tsx
className="font-work-sans font-light text-[14px] text-white leading-[21px]"
```

---

## ADDITIONAL NOTES

### Inika Font
I noticed `font-['Inika:Regular',sans-serif]` appears in AdvancedSearchCaseStudy.tsx (lines 146, 169, 297, 333, 391, 403, 458).

**This font is NOT imported!** You need to either:
1. Add to `/src/styles/fonts.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inika:wght@400;700&display=swap');
   ```
2. Add to `/src/styles/theme.css`:
   ```css
   .font-inika {
     font-family: 'Inika', serif;
   }
   ```
3. Then replace `font-['Inika:Regular',sans-serif]` with `font-inika`

---

## HOW TO APPLY THESE FIXES

### Option 1: Manual Find & Replace
Use VSCode's Find & Replace (Cmd/Ctrl + H) for each file and paste the exact replacements above.

### Option 2: I can do it for you
Just ask and I'll update all the files automatically.

---

## SUMMARY OF CHANGES

Total replacements needed: **55 instances** across 3 files
- `/src/app/App.tsx`: 3 replacements
- `/src/app/components/AdvancedSearchCaseStudy.tsx`: 45 replacements
- `/src/imports/PortfolioSiteDesign.tsx`: 7 replacements
