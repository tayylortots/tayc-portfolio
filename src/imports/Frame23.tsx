import { misc } from "../assets/images";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[250px] top-0">
        <img alt="" className="block max-w-none size-full" height="250" src={misc.frame23Ellipse} width="250" />
      </div>
    </div>
  );
}