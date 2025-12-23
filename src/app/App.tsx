import GameBoy from './components/GameBoy';
import { useState } from 'react';
import PortfolioSiteDesign from '../imports/PortfolioSiteDesign';
import SwitchOn from '../imports/SwitchOn';
import WorkShortcut from '../imports/SwitchOn-86-263';

export default function App() {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGameBoyHovered, setIsGameBoyHovered] = useState(false);
  const [hasVisitedWork, setHasVisitedWork] = useState(false);

  const handleGameBoyStateChange = (powerOn: boolean, menuVisible: boolean, bagVisible: boolean, aboutVisible: boolean, contactVisible: boolean, workVisible: boolean, playVisible: boolean) => {
    setIsPowerOn(powerOn);
    setShowMenu(menuVisible);
    setShowBag(bagVisible);
    setShowAbout(aboutVisible);
    setShowContact(contactVisible);
    setShowWork(workVisible);
    setShowPlay(playVisible);
  };

  const handleBackToMenu = () => {
    setIsTransitioning(true);
    // Wait for animation to complete before showing menu
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div 
      className="size-full flex flex-col items-center justify-center bg-[#1a1a1a] relative overflow-hidden"
      style={{
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Green radial glow behind Game Boy - revealed on hover - ENTIRE SCREEN */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${isGameBoyHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'radial-gradient(circle 400px at center, rgba(138, 154, 91, 0.25) 0%, rgba(138, 154, 91, 0.15) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Textured green glow layer - revealed on hover - ENTIRE SCREEN */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${isGameBoyHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'radial-gradient(circle 400px at center, rgba(138, 154, 91, 0.2) 0%, rgba(138, 154, 91, 0.1) 40%, transparent 80%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Grid texture background - ENTIRE SCREEN - only visible where glow is - revealed on hover */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${isGameBoyHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(138, 154, 91, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 154, 91, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle 400px at 50% 50%, black 0%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle 400px at 50% 50%, black 0%, black 40%, transparent 80%)',
        }}
      />
      
      {/* Work Portfolio Page */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          showWork ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          border: '0 !important',
          borderWidth: '0 !important',
          outline: '0 !important',
          outlineWidth: '0 !important',
          boxShadow: 'none !important',
          WebkitBoxShadow: 'none !important',
          MozBoxShadow: 'none !important',
          margin: 0,
          padding: 0
        }}
      >
        <PortfolioSiteDesign onBack={handleBackToMenu} />
      </div>
      
      {/* Game Boy Container with animation */}
      <div 
        className={`flex-1 flex items-center justify-center transition-all duration-700 ${
          showWork ? 'translate-y-[150vh]' : isTransitioning ? 'translate-y-[150vh]' : 'translate-y-0'
        } ${
          showWork && 'animate-jump-slide'
        }`}
      >
        <div className="relative">
          {/* Switch On Hint - Only show when hovering and Game Boy is OFF */}
          <div 
            className={`absolute left-[-95px] top-[5px] w-[80px] h-[40px] pointer-events-none transition-opacity duration-500 ${
              isGameBoyHovered && !isPowerOn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <SwitchOn />
          </div>
          
          {/* Work Shortcut Hint - Only show when Game Boy is ON and showing menu */}
          <div 
            className={`absolute right-[-130px] bottom-[70px] w-[110px] h-[40px] transition-opacity duration-500 ${
              isPowerOn && showMenu && !hasVisitedWork ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <WorkShortcut />
          </div>
          
          <GameBoy 
            onStateChange={handleGameBoyStateChange} 
            isTransitioning={isTransitioning}
            onHoverChange={setIsGameBoyHovered}
            onWorkVisited={() => setHasVisitedWork(true)}
          />
        </div>
      </div>

      {/* Bottom Page Text */}
      <div 
        className={`pb-8 text-center transition-all duration-700 ${
          showWork ? 'translate-y-[150vh] opacity-0' : isTransitioning ? 'translate-y-[150vh] opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {showBag || showAbout || showContact || showPlay ? (
          <p 
            className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
            style={{ 
              fontSize: '12px',
              letterSpacing: '0.02em',
              opacity: 1
            }}
          >
            Press B to go back to home
          </p>
        ) : isPowerOn && showMenu ? (
          <p 
            className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
            style={{ 
              fontSize: '12px',
              letterSpacing: '0.02em',
              opacity: 1
            }}
          >
            Navigate with D-Pad • Press START for quick access to WORK
          </p>
        ) : (
          <p 
            className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
            style={{ 
              fontSize: '12px',
              letterSpacing: '0.02em',
              opacity: 1
            }}
          >
            Turn ON to start
          </p>
        )}
      </div>

      {/* Jump and slide animation keyframes */}
      <style>{`
        /* NUCLEAR OPTION: Remove all viewport borders and margins */
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          outline: 0 !important;
          box-shadow: none !important;
          background: #1a1a1a !important;
        }
        
        #root {
          border: 0 !important;
          outline: 0 !important;
          box-shadow: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Force remove all focus rings and outlines */
        *, *::before, *::after {
          outline: none !important;
        }
        
        @keyframes jump-slide {
          0% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-40px);
          }
          30% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(150vh);
          }
        }
        
        .animate-jump-slide {
          animation: jump-slide 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}