import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideBarFrame1 from "../components/SideBarFrame1";

const Payments = () => {
  const navigate = useNavigate();

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

  const onGroupContainerClick = useCallback(() => {
    navigate("/pending-payments-payment");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
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
        <div className="absolute top-[288px] left-[45px] w-[1158px] h-[29px]">
          <div className="absolute top-[0px] left-[0px] leading-[128.52%] font-medium inline-block w-[90px] h-[29px]">
            Title
          </div>
          <div className="absolute top-[0px] left-[442px] leading-[128.52%] font-medium inline-block w-[72px] h-[29px]">
            Usage
          </div>
          <div className="absolute top-[0px] left-[575px] leading-[128.52%] font-medium inline-block w-[130px] h-[29px]">
            Book Format
          </div>
          <div className="absolute top-[0px] left-[843px] leading-[128.52%] font-medium inline-block w-[105px] h-[29px]">
            Penalties
          </div>
          <div className="absolute top-[0px] left-[1053px] leading-[128.52%] font-medium inline-block w-[105px] h-[26px]">
            Charges
          </div>
        </div>
        <div className="absolute top-[340px] left-[45px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] w-[1322px] h-[99px]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[47px]">
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
            <div className="absolute top-[37px] left-[419px] leading-[128.52%] inline-block w-[79px] h-[27px]">
              3 Days
            </div>
            <div className="absolute top-[37px] left-[552px] w-[180px] h-[27px]">
              <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                Hard Copy
              </div>
            </div>
            <div className="absolute top-[33px] left-[1030px] w-[180px] h-[27px] text-dimgray-400">
              <div className="absolute top-[0px] left-[0px] uppercase inline-block w-[180px] h-[27px]">
                ₹100
              </div>
            </div>
            <div className="absolute top-[34px] left-[825px] flex flex-row items-center justify-start text-dimgray-400">
              <div className="w-[180px] relative h-[27px]">
                <div className="absolute top-[0px] left-[0px] uppercase inline-block w-[180px] h-[27px]">
                  ₹0
                </div>
              </div>
            </div>
            <div className="absolute top-[26.5px] left-[1237px] flex flex-row items-start justify-start text-center text-mini text-white">
              <div
                className="w-[85px] relative h-[46px] cursor-pointer"
                onClick={onGroupContainerClick}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-tomato-100 w-[85px] h-[46px]" />
                <div className="absolute top-[15.5px] left-[0px] inline-block w-[85px] h-[18px]">
                  Pay Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute top-[198px] left-[45px] text-6xl leading-[128.52%] inline-block w-[286px] h-[33px]">
          Pending Payments
        </b>
        <div
          className="absolute top-[143px] left-[44px] flex flex-row items-center justify-start gap-[9px] cursor-pointer text-mini"
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
      <SideBarFrame1
        search="/search.svg"
        bookshelf="/bookshelf.svg"
        onHomeMenuContainerClick={onHomeMenuContainerClick}
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        onMyShelfMenuClick={onMyShelfMenuClick}
        onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
      />
    </div>
  );
};

export default Payments;
