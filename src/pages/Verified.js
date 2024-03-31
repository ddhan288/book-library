import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Verified = () => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-whitesmoke-200 h-[1080px] overflow-hidden text-center text-base text-white font-inter">
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
        <div className="absolute top-[63px] left-[71px] w-[423px] h-[644px]">
          <img
            className="absolute top-[0px] left-[137px] w-[150px] h-[92.2px] object-cover"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="absolute top-[271px] left-[0px] w-[410px] h-[18px]" />
          <div
            className="absolute top-[596px] left-[1px] rounded-lg bg-coral-100 w-[422px] flex flex-row items-center justify-center p-4 box-border cursor-pointer"
            onClick={onButtonLoginClick}
          >
            <div className="flex-1 relative leading-[100%] font-semibold">
              Login
            </div>
          </div>
          <div className="absolute top-[143px] left-[7px] w-[410px] h-[69px] text-xl text-dimgray-600">
            <div className="absolute top-[0px] left-[112.6px] inline-block w-[185.8px] h-[28.1px]">
              Verification
            </div>
            <div className="absolute top-[43px] left-[0px] text-mini leading-[128.52%] text-darkgray-100 inline-block w-[410px] h-[26px]">
              Thank you
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[400px] left-[749px] text-lg leading-[100%] font-semibold text-dimgray-600 inline-block w-[410px]">
        You are Verified
      </div>
      <img
        className="absolute h-[12.96%] w-[7.29%] top-[48.15%] right-[46.25%] bottom-[38.89%] left-[46.46%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default Verified;
