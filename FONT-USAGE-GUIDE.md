# Font Usage Guide - Game Boy Portfolio

## Font Hierarchy

### 1. Press Start 2P
**Purpose:** Game Boy UI elements, menus, and pixel-perfect text  
**Import:** `style={{ fontFamily: "'Press Start 2P', monospace" }}`

**Use Cases:**
- Game Boy screen text (menu items: WORK, PLAY, ABOUT, CONTACT, BAG)
- Game Boy button labels
- Intro animation text
- Pixel art dialogue boxes
- Game UI elements (scores, stats, labels)
- Menu navigation text
- Any authentic Game Boy interface text

**Size Guidelines:**
- Menu items: `10px`
- Button labels: `6-8px`
- Dialogue text: `7-9px`
- Headers: `12px`

**Example:**
```tsx
<div style={{ 
  fontFamily: "'Press Start 2P', monospace",
  fontSize: '10px',
  color: '#8a9a5b'
}}>
  WORK
</div>
```

---

### 2. VT323
**Purpose:** Lightweight pixel font for less critical UI text  
**Import:** `style={{ fontFamily: "'VT323', monospace" }}`

**Use Cases:**
- Secondary Game Boy screen text
- Larger pixel-style headings where Press Start 2P feels too heavy
- Tutorial text or instructions
- Decorative pixel text that needs to be more readable at larger sizes

**Size Guidelines:**
- Generally 16-24px (scales better than Press Start 2P at larger sizes)

**Example:**
```tsx
<div style={{ 
  fontFamily: "'VT323', monospace",
  fontSize: '18px',
  color: '#8a9a5b'
}}>
  Tutorial Text
</div>
```

---

### 3. Inria Serif
**Purpose:** Portfolio case study headings and section titles  
**Import:** `className="font-['Inria_Serif:Regular',sans-serif]"`

**Use Cases:**
- Case study section headings (Overview, Outcome, Role, etc.)
- Portfolio project titles
- Subheadings within case studies
- Any serif heading text outside the Game Boy UI

**Weights Available:**
- Light (300)
- Regular (400)
- Bold (700)

**Size Guidelines:**
- Section headings: `16-18px`
- Main titles: `20-24px`

**Example:**
```tsx
<p className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2">
  Overview
</p>
```

---

### 4. Work Sans
**Purpose:** Portfolio body text and readable content  
**Import:** `className="font-['Work_Sans:Regular',sans-serif]"`

**Use Cases:**
- Case study body text
- Descriptions and paragraphs
- Any readable content outside the Game Boy UI
- Portfolio project descriptions
- About section prose
- Contact information

**Weights Available:**
- Light (300) - `font-['Work_Sans:Light',sans-serif] font-light`
- Regular (400) - `font-['Work_Sans:Regular',sans-serif] font-normal`
- Medium (500) - `font-['Work_Sans:Medium',sans-serif] font-medium`
- SemiBold (600) - `font-['Work_Sans:SemiBold',sans-serif] font-semibold`

**Size Guidelines:**
- Body text: `16-18px`
- Small text: `14px`
- Large text: `20px`

**Example:**
```tsx
<p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">
  As designers for the UCLA Library, we spent the year identifying pain points...
</p>
```

---

## Design Principles

### Game Boy Screen (Use Press Start 2P or VT323)
- Anything appearing on the Game Boy LCD screen should use pixel fonts
- Maintains authentic retro gaming aesthetic
- Keep colors muted: `#8a9a5b` (active), `#0f380f` (inactive)

### Portfolio Content (Use Inria Serif + Work Sans)
- Case studies maintain modern, professional readability
- Headings use Inria Serif for elegance
- Body text uses Work Sans for clarity
- Full color images and videos are acceptable here

### Mixing Contexts
- When transitioning from Game Boy to portfolio: fade or jump animation
- Portfolio content can overflow beyond Game Boy screen
- Keep portfolio content scrollable and responsive

---

## Quick Reference

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Game Boy Menu | Press Start 2P | - | 10px |
| Game Boy Dialogue | Press Start 2P | - | 7-9px |
| Game Labels | Press Start 2P | - | 6-8px |
| Pixel Headers | VT323 | - | 18-24px |
| Case Study Headings | Inria Serif | Regular (400) | 16-18px |
| Case Study Body | Work Sans | Regular (400) | 16-18px |
| Light Body Text | Work Sans | Light (300) | 16-18px |

---

## Color Pairings

**Game Boy UI:**
- Text: `#8a9a5b` (active LCD green)
- Text: `#0f380f` (inactive dark green)
- Background: `#9bbc0f` (LCD background)

**Portfolio Content:**
- Text: `#ffffff` or `#c0c0c0` (white/light gray)
- Headings: `#ffffff`
- Background: Dark with noise texture

---

## Common Mistakes to Avoid

❌ Don't use Work Sans or Inria Serif on the Game Boy screen  
❌ Don't use Press Start 2P for long paragraphs (hard to read)  
❌ Don't mix pixel fonts with modern fonts in the same UI component  
❌ Don't use Press Start 2P above 12px (gets too blocky)  

✅ Use Press Start 2P for all Game Boy UI  
✅ Use VT323 for larger pixel text that needs readability  
✅ Use Inria Serif + Work Sans combo for portfolio case studies  
✅ Keep font contexts separate: retro vs modern  
