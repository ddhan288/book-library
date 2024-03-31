import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideBarFrame1 from "../components/SideBarFrame1";

const Account = () => {
  const navigate = useNavigate();

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search1");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/contribute");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/home-news");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1080px] text-left text-sm text-lightslategray font-inter">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[994px]" />
        <div className="absolute top-[116px] left-[44px] w-[1136px] h-[858px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_30px_rgba(170,_170,_170,_0.16),_0px_10px_20px_rgba(194,_194,_194,_0.16)] w-[1136px] h-[858px]" />
          <img
            className="absolute top-[287px] left-[1063px] w-12 h-12"
            alt=""
            src="/edit-dashboard.svg"
          />
          <div className="absolute top-[48px] left-[24px] flex flex-row items-start justify-start gap-[12px] text-xl text-slategray">
            <div className="w-[188px] relative h-[33px] text-tomato-200">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <b className="relative whitespace-pre-wrap">
                    Account Setting
                  </b>
                </div>
                <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-burlywood" />
              </div>
            </div>
            <div className="w-[180px] relative h-[33px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="relative font-medium">{`Login & Security`}</div>
                </div>
                <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-gainsboro-100" />
              </div>
            </div>
            <div className="w-[146px] relative h-[33px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="relative font-medium">Notifications</div>
                </div>
                <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-gainsboro-100" />
              </div>
            </div>
            <div className="w-[111px] relative h-[33px]">
              <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="relative font-medium">Interface</div>
                </div>
                <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-gainsboro-100" />
              </div>
            </div>
          </div>
          <div className="absolute top-[124px] left-[24px] text-base font-medium text-dimgray-500 whitespace-pre-wrap">
            Your Profile Picture
          </div>
          <div className="absolute top-[354px] left-[25px] flex flex-col items-start justify-start gap-[24px]">
            <div className="w-[543px] relative h-[81px]">
              <div className="absolute h-[64.2%] w-[95.58%] top-[35.8%] right-[4.42%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(#fafbfc,_#fafbfc),_#fff] box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[58.02%] left-[2.76%] leading-[112.4%] font-medium">
                Reinhard Kenson
              </div>
              <div className="absolute top-[0%] left-[0.18%] text-base leading-[112.4%] font-medium text-dimgray-500">
                Full name
              </div>
            </div>
            <div className="w-[543px] relative h-[81px]">
              <div className="absolute h-[64.2%] w-[95.58%] top-[35.8%] right-[4.42%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(#fafbfc,_#fafbfc),_#fff] box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[58.02%] left-[2.76%] leading-[112.4%] font-medium">
                6022020
              </div>
              <div className="absolute top-[0%] left-[0.18%] text-base leading-[112.4%] font-medium text-dimgray-500">
                Register Number
              </div>
            </div>
          </div>
          <div className="absolute top-[354px] left-[569px] flex flex-col items-start justify-start gap-[24px]">
            <div className="w-[543px] relative h-[81px]">
              <div className="absolute h-[64.2%] w-[99.82%] top-[35.8%] right-[0.18%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(#fafbfc,_#fafbfc),_#fff] box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[58.02%] left-[2.76%] leading-[112.4%] font-medium">
                Kensoncs.official@college.com
              </div>
              <div className="absolute top-[0%] left-[0.18%] text-base leading-[112.4%] font-medium text-dimgray-500">
                College Email ID
              </div>
            </div>
            <div className="w-[543px] relative h-[81px]">
              <div className="absolute h-[64.2%] w-[99.82%] top-[35.8%] right-[0.18%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(#fafbfc,_#fafbfc),_#fff] box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[58.02%] left-[2.76%] leading-[112.4%] font-medium font-manrope">
                +91
              </div>
              <div className="absolute top-[58.02%] left-[9.76%] leading-[112.4%] font-medium">
                9952508995
              </div>
              <div className="absolute top-[0%] left-[0.18%] text-base leading-[112.4%] font-medium text-dimgray-500">
                phone number
              </div>
              <div className="absolute h-[38.27%] w-[0.18%] top-[48.77%] right-[92.36%] bottom-[12.96%] left-[7.46%] box-border border-r-[1px] border-solid border-gainsboro-100" />
            </div>
          </div>
          <div className="absolute h-[21.79%] w-[95.69%] top-[65.73%] right-[2.2%] bottom-[12.47%] left-[2.11%]">
            <div className="absolute h-[84.49%] w-full top-[15.51%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-100 box-border border-[1px] border-solid border-gainsboro-100" />
            <div className="absolute top-[25.13%] left-[1.38%] leading-[112.4%] font-medium">{`I’m a Student `}</div>
            <div className="absolute top-[0%] left-[0.09%] text-base leading-[112.4%] font-medium text-dimgray-500">
              Bio
            </div>
          </div>
          <div
            className="absolute top-[785px] left-[26px] w-[201px] h-[49px] cursor-pointer text-lg text-white"
            onClick={onButtonContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-tomato-200 w-[201px] h-[49px]" />
            <b className="absolute top-[12px] left-[40px]">Update Profile</b>
          </div>
          <div className="absolute top-[797px] left-[261px] w-[49px] h-[22px] text-lg text-dimgray-500">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Reset
            </div>
          </div>
          <div className="absolute top-[160px] left-[37px] w-[116px] h-[138px] text-center text-3xs text-gray-200">
            <div className="absolute top-[113px] left-[0px] [text-decoration:underline] leading-[24px] font-medium inline-block w-[116px] h-[25px]">
              Upload New photo
            </div>
            <img
              className="absolute top-[0px] left-[8px] w-[100px] h-[100px] object-cover"
              alt=""
              src="/group-3@2x.png"
            />
          </div>
          <div className="absolute top-[134px] left-[287px] w-[175px] h-[149px] text-13xl text-white">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-coral-200 w-[175px] h-[149px]" />
            <div className="absolute top-[25px] left-[92px] leading-[112.4%] font-medium inline-block w-[63px] h-[39px]">
              120
            </div>
            <div className="absolute top-[95px] left-[21px] text-6xl leading-[112.4%] font-medium inline-block w-[142px] h-[39px]">
              Readings
            </div>
            <img
              className="absolute top-[21px] left-[15px] w-[54px] h-12"
              alt=""
              src="/group-133536.svg"
            />
          </div>
          <div className="absolute top-[134px] left-[494px] w-[197px] h-[149px] text-13xl text-white">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumslateblue w-[197px] h-[149px]" />
            <div className="absolute top-[25px] left-[92px] leading-[112.4%] font-medium inline-block w-[63px] h-[39px]">
              10
            </div>
            <div className="absolute top-[95px] left-[21px] text-6xl leading-[112.4%] font-medium inline-block w-[154px] h-[39px]">
              Contribution
            </div>
            <div className="absolute top-[21px] left-[15px] w-[54px] h-12">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[54px] h-12" />
              <img
                className="absolute top-[13px] left-[16px] w-[21px] h-[21px] overflow-hidden"
                alt=""
                src="/give-gift.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[48px] left-[341px] w-[1544px] h-28 text-center text-xl text-dimgray-600">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] w-[1544px] h-28 overflow-hidden" />
        <div className="absolute top-[39px] left-[812px] w-[455px] h-[46px] text-mini font-abel">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[455px] h-[46px]" />
          <div className="absolute top-[14px] left-[57px] flex flex-row items-start justify-start gap-[5px]">
            <img
              className="w-[19px] relative h-[19px] overflow-hidden shrink-0"
              alt=""
              src="/time.svg"
            />
            <div className="w-[109px] relative tracking-[-0.04em] leading-[128.52%] inline-block h-[19px] shrink-0">
              09:00 hrs
            </div>
          </div>
          <div className="absolute top-[14px] left-[254px] flex flex-row items-start justify-start gap-[5px]">
            <img
              className="w-[19px] relative h-[19px]"
              alt=""
              src="/vector.svg"
            />
            <div className="w-[125px] relative tracking-[-0.04em] leading-[128.52%] inline-block h-[19px] shrink-0">
              4-Mar-2023
            </div>
          </div>
        </div>
        <div className="absolute top-[38px] left-[46px] w-[541px] h-[49px] text-left">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[541px] h-[49px]" />
          <div className="absolute top-[0px] left-[0px] w-[102px] h-[49px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 w-[102px] h-[49px]" />
            <div className="absolute top-[12px] left-[37px] leading-[128.52%] inline-block w-[27px] h-6">
              All
            </div>
            <img
              className="absolute top-[20px] left-[74px] rounded-12xs w-[17px] h-[9px] object-contain"
              alt=""
              src="/polygon-1.svg"
            />
          </div>
          <img
            className="absolute top-[14px] left-[504px] w-5 h-5 overflow-hidden"
            alt=""
            src="/barcode-scanner.svg"
          />
          <img
            className="absolute top-[15px] left-[464px] w-5 h-5 overflow-hidden"
            alt=""
            src="/search.svg"
          />
          <div className="absolute top-[8px] left-[493px] box-border w-px h-[34px] border-r-[1px] border-solid border-gainsboro-300" />
          <div className="absolute top-[12px] left-[123px] leading-[128.52%] text-silver inline-block w-[229px] h-6">
            Search
          </div>
        </div>
        <div className="absolute top-[38px] left-[1296px] w-[203px] h-[50px] text-left">
          <div className="absolute top-[0px] left-[0px] rounded-14xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[203px] h-[50px]" />
          <img
            className="absolute top-[3px] left-[3px] rounded-[50%] w-[45px] h-[45px] object-cover"
            alt=""
            src="/ellipse-10@2x.png"
          />
          <div className="absolute top-[14px] left-[66px] leading-[128.52%] inline-block w-[134px] h-[27px]">
            Kenson
          </div>
          <img
            className="absolute top-[21px] left-[157px] rounded-12xs w-[17px] h-[9px] object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
        <div className="absolute top-[38px] left-[615px] w-[170px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[170px] h-[47px]" />
          <img
            className="absolute top-[14px] left-[25px] w-5 h-5 overflow-hidden"
            alt=""
            src="/translate.svg"
          />
          <div className="absolute top-[12px] left-[40px] leading-[128.52%] inline-block w-[91px] h-[22.1px]">
            Lang
          </div>
          <img
            className="absolute top-[19px] left-[124px] rounded-12xs w-[17px] h-[9px] object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <SideBarFrame1
        search="/search.svg"
        bookshelf="/bookshelf.svg"
        propColor="#8a8a8a"
        propColor1="#8a8a8a"
        onHomeMenuContainerClick={onHomeMenuContainerClick}
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        onMyShelfMenuClick={onMyShelfMenuClick}
        onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
      />
    </div>
  );
};

export default Account;
