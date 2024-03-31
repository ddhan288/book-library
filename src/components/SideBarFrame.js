import { useMemo } from "react";

const SideBarFrame = ({
  propColor,
  propColor1,
  propColor2,
  onHomeMenuContainerClick,
  onSearchMenuContainerClick,
  onMyShelfMenuClick,
  onFavouriteMenuContainerClick,
}) => {
  const searchStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const myShelfStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const contributeStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-left text-xl text-gray-300 font-inter">
      <div className="absolute top-[0px] left-[0px] w-[306px] h-[994px]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[306px] h-[994px] overflow-hidden" />
        <div className="absolute top-[212px] left-[66px] flex flex-col items-center justify-start gap-[34px]">
          <div
            className="w-[174px] flex flex-row items-center justify-start gap-[12px] cursor-pointer"
            onClick={onHomeMenuContainerClick}
          >
            <img
              className="w-[23px] relative h-[23px] overflow-hidden shrink-0"
              alt=""
              src="/heroiconsminihome.svg"
            />
            <div className="w-[138px] relative inline-block h-[25px] shrink-0">
              Home
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-start gap-[11px] text-dimgray-600"
            onClick={onSearchMenuContainerClick}
          >
            <img
              className="w-[23px] relative h-[23px]"
              alt=""
              src="/search.svg"
            />
            <div
              className="w-[137px] relative inline-block h-[25px] shrink-0"
              style={searchStyle}
            >
              Search
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-start gap-[12px] cursor-pointer"
            onClick={onMyShelfMenuClick}
          >
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0"
              alt=""
              src="/bookshelf.svg"
            />
            <div
              className="w-[136px] relative inline-block h-[25px] shrink-0"
              style={myShelfStyle}
            >
              My Shelf
            </div>
          </div>
          <div
            className="w-[169px] flex flex-row items-center justify-start gap-[12px] cursor-pointer"
            onClick={onFavouriteMenuContainerClick}
          >
            <img
              className="w-[21px] relative h-[21px] overflow-hidden shrink-0"
              alt=""
              src="/give-gift.svg"
            />
            <div
              className="w-[137px] relative inline-block h-[25px] shrink-0"
              style={contributeStyle}
            >
              Contribute
            </div>
          </div>
        </div>
        <img
          className="absolute top-[38px] left-[68px] w-[120px] h-[74.2px] object-cover"
          alt=""
          src="/group-3@2x.png"
        />
      </div>
      <div className="absolute top-[856px] left-[68px] flex flex-col items-start justify-start gap-[15px] text-mini">
        <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`About `}</div>
        <div className="w-[134px] relative inline-block h-[19px] shrink-0">
          Support
        </div>
        <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`Terms & Condition`}</div>
      </div>
    </div>
  );
};

export default SideBarFrame;
