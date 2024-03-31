const RecommendedBookList1 = ({ dontMakeMeThink, steveKrug2000 }) => {
  return (
    <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start text-left text-mini text-dimgray-600 font-inter">
      <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
        <img
          className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
          <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
            {dontMakeMeThink}
          </div>
          <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
            {steveKrug2000}
          </div>
          <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
            <span>4.5</span>
            <span className="text-darkgray-300">/5</span>
          </div>
        </div>
        <div className="absolute top-[141px] left-[163px] w-[125px] h-10 text-center text-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkgray-400 w-[125px] h-10" />
          <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
            Borrowed
          </div>
        </div>
        <div className="absolute top-[196px] left-[163px] w-[125px] h-10 text-center text-tomato-100">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
          <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
            Return
          </div>
        </div>
        <div className="absolute top-[25px] left-[168px] leading-[128.52%] inline-block w-[95px] h-[19px]">{`Borrowed on `}</div>
        <div className="absolute top-[54px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
          2 Mar 2023 09:00 AM
        </div>
        <div className="absolute top-[111px] left-[168px] text-3xs leading-[128.52%] inline-block w-[114px] h-[19px] text-dimgray-200">
          <span>{`13 Mar 2023 `}</span>
          <span className="text-crimson">(Over Due)</span>
        </div>
        <div className="absolute top-[82px] left-[168px] leading-[128.52%] inline-block w-[120px] h-[19px]">
          Submission Due
        </div>
        <div className="absolute top-[11px] left-[288px] rounded-[50%] bg-tomato-400 w-2.5 h-2.5" />
      </div>
    </div>
  );
};

export default RecommendedBookList1;
