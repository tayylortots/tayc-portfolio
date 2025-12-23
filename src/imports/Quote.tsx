export default function Quote() {
  return (
    <div className="relative size-full" data-name="Quote">
      <div className="absolute bg-[#9baa72] border-[#0f380f] border-[4px_4px_0px] border-solid h-[37px] left-0 top-0 w-[141px]" data-name="Container">
        <div className="absolute content-stretch flex items-center left-[24px] top-[10px]" data-name="Paragraph">
          <p className="font-['Press_Start_2P:Regular',sans-serif] leading-[12.6px] not-italic relative shrink-0 text-[#0f380f] text-[7px] text-nowrap">Grad student</p>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_2px_#7a8a5b]" />
      </div>
      <div className="absolute bg-[#9baa72] border-4 border-[#0f380f] border-solid h-[88px] left-0 top-[37px] w-[317px]" data-name="Container">
        <div className="absolute content-stretch flex items-center left-[13px] top-[8px] w-[282px]" data-name="Paragraph">
          <p className="basis-0 font-['Press_Start_2P:Regular',sans-serif] grow leading-[12.6px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f380f] text-[7px]">{`The search results often shows really unexpected results. Like, why does a dissertation about “The Quality of Video Gaming Communities...” show when I type 'history of films'!?`}</p>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_2px_#7a8a5b]" />
      </div>
    </div>
  );
}