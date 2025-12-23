import { portfolio } from "../assets/images";
import { useState } from "react";
import { Cartridge } from "../app/components/Cartridge";
import { Pause, Play } from "lucide-react";
import { AdvancedSearchCaseStudy } from "../app/components/AdvancedSearchCaseStudy";
import { ScrollReveal } from "../app/components/ScrollReveal";

export default function PortfolioSiteDesign({ onBack }: { onBack?: () => void }) {
  const [isLibraryHovered, setIsLibraryHovered] = useState(false);
  const [isFunProjectsPaused, setIsFunProjectsPaused] = useState(false);
  const [isFavoriteGamesPaused, setIsFavoriteGamesPaused] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [isHandheldHovered, setIsHandheldHovered] = useState(false);

  if (showCaseStudy) {
    return <AdvancedSearchCaseStudy 
      onBack={() => setShowCaseStudy(false)} 
      onHome={() => {
        setShowCaseStudy(false);
        onBack?.();
      }} 
    />;
  }

  return (
    <div 
      className="bg-[#2d3a2d] relative size-full overflow-y-auto" 
      data-name="Portfolio Site Design"
      style={{ 
        border: '0px solid transparent',
        outline: '0px solid transparent',
        boxShadow: 'none',
        margin: 0,
        padding: 0,
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none'
      }}
      tabIndex={-1}
    >
      {/* Pixel lines/scanlines overlay */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none z-[100]" 
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.4) 2px, rgba(0, 0, 0, 0.4) 4px)'
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-[100]"
        style={{
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`,
        }}
      />
      
      {/* Fixed Back Button */}
      {onBack && (
        <div className="sticky top-0 left-0 right-0 z-50 pt-[57px] bg-[#2d3a2d]">
          <div className="max-w-[1000px] mx-auto px-8">
            <button
              onClick={onBack}
              className="hover:opacity-80 transition-opacity mb-4 cursor-pointer"
              style={{ 
                fontFamily: "'VT323', monospace",
                fontSize: '18px',
                lineHeight: '25.2px',
                letterSpacing: '0.42px',
                wordSpacing: '0.3em'
              }}
            >
              <p className="text-[#b0b0b0] uppercase">Home</p>
            </button>
          </div>
        </div>
      )}
      
      <div className="max-w-[1000px] mx-auto px-8 py-24">
        {/* Hero Section */}
        <ScrollReveal direction="fade" duration={0.8}>
          <div className="mb-16">
            <p className="font-['Inria_Serif:Regular',sans-serif] text-[24px] md:text-[32px] text-white mb-6 max-w-[673px]">
              Hi! I'm Taylor, a product designer creating simple interfaces for complex problems.
            </p>
            <p className="font-['Work_Sans:Light',sans-serif] font-light text-[16px] md:text-[18px] text-white max-w-[673px]">
              Currently designing at Xbox. After hours, I make specialty lattes, illustrate, and experiment with motion and AI. And play video games.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Project 1 - Improving the search experience */}
          <ScrollReveal delay={0.1}>
            <div onClick={() => setShowCaseStudy(true)} className="cursor-pointer">
              <div
                className="h-[433px] rounded-tl-[8px] rounded-tr-[50px] rounded-br-[8px] rounded-bl-[8px] shadow-[0px_2px_24.4px_0px_rgba(0,0,0,0.25)] mb-4 overflow-hidden relative transition-all bg-[#455345]"
                onMouseEnter={() => setIsLibraryHovered(true)}
                onMouseLeave={() => setIsLibraryHovered(false)}
              >
                {/* Background and Image - Always visible */}
                <img alt="Advanced Search Interface" className="absolute w-full h-full top-0 left-0 object-cover" src={portfolio.mainPortfolioImage} />                {/* Hover Overlay - Enhanced plastic glossy effect */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out ${isLibraryHovered ? 'opacity-100' : 'opacity-0'}`}>
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
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-white">
                  Improving the search experience
                </p>
                <div className="px-[8px] py-[2px]" style={{ boxShadow: '0 0 0 1px white' }}>
                  <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[8px] text-white tracking-[0.42px]">
                    CASE STUDY
                  </p>
                </div>
              </div>
              <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-white leading-[21px]">
                Guiding students to advanced search when results fall short
              </p>
            </div>
          </ScrollReveal>

          {/* Project 2 - Xbox game art updater */}
          <ScrollReveal delay={0.2}>
            <div>
              <div className="h-[433px] rounded-tl-[8px] rounded-tr-[50px] rounded-br-[8px] rounded-bl-[8px] shadow-[0px_2px_24.4px_0px_rgba(0,0,0,0.25)] mb-4 overflow-hidden">
                <img 
                  src="https://i.imgur.com/2vJqwQ9.gif" 
                  alt="Xbox game art updater demo" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-white mb-2">
                Xbox game art updater
              </p>
              <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-white leading-[21px]">
                Improved designers' workflows by 20% by building a plugin that auto-updates game data through Twitch's API.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Project 3 - Handheld Compatibility - Full Width */}
        <ScrollReveal delay={0.3}>
          <div className="mb-16">
            <a 
              href="https://www.xbox.com/en-US/handhelds/handheld-compatibility" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div 
                className="bg-[#9caa9c] h-[326px] rounded-tl-[8px] rounded-tr-[50px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden mb-4 relative transition-all cursor-pointer"
                onMouseEnter={() => setIsHandheldHovered(true)}
                onMouseLeave={() => setIsHandheldHovered(false)}
              >
                <div className="absolute h-[357px] w-[634px] top-[24px] left-1/2 -translate-x-1/2">
                  <img 
                    src="https://i.imgur.com/6Hj4kSH.gif" 
                    alt="Handheld compatibility program demo" 
                    className="absolute max-w-none object-cover size-full rounded-t-[8px]"
                    loading="lazy"
                  />
                </div>
                
                {/* Hover Overlay - Same as Advanced Search */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out ${isHandheldHovered ? 'opacity-100' : 'opacity-0'}`}>
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
              </div>
              <p className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-white mb-2">
                Handheld Compatibility program
              </p>
              <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-white leading-[21px]">
                Helping players understand how games perform on handheld systems.
              </p>
            </a>
          </div>
        </ScrollReveal>

        {/* Fun Projects Section */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Inria_Serif:Regular',sans-serif] text-[32px] text-white">
                Fun projects
              </h2>
              <button
                onClick={() => setIsFunProjectsPaused(!isFunProjectsPaused)}
                className="flex items-center gap-2 px-4 py-2 bg-[#7a9279] hover:bg-[#8aa289] text-white rounded transition-colors"
                aria-label={isFunProjectsPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isFunProjectsPaused ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <Pause className="w-4 h-4" />
                )}
              </button>
            </div>
            
            {/* Slideshow Container */}
            <div className="relative overflow-hidden group">
              {/* Scrolling Track */}
              <div className={`flex gap-8 ${isFunProjectsPaused ? '[animation-play-state:paused]' : ''} animate-scroll-5 group-hover:[animation-play-state:paused]`}>
                {/* First set of cartridges */}
                <Cartridge
                  image={portfolio.slouchSloth}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://slouch-sloth.lovable.app/"
                />
                <Cartridge
                  image={portfolio.pinnacle}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://pinnacle.us.org/"
                />
                <Cartridge
                  image={portfolio.villainess}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://brandenmb.itch.io/villainess-x-reborn"
                />
                <Cartridge
                  image={portfolio.esports}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://www.behance.net/gallery/184896509/UCLA-Esports-2023-Graphics"
                />
                <Cartridge
                  image={portfolio.instagram}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://www.instagram.com/tayylor.tots/"
                />
                {/* Duplicate set for seamless loop */}
                <Cartridge
                  image={portfolio.slouchSloth}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://slouch-sloth.lovable.app/"
                />
                <Cartridge
                  image={portfolio.pinnacle}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://pinnacle.us.org/"
                />
                <Cartridge
                  image={portfolio.villainess}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://brandenmb.itch.io/villainess-x-reborn"
                />
                <Cartridge
                  image={portfolio.esports}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://www.behance.net/gallery/184896509/UCLA-Esports-2023-Graphics"
                />
                <Cartridge
                  image={portfolio.instagram}
                  variant="dark-green"
                  labelText="EXTERNAL LINK"
                  link="https://www.instagram.com/tayylor.tots/"
                />
              </div>
              
              {/* Left Gradient Overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#2d3a2d] to-transparent pointer-events-none z-10" />
              
              {/* Right Gradient Overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#2d3a2d] to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </ScrollReveal>

        {/* Favorite Retro Games Section */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Inria_Serif:Regular',sans-serif] text-[32px] text-white">
                Favorite retro games
              </h2>
              <button
                onClick={() => setIsFavoriteGamesPaused(!isFavoriteGamesPaused)}
                className="flex items-center gap-2 px-4 py-2 bg-[#7a9279] hover:bg-[#8aa289] text-white rounded transition-colors"
                aria-label={isFavoriteGamesPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isFavoriteGamesPaused ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <Pause className="w-4 h-4" />
                )}
              </button>
            </div>
            
            {/* Slideshow Container */}
            <div className="relative overflow-hidden group">
              {/* Scrolling Track */}
              <div className={`flex gap-8 ${isFavoriteGamesPaused ? '[animation-play-state:paused]' : ''} animate-scroll group-hover:[animation-play-state:paused]`}>
                {/* First set of cartridges */}
                <Cartridge
                  image="https://i.ytimg.com/vi/D2v6fLPKovw/maxresdefault.jpg"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/01/31/pokemon-diamond-button-crop-1643616517892.jpg"
                />
                <Cartridge
                  image="https://assets1.ignimgs.com/2019/05/17/pokemon-heartgold---button-1558055594925.jpg"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/01/06/dragon-quest-8-button-1641513280289.png?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/03/27/accube-1648342638846.jpg"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/02/28/pokemonstadium-1646017802114.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/05/31/harvestmoondsds-1654019466029.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                />
                {/* Duplicate set for seamless loop */}
                <Cartridge
                  image="https://i.ytimg.com/vi/D2v6fLPKovw/maxresdefault.jpg"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/01/31/pokemon-diamond-button-crop-1643616517892.jpg"
                />
                <Cartridge
                  image="https://assets1.ignimgs.com/2019/05/17/pokemon-heartgold---button-1558055594925.jpg"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/01/06/dragon-quest-8-button-1641513280289.png?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/03/27/accube-1648342638846.jpg"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/02/28/pokemonstadium-1646017802114.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                />
                <Cartridge
                  image="https://assets-prd.ignimgs.com/2022/05/31/harvestmoondsds-1654019466029.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                />
              </div>
              
              {/* Left Gradient Overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#2d3a2d] to-transparent pointer-events-none z-10" />
              
              {/* Right Gradient Overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#2d3a2d] to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </ScrollReveal>

        {/* Footer - Let's Connect */}
        <div className="text-center pb-16">
          <h3 
            className="text-[#b0b0b0] mb-6"
            style={{ 
              fontFamily: "'VT323', monospace",
              fontSize: '32px',
              letterSpacing: '0.05em'
            }}
          >
            Let's Connect!
          </h3>
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/taylor-che/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a9a5b] hover:text-[#9baa72] transition-colors"
              style={{ 
                fontFamily: "'VT323', monospace",
                fontSize: '18px',
                textDecoration: 'underline'
              }}
            >
              LinkedIn
            </a>
            <span className="text-[#b0b0b0]" style={{ fontFamily: "'VT323', monospace", fontSize: '18px' }}>•</span>
            <a
              href="https://www.instagram.com/tayylor.tots/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a9a5b] hover:text-[#9baa72] transition-colors"
              style={{ 
                fontFamily: "'VT323', monospace",
                fontSize: '18px',
                textDecoration: 'underline'
              }}
            >
              Instagram
            </a>
          </div>
          {/* START button hint */}
          <p 
            className="text-[#c0c0c0] text-center font-['Work_Sans:Light',sans-serif] font-light"
            style={{ 
              fontSize: '12px',
              letterSpacing: '0.02em',
              opacity: 1
            }}
          >
            Press START on the console to return to WORK anytime
          </p>
        </div>
      </div>
    </div>
  );
}