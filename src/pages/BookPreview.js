import { useCallback } from "react";
import BookContainer from "../components/BookContainer";
import BookDetailsContainer from "../components/BookDetailsContainer";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import AuthorContainer from "../components/AuthorContainer";

const BookPreview = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/borrow");
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
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto text-mini">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[1556px]" />
        <BookContainer />
        <BookDetailsContainer />
        <div className="absolute top-[172px] left-[393px] w-[503px] h-[381px] text-sm">
          <div className="absolute top-[0px] left-[0px] w-[357px] flex flex-col items-start justify-start gap-[5px] text-16xl">
            <div className="w-[357px] flex flex-col items-start justify-start gap-[38px]">
              <div className="w-[429px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
              <div className="w-72 relative text-mini inline-block h-[30px] shrink-0">
                {`By `}
                <span className="[text-decoration:underline]">Steve Krug</span>,
                2000
              </div>
            </div>
            <div className="w-[183px] relative text-mini text-darkgray-500 inline-block h-3.5 shrink-0">
              Second Edition
            </div>
          </div>
          <div className="absolute top-[130px] left-[0px] flex flex-row items-start justify-start gap-[19px] text-darkslategray-200">
            <div className="flex flex-row items-center justify-start gap-[11px] text-dimgray-600">
              <div className="w-[82px] h-3 flex flex-row items-start justify-start gap-[3px]">
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
              </div>
              <div className="w-20 relative font-medium inline-block h-4 shrink-0">
                5.0 Ratings
              </div>
            </div>
            <div className="w-[146px] relative font-medium inline-block h-4 shrink-0">
              25 Currently reading
            </div>
            <div className="w-[146px] relative font-medium inline-block h-4 shrink-0">
              119 Have read
            </div>
          </div>
          <div className="absolute top-[176px] left-[0px] flex flex-row items-start justify-start gap-[17px]">
            <div className="w-[132px] relative h-[101px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[132px] h-4">
                Availability
              </b>
              <div className="absolute top-[27px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-mini">
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
            </div>
            <div className="w-[132px] relative h-[95.5px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[132px] h-4">
                Status
              </b>
              <div className="absolute top-[32.5px] left-[0px] flex flex-col items-start justify-start gap-[13px] text-center text-mini text-white">
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
          </div>
          <div className="absolute top-[320px] left-[0px] flex flex-row items-start justify-start gap-[38px] text-center text-xl text-white">
            <div
              className="w-[209px] relative h-[61px] cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-coral-200 w-[209px] h-[61px]" />
              <div className="absolute top-[6px] left-[10px] w-[188px] h-12">
                <div className="absolute top-[0px] left-[0px] leading-[12px] font-semibold flex items-center justify-center w-[188px] h-12">
                  BORROW
                </div>
              </div>
            </div>
            <div className="w-[209px] relative h-[61px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-200 w-[209px] h-[61px]" />
              <div className="absolute top-[6px] left-[10px] w-[123px] h-12">
                <b className="absolute top-[0px] left-[0px] leading-[12px] flex items-center justify-center w-[123px] h-12">
                  Read Now
                </b>
              </div>
              <img
                className="absolute top-[0px] left-[142px] w-[66px] h-[61px]"
                alt=""
                src="/group-32.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent sharesvg="/sharesvg@2x.png" />
        <AuthorContainer />
        <div className="absolute top-[132px] left-[44px] flex flex-row items-center justify-start gap-[9px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/heroiconsoutlinearrowsmallleft.svg"
          />
          <div className="w-[151px] relative leading-[128.52%] inline-block shrink-0">
            Back to results
          </div>
        </div>
        <div className="absolute top-[387px] left-[718px] w-[127px] h-10 text-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-dimgray-600 w-[127px] h-10" />
          <div className="absolute top-[10px] left-[16px] leading-[128.52%] inline-block w-[95px] h-5">
            Add to List
          </div>
          <img
            className="absolute top-[17px] left-[102px] rounded-12xs w-[17px] h-[9px] object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[48px] left-[341px] w-[1544px] h-28 text-center">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] w-[1544px] h-28 overflow-hidden" />
        <div className="absolute top-[39px] left-[812px] w-[455px] h-[46px] text-mini font-abel">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[455px] h-[46px]" />
          <div className="absolute top-[14px] left-[57px] flex flex-row items-start justify-start gap-[5px]">
            <img
              className="w-[19px] relative h-[19px] overflow-hidden shrink-0"
              alt=""
              src="/time.svg"
            />
            <div className="w-[109px] relative tracking-[-0.04em] leading-[128.52%] inline-block h-[19px] shrink-0">
              09:00 hrs
            </div>
          </div>
          <div className="absolute top-[14px] left-[254px] flex flex-row items-start justify-start gap-[5px]">
            <img
              className="w-[19px] relative h-[19px]"
              alt=""
              src="/vector.svg"
            />
            <div className="w-[125px] relative tracking-[-0.04em] leading-[128.52%] inline-block h-[19px] shrink-0">
              4-Mar-2023
            </div>
          </div>
        </div>
        <div className="absolute top-[38px] left-[46px] w-[541px] h-[49px] text-left">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[541px] h-[49px]" />
          <div className="absolute top-[0px] left-[0px] w-[102px] h-[49px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 w-[102px] h-[49px]" />
            <div className="absolute top-[12px] left-[37px] leading-[128.52%] inline-block w-[27px] h-6">
              All
            </div>
            <img
              className="absolute top-[20px] left-[74px] rounded-12xs w-[17px] h-[9px] object-contain"
              alt=""
              src="/polygon-1.svg"
            />
          </div>
          <img
            className="absolute top-[14px] left-[504px] w-5 h-5 overflow-hidden"
            alt=""
            src="/barcode-scanner.svg"
          />
          <img
            className="absolute top-[15px] left-[464px] w-5 h-5 overflow-hidden"
            alt=""
            src="/search.svg"
          />
          <div className="absolute top-[8px] left-[493px] box-border w-px h-[34px] border-r-[1px] border-solid border-gainsboro-300" />
          <div className="absolute top-[12px] left-[123px] leading-[128.52%] text-silver inline-block w-[229px] h-6">
            Search
          </div>
        </div>
        <div className="absolute top-[38px] left-[1296px] w-[203px] h-[50px] text-left">
          <div className="absolute top-[0px] left-[0px] rounded-14xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[203px] h-[50px]" />
          <img
            className="absolute top-[3px] left-[3px] rounded-[50%] w-[45px] h-[45px] object-cover"
            alt=""
            src="/ellipse-10@2x.png"
          />
          <div className="absolute top-[14px] left-[66px] leading-[128.52%] inline-block w-[134px] h-[27px]">
            Kenson
          </div>
          <img
            className="absolute top-[21px] left-[157px] rounded-12xs w-[17px] h-[9px] object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div className="absolute top-[38px] left-[615px] w-[170px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[170px] h-[47px]" />
          <img
            className="absolute top-[14px] left-[25px] w-5 h-5 overflow-hidden"
            alt=""
            src="/translate.svg"
          />
          <div className="absolute top-[12px] left-[40px] leading-[128.52%] inline-block w-[91px] h-[22.1px]">
            Lang
          </div>
          <img
            className="absolute top-[19px] left-[124px] rounded-12xs w-[17px] h-[9px] object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
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
              className="flex flex-row items-center justify-start gap-[11px] cursor-pointer text-dimgray-600"
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

export default BookPreview;
