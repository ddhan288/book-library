import { useMemo } from "react";

const RecommendedBookList = ({
  dontMakeMeThink,
  steveKrug2000,
  prop,
  borrowed,
  return1,
  propWidth,
  propBackgroundColor,
  propLeft,
  propWidth1,
  onGroupContainer1Click,
}) => {
  const steveKrug2000Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const returnStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth1,
    };
  }, [propLeft, propWidth1]);

  return (
    <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start text-left text-mini text-dimgray-600 font-inter">
      <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
        <img
          className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
          <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
            {dontMakeMeThink}
          </div>
          <div
            className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0"
            style={steveKrug2000Style}
          >
            {steveKrug2000}
          </div>
          <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
            <span>{prop}</span>
            <span className="text-darkgray-300">/5</span>
          </div>
        </div>
        <div className="absolute top-[141px] left-[163px] w-[125px] h-10 text-center text-white">
          <div
            className="absolute top-[0px] left-[0px] rounded-8xs bg-darkgray-400 w-[125px] h-10"
            style={rectangleDivStyle}
          />
          <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
            {borrowed}
          </div>
        </div>
        <div
          className="absolute top-[196px] left-[163px] w-[125px] h-10 cursor-pointer text-center text-tomato-100"
          onClick={onGroupContainer1Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
          <div
            className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]"
            style={returnStyle}
          >
            {return1}
          </div>
        </div>
        <div className="absolute top-[25px] left-[168px] leading-[128.52%] inline-block w-[95px] h-[19px]">{`Borrowed on `}</div>
        <div className="absolute top-[54px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
          11 Mar 2023 09:00 AM
        </div>
        <div className="absolute top-[111px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
          14 Mar 2023
        </div>
        <div className="absolute top-[82px] left-[168px] leading-[128.52%] inline-block w-[120px] h-[19px]">
          Submission Due
        </div>
      </div>
    </div>
  );
};

export default RecommendedBookList;
