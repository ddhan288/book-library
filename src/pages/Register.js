import { useCallback } from "react";
import PasswordForm from "../components/PasswordForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/otp");
  }, [navigate]);

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
        <div className="absolute top-[63px] left-[71px] w-[423px] h-[769px]">
          <img
            className="absolute top-[0px] left-[137px] w-[150px] h-[92.2px] object-cover"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="absolute top-[247px] left-[1px] flex flex-col items-end justify-start gap-[20px] text-left">
            <div className="w-[422px] flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[100%] font-semibold">
                Reg No.
              </div>
              <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start p-4 border-[1px] border-solid border-gainsboro-400">
                <div className="flex-1 relative leading-[24px]">
                  College Reg. No.
                </div>
              </div>
            </div>
            <div className="w-[422px] flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[100%] font-semibold">
                College Email ID
              </div>
              <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start p-4 border-[1px] border-solid border-gainsboro-400">
                <div className="flex-1 relative leading-[24px]">
                  username@collegename.ac.in
                </div>
              </div>
            </div>
            <PasswordForm password="Password" />
            <PasswordForm password="Confirm Password" />
          </div>
          <div className="absolute top-[751px] left-[0px] w-[422px] h-[18px] text-right">
            <div className="absolute top-[0px] left-[0px] leading-[100%]">
              {`Already a User? `}
              <span className="[text-decoration:underline]">Login now</span>
            </div>
            <div className="absolute top-[2px] left-[321px] leading-[100%]">{`Use as Guest `}</div>
          </div>
          <div
            className="absolute top-[665px] left-[1px] rounded-lg bg-coral-100 w-[422px] flex flex-row items-center justify-center p-4 box-border cursor-pointer text-white"
            onClick={onButtonLoginClick}
          >
            <div className="flex-1 relative leading-[100%] font-semibold">
              Register
            </div>
          </div>
          <div className="absolute top-[147px] left-[7px] w-[410px] h-[69px] text-xl">
            <div className="absolute top-[0px] left-[112.6px] inline-block w-[185.8px] h-[28.1px]">
              Registration
            </div>
            <div className="absolute top-[43px] left-[0px] text-mini leading-[128.52%] text-darkgray-100 inline-block w-[410px] h-[26px]">{`For Both Staff & Students`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
