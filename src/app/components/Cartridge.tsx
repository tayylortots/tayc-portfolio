/**
 * RetroCartridge Component
 * ------------------------
 * A realistic, CSS-only retro game cartridge component.
 * Features:
 * - 3D-like plastic shell with CSS shadows and gradients
 * - holographic sticker label support
 * - Multiple color variants
 */

import { motion } from 'motion/react';

type CartridgeVariant = 'light-green' | 'dark-green';

interface CartridgeProps {
  image?: string;
  className?: string;
  variant?: CartridgeVariant;
  labelText?: string;
  link?: string;
}

const colorStyles = {
  'light-green': {
    shell: 'bg-[#7a9279]',
    shadow: 'shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.25),inset_2px_2px_6px_rgba(255,255,255,0.4)]',
    dark: 'bg-[#668266]',
  },
  'dark-green': {
    shell: 'bg-[#4a5f49]',
    shadow: 'shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.3),inset_2px_2px_6px_rgba(255,255,255,0.2)]',
    dark: 'bg-[#3a4d39]',
  }
};

export function Cartridge({ 
  image, 
  className = "",
  variant = 'light-green',
  labelText,
  link
}: CartridgeProps) {
  const styles = colorStyles[variant];

  const cartridgeContent = (
    <>
      {/* Cartridge Shape */}
      <div className={`w-full h-full rounded-t-lg rounded-b-md relative overflow-hidden ${styles.shell} ${styles.shadow}`}>
        
        {/* Top Grip Indentation */}
        <div className="absolute top-0 left-0 w-full h-12 bg-black/5 border-b border-white/10 flex flex-col justify-center items-center gap-1">
           <div className={`w-56 h-0.5 rounded-full ${styles.dark}`} />
           <div className={`w-56 h-0.5 rounded-full ${styles.dark}`} />
        </div>

        {/* Side Grips */}
        <div className="absolute top-20 left-1 w-1.5 h-32 flex flex-col gap-1 opacity-50">
           {[...Array(10)].map((_, i) => (
             <div key={i} className={`w-full h-1 rounded-full ${styles.dark}`} />
           ))}
        </div>
        <div className="absolute top-20 right-1 w-1.5 h-32 flex flex-col gap-1 opacity-50">
           {[...Array(10)].map((_, i) => (
             <div key={i} className={`w-full h-1 rounded-full ${styles.dark}`} />
           ))}
        </div>

        {/* Label Area (Indented) */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-52 h-44 bg-black/10 rounded-lg shadow-inner flex items-center justify-center">
           {/* The Sticker */}
           <div className="w-[96%] h-[96%] bg-zinc-100 rounded-md relative overflow-hidden shadow-sm">
              {/* Header Bar */}
              <div className="absolute top-0 w-full h-6 bg-gradient-to-r from-zinc-300 to-zinc-100 border-b border-zinc-300 flex items-center px-3">
                 <div className="w-full h-0.5 bg-zinc-400/30 rounded-full" />
              </div>

              {/* Label Text - Above the image */}
              {labelText && (
                <div className="absolute top-6 left-0 right-0 h-8 bg-zinc-100 flex items-center justify-center z-10">
                  <div className="font-['Press_Start_2P',monospace] text-[7px] text-[#2d3a2d] tracking-wide">
                    {labelText}
                  </div>
                </div>
              )}

              {/* Sticker Content */}
               {image && (
                 <div className={`absolute left-0 right-0 bottom-0 ${labelText ? 'top-14' : 'top-6'}`}>
                   <img src={image} alt="Retro game" className="w-full h-full object-contain opacity-90" loading="lazy" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 </div>
               )}

              {/* Sticker Gloss */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 pointer-events-none mix-blend-overlay" />
           </div>
        </div>

        {/* Bottom Connectors Area */}
        <div className="absolute bottom-0 w-full h-8 bg-black/10 border-t border-white/5 flex items-center justify-center gap-1 px-4">
           {[...Array(12)].map((_, i) => (
             <div key={i} className="w-1.5 h-4 bg-yellow-600/50 rounded-sm" />
           ))}
        </div>
        
        {/* Arrow Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-zinc-900/30" />
        </div>

        {/* Hover Shine Effect - Only shows when link is present */}
        {link && (
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out opacity-0 group-hover/cartridge:opacity-100">
            {/* Main diagonal glossy shine with subtle green tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(220,255,220,0.3)] via-white/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tl from-[rgba(200,240,200,0.15)] via-transparent to-transparent" />
            
            {/* Strong highlight at top - key plastic characteristic with green tint */}
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-[rgba(230,255,230,0.25)] via-[rgba(220,245,220,0.1)] to-transparent" />
            
            {/* Edge highlights for depth with subtle green */}
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[rgba(240,255,240,0.4)] via-[rgba(220,240,220,0.2)] to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[rgba(240,255,240,0.4)] via-[rgba(220,240,220,0.2)] to-transparent" />
            
            {/* Curved shine accent - mimics light reflection on curved plastic surface */}
            <div className="absolute top-[10%] right-[15%] w-[120px] h-[200px] bg-[rgba(225,250,225,0.2)] blur-[40px] rounded-full transform rotate-[-25deg]" />
            
            {/* Subtle bottom shadow for contrast */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/15 to-transparent" />
          </div>
        )}

      </div>
    </>
  );

  if (link) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-64 h-72 flex-shrink-0 block group/cartridge ${className}`}
      >
        {cartridgeContent}
      </a>
    );
  }

  return (
    <div 
      className={`relative w-64 h-72 flex-shrink-0 ${className}`}
    >
      {cartridgeContent}
    </div>
  );
}

export default Cartridge;