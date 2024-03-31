const AuthorContainer = () => {
  return (
    <div className="absolute top-[172px] left-[1054px] rounded-3xs bg-white w-[445px] h-[418px] overflow-hidden text-left text-xl text-dimgray-600 font-inter">
      <div className="absolute top-[31px] left-[30px] w-[386px] h-[259px]">
        <img
          className="absolute top-[15px] left-[200px] w-[88px] h-[101px] object-cover"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] leading-[128.52%] font-semibold inline-block w-[138px] h-[29px] text-coral-200">
          <span>About</span>
          <span className="text-dimgray-600"> Author</span>
        </div>
        <div className="absolute top-[51px] left-[0px] leading-[128.52%] inline-block w-[138px] h-[29px]">
          Steve Krug
        </div>
        <b className="absolute top-[230px] left-[0px] text-mini leading-[128.52%] inline-block w-[138px] h-[29px]">
          Other Books
        </b>
        <div className="absolute top-[123px] left-[0px] text-smi leading-[128.52%] inline-block w-[386px]">
          Steve Krug is a usability consultant who has more than 30 years of
          experience as a user advocate for companies like Apple, Netscape, AOL,
          Lexus, and others. Based in part on the success of his first book,
          Don't Make Me Think, he has become a highly sought-after speaker on
          usability design.
        </div>
      </div>
      <div className="absolute top-[290px] left-[30px] flex flex-row items-center justify-start">
        <img
          className="w-[75px] relative rounded-8xs h-[99px] object-cover"
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
      <div className="absolute top-[290px] left-[124px] flex flex-row items-center justify-start">
        <img
          className="w-[75px] relative rounded-8xs h-[99px] object-cover"
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
    </div>
  );
};

export default AuthorContainer;
