import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { TamagotchiGame } from './TamagotchiGame';
import Frame23 from '../../imports/Frame23';

export default function GameBoy({ onStateChange, isTransitioning, onHoverChange, onWorkVisited }: { 
  onStateChange?: (isPowerOn: boolean, showMenu: boolean, showBag: boolean, showAbout: boolean, showContact: boolean, showWork: boolean, showPlay: boolean) => void, 
  isTransitioning?: boolean,
  onHoverChange?: (isHovered: boolean) => void,
  onWorkVisited?: () => void
}) {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const [aboutDialogueIndex, setAboutDialogueIndex] = useState(0);
  const [isTurningOff, setIsTurningOff] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0); // 0: WORK, 1: PLAY, 2: BAG, 3: ABOUT, 4: CONTACT
  const [introTimers, setIntroTimers] = useState<{ intro?: NodeJS.Timeout; welcome?: NodeJS.Timeout }>({});
  const [dpadInput, setDpadInput] = useState<string | null>(null);
  const [aPressed, setAPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Refs for game controls
  const gameControlsRef = useRef<{
    up?: () => void;
    down?: () => void;
    left?: () => void;
    right?: () => void;
    retry?: () => void;
    getGameOver?: () => boolean;
  }>({});

  useEffect(() => {
    if (isPowerOn) {
      setIsTurningOff(false);
      setShowIntro(true);
      setShowWelcome(false);
      setShowMenu(false);
      
      // Show intro for 3 seconds
      const introTimer = setTimeout(() => {
        setShowIntro(false);
        setShowWelcome(true);
      }, 3000);
      
      // Show welcome for 2 seconds, then menu
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
        setShowMenu(true);
      }, 5000);
      
      setIntroTimers({ intro: introTimer, welcome: welcomeTimer });
      
      return () => {
        clearTimeout(introTimer);
        clearTimeout(welcomeTimer);
      };
    } else {
      setShowIntro(false);
      setShowWelcome(false);
      setShowMenu(false);
    }
  }, [isPowerOn]);

  // Notify parent of state changes
  useEffect(() => {
    if (onStateChange) {
      onStateChange(isPowerOn, showMenu, showBag, showAbout, showContact, showWork, showPlay);
    }
  }, [isPowerOn, showMenu, showBag, showAbout, showContact, showWork, showPlay, onStateChange]);

  // Handle transitioning back to menu
  useEffect(() => {
    if (isTransitioning) {
      // Restore menu state after coming back from work
      setShowWork(false);
      setShowMenu(true);
    }
  }, [isTransitioning]);

  const handlePowerToggle = () => {
    if (isPowerOn) {
      // Turning off - trigger animation
      setIsTurningOff(true);
      setTimeout(() => {
        setIsPowerOn(false);
        setIsTurningOff(false);
      }, 200);
    } else {
      // Turning on - immediate
      setIsPowerOn(true);
    }
  };

  const handleDPadUp = () => {
    if (showMenu) {
      setSelectedMenuItem((prev) => (prev > 0 ? prev - 1 : 4));
    } else if (showPlay && gameControlsRef.current.up) {
      gameControlsRef.current.up();
    }
    setDpadInput('up');
  };

  const handleDPadDown = () => {
    if (showMenu) {
      setSelectedMenuItem((prev) => (prev < 4 ? prev + 1 : 0));
    } else if (showPlay && gameControlsRef.current.down) {
      gameControlsRef.current.down();
    }
    setDpadInput('down');
  };

  const handleDPadLeft = () => {
    if (showPlay && gameControlsRef.current.left) {
      gameControlsRef.current.left();
    }
    setDpadInput('left');
    setTimeout(() => setDpadInput(null), 100);
  };

  const handleDPadRight = () => {
    if (showPlay && gameControlsRef.current.right) {
      gameControlsRef.current.right();
    }
    setDpadInput('right');
    setTimeout(() => setDpadInput(null), 100);
  };

  const handleAButton = () => {
    // Skip intro/welcome screens if they're showing
    if (showIntro || showWelcome) {
      // Clear any pending timers
      if (introTimers.intro) clearTimeout(introTimers.intro);
      if (introTimers.welcome) clearTimeout(introTimers.welcome);
      
      // Go directly to menu
      setShowIntro(false);
      setShowWelcome(false);
      setShowMenu(true);
      setIntroTimers({});
    } else if (showAbout) {
      // Progress through About dialogue
      const aboutDialogues = [
        "Hello! I'm Taylor, currently a product designer at Microsoft Xbox.",
        "Retro video games sparked my passion for designing intuitive and immersive experiences,",
        "through all sorts of mediums including UX, graphic design, game design, etc.",
        "I'm currently navigating my way through motion and AI design.",
        "I hope you can continue to follow me on my journey!"
      ];
      
      if (aboutDialogueIndex < aboutDialogues.length - 1) {
        setAboutDialogueIndex(aboutDialogueIndex + 1);
      } else {
        // End of dialogue - return to menu
        setShowAbout(false);
        setShowMenu(true);
        setAboutDialogueIndex(0);
      }
    } else if (showPlay && gameControlsRef.current && gameControlsRef.current.getGameOver && gameControlsRef.current.retry) {
      // Check if game is over and retry
      if (gameControlsRef.current.getGameOver()) {
        gameControlsRef.current.retry();
      }
    } else if (showMenu) {
      // Handle menu selection
      if (selectedMenuItem === 0) {
        // WORK selected
        setShowMenu(false);
        setShowWork(true);
        if (onWorkVisited) onWorkVisited();
      } else if (selectedMenuItem === 1) {
        // PLAY selected
        setShowMenu(false);
        setShowPlay(true);
      } else if (selectedMenuItem === 2) {
        // BAG selected
        setShowMenu(false);
        setShowBag(true);
      } else if (selectedMenuItem === 3) {
        // About selected
        setShowMenu(false);
        setShowAbout(true);
        setAboutDialogueIndex(0);
      } else if (selectedMenuItem === 4) {
        // Contact selected
        setShowMenu(false);
        setShowContact(true);
      } else {
        const menuItems = ['WORK', 'PLAY', 'BAG', 'ABOUT', 'CONTACT'];
        console.log(`Selected: ${menuItems[selectedMenuItem]}`);
        // TODO: Navigate to selected section
      }
    }
    setAPressed(true);
    setTimeout(() => setAPressed(false), 100);
  };

  const handleBButton = () => {
    if (showAbout) {
      // Return to menu from About
      setShowAbout(false);
      setShowMenu(true);
      setAboutDialogueIndex(0);
    } else if (showBag) {
      // Return to menu from Bag
      setShowBag(false);
      setShowMenu(true);
    } else if (showContact) {
      // Return to menu from Contact
      setShowContact(false);
      setShowMenu(true);
    } else if (showPlay) {
      // Return to menu from Play
      setShowPlay(false);
      setShowMenu(true);
    }
  };

  const handleStartButton = () => {
    if (showAbout) {
      // Return to menu from About
      setShowAbout(false);
      setShowMenu(true);
      setAboutDialogueIndex(0);
    } else if (showBag) {
      // Return to menu from Bag
      setShowBag(false);
      setShowMenu(true);
    } else if (showContact) {
      // Return to menu from Contact
      setShowContact(false);
      setShowMenu(true);
    } else if (showPlay) {
      // Return to menu from Play
      setShowPlay(false);
      setShowMenu(true);
    } else if (showMenu || showWelcome || showIntro) {
      // Open WORK from menu, welcome, or intro screens
      setShowIntro(false);
      setShowWelcome(false);
      setShowMenu(false);
      setShowWork(true);
      if (onWorkVisited) onWorkVisited();
      // Clear any pending intro timers
      if (introTimers.intro) clearTimeout(introTimers.intro);
      if (introTimers.welcome) clearTimeout(introTimers.welcome);
      setIntroTimers({});
    }
  };

  return (
    <div 
      className="relative w-[340px] h-[560px] bg-[#e8e8e8] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[48px] p-6 pb-20"
      style={{
        boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 15px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (onHoverChange) onHoverChange(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (onHoverChange) onHoverChange(false);
      }}
    >
        {/* Texture overlay */}
        <div 
          className="absolute inset-0 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[48px] opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Subtle gradient for depth */}
        <div 
          className="absolute inset-0 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[48px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.15) 100%)'
          }}
        />
        
        {/* Power Switch */}
        <div className="absolute top-4 left-6 flex items-center gap-2">
          <span className="text-gray-500" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '7px', letterSpacing: '0.5px' }}>OFF・ON</span>
          <button
            onClick={handlePowerToggle}
            className={`w-10 h-5 rounded-full transition-all duration-300 relative hover:brightness-110 ${
              isPowerOn ? 'bg-[#6b8e6b]' : 'bg-gray-400'
            }`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${
                isPowerOn ? 'left-5' : 'left-0.5'
              }`}
            />
          </button>
        </div>

        {/* Screen Area */}
        <div 
          className="mt-12 mb-6 bg-[#3a3a3a] rounded-lg p-3"
          style={{
            boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.6), inset 0 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          {/* Battery Indicator */}
          <div className="flex items-center gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#a0665f]"></div>
            <span className="text-gray-400" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '6px', letterSpacing: '0.5px' }}>BATTERY</span>
          </div>

          {/* Screen */}
          <div 
            className="w-full h-56 bg-[#8a9a5b] rounded relative"
            style={{
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3), inset 0 0 0 2px #0f380f'
            }}
          >
            {/* Screen scanlines effect */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)'
            }}></div>

            {/* Screen Content */}
            {isTurningOff ? (
              // Power-off animation
              <div 
                className="absolute inset-[2px] flex items-center justify-center"
                style={{
                  animation: 'powerOff 0.2s ease-out forwards'
                }}
              >
                <style>{`
                  @keyframes powerOff {
                    0% {
                      transform: scaleY(1);
                      opacity: 1;
                    }
                    70% {
                      transform: scaleY(0.05);
                      opacity: 0.8;
                    }
                    100% {
                      transform: scaleY(0);
                      opacity: 0;
                    }
                  }
                `}</style>
                <div className="text-center px-4">
                  <p 
                    className="text-[#0f380f]"
                    style={{ 
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '12px',
                      lineHeight: '1.8'
                    }}
                  >
                    {showIntro ? "Taylor's\nPortfolio" : "Welcome!"}
                  </p>
                </div>
              </div>
            ) : isPowerOn ? (
              showIntro ? (
                // Intro Screen
                <div className="absolute inset-0 flex flex-col">
                  {/* Logo centered */}
                  <div className="flex-1 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div style={{ width: '250px', height: '300px', transform: 'scale(0.35)' }}>
                        <Frame23 />
                      </div>
                    </div>
                  </div>
                  {/* Press A to skip text at bottom */}
                  <div className="pb-4 flex justify-center">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '6px',
                        lineHeight: '1.8'
                      }}
                    >
                      Press A to skip
                    </p>
                  </div>
                </div>
              ) : showWelcome ? (
                // Welcome Screen
                <div className="absolute inset-0 flex flex-col">
                  {/* Welcome text centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '12px',
                        lineHeight: '1.8'
                      }}
                    >
                      Welcome!
                    </p>
                  </div>
                  {/* Press A to skip text at bottom */}
                  <div className="pb-4 flex justify-center">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '6px',
                        lineHeight: '1.8'
                      }}
                    >
                      Press A to skip
                    </p>
                  </div>
                </div>
              ) : showMenu ? (
                // Menu Screen
                <div className="absolute inset-[2px] p-3 flex flex-col justify-between">
                  {/* Header */}
                  <div className="text-center pb-2 mb-1">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '10px'
                      }}
                    >
                      TAYLOR_OS_v1.0
                    </p>
                    <div className="w-full h-[2px] bg-[#0f380f] mt-2"></div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 flex flex-col justify-center gap-2 py-2">
                    <MenuItem 
                      label="WORK" 
                      isSelected={selectedMenuItem === 0}
                      onClick={() => {
                        setSelectedMenuItem(0);
                        setShowMenu(false);
                        setShowWork(true);
                        if (onWorkVisited) onWorkVisited();
                      }}
                    />
                    <MenuItem 
                      label="PLAY" 
                      isSelected={selectedMenuItem === 1}
                      onClick={() => {
                        setSelectedMenuItem(1);
                        setShowMenu(false);
                        setShowPlay(true);
                      }}
                    />
                    <MenuItem 
                      label="BAG" 
                      isSelected={selectedMenuItem === 2}
                      onClick={() => {
                        setSelectedMenuItem(2);
                        setShowMenu(false);
                        setShowBag(true);
                      }}
                    />
                    <MenuItem 
                      label="ABOUT" 
                      isSelected={selectedMenuItem === 3}
                      onClick={() => {
                        setSelectedMenuItem(3);
                        setShowMenu(false);
                        setShowAbout(true);
                        setAboutDialogueIndex(0);
                      }}
                    />
                    <MenuItem 
                      label="CONTACT" 
                      isSelected={selectedMenuItem === 4}
                      onClick={() => {
                        setSelectedMenuItem(4);
                        setShowMenu(false);
                        setShowContact(true);
                      }}
                    />
                  </div>
                </div>
              ) : showAbout ? (
                // About Screen
                <div className="absolute inset-[2px] p-3 flex flex-col justify-between">
                  {/* Header */}
                  <div className="text-center pb-2 mb-3">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '10px'
                      }}
                    >
                      TAYLOR_OS_v1.0
                    </p>
                    <div className="w-full h-[2px] bg-[#0f380f] mt-2"></div>
                  </div>

                  {/* About Content - Chatbox Style */}
                  <div className="flex-1 flex flex-col justify-end pb-2">
                    <div 
                      className="bg-[#9baa72] p-3"
                      style={{
                        boxShadow: '0 0 0 4px #0f380f, inset 0 0 0 2px #7a8a5b'
                      }}
                    >
                      <p 
                        className="text-[#0f380f]"
                        style={{ 
                          fontFamily: "'Press Start 2P', monospace",
                          fontSize: '7px',
                          lineHeight: '1.8'
                        }}
                      >
                        {[
                          "Hello! I'm Taylor, currently a product designer at Microsoft Xbox.",
                          "Retro video games sparked my passion for designing intuitive and immersive experiences,",
                          "through all sorts of mediums including UX, graphic design, game design, etc.",
                          "I'm currently navigating my way through motion and AI design.",
                          "I hope you can continue to follow me on my journey!"
                        ][aboutDialogueIndex]}
                      </p>
                      
                      {/* Arrow indicator for more dialogue */}
                      {aboutDialogueIndex < 4 && (
                        <div className="flex justify-end mt-2">
                          <span 
                            className="text-[#0f380f] animate-bounce"
                            style={{ 
                              fontFamily: "'Press Start 2P', monospace",
                              fontSize: '8px'
                            }}
                          >
                            ▼
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : showBag ? (
                // Bag Inventory Screen
                <div className="absolute inset-[2px] p-3 flex flex-col">
                  {/* Header */}
                  <div className="text-center pb-2 mb-3">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '10px'
                      }}
                    >
                      Taylor's BAG
                    </p>
                    <div className="w-full h-[2px] bg-[#0f380f] mt-2"></div>
                  </div>

                  {/* Inventory Grid */}
                  <div className="grid grid-cols-2 gap-2 flex-1 content-start overflow-y-auto">
                    <InventoryItem name="Figma" />
                    <InventoryItem name="Protopie" />
                    <InventoryItem name="VSCode" />
                    <InventoryItem name="my iPad" />
                    <InventoryItem name="my Switch" />
                    <InventoryItem name="a laptop" />
                    <InventoryItem name="matcha" />
                    <InventoryItem name="my cat" />
                  </div>
                </div>
              ) : showContact ? (
                // Contact Screen
                <div className="absolute inset-[2px] p-3 flex flex-col">
                  {/* Header */}
                  <div className="text-center pb-2 mb-3">
                    <p 
                      className="text-[#0f380f]"
                      style={{ 
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: '10px'
                      }}
                    >
                      Contact Taylor
                    </p>
                    <div className="w-full h-[2px] bg-[#0f380f] mt-2"></div>
                  </div>

                  {/* Contact Links - Grid Layout like BAG */}
                  <div className="grid grid-cols-1 gap-3 flex-1 content-center">
                    <a 
                      href="https://www.linkedin.com/in/taylor-che/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#9baa72] p-3 rounded-sm shadow-md flex items-center gap-2 hover:brightness-110 transition-all"
                      style={{
                        boxShadow: 'inset 0 0 0 2px #7a8a5b'
                      }}
                    >
                      <ExternalLink size={14} className="text-[#0f380f] flex-shrink-0" />
                      <span 
                        className="text-[#0f380f]"
                        style={{ 
                          fontFamily: "'Press Start 2P', monospace",
                          fontSize: '8px',
                          lineHeight: '1.8'
                        }}
                      >
                        LinkedIn
                      </span>
                    </a>
                    <a 
                      href="https://www.instagram.com/tayylor.tots/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#9baa72] p-3 rounded-sm shadow-md flex items-center gap-2 hover:brightness-110 transition-all"
                      style={{
                        boxShadow: 'inset 0 0 0 2px #7a8a5b'
                      }}
                    >
                      <ExternalLink size={14} className="text-[#0f380f] flex-shrink-0" />
                      <span 
                        className="text-[#0f380f]"
                        style={{ 
                          fontFamily: "'Press Start 2P', monospace",
                          fontSize: '8px',
                          lineHeight: '1.8'
                        }}
                      >
                        Instagram
                      </span>
                    </a>
                  </div>
                </div>
              ) : showPlay ? (
                // Play Screen
                <div className="absolute inset-0 flex flex-col">
                  {/* Tamagotchi Game */}
                  <TamagotchiGame 
                    onBack={() => {
                      setShowPlay(false);
                      setShowMenu(true);
                    }}
                    dpadInput={dpadInput}
                    aPressed={aPressed}
                  />
                </div>
              ) : null
            ) : null}
          </div>
        </div>

        {/* D-Pad and Buttons */}
        <div className="flex justify-between items-center px-4 mb-8">
          {/* D-Pad */}
          <div className="relative w-20 h-20">
            <button 
              className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-8 bg-[#2c3e50] rounded-sm cursor-pointer hover:brightness-110 transition-all"
              style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
              onClick={handleDPadUp}
            ></button>
            <button 
              className="absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-8 bg-[#2c3e50] rounded-sm cursor-pointer hover:brightness-110 transition-all"
              style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
              onClick={handleDPadDown}
            ></button>
            <button 
              className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-6 bg-[#2c3e50] rounded-sm cursor-pointer hover:brightness-110 transition-all"
              style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
              onClick={handleDPadLeft}
            ></button>
            <button 
              className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-6 bg-[#2c3e50] rounded-sm cursor-pointer hover:brightness-110 transition-all"
              style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
              onClick={handleDPadRight}
            ></button>
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#2c3e50] rounded-sm pointer-events-none"
              style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
            ></div>
          </div>

          {/* A and B Buttons */}
          <div className="flex gap-4 items-center -rotate-12">
            <div className="text-center">
              <button 
                className="w-12 h-12 bg-[#9e6b6b] rounded-full mb-1 cursor-pointer hover:brightness-110 hover:scale-105 transition-all"
                style={{
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)'
                }}
                onClick={handleBButton}
              ></button>
              <span className="text-[10px] text-gray-500">B</span>
            </div>
            <div className="text-center -mt-6">
              <button 
                className="w-12 h-12 bg-[#9e6b6b] rounded-full mb-1 cursor-pointer hover:brightness-110 hover:scale-105 transition-all"
                style={{
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)'
                }}
                onClick={handleAButton}
              ></button>
              <span className="text-[10px] text-gray-500">A</span>
            </div>
          </div>
        </div>

        {/* Select and Start Buttons */}
        <div className="flex justify-center gap-6 mb-4">
          <div className="text-center">
            <button 
              className="w-14 h-4 bg-[#95a5a6] rounded-full mb-1 cursor-pointer hover:brightness-110 transition-all"
              style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)'
              }}
            ></button>
            <span className="text-[8px] text-gray-500 block">SELECT</span>
          </div>
          <div className="text-center">
            <button 
              className="w-14 h-4 bg-[#95a5a6] rounded-full mb-1 cursor-pointer hover:brightness-110 transition-all"
              style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)'
              }}
              onClick={handleStartButton}
            ></button>
            <span className="text-[8px] text-gray-500 block">START</span>
          </div>
        </div>
      </div>
  );
}

// MenuItem component
function MenuItem({ label, isSelected, onClick }: { label: string, isSelected: boolean, onClick: () => void }) {
  return (
    <div 
      className={`px-2 py-1 cursor-pointer transition-all ${
        isSelected ? 'bg-[#0f380f]' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {isSelected && (
          <span 
            className="text-[#8a9a5b]"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
          >
            ▶
          </span>
        )}
        <span 
          className={isSelected ? 'text-[#8a9a5b]' : 'text-[#0f380f]'}
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

// InventoryItem component
function InventoryItem({ name }: { name: string }) {
  return (
    <div 
      className="bg-[#9baa72] p-2 rounded-sm shadow-md"
      style={{
        boxShadow: 'inset 0 0 0 2px #7a8a5b'
      }}
    >
      <p 
        className="text-[#0f380f]"
        style={{ 
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '7px',
          lineHeight: '1.8'
        }}
      >
        {name}
      </p>
    </div>
  );
}