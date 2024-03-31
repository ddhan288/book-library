import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PoorDadContainer from "../components/PoorDadContainer";
import BrowseContainer from "../components/BrowseContainer";
import HomeSearchdropdown from "../components/HomeSearchdropdown";

const Search1 = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/search1");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onFrameContainer32Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onFrameContainer33Click = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    navigate("/contribute");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1080px] text-left text-xl text-dimgray-600 font-inter">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[1957px]" />
        <div className="absolute top-[239px] left-[44px] w-[1158px] h-[29px]">
          <div className="absolute top-[0px] left-[0px] leading-[128.52%] font-medium inline-block w-[90px] h-[29px]">
            Title
          </div>
          <div className="absolute top-[0px] left-[442px] leading-[128.52%] font-medium inline-block w-[72px] h-[29px]">
            Ratings
          </div>
          <div className="absolute top-[0px] left-[575px] leading-[128.52%] font-medium inline-block w-[90px] h-[29px]">
            Category
          </div>
          <div className="absolute top-[0px] left-[843px] leading-[128.52%] font-medium inline-block w-[105px] h-[29px]">
            Availability
          </div>
          <div className="absolute top-[0px] left-[1053px] leading-[128.52%] font-medium inline-block w-[105px] h-[26px]">
            Status
          </div>
        </div>
        <div className="absolute top-[291px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div
                className="w-[85px] relative h-[30px] cursor-pointer"
                onClick={onGroupContainer2Click}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[439px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[47px]">
            <img
              className="w-[75px] relative rounded-8xs h-[99px] object-cover"
              alt=""
              src="/rectangle-16@2x.png"
            />
            <div className="h-[92px] flex flex-col items-start justify-center">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <div className="w-[207px] relative leading-[128.52%] inline-block h-[54px] shrink-0">
                  The Design of EveryDay Things
                </div>
                <div className="w-[207px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                  Don Norman, 1988
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[442px] flex flex-row items-center justify-start gap-[72px]">
            <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
              <span>4.5</span>
              <span className="text-mini text-darkgray-300">/5</span>
            </div>
            <div className="w-[180px] relative h-[57px]">
              <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                Computer Science
              </div>
              <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                UX Design
              </div>
            </div>
          </div>
          <div className="absolute top-[25.5px] left-[844px] flex flex-row items-center justify-start gap-[103px] text-mini">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[5px]">
                <img className="w-4 relative h-4" alt="" src="/subtract.svg" />
                <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                  Hard Copy
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="w-[15px] relative h-[15px]"
                  alt=""
                  src="/vector.svg"
                />
                <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                  E - Book
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img className="w-4 relative h-4" alt="" src="/subtract.svg" />
                <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                  Audio book
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
              <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                  Borrowed
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[5px] text-left text-dimgray-600">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiuser.svg"
                />
                <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">{`Sriram `}</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[47.5px] left-[1241px] flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
            <img
              className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
              alt=""
              src="/heart.svg"
            />
            <div className="w-[85px] relative h-[30px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
              <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                Preview
              </div>
            </div>
          </div>
        </div>
        <PoorDadContainer
          propTop="587px"
          onFrameContainer3Click={onFrameContainer3Click}
        />
        <div className="absolute top-[735px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start gap-[64px] cursor-pointer text-center text-mini text-tomato-100"
              onClick={onFrameContainer32Click}
            >
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[883px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start gap-[64px] cursor-pointer text-center text-mini text-tomato-100"
              onClick={onFrameContainer33Click}
            >
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1031px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1179px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1327px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1475px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1623px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1771px] left-[44px] w-[1454px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1454px] h-[125px]" />
          <div className="absolute top-[13px] left-[23px] flex flex-row items-center justify-start gap-[90px]">
            <div className="flex flex-row items-center justify-start gap-[47px]">
              <img
                className="w-[75px] relative rounded-8xs h-[99px] object-cover"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[207px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
                  <div className="w-[140px] relative text-mini leading-[128.52%] inline-block h-3.5 shrink-0">
                    Steve Krug, 2000
                  </div>
                </div>
                <div className="w-[140px] relative text-3xs leading-[128.52%] inline-block h-3.5 shrink-0">
                  Second Edition
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[72px]">
              <div className="w-[60px] relative leading-[128.52%] inline-block h-[27px] shrink-0">
                <span>4.5</span>
                <span className="text-mini text-darkgray-300">/5</span>
              </div>
              <div className="w-[180px] relative h-[57px]">
                <div className="absolute top-[0px] left-[0px] leading-[128.52%] inline-block w-[180px] h-[27px]">
                  Computer Science
                </div>
                <div className="absolute top-[38px] left-[0px] text-mini leading-[128.52%] inline-block w-[180px] h-[19px]">
                  UX Design
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[102px] text-mini">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative inline-block h-[18px] shrink-0">
                    Hard Copy
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    E - Book
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="w-[15px] relative h-[15px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="w-[84px] relative leading-[150%] inline-block h-5 shrink-0">
                    Audio book
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px] text-center text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1px] text-left text-dimgray-600">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                  <div className="w-[77px] relative leading-[150%] inline-block h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[64px] text-center text-mini text-tomato-100">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/heart.svg"
              />
              <div className="w-[85px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[85px] h-[30px] border-[1px] border-solid border-tomato-100" />
                <div className="absolute top-[6px] left-[13px] inline-block w-[60px] h-[18px]">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[48px] left-[341px] w-[1544px] h-[449px] text-center">
        <BrowseContainer onGroupContainer2Click={onGroupContainerClick} />
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
        <HomeSearchdropdown
          all="Engineering"
          title="Medical"
          autor={`Arts & Science`}
          text="Architecture"
          subjects="Law"
          propTop="177px"
        />
      </div>
      <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-gray-300">
        <div className="absolute top-[0px] left-[0px] w-[306px] h-[994px]">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[306px] h-[994px] overflow-hidden" />
          <div className="absolute top-[212px] left-[66px] flex flex-col items-center justify-start gap-[34px]">
            <div
              className="w-[174px] flex flex-row items-center justify-start gap-[12px] cursor-pointer"
              onClick={onHomeMenuContainerClick}
            >
              <img
                className="w-[23px] relative h-[23px] overflow-hidden shrink-0"
                alt=""
                src="/heroiconsminihome.svg"
              />
              <div className="w-[138px] relative inline-block h-[25px] shrink-0">
                Home
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[11px] text-dimgray-600">
              <img
                className="w-[23px] relative h-[23px]"
                alt=""
                src="/search.svg"
              />
              <div className="w-[137px] relative inline-block h-[25px] shrink-0">
                Search
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-start gap-[12px] cursor-pointer"
              onClick={onMyShelfMenuClick}
            >
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/bookshelf.svg"
              />
              <div className="w-[136px] relative inline-block h-[25px] shrink-0">
                My Shelf
              </div>
            </div>
            <div
              className="w-[169px] flex flex-row items-center justify-start gap-[12px] cursor-pointer"
              onClick={onFavouriteMenuContainerClick}
            >
              <img
                className="w-[21px] relative h-[21px] overflow-hidden shrink-0"
                alt=""
                src="/give-gift.svg"
              />
              <div className="w-[137px] relative inline-block h-[25px] shrink-0">
                Contribute
              </div>
            </div>
          </div>
          <img
            className="absolute top-[38px] left-[68px] w-[120px] h-[74.2px] object-cover"
            alt=""
            src="/group-3@2x.png"
          />
        </div>
        <div className="absolute top-[856px] left-[68px] flex flex-col items-start justify-start gap-[15px] text-mini">
          <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`About `}</div>
          <div className="w-[134px] relative inline-block h-[19px] shrink-0">
            Support
          </div>
          <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`Terms & Condition`}</div>
        </div>
      </div>
    </div>
  );
};

export default Search1;
