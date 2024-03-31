const OTP = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 h-[1080px] overflow-hidden text-center text-base text-dimgray-600 font-inter">
      <div className="absolute top-[0px] left-[0px] w-[1944px] h-[1077px]" />
      <img
        className="absolute top-[-2px] left-[0px] w-[1917px] h-[1086px]"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[-70.5px] left-[-37.3px] w-[2090.1px] h-[1147.6px] object-contain"
        alt=""
        src="/vector-2.svg"
      />
      <div className="absolute top-[82px] left-[678px] w-[565px] h-[917px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] w-[565px] h-[917px]" />
        <div className="absolute top-[63px] left-[71px] w-[422px] h-[633px]">
          <img
            className="absolute top-[0px] left-[137px] w-[150px] h-[92.2px] object-cover"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="absolute top-[271px] left-[0px] w-[410px] flex flex-col items-start justify-start text-left text-lg">
            <div className="self-stretch relative leading-[100%] font-semibold">
              Enter your OTP Here
            </div>
          </div>
          <div className="absolute top-[617px] left-[0px] w-[422px] h-4 text-right">
            <div className="absolute top-[0px] left-[0px] leading-[100%]">
              {`Not yet received? `}
              <span className="[text-decoration:underline]">Resend</span>
            </div>
            <div className="absolute top-[0px] left-[384px] leading-[100%]">
              Back
            </div>
          </div>
          <div className="absolute top-[491px] left-[0px] rounded-lg bg-coral-100 w-[422px] flex flex-row items-center justify-center p-4 box-border text-white">
            <div className="flex-1 relative leading-[100%] font-semibold">
              Verify
            </div>
          </div>
          <div className="absolute top-[143px] left-[7px] w-[410px] h-[69px] text-xl">
            <div className="absolute top-[0px] left-[112.6px] inline-block w-[185.8px] h-[28.1px]">
              Verification
            </div>
            <div className="absolute top-[43px] left-[0px] text-mini leading-[128.52%] text-darkgray-100 inline-block w-[410px] h-[26px]">
              Check your E-mail for OTP
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[541px] left-[755px] flex flex-row items-start justify-start gap-[40px]">
        <div className="w-[50px] relative rounded-3xs bg-dimgray-600 h-[5px]" />
        <div className="w-[50px] relative rounded-3xs bg-dimgray-600 h-[5px]" />
        <div className="w-[50px] relative rounded-3xs bg-dimgray-600 h-[5px]" />
        <div className="w-[50px] relative rounded-3xs bg-dimgray-600 h-[5px]" />
        <div className="w-[50px] relative rounded-3xs bg-dimgray-600 h-[5px]" />
      </div>
    </div>
  );
};

export default OTP;
