import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DontMakeMeThinkContainer from "../components/DontMakeMeThinkContainer";
import PoorDadContainer from "../components/PoorDadContainer";
import TopMain from "../components/TopMain";

const Favourite = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search1");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/contribute");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1080px] text-left text-xl text-dimgray-600 font-inter">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[994px]" />
        <div className="absolute top-[239px] left-[44px] w-[1158px] h-[29px]">
          <div className="absolute top-[0px] left-[0px] leading-[128.52%] font-medium inline-block w-[90px] h-[29px]">
            Title
          </div>
          <div className="absolute top-[0px] left-[442px] leading-[128.52%] font-medium inline-block w-[72px] h-[29px]">
            Ratings
          </div>
          <div className="absolute top-[0px] left-[575px] leading-[128.52%] font-medium inline-block w-[90px] h-[29px]">
            Category
          </div>
          <div className="absolute top-[0px] left-[843px] leading-[128.52%] font-medium inline-block w-[105px] h-[29px]">
            Availability
          </div>
          <div className="absolute top-[0px] left-[1053px] leading-[128.52%] font-medium inline-block w-[105px] h-[26px]">
            Status
          </div>
        </div>
        <DontMakeMeThinkContainer
          propTop="291px"
          onGroupContainerClick={onGroupContainerClick}
        />
        <PoorDadContainer propTop="440px" />
        <div className="absolute top-[588px] left-[44px] w-[1454px] h-[125px]">
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
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute top-[162px] left-[44px] text-6xl leading-[128.52%] inline-block w-[286px] h-[33px]">
          Your Favourite
        </b>
        <div
          className="absolute top-[127px] left-[41px] flex flex-row items-center justify-start gap-[9px] cursor-pointer text-mini"
          onClick={onFrameContainerClick}
        >
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/heroiconsoutlinearrowsmallleft.svg"
          />
          <div className="w-[151px] relative leading-[128.52%] inline-block shrink-0">
            Back
          </div>
        </div>
      </div>
      <TopMain />
      <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-gray-300">
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
              className="flex flex-row items-center justify-start gap-[11px] cursor-pointer"
              onClick={onSearchMenuContainerClick}
            >
              <img
                className="w-[23px] relative h-[23px]"
                alt=""
                src="/search.svg"
              />
              <div className="w-[137px] relative inline-block h-[25px] shrink-0">
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
              <div className="w-[136px] relative inline-block h-[25px] shrink-0">
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
    </div>
  );
};

export default Favourite;
