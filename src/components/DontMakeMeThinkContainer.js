import { useMemo } from "react";

const DontMakeMeThinkContainer = ({
  propTop,
  onFrameContainer32Click,
  onGroupContainerClick,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[735px] left-[44px] w-[1454px] h-[125px] text-left text-xl text-dimgray-600 font-inter"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
      <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
        <div className="flex flex-row items-center justify-start gap-[47px]">
          <img
            className="w-[75px] relative rounded-8xs h-[99px] object-cover"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
              <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                Steve Krug, 2000
              </div>
            </div>
            <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
              Second Edition
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[72px]">
          <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
            <span>4.5</span>
            <span className="text-mini text-darkgray-300">/5</span>
          </div>
          <div className="w-[180px] relative h-[57px]">
            <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
              Computer Science
            </div>
            <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
              UX Design
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-[15px] relative h-[15px]"
                alt=""
                src="/vector.svg"
              />
              <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                Hard Copy
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <img
                className="w-[15px] relative h-[15px]"
                alt=""
                src="/vector.svg"
              />
              <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                E - Book
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="w-[15px] relative h-[15px]"
                alt=""
                src="/vector.svg"
              />
              <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                Audio book
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
            <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
              <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                In-Shelf
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/heroiconsminimappin@2x.png"
              />
              <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                {" "}
                CS A-15
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start gap-[64px] cursor-pointer text-center text-mini text-tomato-100"
          onClick={onFrameContainer32Click}
        >
          <img
            className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
            alt=""
            src="/heart.svg"
          />
          <div
            className="w-[85px] relative h-[30px]"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
            <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
              Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMakeMeThinkContainer;
