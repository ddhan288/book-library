import { useMemo } from "react";

const SideBarFrame1 = ({
  search,
  bookshelf,
  propColor,
  propColor1,
  onHomeMenuContainerClick,
  onSearchMenuContainerClick,
  onMyShelfMenuClick,
  onFavouriteMenuContainerClick,
}) => {
  const search1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const myShelf1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-left text-mini text-gray-300 font-inter">
      <div className="absolute top-[0px] left-[0px] w-[306px] h-[994px]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[306px] h-[994px] overflow-hidden" />
        <img
          className="absolute top-[38px] left-[68px] w-[120px] h-[74.2px] object-cover"
          alt=""
          src="/group-3@2x.png"
        />
      </div>
      <div className="absolute top-[856px] left-[68px] flex flex-col items-start justify-start gap-[15px]">
        <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`About `}</div>
        <div className="w-[134px] relative inline-block h-[19px] shrink-0">
          Support
        </div>
        <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`Terms & Condition`}</div>
      </div>
      <div className="absolute top-[212px] left-[66px] flex flex-col items-center justify-start gap-[34px] text-xl">
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
          className="flex flex-row items-center justify-start gap-[11px] cursor-pointer"
          onClick={onSearchMenuContainerClick}
        >
          <img className="w-[23px] relative h-[23px]" alt="" src={search} />
          <div
            className="w-[137px] relative inline-block h-[25px] shrink-0"
            style={search1Style}
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
            src={bookshelf}
          />
          <div
            className="w-[136px] relative inline-block h-[25px] shrink-0"
            style={myShelf1Style}
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
          <div className="w-[137px] relative inline-block h-[25px] shrink-0">
            Contribute
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarFrame1;
