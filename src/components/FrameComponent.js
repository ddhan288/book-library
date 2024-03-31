const FrameComponent = ({ sharesvg }) => {
  return (
    <div className="absolute top-[172px] left-[44px] rounded-3xs bg-white w-[273px] h-[405px] overflow-hidden text-left text-2xs text-darkslategray-200 font-open-sans">
      <img
        className="absolute top-[24px] left-[32px] w-[209px] h-[277px] object-cover"
        alt=""
        src="/rectangle-19@2x.png"
      />
      <div className="absolute top-[328px] left-[40px] w-[193px] h-[52px]">
        <div className="absolute top-[0px] left-[8.9px] rounded w-[51.4px] h-[52px]">
          <img
            className="absolute top-[2px] left-[9.7px] w-8 h-8"
            alt=""
            src="/reviewssvg.svg"
          />
          <b className="absolute top-[34px] left-[6px] leading-[12px]">
            Review
          </b>
        </div>
        <div className="absolute top-[0px] left-[78.1px] rounded flex flex-col items-start justify-start pt-0.5 px-1.5 pb-1.5">
          <img className="w-8 relative h-8" alt="" src="/notessvg.svg" />
          <b className="relative leading-[12px]">Notes</b>
        </div>
        <div className="absolute top-[0px] left-[140px] rounded flex flex-col items-start justify-start pt-0.5 px-1.5 pb-1.5">
          <img
            className="w-8 relative h-8 object-cover"
            alt=""
            src={sharesvg}
          />
          <b className="relative leading-[12px]">Share</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
