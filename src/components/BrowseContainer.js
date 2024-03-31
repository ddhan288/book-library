const BrowseContainer = ({ onGroupContainer2Click }) => {
  return (
    <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] w-[1544px] h-[173px] overflow-hidden text-center text-xl text-dimgray-600 font-inter">
      <div
        className="absolute top-[119px] left-[44px] w-[170px] h-[47px] cursor-pointer"
        onClick={onGroupContainer2Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[170px] h-[47px]" />
        <div className="absolute top-[11px] left-[27px] leading-[128.52%] inline-block w-[91px] h-[26px]">
          Browse
        </div>
        <img
          className="absolute top-[19px] left-[129px] rounded-12xs w-[17px] h-[9px] object-contain"
          alt=""
          src="/polygon-1.svg"
        />
      </div>
    </div>
  );
};

export default BrowseContainer;
