const MiniCaurosel = () => {
  return (
    <div className="absolute top-[137px] left-[44px] rounded-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(140.88deg,_#eb5231,_#571fcf)] w-[547px] h-[233px] overflow-hidden text-left text-xl text-white font-inter">
      <div className="absolute top-[33px] left-[23px] w-[500px] h-[168px]">
        <div className="absolute top-[0px] left-[13px] text-6xl leading-[128.52%] font-medium inline-block w-48 h-[41px]">
          Today’s Quote
        </div>
        <div className="absolute top-[52px] left-[13px] leading-[150%] inline-block w-[487px] h-[70px]">
          “There is more treasure in books than in all the pirate’s loot on
          Treasure Island.”
        </div>
        <div className="absolute top-[137px] left-[0px] leading-[128.52%] text-right inline-block w-[487px] h-[31px]">
          -Walt Disney
        </div>
      </div>
      <div className="absolute top-[196px] left-[36px] w-[70px] flex flex-row items-end justify-between">
        <div className="w-2.5 relative rounded-[50%] bg-white box-border h-2.5 border-[1px] border-solid border-white" />
        <div className="w-2.5 relative rounded-[50%] bg-purple box-border h-2.5 border-[1px] border-solid border-white" />
        <div className="w-2.5 relative rounded-[50%] bg-purple box-border h-2.5 border-[1px] border-solid border-white" />
        <div className="w-2.5 relative rounded-[50%] bg-purple box-border h-2.5 border-[1px] border-solid border-white" />
      </div>
    </div>
  );
};

export default MiniCaurosel;
