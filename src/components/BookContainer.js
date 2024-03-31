const BookContainer = () => {
  return (
    <div className="absolute top-[624px] left-[44px] rounded-3xs bg-white w-[274px] h-[297px] text-left text-mini text-dimgray-600 font-inter">
      <div className="absolute top-[32px] left-[34px] w-[207px] h-[213.8px]">
        <div className="absolute top-[39px] left-[0px] w-10 h-[92px]">
          <img
            className="absolute top-[63px] left-[5px] w-[29px] h-[29px] object-cover"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10 object-cover"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl leading-[18.75px] font-semibold flex items-center w-[207px] h-3.5 text-coral-200">
          <span className="w-full">
            <span>Buy</span>
            <span className="text-darkslategray-200"> this book Online</span>
          </span>
        </div>
        <div className="absolute top-[52px] left-[51px] [text-decoration:underline] leading-[18.75px] font-medium flex items-center w-[149px] h-3.5">
          Buy Now
        </div>
        <div className="absolute top-[110px] left-[51px] [text-decoration:underline] leading-[18.75px] font-medium flex items-center w-[149px] h-3.5">
          Buy Now
        </div>
        <div className="absolute top-[169px] left-[0px] text-2xs-9 leading-[136.02%] font-semibold text-darkslategray-200 flex items-center w-[185.7px] h-[44.8px]">
          <span className="w-full">
            {`When you buy books using these links the Internet Archive may earn a `}
            <span className="[text-decoration:underline]">
              small commission
            </span>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
