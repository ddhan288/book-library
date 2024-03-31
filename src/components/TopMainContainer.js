const TopMainContainer = ({
  onProfileAccountContainerClick,
  onGroupContainerClick,
}) => {
  return (
    <div className="absolute top-[48px] left-[341px] w-[1544px] h-28 text-center text-xl text-dimgray-600 font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] w-[1544px] h-28 overflow-hidden" />
      <div className="absolute top-[38px] left-[812px] w-[455px] h-[46px] text-mini font-abel">
        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[455px] h-[46px]" />
        <div className="absolute top-[14px] left-[57px] flex flex-row items-start justify-start gap-[5px]">
          <img
            className="w-[19px] relative h-[19px] overflow-hidden shrink-0"
            alt=""
            src="/time.svg"
          />
          <div className="w-[109px] relative tracking-[-0.04em] leading-[128.52%] inline-block h-[19px] shrink-0">
            09:00 AM
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
      <div
        className="absolute top-[38px] left-[1293px] w-[203px] h-[50px] cursor-pointer text-left"
        onClick={onProfileAccountContainerClick}
      >
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
      <div className="absolute top-[38px] left-[46px] w-[541px] h-[49px] text-left">
        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[541px] h-[49px]" />
        <div
          className="absolute top-[0px] left-[0px] w-[102px] h-[49px] cursor-pointer"
          onClick={onGroupContainerClick}
        >
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
    </div>
  );
};

export default TopMainContainer;
