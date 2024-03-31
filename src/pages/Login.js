import { useCallback } from "react";
import PasswordForm from "../components/PasswordForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onNewUserRegisterClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onButtonLoginClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-whitesmoke-200 h-[1080px] overflow-hidden text-left text-base text-dimgray-600 font-inter">
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
        <div className="absolute top-[63px] left-[72px] w-[423px] h-[687px]">
          <img
            className="absolute top-[0px] left-[137px] w-[150px] h-[92.2px] object-cover"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="absolute top-[155px] left-[0px] w-[423px] h-[532px]">
            <div className="absolute top-[111px] left-[1px] flex flex-col items-start justify-start gap-[24px]">
              <div className="w-[422px] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative leading-[100%] font-semibold">
                  Email
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start p-4 border-[1px] border-solid border-gainsboro-400">
                  <div className="flex-1 relative leading-[24px]">
                    username@collegename.ac.in
                  </div>
                </div>
              </div>
              <PasswordForm password="Password" />
            </div>
            <div className="absolute top-[345px] left-[0px] w-[422px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/checkbox--default.svg"
                />
                <div className="relative leading-[100%]">Remember me</div>
              </div>
              <div className="relative [text-decoration:underline] leading-[100%] text-right">
                Forgot password?
              </div>
            </div>
            <div className="absolute top-[514px] left-[0px] w-[422px] h-[18px] text-right">
              <div
                className="absolute top-[0px] left-[0px] leading-[100%] cursor-pointer"
                onClick={onNewUserRegisterClick}
              >
                {`New User? `}
                <span className="[text-decoration:underline]">
                  Register Here
                </span>
              </div>
              <div className="absolute top-[2px] left-[321px] leading-[100%]">{`Use as Guest `}</div>
            </div>
            <div
              className="absolute top-[403px] left-[0px] rounded-lg bg-coral-100 w-[422px] flex flex-row items-center justify-center p-4 box-border cursor-pointer text-center text-white"
              onClick={onButtonLoginClick}
            >
              <div className="flex-1 relative leading-[100%] font-semibold">
                Login
              </div>
            </div>
            <div className="absolute top-[0px] left-[5px] w-[410px] h-[69px] text-center text-xl">
              <div className="absolute top-[0px] left-[112.6px] inline-block w-[185.8px] h-[28.1px]">
                Welcome Back !
              </div>
              <div className="absolute top-[43px] left-[0px] text-mini leading-[128.52%] text-darkgray-100 inline-block w-[410px] h-[26px]">
                Sign in to continue to yourDigital Library
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
