import svgPaths from "../../imports/svg-ka4s68bkg2";
import svgPathsQuote4 from "../../imports/svg-wckdi7nqwr";
import { caseStudy } from "../../assets/images";
import { ScrollReveal } from "./ScrollReveal";

interface AdvancedSearchCaseStudyProps {
  onBack: () => void;
  onHome: () => void;
}

export function AdvancedSearchCaseStudy({ onBack, onHome }: AdvancedSearchCaseStudyProps) {
  return (
    <div 
      className="bg-[#2d3a2d] relative w-full h-full overflow-y-auto"
      style={{ 
        border: '0 !important',
        borderWidth: '0 !important',
        outline: '0 !important',
        outlineWidth: '0 !important',
        boxShadow: 'none !important',
        margin: 0,
        padding: 0,
        WebkitBoxShadow: 'none !important',
        MozBoxShadow: 'none !important'
      }}
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
      
      {/* Fixed Home Button */}
      <div className="sticky top-0 left-0 right-0 z-50 pt-[57px] bg-[#2d3a2d]">
        <div className="max-w-[1000px] mx-auto px-8">
          <button
            onClick={onHome}
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

      {/* Main Content Container - matches work page structure */}
      <div 
        className="max-w-[1000px] mx-auto px-4 md:px-8 pt-24 pb-32" 
        style={{ 
          border: 'none',
          outline: 'none',
          boxShadow: 'none'
        }}
      >
          {/* Hero Section */}
          <ScrollReveal direction="fade" duration={0.8}>
            <div>
              <div className="mb-[38px]">
                <div className="mb-[16px]">
                  <div className="flex gap-[16px] items-center mb-4">
                    <button 
                      onClick={onBack}
                      className="text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.7)] transition-colors cursor-pointer uppercase"
                      style={{ 
                        fontFamily: "'VT323', monospace",
                        fontSize: '18px',
                        lineHeight: '25.2px',
                        letterSpacing: '0.42px',
                        wordSpacing: '0.3em'
                      }}
                    >
                      Work
                    </button>
                    <div className="size-[12px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                        <path d="M6 12L10 8L6 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                      </svg>
                    </div>
                    <p className="text-white uppercase" style={{ 
                      fontFamily: "'VT323', monospace",
                      fontSize: '18px',
                      lineHeight: '25.2px',
                      letterSpacing: '0.42px',
                      wordSpacing: '0.3em'
                    }}>UCLA Library</p>
                  </div>
                  <p className="font-['Work_Sans:Light',sans-serif] font-light text-[16px] md:text-[18px] text-white">Encouraging students to refine their search when results fall short.</p>
                </div>
              </div>
              
              <div className="bg-[#9caa9c] h-[300px] md:h-[500px] rounded-[8px] mb-[38px] relative overflow-hidden">
                <div className="absolute h-[420px] w-[591px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={caseStudy.heroImage} loading="lazy" />
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-[40px]">
                <div className="flex-1 flex flex-col gap-[38px]">
                  <div>
                    <p className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2">Overview</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">As designers for the UCLA Library, we spent the year identifying pain points in Primo, the search engine that supports over 40,000 students, to improve the library search experience.</p>
                  </div>
                  <div>
                    <p className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2">Outcome</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">Over six months, I identified major areas for improvement and presented issues and recommendations for enhancing Primo to a UC board of 10+ representatives, receiving strong positive feedback.</p>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col gap-[38px]">
                  <div className="w-[106px]">
                    <p className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2">Role</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white">Design lead</p>
                  </div>
                  <div className="w-[106px]">
                    <p className="font-['Inria_Serif:Regular',sans-serif] text-[16px] text-white mb-2">Year</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
      </div>

      {/* The Problem */}
      <ScrollReveal delay={0.1}>
        <div className="w-full bg-[#3d4a3d] py-[60px] md:py-[120px] border-0">
          <div className="max-w-[1000px] mx-auto px-4 md:px-8 border-0">
            <div className="flex flex-col lg:flex-row gap-[38px] mb-[38px]">
              <div className="flex-1">
                <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">THE PROBLEM</p>
                <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white">Search results lack relevance, context, and error support</p>
              </div>
              <p className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">
                <span>Users often encountered irrelevant search results and lacked enough context to quickly assess resource relevance. </span>
                <span className="font-bold">The system did not support error prevention, accessibility prioritization, or efficient search refinement</span>, forcing users to take extra steps to find the right materials.
              </p>
            </div>
            <div className="bg-[#485248] h-[300px] md:h-[500px] rounded-[8px] relative overflow-hidden">
              <div className="absolute inset-0">
                <img alt="" className="w-full h-full object-contain rounded-[8px]" src={caseStudy.searchResults} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* User Research */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 pt-[60px] md:pt-[120px]">
          <div className="mb-[60px] md:mb-[120px]">
            <div className="flex flex-col lg:flex-row gap-[38px] mb-[38px]">
              <div className="flex-1">
                <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">USER RESEARCH</p>
                <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white">In fact, here are what users say about the current experience...</p>
              </div>
              <p className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">
                I interviewed <span className="font-bold">5 undergrad and 5 grad students</span> to assess find their resources and their overall feelings about the experience.
              </p>
            </div>
            
            {/* User Quotes Grid */}
            <div className="flex flex-col gap-[38px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                {/* Quote 1 */}
                <div className="flex flex-col gap-[16px]">
                  <div className="bg-[#485248] h-[500px] rounded-[8px] relative overflow-hidden flex items-center justify-center">
                    <img alt="" className="max-w-[90%] max-h-[90%] object-contain rounded-[4px]" src={caseStudy.quoteImage1} />
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="bg-[#9baa72] h-[37px] w-[193px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, 0 4px 0 0 transparent, inset 0 0 0 2px #7a8a5b' }}>
                      <div className="flex items-center justify-center h-full px-[24px]">
                        <p className="font-['Press_Start_2P:Regular',sans-serif] text-[7px] text-[#0f380f]">Grad student</p>
                      </div>
                    </div>
                    <div className="bg-[#9baa72] min-h-[88px] w-full p-[13px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, inset 0 0 0 2px #7a8a5b' }}>
                      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[12.6px] text-[#0f380f] text-[7px]">Being able to read abstracts before clicking onto the item pages would be helpful.</p>
                    </div>
                  </div>
                </div>
                
                {/* Quote 2 */}
                <div className="flex flex-col gap-[16px]">
                  <div className="bg-[#485248] h-[500px] rounded-[8px] relative overflow-hidden">
                    <div className="absolute rounded-[8px] inset-[23.21%_8.35%_23.51%_8.5%]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                        <img alt="" className="absolute h-[110.18%] left-0 max-w-none top-[-0.02%] w-full" src={caseStudy.quoteImage2} />
                      </div>
                    </div>
                    <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal inset-[86.01%_30.24%_10.12%_30.39%] leading-[12.6px] text-white text-[10px] text-center">DVDs not listed in the first 4 results</p>
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="bg-[#9baa72] h-[37px] w-[179px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, 0 4px 0 0 transparent, inset 0 0 0 2px #7a8a5b' }}>
                      <div className="flex items-center justify-center h-full px-[24px]">
                        <p className="font-['Press_Start_2P:Regular',sans-serif] text-[7px] text-[#0f380f]">Film student</p>
                      </div>
                    </div>
                    <div className="bg-[#9baa72] min-h-[88px] w-full p-[13px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, inset 0 0 0 2px #7a8a5b' }}>
                      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[12.6px] text-[#0f380f] text-[7px]">Maybe it's because I'm a film student, but it would be helpful for me to have the DVDs separated from the general search.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                {/* Quote 3 */}
                <div className="flex flex-col gap-[16px]">
                  <div className="bg-[#485248] h-[500px] rounded-[8px] relative overflow-hidden">
                    <div className="absolute rounded-[8px] inset-[11.9%_11.81%_20.24%_11.97%]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                        <img alt="" className="absolute h-[120.18%] left-[-0.04%] max-w-none top-0 w-[100.08%]" src={caseStudy.quoteImage3} />
                      </div>
                    </div>
                    <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal inset-[86.01%_28.5%_10.12%_28.98%] leading-[12.6px] text-white text-[10px] text-center">Info about contributors = not as useful</p>
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="bg-[#9baa72] h-[37px] w-[193px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, 0 4px 0 0 transparent, inset 0 0 0 2px #7a8a5b' }}>
                      <div className="flex items-center justify-center h-full px-[24px]">
                        <p className="font-['Press_Start_2P:Regular',sans-serif] text-[7px] text-[#0f380f]">Grad student</p>
                      </div>
                    </div>
                    <div className="bg-[#9baa72] min-h-[88px] w-full p-[13px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, inset 0 0 0 2px #7a8a5b' }}>
                      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[12.6px] text-[#0f380f] text-[7px]">Being able to read abstracts before clicking onto the item pages would be helpful.</p>
                    </div>
                  </div>
                </div>

                {/* Quote 4 */}
                <div className="flex flex-col gap-[16px]">
                  <div className="bg-[#485248] h-[500px] rounded-[8px] relative overflow-hidden flex items-center justify-center">
                    <div className="relative w-[350px] h-[350px]">
                      <p className="absolute font-['Work_Sans:Regular',sans-serif] font-normal bottom-0 left-0 right-0 leading-[12.6px] text-white text-[10px] text-center">Click into additional layers to find if available in person</p>
                      <div className="absolute top-[60px] left-[20px] right-[55px] rounded-[4px]">
                        <img alt="" className="w-full h-auto object-contain rounded-[4px]" src={caseStudy.quoteImage4} />
                      </div>
                      <div className="absolute top-[135px] left-[37.5px] h-[91px] w-[265px] rounded-[4px] shadow-[0px_2px_13.8px_0px_rgba(0,0,0,0.25)]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={caseStudy.quoteImage5} />
                      </div>
                      <div className="absolute h-[22px] left-[24.5px] top-[150px] w-[8.5px]">
                        <div className="absolute inset-[0_-5.88%_-16.74%_-5.88%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 25.682">
                            <path d={svgPathsQuote4.p40ebb20} fill="white" id="Vector 3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="bg-[#9baa72] h-[37px] w-[232px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, 0 4px 0 0 transparent, inset 0 0 0 2px #7a8a5b' }}>
                      <div className="flex items-center justify-center h-full px-[7.5px]">
                        <p className="font-['Press_Start_2P:Regular',sans-serif] text-[7px] text-[#0f380f]">Undergrad student</p>
                      </div>
                    </div>
                    <div className="bg-[#9baa72] min-h-[88px] w-full p-[13px] relative" style={{ boxShadow: '0 0 0 4px #0f380f, inset 0 0 0 2px #7a8a5b' }}>
                      <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[12.6px] text-[#0f380f] text-[7px]">Availability is a big factor when deciding to click an article. It's frustrating when I find a good article, but it ends up not being available. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Challenge Banner */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="bg-gradient-to-b from-[#525a51] to-[rgba(189,207,186,0)] h-[336px] rounded-[8px] mb-[120px] relative overflow-hidden">
            <div className="absolute h-[123px] w-[220px] left-1/2 -translate-x-1/2 top-[155px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src="https://media.tenor.com/lair7RW79PAAAAAM/game-boy-pokemon.gif" />
            </div>
            <p className="absolute font-['Press_Start_2P:Regular',sans-serif] text-[32px] text-[#cce4cc] left-1/2 -translate-x-1/2 top-[57px] text-center w-[528px] leading-[35px]">But wait!!</p>
            <p className="absolute font-['Press_Start_2P:Regular',sans-serif] text-[15px] text-[#cce4cc] left-1/2 -translate-x-1/2 top-[106px] text-center leading-[35px] whitespace-nowrap">An extra CHALLENGE appears</p>
          </div>
        </div>
      </ScrollReveal>

      {/* The Challenge */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-[1000px] mx-auto px-8 mb-[120px]">
          <div className="mb-[60px]">
            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">THE CHALLENGE</p>
            <p className="font-['Inika:Regular',sans-serif] text-[32px] text-white mb-4">Balancing Search Simplicity With Research Rigor</p>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">
              <span>Findings revealed a </span>
              <span className="font-bold">tension between students' desire for a simple, intuitive search experience and the library's need to maintain traditional research practices</span>. The design challenge lies in balancing ease of use with the rigor required for effective academic research.
            </p>
          </div>
          
          <div className="relative rounded-[8px]" style={{ backgroundImage: "linear-gradient(-36.8169deg, rgba(255, 255, 255, 0) 1.0274%, rgb(190, 137, 137) 100%)" }}>
            <div aria-hidden="true" className="absolute border-2 border-[#b97070] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="p-[20px]">
              <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-center text-white mb-[16px]">TDLR;</p>
              <div className="flex gap-[36px] items-center justify-center relative">
                <div className="flex flex-col gap-[8px] items-center w-[150px]">
                  <div className="rounded-[8px] size-[132px] relative overflow-hidden">
                    <img alt="" className="w-full h-full object-cover rounded-[8px]" src={caseStudy.challengeAI} />
                  </div>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[10px] text-center text-white leading-[22px]">Students want AI results</p>
                </div>
                <p className="font-['Press_Start_2P:Regular',sans-serif] text-[40px] text-black leading-[22px]">VS</p>
                <div className="flex flex-col gap-[8px] items-center w-[148px]">
                  <div className="rounded-[8px] w-[148px] h-[125px] relative overflow-hidden bg-white"><img alt="" className="w-full h-full object-cover rounded-[8px]" src={caseStudy.challengeLibrarian} />
                  </div>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[10px] text-center text-white leading-[normal]">Librarians want to preserve academic research methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Problem Solving */}
      <ScrollReveal delay={0.1}>
        <div className="w-full bg-[#3d4a3d] py-[60px] md:py-[120px] mb-[60px] md:mb-[120px]">
          <div className="max-w-[1000px] mx-auto px-4 md:px-8">
            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">PROBLEM SOLVING</p>
            <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white mb-4">Initial proposed ideas</p>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px] mb-[60px]">
              <span>From looking at </span>
              <span className="font-bold">11 different library sites</span>
              <span> and user testing their search engines, I noted </span>
              <span className="font-bold">3 reoccurring features</span>
              <span> that we lacked and might improve our own engine.</span>
            </p>
            
            <div className="flex flex-col gap-[38px]">
              {/* Idea 1 */}
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] items-center">
                <div className="bg-[#485248] h-[300px] md:h-[400px] lg:h-[500px] w-full lg:w-[530px] rounded-[8px] relative overflow-hidden flex-shrink-0">
                  <div className="absolute h-[196px] w-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={caseStudy.searchSuggestions} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#a9a9a9] leading-[22px]">IDEA #1</p>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">As students enter a query, suggested search terms dynamically appear to predict intent and streamline discovery.</p>
                </div>
              </div>
              
              {/* Idea 2 */}
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] items-center">
                <div className="bg-[#485248] h-[300px] md:h-[400px] lg:h-[500px] w-full lg:w-[530px] rounded-[8px] overflow-clip relative flex-shrink-0">
                  <div className="absolute h-[190px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[459px]"><img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={caseStudy.channelRecommendations} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#a9a9a9] leading-[22px]">IDEA #2</p>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">Additional content channels dynamically recommend materials by analyzing previous searches and related queries.</p>
                </div>
              </div>
              
              {/* Idea 3 */}
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] items-center">
                <div className="bg-[#485248] h-[300px] md:h-[400px] lg:h-[500px] w-full lg:w-[530px] rounded-[8px] relative overflow-hidden flex-shrink-0">
                  <div className="absolute h-[131px] w-[453px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={caseStudy.libraryItemCard} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#a9a9a9] leading-[22px]">IDEA #3</p>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">Redesigning the card component to surface key information that enables students to evaluate and select resources directly from the search page.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Constraints */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="mb-[60px] md:mb-[120px]">
            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">CONSTRAINTS</p>
            <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white mb-4">Primo's backend is VERY limited</p>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">After reviewing the wireframes with our PM and developers, we determined that Primo's backend limitations would prevent the implementation of a "suggestions" feature, requiring us to explore alternative solutions.</p>
          </div>
        </div>
      </ScrollReveal>

      {/* The Solution */}
      <ScrollReveal delay={0.1}>
        <div className="w-full bg-[#3d4a3d] py-[60px] md:py-[120px] border-0">
          <div className="max-w-[1000px] mx-auto px-4 md:px-8 border-0">
            <div className="mb-[60px]">
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">THE SOLUTION</p>
              <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white mb-4">Prioritizing impact within a smaller design scope</p>
              <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">Returning to the drawing board, we focused on two shippable features that would still provide students with guidance when navigating Primo's search.</p>
            </div>
            
            {/* Feature 1 */}
            <div className="mb-[60px]">
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[38px] mb-[16px]">
                <div className="flex-1">
                  <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white">Feature #1</p>
                </div>
                <p className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">A graphic banner to provide ways users can refine their search, if the first 10 results don't show their desired material.</p>
              </div>
                <div className="bg-[#485248] h-[300px] md:h-[500px] rounded-[8px] relative overflow-hidden flex items-center justify-center p-[20px]">
                  <img alt="" className="w-full h-full object-contain rounded-[8px]" src={caseStudy.searchResults} />
                </div>
            </div>
            
            {/* Feature 2 */}
            <div className="mb-[38px]">
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[38px] mb-[16px]">
                <div className="flex-1">
                  <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white">Feature #2</p>
                </div>
                <p className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">Enhancing search result cards so users can quickly evaluate resources and see availability and key details when available.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] mb-[16px]">
                <div className="flex flex-col gap-[16px]">
                  <div className="bg-[#485248] h-[400px] md:h-[500px] rounded-[8px] flex items-center justify-center overflow-hidden relative">
                    <div className="absolute h-[230px] w-[410px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><img alt="" className="absolute inset-0 max-w-none object-cover object-center rounded-[4px] size-full" src={caseStudy.beforeImage} />
                    </div>
                  </div>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">Before</p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="bg-[#485248] h-[400px] md:h-[500px] rounded-[8px] flex items-center justify-center overflow-hidden relative">
                    <div className="absolute h-[290px] w-[265px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><img alt="" className="absolute inset-0 max-w-none object-cover object-center rounded-[4px] size-full" src={caseStudy.afterImage} />
                    </div>
                  </div>
                  <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px]">After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* The Results */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 pt-[60px] md:pt-[120px]">
          <div className="mb-[60px] md:mb-[120px]">
            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#a9a9a9] mb-4">THE RESULTS</p>
            <p className="font-['Inika:Regular',sans-serif] text-[24px] md:text-[32px] text-white mb-4">Highly positive reception from the UC Library board and from usability tests</p>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-white leading-[22px] mb-[38px]">The features were well received by the UC Library board and validated through 8 usability tests. UC Libraries are using our recommendations to work with Primo on backend improvements. Success will be measured through repeated use, higher Advanced Search engagement, and increased user confidence in finding resources. A full redesign of the design system will be covered in another case study.</p>
            <div className="h-auto max-w-full md:h-[376px] md:w-[656px] mx-auto">
              <img alt="" className="w-full h-auto md:max-w-none md:object-cover md:size-full" src={caseStudy.finalImage} />
            </div>
          </div>
        </div>
      </ScrollReveal>

    {/* Footer */}
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
  );
}

































