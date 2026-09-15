import svgPaths from "./svg-clek8fdwuu";
import imgRailGoEmuSuburbanTrainLogo from "./8179178b0d5a3ddee82eb53ad26071629912387d.png";

function Container2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.pfc7c8c0} fill="#00714E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,113,78,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">NEXT HALT</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start px-[6px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 1</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Overlay1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[16px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[22px]">Ambattur Railway Station</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Overlay />
      <Container3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[20px] text-right tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[20px]">2m</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[5.5px] items-start pb-[2.5px] pl-[8px] relative shrink-0" data-name="Container">
      <Container8 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] opacity-90 relative shrink-0 text-[#00714e] text-[10px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">08:44 AM</p>
      </div>
    </div>
  );
}

function ImmediateNextHaltQuickStrip() {
  return (
    <div className="bg-[#82f5c1] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Immediate Next Halt Quick Strip">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function ImmediateNextHaltQuickStripMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[16px] right-0 top-[248px]" data-name="Immediate Next Halt Quick Strip:margin">
      <ImmediateNextHaltQuickStrip />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.25" preserveAspectRatio="none" viewBox="0 0 12 14.25" width="12">
        <g id="Container">
          <path d={svgPaths.p123fe500} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container11 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">{`Rake Composition & Amenities`}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">12-Car Rake</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Background />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Engine (Front)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Guard Cab (Rear)</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#82f5c1] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">L2</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">3</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">4</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">5</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">6</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">7</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">8</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">9</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">10</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#82f5c1] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">L11</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px pb-[6.5px] pt-[5.5px] relative rounded-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">12</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
      <Background8 />
      <Background9 />
      <Background10 />
      <Background11 />
      <Background12 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">{`Ladies Coach (2nd & 11th)`}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#82f5c1] relative rounded-[4px] shrink-0 size-[10px]" data-name="Background" />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">General Coaches</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#e5eeff] relative rounded-[4px] shrink-0 size-[10px]" data-name="Background" />
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function VisualCoachBlocks() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Visual Coach Blocks">
      <Container12 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[10px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 20 10" width="20">
        <g id="Container">
          <path d={svgPaths.p279daa80} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] text-left whitespace-nowrap">
        <p className="leading-[20px]">View Delay Details</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[11px] text-left tracking-[0.44px] whitespace-nowrap">
        <p className="leading-[14px]">Moderate</p>
      </div>
    </div>
  );
}

function LiveCrowdFeedback() {
  return (
    <a className="bg-[#eff4ff] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Live Crowd Feedback">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative size-full">
          <Container21 />
          <Background13 />
        </div>
      </div>
    </a>
  );
}

function RakeCompositionCrowdsourcingDetailsCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Rake Composition & Crowdsourcing Details Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Container9 />
        <VisualCoachBlocks />
        <LiveCrowdFeedback />
      </div>
    </div>
  );
}

function RakeCompositionCrowdsourcingDetailsCardMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[16px] right-0 top-[1048px]" data-name="Rake Composition & Crowdsourcing Details Card:margin">
      <RakeCompositionCrowdsourcingDetailsCard />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 12 15" width="12">
        <g id="Container">
          <path d={svgPaths.p2727fd40} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#001849] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center justify-center px-[38.14px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container25 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Halt Alarm</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 13.5 15" width="13.5">
        <g id="Container">
          <path d={svgPaths.p2a676800} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex gap-[8px] items-center justify-center px-[24.67px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container26 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001849] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Share Live Run</p>
      </div>
    </div>
  );
}

function CommuterQuickActionsBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Commuter Quick Actions Bar">
      <Button />
      <Button1 />
    </div>
  );
}

function CommuterQuickActionsBarMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[16px] right-0 top-[1276px]" data-name="Commuter Quick Actions Bar:margin">
      <CommuterQuickActionsBar />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#0f2d6b] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">FAST EMU</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001849] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[24px]">43215</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">• MMC ➔ TRL</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Background14 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p29641280} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Sync</p>
      </div>
    </div>
  );
}

function ButtonRefreshStatus() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button - Refresh Status">
      <Container31 />
      <Container32 />
    </div>
  );
}

function HeaderRowServiceBadgeRefreshTrigger() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Row: Service Badge & Refresh Trigger">
      <Container28 />
      <ButtonRefreshStatus />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">LIVE TRACK POSITION</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[30px] mb-0">{`Between Pattaravakkam &`}</p>
        <p className="leading-[30px]">Ambattur</p>
      </div>
    </div>
  );
}

function MainLivePositionHero() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pt-[4px] relative shrink-0 w-full" data-name="Main Live Position Hero">
      <Container33 />
      <Heading1 />
    </div>
  );
}

function MainLivePositionHeroMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Main Live Position Hero:margin">
      <MainLivePositionHero />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.668px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6676 9.33333" width="11.6676">
        <g id="Container">
          <path d={svgPaths.p1cccc530} fill="#006C4A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">{`Speed & Flow`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] w-full">
        <p className="leading-[20px]">~54 km/h</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Margin">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[10px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">On Schedule</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#eff4ff] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Container34 />
        <Margin />
        <Container37 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Tiruvallur ETA</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[15px] w-full">
        <p className="leading-[20px]">09:05 AM</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Margin">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[10px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Platform 1</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#eff4ff] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Container38 />
        <Margin1 />
        <Container41 />
      </div>
    </div>
  );
}

function SpeedScheduleEtaGrid() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-name="Speed, Schedule & ETA Grid">
      <Background15 />
      <Background16 />
    </div>
  );
}

function SpeedScheduleEtaGridMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Speed, Schedule & ETA Grid:margin">
      <SpeedScheduleEtaGrid />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[11.142px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.1417" preserveAspectRatio="none" viewBox="0 0 11.6667 11.1417" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3f059e00} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Signal Log: Chennai Div Block #4</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Updated 45s ago</p>
      </div>
    </div>
  );
}

function TelemetrySyncFootnote() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Telemetry Sync Footnote">
      <Container42 />
      <Container45 />
    </div>
  );
}

function TelemetrySyncFootnoteMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Telemetry Sync Footnote:margin">
      <TelemetrySyncFootnote />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HeaderRowServiceBadgeRefreshTrigger />
      <MainLivePositionHeroMargin />
      <SpeedScheduleEtaGridMargin />
      <TelemetrySyncFootnoteMargin />
    </div>
  );
}

function LiveSignalStatusCardLevel2Elevation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip p-[16px] right-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-name="Live Signal Status Card (Level 2 Elevation)">
      <div className="absolute bg-[rgba(130,245,193,0.2)] blur-[20px] right-[-40px] rounded-[9999px] size-[144px] top-[-40px]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(218,226,255,0.3)] blur-[12px] bottom-[-24px] left-[-24px] rounded-[9999px] size-[112px]" data-name="Overlay+Blur" />
      <Container27 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p2a8f4200} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container48 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">MMC - TRL Fast Corridor</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">9 Stations Tracked</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Background17 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.01875" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875" width="12.225">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#006c4a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container49 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Chennai Central (MMC)</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 3</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container53 />
      <Background18 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container52 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Departed on schedule</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:15 AM</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container51 />
      <Container54 />
    </div>
  );
}

function Node1ChennaiCentralMmc() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 1: Chennai Central MMC">
      <BackgroundShadow />
      <Container50 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.01875" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875" width="12.225">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#006c4a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container55 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Speed pass (Main Line)</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Basin Bridge Junction</p>
      </div>
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#444650] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:20 AM</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container57 />
      <Container59 />
    </div>
  );
}

function Node2BasinBridge() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 2: Basin Bridge">
      <BackgroundShadow1 />
      <Container56 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.01875" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875" width="12.225">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#006c4a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container60 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Perambur</p>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 2</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container64 />
      <Background19 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container63 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Halt cleared</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:26 AM</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container62 />
      <Container65 />
    </div>
  );
}

function Node3Perambur() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 3: Perambur">
      <BackgroundShadow2 />
      <Container61 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.01875" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875" width="12.225">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-[#006c4a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container66 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Passed signal</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Villivakkam</p>
      </div>
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#444650] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:33 AM</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container68 />
      <Container70 />
    </div>
  );
}

function Node4Villivakkam() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 4: Villivakkam">
      <BackgroundShadow3 />
      <Container67 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.01875" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875" width="12.225">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-[#006c4a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container71 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0b1c30] text-[15px]">
        <p className="leading-[20px]">Korattur</p>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px]">
        <p className="leading-[16px]">Passed signal</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#444650] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:37 AM</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Paragraph />
      <Container73 />
    </div>
  );
}

function Node5Korattur() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 5: Korattur">
      <BackgroundShadow4 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8333" preserveAspectRatio="none" viewBox="0 0 13.3333 15.8333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p339b8880} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#001849] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Overlay+Shadow" />
      <Container74 />
      <div className="absolute bg-[#82f5c1] inset-0 opacity-40 rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Pattaravakkam Passing</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container76 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Live coordinate sync</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[10px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">MOVING</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[0.5px] items-start pt-[1.5px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[13px] text-right tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">~08:41 AM</p>
      </div>
      <Container79 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#e5eeff] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative size-full">
          <Container75 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function LiveActiveNodePattaravakkam() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[24px] relative shrink-0 w-full" data-name="LIVE ACTIVE NODE: Pattaravakkam">
      <Background20 />
      <Background21 />
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[14px]" data-name="Background" />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Ambattur</p>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#0f2d6b] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 1</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Background22 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container82 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Next stop • In 2 mins</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:44 AM</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container81 />
      <Container84 />
    </div>
  );
}

function Node7AmbatturNextHalt() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 7: Ambattur (Next Halt)">
      <BackgroundShadow5 />
      <Container80 />
    </div>
  );
}

function BackgroundShadow6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <div className="bg-[#c5c6d2] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Avadi</p>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 3</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Background23 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container87 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Major interchange</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#444650] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">08:52 AM</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container86 />
      <Container89 />
    </div>
  );
}

function Node8Avadi() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 8: Avadi">
      <BackgroundShadow6 />
      <Container85 />
    </div>
  );
}

function BackgroundShadow7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <div className="bg-[#c5c6d2] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Tiruninravur</p>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 2</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container93 />
      <Background24 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container92 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Scheduled EMU halt</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#444650] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">09:00 AM</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container91 />
      <Container94 />
    </div>
  );
}

function Node9Tiruninravur() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pb-[20px] relative shrink-0 w-full" data-name="Node 9: Tiruninravur">
      <BackgroundShadow7 />
      <Container90 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[12.75px] relative shrink-0 w-[11.25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.75" preserveAspectRatio="none" viewBox="0 0 11.25 12.75" width="11.25">
        <g id="Container">
          <path d={svgPaths.pe32d800} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow8() {
  return (
    <div className="bg-[#e5eeff] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container95 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Tiruvallur (TRL)</p>
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#001849] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 1</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container99 />
      <Background25 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start pb-px relative shrink-0" data-name="Container">
      <Container98 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Terminating Station</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[10px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Expected</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[0.5px] items-start pt-[1.5px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[13px] text-right tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">09:05 AM</p>
      </div>
      <Container101 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px pt-[4px] relative" data-name="Container">
      <Container97 />
      <Container100 />
    </div>
  );
}

function Node10TiruvallurDestination() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Node 10: Tiruvallur Destination">
      <BackgroundShadow8 />
      <Container96 />
    </div>
  );
}

function TheTimelineVisualFlow() {
  return (
    <div className="relative shrink-0 w-full" data-name="The Timeline Visual Flow">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="absolute bg-[rgba(197,198,210,0.3)] bottom-[16px] left-[15px] rounded-[9999px] top-[12px] w-[3px]" data-name="Continuous Background Track Lines" />
        <div className="absolute bg-[#006c4a] h-[180px] left-[15px] rounded-[9999px] top-[12px] w-[3px]" data-name="Background" />
        <Node1ChennaiCentralMmc />
        <Node2BasinBridge />
        <Node3Perambur />
        <Node4Villivakkam />
        <Node5Korattur />
        <LiveActiveNodePattaravakkam />
        <Node7AmbatturNextHalt />
        <Node8Avadi />
        <Node9Tiruninravur />
        <Node10TiruvallurDestination />
      </div>
    </div>
  );
}

function JourneyTimelineTrack() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Journey Timeline Track">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container46 />
        <TheTimelineVisualFlow />
      </div>
    </div>
  );
}

function JourneyTimelineTrackMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[16px] right-0 top-[336px]" data-name="Journey Timeline Track:margin">
      <JourneyTimelineTrack />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[15.333px] relative shrink-0 w-[13.333px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 15.3333" width="13.3333">
        <g id="Margin">
          <path d={svgPaths.p31723c0} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27.86px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[15px] mb-0">Simulated passenger demo tracker based on Chennai</p>
        <p className="leading-[15px] mb-0">suburban railway schedule logs. For official</p>
        <p className="leading-[15px] mb-0">announcements and platform updates, refer Southern</p>
        <p className="leading-[15px]">Railway display boards.</p>
      </div>
    </div>
  );
}

function DisclaimerFooter() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[8px] shrink-0 w-full" data-name="Disclaimer Footer">
      <div className="content-stretch flex gap-[4px] items-start p-[8px] relative size-full">
        <Margin2 />
        <Container102 />
      </div>
    </div>
  );
}

function DisclaimerFooterMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[16px] right-0 top-[1336px]" data-name="Disclaimer Footer:margin">
      <DisclaimerFooter />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1428px] relative shrink-0 w-full" data-name="Container">
      <ImmediateNextHaltQuickStripMargin />
      <RakeCompositionCrowdsourcingDetailsCardMargin />
      <CommuterQuickActionsBarMargin />
      <LiveSignalStatusCardLevel2Elevation />
      <JourneyTimelineTrackMargin />
      <DisclaimerFooterMargin />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f8f9ff] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[112px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[10px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[12px]">08:30 AM</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 8.75 9.33333" width="8.75">
        <g id="Container">
          <path d={svgPaths.pcec0b00} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[9.917px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.91667" preserveAspectRatio="none" viewBox="0 0 14 9.91667" width="14">
        <g id="Container">
          <path d={svgPaths.p58eaa40} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[5.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 5.83333 11.6667" width="5.83333">
        <g id="Container">
          <path d={svgPaths.pbe2abc0} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container106 />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[4px] px-[16px] relative size-full">
          <Container104 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function RailGoEmuSuburbanTrainLogo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="RailGo EMU Suburban Train Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRailGoEmuSuburbanTrainLogo} />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001849] text-[18px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[18px]">RailGo</p>
      </div>
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-[#82f5c1] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[10px]">Simulated Demo Data</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <Background26 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Chennai Suburban EMU</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container112 />
      <Container114 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <RailGoEmuSuburbanTrainLogo />
      <Container111 />
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3333" preserveAspectRatio="none" viewBox="0 0 14.6667 18.3333" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p3d94d580} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNotifications() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button - Notifications">
      <Container116 />
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p3189a600} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow9() {
  return (
    <div className="bg-[#001849] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container117 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <ButtonNotifications />
      <BackgroundShadow9 />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container110 />
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[22px]">Live Status</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] px-[16px] relative size-full">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(248,249,255,0.85)] content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] top-0" data-name="Header">
      <Container103 />
      <Container109 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 14.6667 16.5" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p16f00d00} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container122() {
  return (
    <div className="relative shrink-0 size-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
        <g id="Container">
          <path d={svgPaths.p27baf200} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Search</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[17.417px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.4167" preserveAspectRatio="none" viewBox="0 0 14.6667 17.4167" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p33063b00} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex items-start right-[-4.33px] size-[8px] top-[-2px]" data-name="Container">
      <div className="absolute bg-[#006c4a] left-0 opacity-75 rounded-[9999px] size-[8px] top-0" data-name="Background" />
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Live Status</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container124 />
      <Container127 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 12.8333 16.5" width="12.8333">
        <g id="Container">
          <path d={svgPaths.p383c2780} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Saved</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container128 />
      <Container129 />
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0 size-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p38365a80} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Profile</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12.4px] items-center px-[4px] relative size-full">
          <Link />
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(248,249,255,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_-2px_12px_0px_rgba(15,23,42,0.05)]" data-name="Nav">
      <Container119 />
    </div>
  );
}

export default function LiveTrainStatus() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Live Train Status">
      <Main />
      <Header />
      <Nav />
    </div>
  );
}