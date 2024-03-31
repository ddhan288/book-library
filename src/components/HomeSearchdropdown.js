import { useMemo } from "react";

const HomeSearchdropdown = ({ all, title, autor, text, subjects, propTop }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[101px] left-[46px] w-[170px] h-[272px] text-left text-xl text-dimgray-600 font-inter"
      style={groupDiv2Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] box-border w-[170px] h-[272px] border-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[21px] left-[18px] flex flex-col items-start justify-start gap-[25px]">
        <div className="w-[118px] relative leading-[128.52%] inline-block h-[26px] shrink-0">
          {all}
        </div>
        <div className="w-[118px] relative leading-[128.52%] inline-block h-[26px] shrink-0">
          {title}
        </div>
        <div className="w-36 relative leading-[128.52%] inline-block h-[26px] shrink-0">
          {autor}
        </div>
        <div className="w-36 relative leading-[128.52%] inline-block h-[26px] shrink-0">
          {text}
        </div>
        <div className="w-36 relative leading-[128.52%] inline-block h-[26px] shrink-0">
          {subjects}
        </div>
      </div>
    </div>
  );
};

export default HomeSearchdropdown;
