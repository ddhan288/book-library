const HomeBookCard = () => {
  return (
    <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0 text-left text-3xs text-dimgray-600 font-inter">
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
          <span>4.5</span>
          <span className="text-darkgray-300">/5</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBookCard;
