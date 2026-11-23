import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { HandheldPopup } from './HandheldPopup';
import { BobsEntertainmentPopup } from './BobsEntertainmentPopup';
import { XboxGameArtPopup } from './XboxGameArtPopup';
import { UclaLibraryPopup } from './UclaLibraryPopup';
import { GameModeTaskSwitcherPopup } from './GameModeTaskSwitcherPopup';

const projects = [
  {
    title: "Making Task Switcher a full-screen experience",
    description: "First designer to collaborate with Windows to make task switching a handheld-friendly experience.",
  },
  {
    title: "Improving UCLA Library's search experience",
    description: "Guiding students to advanced search when results fall short.",
  },
  // {
  //   title: "Xbox game art updater",
  //   description: "Accelerated designers' workflows by building a plugin that auto-updates game data through Twitch's API.",
  // },
  {
    title: "Bobs Entertainment",
    description: "Satirical installation exploring the legacy of gendered power dynamics in gaming.",
  },
  {
    title: "Handheld Compatibility Program",
    description: "Helping players understand how games perform on handheld systems.",
  },
];

function ArrowUpRight() {
  return (
    <motion.div 
      className="relative shrink-0 size-[40px] sm:size-[50px] md:size-[60px]"
      variants={{
        hover: { rotate: 45 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg className="absolute block size-full" fill="none" viewBox="0 0 60 60">
        <path d="M17.5 42.5L42.5 17.5" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M17.5 17.5H42.5V42.5" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    </motion.div>
  );
}

const CASE_SLUGS: Record<string, string> = {
  "Making Task Switcher a full-screen experience": "task-switcher",
  "Improving UCLA Library's search experience": "ucla-library",
  "Bobs Entertainment": "bobs-entertainment",
  "Xbox game art updater": "xbox-game-art",
  "Handheld Compatibility Program": "handheld-compatibility",
};

function slugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/work\/([^/]+)/);
  return match ? match[1] : null;
}

function WorkContent({ isVisible, onPopupChange }: { isVisible: boolean; onPopupChange: (isOpen: boolean) => void }) {
  const initialSlug = slugFromPath(window.location.pathname);
  const [isHandheldPopupOpen, setIsHandheldPopupOpen] = useState(initialSlug === 'handheld-compatibility');
  const [isBobsEntertainmentPopupOpen, setIsBobsEntertainmentPopupOpen] = useState(initialSlug === 'bobs-entertainment');
  const [isXboxGameArtPopupOpen, setIsXboxGameArtPopupOpen] = useState(initialSlug === 'xbox-game-art');
  const [isUclaLibraryPopupOpen, setIsUclaLibraryPopupOpen] = useState(initialSlug === 'ucla-library');
  const [isGameModeTaskSwitcherPopupOpen, setIsGameModeTaskSwitcherPopupOpen] = useState(initialSlug === 'task-switcher');

  // Open exactly the case study that matches the current URL (or none)
  const applyPath = (pathname: string) => {
    const slug = slugFromPath(pathname);
    setIsHandheldPopupOpen(slug === 'handheld-compatibility');
    setIsBobsEntertainmentPopupOpen(slug === 'bobs-entertainment');
    setIsXboxGameArtPopupOpen(slug === 'xbox-game-art');
    setIsUclaLibraryPopupOpen(slug === 'ucla-library');
    setIsGameModeTaskSwitcherPopupOpen(slug === 'task-switcher');
    onPopupChange(slug !== null);
  };

  const openCase = (title: string) => {
    const slug = CASE_SLUGS[title];
    if (!slug) return;
    window.history.pushState({ case: true }, '', `/work/${slug}`);
    applyPath(window.location.pathname);
  };

  const closeCase = () => {
    if (window.history.state?.case) {
      // We pushed this entry ourselves, so going back restores the previous page
      window.history.back();
    } else {
      // Landed directly on a case study URL: swap it for the index
      window.history.replaceState({}, '', '/');
      applyPath('/');
    }
  };

  useEffect(() => {
    const onPopState = () => applyPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="w-full">
      {/* Index Title */}
      <motion.div
        className="flex flex-col gap-[16px] items-start relative w-full mb-[20px] sm:mb-[25px] md:mb-[33px] mt-[40px] sm:mt-[50px] md:mt-[60px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="font-['Istok_Web'] leading-[normal] not-italic text-[#989898] text-[60px] sm:text-[90px] md:text-[128px] w-full">
          Index
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <motion.div 
              whileHover="hover"
              initial="initial"
              className="group flex items-center justify-between w-full mb-[20px] sm:mb-[25px] md:mb-[33px] cursor-pointer gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
              onClick={() => openCase(project.title)}
            >
              <div className="flex flex-col font-['Istok_Web'] items-start leading-[normal] text-[#989898] flex-1 min-w-0 group-hover:opacity-70 transition-opacity">
                <p className="text-[20px] sm:text-[28px] md:text-[36px] w-full mb-1 sm:mb-2">{project.title}</p>
                <p className="text-[14px] sm:text-[16px] md:text-[20px] w-full">{project.description}</p>
              </div>
              <ArrowUpRight />
            </motion.div>
            
            {/* Divider Line - hide after last item */}
            {index < projects.length - 1 && (
              <motion.div
                className="h-px bg-[#afafaf] w-full mb-[20px] sm:mb-[25px] md:mb-[33px]"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Handheld Popup */}
      <HandheldPopup 
        isOpen={isHandheldPopupOpen} 
        onClose={closeCase} 
      />

      {/* Bobs Entertainment Popup */}
      <BobsEntertainmentPopup 
        isOpen={isBobsEntertainmentPopupOpen} 
        onClose={closeCase} 
      />

      {/* Xbox Game Art Popup */}
      <XboxGameArtPopup 
        isOpen={isXboxGameArtPopupOpen} 
        onClose={closeCase} 
      />

      {/* UCLA Library Popup */}
      <UclaLibraryPopup 
        isOpen={isUclaLibraryPopupOpen} 
        onClose={closeCase} 
      />

      {/* Game Mode Task Switcher Popup */}
      <GameModeTaskSwitcherPopup 
        isOpen={isGameModeTaskSwitcherPopupOpen} 
        onClose={closeCase} 
      />
    </div>
  );
}

export function WorkSection({ isVisible, onPopupChange }: { isVisible: boolean; onPopupChange: (isOpen: boolean) => void }) {
  return (
    <div className="w-full relative px-[24px] sm:px-[40px] md:px-[60px] pb-[60px] sm:pb-[80px] md:pb-[100px] pt-[80px] sm:pt-[100px] md:pt-[120px] bg-white rounded-t-[20px]">
      <WorkContent isVisible={isVisible} onPopupChange={onPopupChange} />
    </div>
  );
}