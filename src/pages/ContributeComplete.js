import { useCallback } from "react";
import BookCard from "../components/BookCard";
import { useNavigate } from "react-router-dom";

const ContributeComplete = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/contribute");
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

  return (
    <div className="w-full relative bg-white h-[1080px] text-left text-xl text-dimgray-600 font-inter">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto text-31xl">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[994px]" />
        <b className="absolute top-[210px] left-[802px] leading-[128.52%] inline-block w-[582px] h-[127px]">
          <span>{`Your `}</span>
          <span className="text-tomato-200">{`Contribution `}</span>
          <span>Helps Other to Learn</span>
        </b>
        <div className="absolute top-[475px] left-[807px] overflow-x-auto flex flex-row items-start justify-start gap-[39px] text-3xs">
          <BookCard
            dontMakeMeThink="Don’t Make Me think"
            steveKrug2000="Steve Krug, 2000"
          />
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Design of Every..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Don Norman, 1988
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                14k Readers
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Sprint : How to solve...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jake Knapp, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                14k Readers
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[413px] left-[807px] text-6xl leading-[128.52%] inline-block w-[426px] h-[33px]">
          Your Previous Contributions
        </div>
        <div
          className="absolute top-[132px] left-[44px] flex flex-row items-center justify-start gap-[9px] cursor-pointer text-mini"
          onClick={onFrameContainerClick}
        >
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/heroiconsoutlinearrowsmallleft.svg"
          />
          <div className="w-[151px] relative leading-[128.52%] inline-block shrink-0">{`Back `}</div>
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
            <div className="w-[169px] flex flex-row items-center justify-start gap-[12px] text-dimgray-600">
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
      <div className="absolute top-[264px] left-[409px] w-[678px] h-[562px] text-center text-black">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[678px] h-[562px]" />
        <div className="absolute top-[105px] left-[172px] leading-[128.52%] inline-block w-[334px] h-[33px]">{`Thank you For your Submission `}</div>
        <div className="absolute top-[389px] left-[172px] leading-[128.52%] inline-block w-[334px] h-[33px]">
          You will be contacted shortly
        </div>
        <img
          className="absolute h-[24.91%] w-[20.65%] top-[34.52%] right-[39.68%] bottom-[40.57%] left-[39.68%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

export default ContributeComplete;
