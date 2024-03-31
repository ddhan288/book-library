import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MySelfReturnfillForm from "../components/MySelfReturnfillForm";
import SideBarFrame1 from "../components/SideBarFrame1";

const MyShelfReturn = () => {
  const navigate = useNavigate();

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search1");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/contribute");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/pending-payments-payment");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1080px] text-left text-6xl text-dimgray-600 font-inter">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[1872px]" />
        <div className="absolute top-[200px] left-[44px] w-[1455px] h-[632px] text-mini">
          <div className="absolute top-[168px] left-[0px] w-[1455px] h-[464px] overflow-hidden" />
          <div className="absolute top-[67px] left-[0px] w-[1455px] h-[548px]">
            <div className="absolute top-[288px] left-[0px] w-[1455px] h-[260px]">
              <div className="absolute top-[0px] left-[0px] overflow-x-auto flex flex-row items-start justify-start gap-[69px]">
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                        Don’t Make Me think
                      </div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Steve Krug, 2000
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
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">{`Java Script Scope & ..`}</div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Kyle Simpson, 2014
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
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                        Sprint : Solve Big Pro..
                      </div>
                      <div className="w-[130px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Robert T.Kiyosaki, 1997
                      </div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                        <span>5</span>
                        <span className="text-darkgray-300">/5</span>
                      </div>
                    </div>
                    <div className="absolute top-[141px] left-[163px] w-[125px] h-10 text-center text-white">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[125px] h-10" />
                      <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
                        E-BOOK
                      </div>
                    </div>
                    <div className="absolute top-[196px] left-[163px] w-[125px] h-10 text-center text-tomato-100">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
                      <div className="absolute top-[9px] left-[42px] leading-[128.52%] font-semibold inline-block w-[41px] h-[21px]">{`Read `}</div>
                    </div>
                    <div className="absolute top-[25px] left-[168px] leading-[128.52%] inline-block w-[95px] h-[19px]">{`Borrowed on `}</div>
                    <div className="absolute top-[54px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      11 Mar 2023 09:00 AM
                    </div>
                    <div className="absolute top-[111px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      14 Mar 2023
                    </div>
                    <div className="absolute top-[82px] left-[168px] leading-[128.52%] inline-block w-[120px] h-[19px]">
                      Submission Due
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1455px] h-[260px]">
              <div className="absolute top-[0px] left-[0px] overflow-x-auto flex flex-row items-start justify-start gap-[69px]">
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                        Don’t Make Me think
                      </div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Steve Krug, 2000
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
                      11 Mar 2023 09:00 AM
                    </div>
                    <div className="absolute top-[111px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      14 Mar 2023
                    </div>
                    <div className="absolute top-[82px] left-[168px] leading-[128.52%] inline-block w-[120px] h-[19px]">
                      Submission Due
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                        Rich Dad Poor Dad
                      </div>
                      <div className="w-[130px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Robert T.Kiyosaki, 1997
                      </div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                        <span>5</span>
                        <span className="text-darkgray-300">/5</span>
                      </div>
                    </div>
                    <div className="absolute top-[141px] left-[163px] w-[125px] h-10 text-center text-white">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[125px] h-10" />
                      <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
                        E-BOOK
                      </div>
                    </div>
                    <div className="absolute top-[196px] left-[163px] w-[125px] h-10 text-center text-tomato-100">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
                      <div className="absolute top-[9px] left-[21px] leading-[128.52%] font-semibold inline-block w-[41px] h-[21px]">{`Read `}</div>
                      <img
                        className="absolute top-[1px] left-[84px] w-10 h-[37.9px]"
                        alt=""
                        src="/group-32.svg"
                      />
                    </div>
                    <div className="absolute top-[25px] left-[168px] leading-[128.52%] inline-block w-[95px] h-[19px]">{`Borrowed on `}</div>
                    <div className="absolute top-[54px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      11 Mar 2023 09:00 AM
                    </div>
                    <div className="absolute top-[111px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      14 Mar 2023
                    </div>
                    <div className="absolute top-[82px] left-[168px] leading-[128.52%] inline-block w-[120px] h-[19px]">
                      Submission Due
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                        Don’t Make Me think
                      </div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Steve Krug, 2000
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
                <div className="overflow-x-auto shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[308px] relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                    <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px] text-3xs">
                      <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                        Sprint : Solve Big Pro..
                      </div>
                      <div className="w-[130px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                        Robert T.Kiyosaki, 1997
                      </div>
                      <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                        <span>5</span>
                        <span className="text-darkgray-300">/5</span>
                      </div>
                    </div>
                    <div className="absolute top-[141px] left-[163px] w-[125px] h-10 text-center text-white">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[125px] h-10" />
                      <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
                        E-BOOK
                      </div>
                    </div>
                    <div className="absolute top-[196px] left-[163px] w-[125px] h-10 text-center text-tomato-100">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
                      <div className="absolute top-[9px] left-[42px] leading-[128.52%] font-semibold inline-block w-[41px] h-[21px]">{`Read `}</div>
                    </div>
                    <div className="absolute top-[25px] left-[168px] leading-[128.52%] inline-block w-[95px] h-[19px]">{`Borrowed on `}</div>
                    <div className="absolute top-[54px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      11 Mar 2023 09:00 AM
                    </div>
                    <div className="absolute top-[111px] left-[168px] text-3xs leading-[128.52%] text-dimgray-200 inline-block w-[114px] h-[19px]">
                      14 Mar 2023
                    </div>
                    <div className="absolute top-[82px] left-[168px] leading-[128.52%] inline-block w-[120px] h-[19px]">
                      Submission Due
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[50px] text-xl text-gray-400">
            <div className="w-[131px] relative leading-[128.52%] font-medium text-dimgray-600 inline-block h-[33px] shrink-0">
              All Books
            </div>
            <div className="w-[131px] relative leading-[128.52%] font-medium inline-block h-[33px] shrink-0">
              Favourite
            </div>
            <div className="w-[206px] relative leading-[128.52%] font-medium inline-block h-[33px] shrink-0">
              Borrowed Books
            </div>
            <div className="w-[131px] relative leading-[128.52%] font-medium inline-block h-[33px] shrink-0">
              E-Books
            </div>
            <div className="w-[166px] relative leading-[128.52%] font-medium inline-block h-[33px] shrink-0">
              Audio Books
            </div>
            <div className="w-[241px] relative leading-[128.52%] font-medium inline-block h-[33px] shrink-0">{`Articles & Journals`}</div>
          </div>
        </div>
        <b className="absolute top-[130px] left-[44px] leading-[128.52%] inline-block w-[286px] h-[33px]">
          <span>{`Your `}</span>
          <span className="text-salmon">Shelf</span>
        </b>
        <div className="absolute top-[885px] left-[44px] w-[1396px] h-[221px]">
          <div className="absolute top-[0px] left-[0px] leading-[128.52%] font-semibold inline-block w-[286px] h-[33px]">{`Notes & Bookmarks`}</div>
          <div className="absolute top-[72px] left-[0px] w-[1396px] h-[149px] text-center text-xl text-white">
            <div className="absolute top-[0px] left-[526px] w-[405px] h-[149px]">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-lightgreen w-[405px] h-[149px]" />
              <b className="absolute top-[37px] left-[32px] leading-[128.52%] inline-block w-[356px] h-10">
                Don’t Make Me Think Notes
              </b>
              <div className="absolute top-[90px] left-[125px] text-xs leading-[128.52%] font-semibold inline-block w-[136px] h-[17px]">
                Last Edited 2hrs ago
              </div>
            </div>
            <div className="absolute top-[0px] left-[991px] w-[405px] h-[149px]">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-blueviolet w-[405px] h-[149px]" />
              <b className="absolute top-[37px] left-[25px] leading-[128.52%] inline-block w-[356px] h-10">
                Exam Preparation
              </b>
              <div className="absolute top-[90px] left-[125px] text-xs leading-[128.52%] font-semibold inline-block w-[136px] h-[17px]">
                Last Edited 1hrs ago
              </div>
            </div>
            <div className="absolute top-[0px] left-[263px] w-[203px] h-[149px]">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-palevioletred w-[203px] h-[149px]" />
              <b className="absolute top-[37px] left-[34px] leading-[128.52%] inline-block w-[136px] h-10">
                JS Notes
              </b>
              <div className="absolute top-[90px] left-[34px] text-xs leading-[128.52%] font-semibold inline-block w-[136px] h-[17px]">
                Last Edited 2hrs ago
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[203px] h-[149px]">
              <div className="absolute top-[0px] left-[0px] w-[203px] h-[149px]">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-sandybrown w-[203px] h-[149px]" />
              </div>
              <b className="absolute top-[37px] left-[32px] leading-[128.52%] inline-block w-[136px] h-10">
                UX Design
              </b>
              <div className="absolute top-[90px] left-[32px] text-xs leading-[128.52%] font-semibold inline-block w-[136px] h-[17px]">
                Last Edited 2hrs ago
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1159px] left-[44px] w-[1396px] h-[610px]">
          <div className="absolute top-[0px] left-[0px] leading-[128.52%] font-semibold inline-block w-[286px] h-[33px]">
            Remainders
          </div>
          <div className="absolute top-[61px] left-[0px] w-[1396px] h-[549px] text-xl">
            <div className="absolute top-[0px] left-[482px] w-[432px] h-[546px]">
              <div className="absolute top-[0px] left-[0px] w-[432px] h-[546px]">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[432px] h-[546px]" />
                <div className="absolute top-[22px] left-[45px] leading-[128.52%] font-semibold inline-block w-[233px] h-[30px]">
                  Pending Books
                </div>
                <div className="absolute top-[79px] left-[45px] w-[350px] h-[146px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-8xs w-[75px] h-[99px] object-cover"
                    alt=""
                    src="/rectangle-16@2x.png"
                  />
                  <div className="absolute top-[0px] left-[107px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="w-[243px] relative leading-[128.52%] inline-block h-[54px] shrink-0">
                      The Design of EveryDay Things
                    </div>
                    <div className="w-[207px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                      Don Norman, 1988
                    </div>
                  </div>
                  <div className="absolute top-[106px] left-[116px] w-[125px] h-10 text-center text-mini text-tomato-100">
                    <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
                    <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
                      Return
                    </div>
                  </div>
                  <div className="absolute top-[116px] left-[2px] text-smi leading-[128.52%] inline-block w-[114px] h-[19px] text-dimgray-200">
                    <span>{`13 Mar 2023 `}</span>
                    <span className="text-crimson">(Over Due)</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-[323px] left-[45px] w-[350px] h-[146px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-8xs w-[75px] h-[99px] object-cover"
                  alt=""
                  src="/rectangle-16@2x.png"
                />
                <div className="absolute top-[0px] left-[107px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="w-[243px] relative leading-[128.52%] inline-block h-[54px] shrink-0">{`Java Script Scope & Closures`}</div>
                  <div className="w-[207px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Kyle Simpson, 2014
                  </div>
                </div>
                <div className="absolute top-[106px] left-[116px] w-[125px] h-10 text-center text-mini text-tomato-100">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[125px] h-10 border-[1px] border-solid border-tomato-100" />
                  <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[97px] h-[21px]">
                    Return
                  </div>
                </div>
                <div className="absolute top-[116px] left-[2px] text-smi leading-[128.52%] inline-block w-[114px] h-[19px] text-dimgray-200">
                  <span>{`13 Mar 2023 `}</span>
                  <span className="text-crimson">(Over Due)</span>
                </div>
              </div>
              <div className="absolute top-[271px] left-[45px] box-border w-[351px] h-px border-t-[1px] border-solid border-gainsboro-200" />
            </div>
            <div className="absolute top-[0px] left-[0px] w-[432px] h-[549px]">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[432px] h-[549px]" />
              <div className="absolute top-[0px] left-[0px] w-[432px] h-[528px] overflow-hidden">
                <div className="absolute top-[22px] left-[45px] leading-[128.52%] font-semibold inline-block w-[158px] h-[30px]">
                  Lates Updates
                </div>
                <div className="absolute top-[70px] left-[45px] flex flex-col items-end justify-start gap-[31px]">
                  <div className="w-[348px] relative h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[348px] flex flex-col items-start justify-start">
                      <div className="w-[348px] relative leading-[128.52%] inline-block h-[54px] shrink-0">
                        Server Maintenance will be done on 16 Mar 2023 from 9AM
                        to 10AM
                      </div>
                    </div>
                    <div className="absolute top-[114px] left-[0px] text-smi leading-[128.52%] text-dimgray-200 inline-block w-[184px] h-[19px]">
                      Posted on 14 Mar 2023
                    </div>
                    <div className="absolute top-[74px] left-[0px] text-mini leading-[128.52%] font-semibold inline-block w-[207px] h-3.5">
                      IT Department
                    </div>
                  </div>
                  <img
                    className="w-[349px] relative h-0"
                    alt=""
                    src="/line-2.svg"
                  />
                  <div className="w-[348px] relative h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[348px] flex flex-col items-start justify-start">
                      <div className="w-[348px] relative leading-[128.52%] inline-block h-[54px] shrink-0">
                        Server Maintenance will be done on 16 Mar 2023 from 9AM
                        to 10AM
                      </div>
                    </div>
                    <div className="absolute top-[114px] left-[0px] text-smi leading-[128.52%] text-dimgray-200 inline-block w-[184px] h-[19px]">
                      Posted on 14 Mar 2023
                    </div>
                    <div className="absolute top-[74px] left-[0px] text-mini leading-[128.52%] font-semibold inline-block w-[207px] h-3.5">
                      IT Department
                    </div>
                  </div>
                  <img
                    className="w-[349px] relative h-0"
                    alt=""
                    src="/line-2.svg"
                  />
                  <div className="w-[348px] relative h-[133px]">
                    <div className="absolute top-[0px] left-[0px] w-[348px] flex flex-col items-start justify-start">
                      <div className="w-[348px] relative leading-[128.52%] inline-block h-[54px] shrink-0">
                        Server Maintenance will be done on 16 Mar 2023 from 9AM
                        to 10AM
                      </div>
                    </div>
                    <div className="absolute top-[114px] left-[0px] text-smi leading-[128.52%] text-dimgray-200 inline-block w-[184px] h-[19px]">
                      Posted on 14 Mar 2023
                    </div>
                    <div className="absolute top-[74px] left-[0px] text-mini leading-[128.52%] font-semibold inline-block w-[207px] h-3.5">
                      IT Department
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[964px] w-[432px] h-[546px]">
              <div className="absolute top-[0px] left-[0px] w-[432px] h-[546px]">
                <div className="absolute top-[0px] left-[0px] w-[432px] h-[546px]">
                  <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[432px] h-[546px]" />
                  <div className="absolute top-[22px] left-[45px] leading-[128.52%] font-semibold inline-block w-[205px] h-[30px]">
                    Requested Books
                  </div>
                  <div className="absolute top-[79px] left-[45px] w-[350px] h-[151px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-8xs w-[75px] h-[99px] object-cover"
                      alt=""
                      src="/rectangle-16@2x.png"
                    />
                    <div className="absolute top-[0px] left-[107px] flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[243px] relative leading-[128.52%] inline-block h-[54px] shrink-0">
                        The Design of EveryDay Things
                      </div>
                      <div className="w-[207px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                        Don Norman, 1988
                      </div>
                    </div>
                    <div className="absolute top-[111px] left-[107px] w-[164px] h-10 text-center text-mini text-white">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkgray-400 w-[164px] h-10" />
                      <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[132px] h-[21px]">
                        Not Yet Available
                      </div>
                    </div>
                    <div className="absolute top-[116px] left-[0px] text-smi leading-[128.52%] text-dimgray-200 inline-block w-[84px] h-[30px]">
                      <p className="m-0">Expected by</p>
                      <p className="m-0">15 Mar 2023</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[323px] left-[45px] w-[350px] h-[150px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-8xs w-[75px] h-[99px] object-cover"
                    alt=""
                    src="/rectangle-16@2x.png"
                  />
                  <div className="absolute top-[0px] left-[107px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="w-[243px] relative leading-[128.52%] inline-block h-[54px] shrink-0">{`Java Script Scope & Closures`}</div>
                    <div className="w-[207px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                      Kyle Simpson, 2014
                    </div>
                  </div>
                  <div className="absolute top-[116px] left-[2px] text-smi leading-[128.52%] text-dimgray-200 inline-block w-[73px] h-[34px]">
                    Returned From User
                  </div>
                </div>
                <div className="absolute top-[271px] left-[45px] box-border w-[351px] h-px border-t-[1px] border-solid border-gainsboro-200" />
              </div>
              <div className="absolute top-[436px] left-[152px] w-[164px] h-10 text-center text-mini text-white">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[164px] h-10" />
                <div className="absolute top-[9px] left-[16px] leading-[128.52%] font-semibold inline-block w-[132px] h-[21px]">
                  Available Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[48px] left-[1px] w-[1544px] h-[996px] text-base">
          <div className="absolute top-[0px] left-[0px] w-[1544px] h-[996px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black w-[1544px] h-[996px] opacity-[0.5]" />
          </div>
          <div className="absolute top-[80px] left-[526px] w-[484px] h-[843px]">
            <div className="absolute top-[0px] left-[0px] w-[484px] h-[843px] text-center">
              <MySelfReturnfillForm />
              <div className="absolute top-[298px] left-[67px] w-[317px] h-[51px] opacity-[0.5]">
                <div className="absolute top-[0px] left-[226px] w-[91px] h-[51px]">
                  <div className="absolute top-[0px] left-[0px] w-[91px] h-[51px]">
                    <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-[91px] h-[51px]" />
                  </div>
                  <b className="absolute top-[16px] left-[7px]">2023</b>
                  <img
                    className="absolute h-[15.69%] w-[15.38%] top-[43.14%] right-[9.89%] bottom-[41.18%] left-[74.73%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[113px] w-[91px] h-[51px]">
                  <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-[91px] h-[51px]" />
                  <b className="absolute top-[16px] left-[10px]">03</b>
                  <img
                    className="absolute h-[15.69%] w-[15.38%] top-[43.14%] right-[12.09%] bottom-[41.18%] left-[72.53%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[91px] h-[51px]">
                  <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-[91px] h-[51px]" />
                  <b className="absolute top-[17px] left-[11px]">08</b>
                  <img
                    className="absolute h-[15.69%] w-[15.38%] top-[43.14%] right-[8.79%] bottom-[41.18%] left-[75.82%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div
                className="absolute top-[639px] left-[141px] w-[209px] h-[61px] cursor-pointer text-xl text-white"
                onClick={onGroupContainer1Click}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-coral-200 w-[209px] h-[61px]" />
                <div className="absolute top-[6px] left-[10px] w-[188px] h-12">
                  <div className="absolute top-[0px] left-[0px] leading-[12px] font-semibold flex items-center justify-center w-[188px] h-12">
                    Pay Now
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[715px] left-[141px] w-[209px] h-[61px] cursor-pointer text-xl text-white"
                onClick={onGroupContainer2Click}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-dimgray-600 w-[209px] h-[61px]" />
                <div className="absolute top-[6px] left-[10px] w-[188px] h-12">
                  <div className="absolute top-[0px] left-[0px] leading-[12px] font-semibold flex items-center justify-center w-[188px] h-12">
                    Credit
                  </div>
                </div>
              </div>
              <div className="absolute top-[117px] left-[65px] w-[318px] h-[97px]">
                <div className="absolute top-[46px] left-[1px] w-[317px] h-[51px]">
                  <div className="absolute top-[0px] left-[226px] w-[91px] h-[51px] opacity-[0.5]">
                    <div className="absolute top-[0px] left-[0px] w-[91px] h-[51px]">
                      <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-[91px] h-[51px]" />
                    </div>
                    <b className="absolute top-[16px] left-[7px]">2023</b>
                    <img
                      className="absolute h-[15.69%] w-[15.38%] top-[43.14%] right-[9.89%] bottom-[41.18%] left-[74.73%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[113px] w-[91px] h-[51px] opacity-[0.5]">
                    <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-[91px] h-[51px]" />
                    <b className="absolute top-[16px] left-[10px]">03</b>
                    <img
                      className="absolute h-[15.69%] w-[15.38%] top-[43.14%] right-[12.09%] bottom-[41.18%] left-[72.53%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-[91px] h-[51px] opacity-[0.5]">
                    <div className="absolute top-[0px] left-[0px] w-[91px] h-[51px]">
                      <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-[91px] h-[51px]" />
                      <b className="absolute top-[17px] left-[11px]">04</b>
                      <img
                        className="absolute h-[15.69%] w-[15.38%] top-[43.14%] right-[8.79%] bottom-[41.18%] left-[75.82%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] font-medium text-black text-left inline-block w-[114px] h-[31px]">
                  From
                </div>
              </div>
              <div className="absolute top-[44px] left-[148px] text-xl font-semibold text-black inline-block w-[188px] h-[35px]">
                Fill Up the Details
              </div>
              <div className="absolute top-[251px] left-[67px] font-medium text-black text-left inline-block w-[114px] h-[31px]">
                To
              </div>
            </div>
            <div className="absolute top-[382px] left-[67px] w-[359px] h-[101px] text-gray-500">
              <div className="absolute top-[42px] left-[0px] w-[359px] h-[59px]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[359px] h-[59px] border-[1px] border-solid border-lightgray-100" />
                <div className="absolute top-[19px] left-[20px] font-medium inline-block w-[255px] h-[21px] opacity-[0.8]">
                  680E2023
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] font-medium text-black inline-block w-[146px] h-[31px]">
                Book Seriel No.
              </div>
            </div>
            <div className="absolute top-[505px] left-[67px] w-[359px] h-[101px] text-xl text-dimgray-400">
              <div className="absolute top-[42px] left-[0px] w-[359px] h-[59px]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[359px] h-[59px] border-[1px] border-solid border-lightgray-100" />
                <div className="absolute top-[18px] left-[20px] uppercase inline-block w-[255px] h-[23px] opacity-[0.8]">
                  ₹100
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] text-base font-medium text-black inline-block w-[146px] h-[31px]">
                Penalties
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[48px] left-[341px] w-[1544px] h-28 text-center text-xl">
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
        propColor1="#4d4d4d"
        onHomeMenuContainerClick={onHomeMenuContainerClick}
        onSearchMenuContainerClick={onSearchMenuContainerClick}
        onFavouriteMenuContainerClick={onFavouriteMenuContainerClick}
      />
    </div>
  );
};

export default MyShelfReturn;
