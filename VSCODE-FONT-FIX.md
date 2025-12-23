# VSCode Find & Replace Guide

## Quick Fix - Use VSCode's Find & Replace

Press `Cmd+H` (Mac) or `Ctrl+H` (Windows/Linux) to open Find & Replace

---

## Replacements Needed

### Replacement 1: Work_Sans:SemiBold
**Find:** `font-['Work_Sans:SemiBold',sans-serif]`  
**Replace:** `font-work-sans`

### Replacement 2: Work_Sans:Bold  
**Find:** `font-['Work_Sans:Bold',sans-serif]`  
**Replace:** `font-work-sans`

### Replacement 3: Work_Sans:Regular
**Find:** `font-['Work_Sans:Regular',sans-serif]`  
**Replace:** `font-work-sans`

### Replacement 4: Work_Sans:Light
**Find:** `font-['Work_Sans:Light',sans-serif]`  
**Replace:** `font-work-sans`

### Replacement 5: Work_Sans:Medium
**Find:** `font-['Work_Sans:Medium',sans-serif]`  
**Replace:** `font-work-sans`

### Replacement 6: Inika:Regular
**Find:** `font-['Inika:Regular',sans-serif]`  
**Replace:** `font-inika`

### Replacement 7: Inria_Serif:Regular
**Find:** `font-['Inria_Serif:Regular',sans-serif]`  
**Replace:** `font-inria`

---

## Instructions

1. Open VSCode
2. Press `Cmd+H` (Mac) or `Ctrl+H` (Windows/Linux)
3. Paste the "Find" text into the find field
4. Paste the "Replace" text into the replace field
5. Click "Replace All" button (or press `Cmd+Enter` / `Ctrl+Enter`)
6. Repeat for each of the 7 replacements above

This will fix ALL 37+ remaining font issues instantly!

---

## Verify It Worked

After replacements, search for `font-['` in your project.  
You should find **ZERO** results.

All fonts will now use the proper utility classes:
- `.font-work-sans`
- `.font-inria` 
- `.font-inika`
- `.font-press-start`
- `.font-vt323`
