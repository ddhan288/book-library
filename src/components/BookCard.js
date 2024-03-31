import { useMemo } from "react";

const BookCard = ({ dontMakeMeThink, steveKrug2000, propLeft, propWidth }) => {
  const rectangleIconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0 text-left text-3xs text-dimgray-600 font-inter">
      <img
        className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
        style={rectangleIconStyle}
      />
      <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
        <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
          {dontMakeMeThink}
        </div>
        <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
          {steveKrug2000}
        </div>
        <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
          14k Readers
        </div>
      </div>
    </div>
  );
};

export default BookCard;
