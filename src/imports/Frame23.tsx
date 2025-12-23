import { misc } from "../assets/images";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[250px] top-0">
        <img alt="" className="block max-w-none size-full" height="250" src={misc.frame23Ellipse} width="250" />
      </div>
      <p className="absolute font-['VT323:Regular',sans-serif] leading-[25.2px] left-[125px] not-italic text-[#0f380f] text-[48px] text-center text-nowrap top-[262px] tracking-[0.42px] translate-x-[-50%] uppercase">TAY CHE</p>
    </div>
  );
}