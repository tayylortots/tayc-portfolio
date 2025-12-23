import svgPaths from "./svg-4b2xvokok0";

export default function SwitchOn() {
  return (
    <div className="relative size-full" data-name="Switch on">
      <p className="absolute bg-clip-text bg-gradient-to-b font-['VT323:Regular',sans-serif] from-[#999999] leading-[normal] left-0 not-italic text-[12px] text-nowrap to-[#ffffff] top-0 uppercase" style={{ WebkitTextFillColor: "transparent" }}>
        Switch On
      </p>
      <div className="absolute h-[16px] left-[22px] top-[16px] w-[13px]">
        <div className="absolute inset-[0_-20.51%_-16.67%_-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1667 18.6667">
            <path d={svgPaths.pf4a8800} fill="url(#paint0_linear_86_207)" id="Vector 4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_86_207" x1="6.5" x2="6.5" y1="4.5" y2="24">
                <stop stopColor="#999999" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}