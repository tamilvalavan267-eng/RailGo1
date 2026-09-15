import svgPaths from "./svg-soqvrti5r5";
import imgBackgroundShadow from "./415d0e97b623974f2035cd835d055e7084a8bf28.png";
import imgAb6AXuA7JAhc8Jl9IexRnG8Xbz44UZUoMomRmGtFCi1AAwmpMyyg5NM6MYvYbUcwKtg96CEs8Rg1DPum2Uc9HwkQvYgPyCkPrFvrrrhoZvCvcTpEtEjKi1FrdVqLe6Hdupy9Xhmi4QWjHrdinVyQmYlEYgCmFGw5OLhCtLWDuVluA6OpQsp2WrBc3QKpt73KyDmaTbW9Gev8SUhfXljdUlSpazIDcns4B6ON87OOtYJeeo5Uihnsrua from "./27e207992558762692b1128f2f322c857a731f2e.png";
import imgAb6AXuAjUmwELeiYfVXk1JxKHmdN4OiiPah7Am9HbwlNcUtw5NFkVKpbMXxWGchwabotDYzhRyFem7DxvRmyqYk9UhncOj4KTzOvOdiEr1TPefr1NnLKukDEl7Fek169XwUoiFOeHZBmos5RQgvcGVjhFawoE9BdepbADkzhTa8NruuVaJmDjlsKs7T6VgL5Lc4M6KAr9ZFgxV3WzTQy9FHsvEtm7OgtSo9FrfToXvg3Af0HkhlW6Cx4W from "./910ac95d102ceb83a96bc43b8e6e4476c30d49b6.png";
import imgRailGoEmuSuburbanTrainLogo from "./8179178b0d5a3ddee82eb53ad26071629912387d.png";

function Button({ className }: { className?: string }) {
  return (
    <a className={className || "bg-[#0f2d6b] cursor-pointer h-[48px] relative rounded-[8px] w-[326px]"} data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[48px] left-0 right-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-name="Button:shadow" />
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[0.375px] whitespace-nowrap">
              <p className="leading-[20px]">Search Local Trains</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[13.333px]" data-name="Container">
            <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
              <g id="Container">
                <path d={svgPaths.p32510800} fill="white" id="Icon" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="Container">
      <div className="absolute bg-[#006c4a] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pr-[2.05px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">West Line:</span>
          <span className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] text-[#444650]">{` Normal EMU service via Perambur & Avadi`}</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dce9ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">All Clear</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <Background />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#eff4ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Container1 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">SUBURBAN COMMUTE</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[24px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[32px]">Where are you going?</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container6 />
      <Heading1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[21.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.3333" preserveAspectRatio="none" viewBox="0 0 21.6667 17.3333" width="21.6667">
        <g id="Container">
          <path d={svgPaths.p2c691a0} fill="#0F2D6B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p26674f00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#0f2d6b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">FROM ORIGIN</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[16px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[22px]">Chennai Central (MMC)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Suburban Terminal • PF 12-14</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container11 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dce9ff] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">MMC</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container9 />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 12 15" width="12">
        <g id="Container">
          <path d={svgPaths.p1a900f00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#006c4a] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">TO DESTINATION</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[16px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[22px]">Tiruvallur (TRL)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Platform 1, 2 or 3</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Container17 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#dce9ff] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">TRL</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container15 />
          <Background6 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p2dbaa680} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSwapOriginAndDestination() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#001849] content-stretch flex items-center justify-center right-[16px] rounded-[9999px] size-[40px] top-1/2" data-name="Button - Swap origin and destination">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] right-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[40px] top-1/2" data-name="Button - Swap origin and destination:shadow" />
      <Container21 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background4 />
      <ButtonSwapOriginAndDestination />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p8e10ae0} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">Today, 08:30 AM</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[4.933px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.93333" preserveAspectRatio="none" viewBox="0 0 8 4.93333" width="8">
        <g id="Container">
          <path d={svgPaths.p5cc7680} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#c5c6d2] content-stretch flex flex-col h-[16px] items-start pl-[2px] pr-[18px] py-[2px] relative rounded-[9999px] shrink-0 w-[32px]" data-name="Background">
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[13px] tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">Fast Trains</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <Background8 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Background7 />
      <Label />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Container4 />
          <Container8 />
          <Container22 />
          <Button className="bg-[#0f2d6b] cursor-pointer h-[48px] relative rounded-[8px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[12.971px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.9708" preserveAspectRatio="none" viewBox="0 0 18.3333 12.9708" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p22c5f700} fill="#00714E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#82f5c1] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Background">
      <Container28 />
      <div className="absolute bg-[#006c4a] right-[4px] rounded-[9999px] size-[8px] top-[4px]" data-name="Background" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.75px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[11px] text-center tracking-[0.44px] whitespace-nowrap">
        <p className="leading-[13.75px]">Live Track</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <a className="bg-white cursor-pointer drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-center justify-center p-[8px] relative size-full">
          <Background9 />
          <Container29 />
        </div>
      </div>
    </a>
  );
}

function Container30() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.25" preserveAspectRatio="none" viewBox="0 0 18.3333 19.25" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p2dbe2400} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#dce9ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Background">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.75px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[11px] text-center tracking-[0.44px] whitespace-nowrap">
        <p className="leading-[13.75px]">Timetable</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-center justify-center p-[8px] relative size-full">
          <Background10 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 12.8333 16.5" width="12.8333">
        <g id="Container">
          <path d={svgPaths.p21d59000} fill="#003EA8" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#dbe1ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Background">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.75px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[11px] text-center tracking-[0.44px] whitespace-nowrap">
        <p className="leading-[13.75px]">Route Map</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <a className="bg-white cursor-pointer drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-center justify-center p-[8px] relative size-full">
          <Background11 />
          <Container33 />
        </div>
      </div>
    </a>
  );
}

function Container34() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 18.3333 16.5" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p39b45000} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#e5eeff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Background">
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.75px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[11px] text-center tracking-[0.44px] whitespace-nowrap">
        <p className="leading-[13.75px]">Directory</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-center justify-center p-[8px] relative size-full">
          <Background12 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p2268c500} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[18px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">Frequent Commute</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container38 />
      <Heading2 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[13px] text-center tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">View All</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Button5 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#0f2d6b] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.25px] whitespace-nowrap">
        <p className="leading-[12px]">WEST LINE</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">EMU 43209</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background14 />
      <Container41 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#82f5c1] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Next in 8 min</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[4px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Background15 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[16px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[22px]">Chennai Central → Tiruvallur</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">42 km • 18 stops via Villivakkam, Ambattur</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#001849] text-[20px] text-right tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">08:42</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[5.5px] items-start pb-[2.5px] pl-[8px] relative shrink-0" data-name="Container">
      <Container47 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">PF 14 (MMC)</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container46 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[15px] relative shrink-0 w-[9px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 9 15" width="9">
        <g id="Container">
          <path d={svgPaths.p19ce4a00} fill="#006C4A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Moderate crowd (Coaches 4-7)</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 12.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p218b0100} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#006c4a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] h-[32px] items-center px-[12px] relative rounded-[6px] shrink-0" data-name="Button">
      <Container51 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[0.44px] whitespace-nowrap">
        <p className="leading-[14px]">Track EMU</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative size-full">
          <Container48 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container39 />
        <Container42 />
        <Background16 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.8333" preserveAspectRatio="none" viewBox="0 0 13.3333 15.8333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p339b8880} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#dce9ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Background">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Moore Market ⇄ Avadi</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444650] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">21 km • Fast EMU at 08:50 AM</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background17 />
      <Container54 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 6.16667 10" width="6.16667">
        <g id="Container">
          <path d={svgPaths.p2ba68100} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container52 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section">
      <Container36 />
      <Background13 />
      <BackgroundShadow1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p34b74c80} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[18px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[24px]">Suburban Rail Corridor</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container60 />
      <Heading3 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006c4a] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Live Track GPS</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container61 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-white tracking-[0.26px] whitespace-nowrap">
        <p className="leading-[18px]">Chennai Central (MMC) Station Yard</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Live GPS tracking 14 active EMUs</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Explore Map</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Overlay />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="h-[144px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[226.39%] left-0 max-w-none top-[-63.19%] w-full" src={imgBackgroundShadow} />
      </div>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[10px] relative size-full">
          <div className="absolute bg-gradient-to-t from-[rgba(0,24,73,0.8)] inset-0 to-[rgba(0,24,73,0)] via-1/2 via-[rgba(0,24,73,0.2)]" data-name="Gradient" />
          <Container62 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Container58 />
        <BackgroundShadow2 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] whitespace-nowrap">
        <p className="leading-[20px]">Key Station Guides</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">{`Facilities & Foot over bridges`}</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Ab6AXuA7JAhc8Jl9IexRnG8Xbz44UZUoMomRmGtFCi1AAwmpMyyg5NM6MYvYbUcwKtg96CEs8Rg1DPum2Uc9HwkQvYgPyCkPrFvrrrhoZvCvcTpEtEjKi1FrdVqLe6Hdupy9Xhmi4QWjHrdinVyQmYlEYgCmFGw5OLhCtLWDuVluA6OpQsp2WrBc3QKpt73KyDmaTbW9Gev8SUhfXljdUlSpazIDcns4B6ON87OOtYJeeo5Uihnsrua() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="AB6AXuA7-jAHC8JL9IEXRnG8Xbz44u_zUoMOMRmGtFCi1aAwmpMYYG5nM6mYVYbUcwKtg96cES8rg1dPum2uc-9HWKQvYGPyCkPrFvrrrhoZVCvcTpETEjKi1FRDVqLe6_Hdupy9xhmi4QWjHrdinVyQmYlE_YGCmFGw5oLhCt-lWDuVluA6opQSP2WRBc3qKPT73kyDMATbW9Gev8sUhfXljdULSpazIDcns4B6O-n87oOtYJeeo5UIHNSRUA">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.33%] max-w-none top-0 w-[100.67%]" src={imgAb6AXuA7JAhc8Jl9IexRnG8Xbz44UZUoMomRmGtFCi1AAwmpMyyg5NM6MYvYbUcwKtg96CEs8Rg1DPum2Uc9HwkQvYgPyCkPrFvrrrhoZvCvcTpEtEjKi1FrdVqLe6Hdupy9Xhmi4QWjHrdinVyQmYlEYgCmFGw5OLhCtLWDuVluA6OpQsp2WrBc3QKpt73KyDmaTbW9Gev8SUhfXljdUlSpazIDcns4B6ON87OOtYJeeo5Uihnsrua} />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] w-full">
        <p className="leading-[20px]">MMC Terminal</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">14 Suburban Platforms</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Ab6AXuA7JAhc8Jl9IexRnG8Xbz44UZUoMomRmGtFCi1AAwmpMyyg5NM6MYvYbUcwKtg96CEs8Rg1DPum2Uc9HwkQvYgPyCkPrFvrrrhoZvCvcTpEtEjKi1FrdVqLe6Hdupy9Xhmi4QWjHrdinVyQmYlEYgCmFGw5OLhCtLWDuVluA6OpQsp2WrBc3QKpt73KyDmaTbW9Gev8SUhfXljdUlSpazIDcns4B6ON87OOtYJeeo5Uihnsrua />
      <Container70 />
    </div>
  );
}

function Ab6AXuAjUmwELeiYfVXk1JxKHmdN4OiiPah7Am9HbwlNcUtw5NFkVKpbMXxWGchwabotDYzhRyFem7DxvRmyqYk9UhncOj4KTzOvOdiEr1TPefr1NnLKukDEl7Fek169XwUoiFOeHZBmos5RQgvcGVjhFawoE9BdepbADkzhTa8NruuVaJmDjlsKs7T6VgL5Lc4M6KAr9ZFgxV3WzTQy9FHsvEtm7OgtSo9FrfToXvg3Af0HkhlW6Cx4W() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="AB6AXuAjUmwELeiYfVXk1JxKHmdN4OiiPah7am9HbwlNcUTW5n_FkVKpbMXxWGchwabotDYzhRyFem7DxvRmyqYK9uhncOJ4KTzOVOdiER1tPefr1NnLKuk_dEL7FEK169XWUoiFOe_hZBmos5RQgvcGVjhFawoE9BdepbADkzhTA8nruu_VAJmDjlsKS7T6VgL5lc4m6kAR9ZFgxV3WzTQy9FHsvEtm7OgtSo9FRFTo-Xvg3af0HkhlW6CX4w">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.33%] max-w-none top-0 w-[100.67%]" src={imgAb6AXuAjUmwELeiYfVXk1JxKHmdN4OiiPah7Am9HbwlNcUtw5NFkVKpbMXxWGchwabotDYzhRyFem7DxvRmyqYk9UhncOj4KTzOvOdiEr1TPefr1NnLKukDEl7Fek169XwUoiFOeHZBmos5RQgvcGVjhFawoE9BdepbADkzhTa8NruuVaJmDjlsKs7T6VgL5Lc4M6KAr9ZFgxV3WzTQy9FHsvEtm7OgtSo9FrfToXvg3Af0HkhlW6Cx4W} />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[15px] w-full">
        <p className="leading-[20px]">Tiruvallur Junction</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Direct Arakkonam feeder</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Ab6AXuAjUmwELeiYfVXk1JxKHmdN4OiiPah7Am9HbwlNcUtw5NFkVKpbMXxWGchwabotDYzhRyFem7DxvRmyqYk9UhncOj4KTzOvOdiEr1TPefr1NnLKukDEl7Fek169XwUoiFOeHZBmos5RQgvcGVjhFawoE9BdepbADkzhTa8NruuVaJmDjlsKs7T6VgL5Lc4M6KAr9ZFgxV3WzTQy9FHsvEtm7OgtSo9FrfToXvg3Af0HkhlW6Cx4W />
      <Container73 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow3 />
      <BackgroundShadow4 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section">
      <Container66 />
      <Container69 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p33549300} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8.23px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px] mb-0">Simulated Passenger Demo Data • Southern Railway Western</p>
        <p className="leading-[12px]">Line</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <Container76 />
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Background18 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <Section />
      <Container27 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Margin1 />
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

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[10px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[12px]">08:30 AM</p>
      </div>
    </div>
  );
}

function Container81() {
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

function Container82() {
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

function Container83() {
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

function Container80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container81 />
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[4px] px-[16px] relative size-full">
          <Container79 />
          <Container80 />
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

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001849] text-[18px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[18px]">RailGo</p>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#82f5c1] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00714e] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[10px]">Simulated Demo Data</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Background19 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Chennai Suburban EMU</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container87 />
      <Container89 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <RailGoEmuSuburbanTrainLogo />
      <Container86 />
    </div>
  );
}

function Container91() {
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
    <a className="content-stretch cursor-pointer flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button - Notifications">
      <Container91 />
    </a>
  );
}

function Container92() {
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

function BackgroundShadow5() {
  return (
    <div className="bg-[#001849] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container92 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <ButtonNotifications />
      <BackgroundShadow5 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container85 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[22px]">Home</p>
      </div>
    </div>
  );
}

function Container93() {
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
      <Container78 />
      <Container84 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 14.6667 16.5" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p16f00d00} fill="#001849" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#001849] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container97() {
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

function Container98() {
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
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[17.417px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.4167" preserveAspectRatio="none" viewBox="0 0 14.6667 17.4167" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p33063b00} fill="#444650" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex items-start right-[-4.33px] size-[8px] top-[-2px]" data-name="Container">
      <div className="absolute bg-[#006c4a] left-0 opacity-75 rounded-[9999px] size-[8px] top-0" data-name="Background" />
      <div className="bg-[#006c4a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container100 />
      <Container101 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#444650] text-[10px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Live Status</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Link">
      <Container99 />
      <Container102 />
    </div>
  );
}

function Container103() {
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

function Container104() {
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
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container105() {
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

function Container106() {
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
      <Container105 />
      <Container106 />
    </div>
  );
}

function Container94() {
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
      <Container94 />
    </div>
  );
}

export default function HomeStationSearch() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Home - Station Search">
      <Main />
      <Header />
      <Nav />
    </div>
  );
}