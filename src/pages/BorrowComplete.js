import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";

const BorrowComplete = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-preview");
  }, [navigate]);

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

  return (
    <div className="w-full relative bg-white h-[1080px] text-left text-xl text-dimgray-600 font-inter">
      <img
        className="absolute top-[-66.3px] left-[-37.3px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-3xs w-[1544px] h-[994px] overflow-y-auto text-mini">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[1556px]" />
        <div className="absolute top-[624px] left-[44px] rounded-3xs bg-white w-[274px] h-[297px]">
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
                <span className="text-darkslategray-200">
                  {" "}
                  this book Online
                </span>
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
        <div className="absolute top-[619px] left-[389px] w-[1110px] h-[906px] text-smi text-dimgray-300">
          <div className="absolute top-[45px] left-[0px] w-[1110px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-0 box-border gap-[50px] text-center text-2xs-5">
            <div className="flex-1 rounded-8xs bg-white flex flex-col items-center justify-start py-2.5 px-[57px] gap-[3px] border-[1px] border-solid border-gainsboro-200">
              <div className="relative font-semibold">Publish Date</div>
              <div className="relative text-smi-8 font-semibold text-darkslategray-200">
                2000
              </div>
            </div>
            <div className="flex-1 rounded-8xs bg-white flex flex-col items-center justify-start pt-2.5 pb-[11px] pr-[41px] pl-[40.3px] gap-[6px] border-[1px] border-solid border-gainsboro-200">
              <div className="relative font-semibold">Publisher</div>
              <div className="relative text-2xs-8 font-semibold text-coral-200">
                New Riders Press
              </div>
            </div>
            <div className="flex-1 rounded-8xs bg-white flex flex-col items-center justify-start py-2.5 px-16 gap-[5px] border-[1px] border-solid border-gainsboro-200">
              <div className="relative font-semibold">Language</div>
              <div className="relative text-2xs-8 font-semibold text-coral-200">
                English
              </div>
            </div>
            <div className="flex-1 rounded-8xs bg-white flex flex-col items-center justify-start py-2.5 pr-[74px] pl-[73.3px] gap-[4px] border-[1px] border-solid border-gainsboro-200">
              <div className="relative font-semibold">Pages</div>
              <div className="relative text-smi-8 font-semibold text-darkslategray-200">
                216
              </div>
            </div>
          </div>
          <div className="absolute top-[134px] left-[0px] flex flex-row items-start justify-start py-0 pr-[598px] pl-0 text-xs">
            <div className="relative leading-[19.5px] font-semibold">
              <span>{`Previews available in: `}</span>
              <span className="[text-decoration:underline] text-coral-200">
                English
              </span>
            </div>
          </div>
          <div className="absolute top-[156px] left-[0px] flex flex-col items-start justify-start text-darkslategray-200">
            <div className="w-[1110px] relative h-[68px] overflow-hidden shrink-0">
              <div className="absolute top-[2px] left-[0px] leading-[19.5px] flex items-center w-[1110px] h-[74px]">
                <span className="w-full">
                  <span className="whitespace-pre-wrap">{`Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most...  `}</span>
                  <span className="text-coral-200">Read more</span>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[247px] left-[0px] rounded-8xs bg-white box-border w-[507px] h-[659px] text-smi-8 text-dimgray-600 border-[1px] border-solid border-gainsboro-200">
            <div className="absolute top-[29px] left-[40px] text-3xl font-semibold">
              Book Details
            </div>
            <div className="absolute top-[84px] left-[40px] w-[427px] flex flex-col items-start justify-start gap-[13px] text-sm">
              <div className="relative font-semibold">Published in</div>
              <div className="relative text-xs leading-[19.5px] font-semibold">
                United States
              </div>
            </div>
            <div className="absolute top-[152px] left-[40px] w-[427px] flex flex-col items-start justify-start gap-[10px] text-sm">
              <div className="relative font-semibold">Edition Notes</div>
              <div className="w-[747px] relative h-12 text-2xs">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Series
                </div>
                <div className="absolute top-[0px] left-[120px] font-semibold">
                  Dover large print classics
                </div>
                <div className="absolute top-[24px] left-[0px] font-semibold">
                  Genre
                </div>
                <div className="absolute top-[24px] left-[120px] text-3xs font-semibold">
                  Fiction.
                </div>
              </div>
            </div>
            <div className="absolute top-[246px] left-[40px] w-[427px] h-[100px] text-dimgray-300">
              <div className="absolute top-[12.8px] left-[0px] font-semibold">
                Classifications
              </div>
              <div className="absolute top-[0px] left-[0px] w-[488px] h-[100px] text-xs">
                <div className="absolute top-[36.8px] left-[0px] font-semibold flex items-center w-[83.6px]">
                  Dewey Decimal Class
                </div>
                <div className="absolute top-[37.8px] left-[120px] font-semibold text-darkslategray-200">
                  823/.8
                </div>
                <div className="absolute top-[75.8px] left-[0px] text-2xs font-semibold">
                  Library of Congress
                </div>
                <div className="absolute top-[75.8px] left-[120px] text-2xs font-semibold text-darkslategray-200">
                  PR5485 .A1 2002
                </div>
              </div>
            </div>
            <div className="absolute top-[366px] left-[40px] w-[427px] h-[86px] text-dimgray-300">
              <div className="absolute top-[12.8px] left-[0px] font-semibold">
                The Physical Object
              </div>
              <div className="absolute top-[0.2px] left-[0px] w-[390px] h-[86px] text-2xs">
                <div className="absolute top-[37.8px] left-[0px] font-semibold">
                  Pagination
                </div>
                <div className="absolute top-[37.8px] left-[120px] font-semibold text-darkslategray-200">
                  ix, 112 p. (large print) ;
                </div>
                <div className="absolute top-[61.8px] left-[0px] font-semibold">
                  Number of pages
                </div>
                <div className="absolute top-[61.8px] left-[120px] text-xs font-semibold text-darkslategray-200">
                  216
                </div>
              </div>
            </div>
            <div className="absolute top-[472px] left-[40px] w-[427px] h-[157px] text-dimgray-300">
              <div className="absolute top-[12.8px] left-[0px] font-semibold">
                ID Numbers
              </div>
              <div className="absolute top-[0px] left-[0px] w-[413px] h-[158px] text-2xs">
                <div className="absolute top-[37.8px] left-[0px] font-semibold">
                  My Book Shelf
                </div>
                <div className="absolute top-[37.8px] left-[120px] font-semibold text-darkslategray-200">
                  OL3570252M
                </div>
                <div className="absolute top-[61.8px] left-[0px] font-semibold">
                  ISBN 10
                </div>
                <div className="absolute top-[61.8px] left-[120px] text-xs font-semibold text-darkslategray-200">
                  0486424715
                </div>
                <div className="absolute top-[85.8px] left-[0px] font-semibold">
                  LCCN
                </div>
                <div className="absolute top-[85.8px] left-[120px] text-xs font-semibold text-dimgray-600">
                  2002073560
                </div>
                <div className="absolute top-[109.8px] left-[0px] text-3xs font-semibold">
                  Library Thing
                </div>
                <div className="absolute top-[109.8px] left-[120px] text-xs font-semibold text-dimgray-600">
                  12349
                </div>
                <div className="absolute top-[133.8px] left-[0px] font-semibold">
                  Goodreads
                </div>
                <div className="absolute top-[133.8px] left-[120px] text-xs font-semibold text-dimgray-600">
                  690668
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[535px] rounded-8xs bg-white box-border w-[507px] h-[353px] text-3xl font-open-sans border-[1px] border-solid border-gainsboro-200">
              <div className="absolute top-[15px] left-[34px] w-[225px] h-[45px]">
                <b className="absolute top-[5px] left-[0px]">
                  Community Reviews
                </b>
                <b className="absolute top-[9px] left-[351px] text-mini [text-decoration:underline] text-tomato-100">
                  Feedback?
                </b>
              </div>
              <div className="absolute top-[60px] left-[34px] w-[440px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0.5 box-border gap-[4px] text-xs-2 text-dimgray-300 font-inter">
                <div className="w-[494px] relative h-[29px]">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[5px] pl-0">
                    <div className="relative tracking-[0.5px] uppercase font-semibold">
                      Pace
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[51.4px] rounded-2xl flex flex-row items-start justify-start py-1.5 pr-[10.5px] pl-[9px] text-xs text-darkslategray-200 border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Meandering `}</span>
                      <span className="text-gray-600"> 100%</span>
                    </div>
                  </div>
                </div>
                <div className="w-[494px] relative h-[29px]">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[4.9px] pl-0">
                    <div className="relative tracking-[0.5px] uppercase font-semibold">
                      Enjoyability
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[105.4px] rounded-2xl flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-3 pl-[9px] text-2xs text-darkslategray-200 border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold">
                      <span>Interesting</span>
                      <span className="text-gray-600"> 100%</span>
                    </div>
                  </div>
                </div>
                <div className="w-[494px] relative h-[29px]">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[4.9px] pl-0">
                    <div className="relative tracking-[0.5px] uppercase font-semibold">
                      Difficulty
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[88.4px] rounded-2xl flex flex-row items-start justify-start py-1.5 pr-[8.8px] pl-[9px] text-xs text-darkslategray-200 border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Advanced `}</span>
                      <span className="text-gray-600"> 100%</span>
                    </div>
                  </div>
                </div>
                <div className="w-[494px] relative h-[29px] text-2xs text-darkslategray-200">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[5px] pl-0 text-xs-2 text-dimgray-300">
                    <b className="relative tracking-[0.5px] uppercase">
                      Genres
                    </b>
                  </div>
                  <div className="absolute top-[3px] left-[69.4px] rounded-2xl flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-3 pl-[9px] border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Horror `}</span>
                      <span className="text-gray-600"> 66%</span>
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[160.8px] rounded-2xl flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-[14.3px] pl-[9px] border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Mystery `}</span>
                      <span className="text-gray-600"> 33%</span>
                    </div>
                  </div>
                </div>
                <div className="w-[494px] relative h-[29px] text-2xs text-darkslategray-200">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[4.5px] pl-0 text-xs-2 text-dimgray-300">
                    <div className="relative tracking-[0.5px] uppercase font-semibold">
                      Mood
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[56px] rounded-2xl flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-[15.3px] pl-[9px] border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Ominous `}</span>
                      <span className="text-gray-600"> 25%</span>
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[163.8px] rounded-2xl flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-[13.3px] pl-[9px] border-[1px] border-solid border-lightgray-300">
                    <div className="relative">
                      <span>
                        <span className="font-semibold">Scientific</span>
                        <b className="font-open-sans whitespace-pre-wrap text-gray-600">{` `}</b>
                      </span>
                      <b className="font-open-sans whitespace-pre-wrap text-gray-600">
                        <span> 25%</span>
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[494px] relative h-[29px] text-xs text-darkslategray-200">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[4.9px] pl-0 text-xs-2 text-dimgray-300">
                    <div className="relative tracking-[0.5px] uppercase font-semibold">{`Impressions `}</div>
                  </div>
                  <div className="absolute top-[3px] left-[102.4px] rounded-2xl flex flex-row items-start justify-start py-1.5 pr-[9.8px] pl-[9px] border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Overhyped `}</span>
                      <span className="text-gray-600"> 50%</span>
                    </div>
                  </div>
                  <div className="absolute top-[3px] left-[222.6px] rounded-2xl flex flex-row items-start justify-start py-1.5 pr-[9.1px] pl-[9px] border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Forgettable `}</span>
                      <span className="text-gray-600"> 50%</span>
                    </div>
                  </div>
                </div>
                <div className="w-[494px] relative h-[29px]">
                  <div className="absolute top-[10px] left-[0px] flex flex-row items-start justify-start py-0 pr-[4.7px] pl-0">
                    <div className="relative tracking-[0.5px] uppercase font-semibold">{`Length `}</div>
                  </div>
                  <div className="absolute top-[3px] left-[68.2px] rounded-2xl flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-[11px] pl-[9px] text-2xs text-darkslategray-200 border-[1px] border-solid border-lightgray-300">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      <span>{`Short `}</span>
                      <span className="text-gray-600"> 100%</span>
                    </div>
                  </div>
                </div>
              </div>
              <b className="absolute top-[307px] left-[36px] text-sm [text-decoration:underline]">
                Add your community review
              </b>
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-white box-border h-10 overflow-hidden text-coral-200 border-b-[1px] border-solid border-gainsboro-200">
            <div className="absolute top-[6px] left-[0px] w-[1023px] h-[33.5px]">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-1 pb-[9.5px] pr-[14.8px] pl-[15px] border-b-[2px] border-solid border-coral-200">
                <div className="relative leading-[19.5px] font-semibold">
                  Overview
                </div>
              </div>
              <div className="absolute top-[3px] left-[182px] flex flex-row items-center justify-center gap-[122px] text-dimgray-300">
                <div className="relative leading-[19.5px] font-medium">
                  View 166 Editions
                </div>
                <div className="relative leading-[19.5px] font-medium">
                  Details
                </div>
                <div className="relative leading-[19.5px] font-medium">
                  4.1k Reviews
                </div>
                <div className="relative leading-[19.5px] font-medium">
                  Lists
                </div>
                <div className="relative leading-[19.5px] font-medium">
                  Related Books
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[172px] left-[393px] w-[503px] h-[381px] text-sm">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[5px] text-16xl">
            <div className="flex flex-col items-start justify-start gap-[38px]">
              <div className="w-[429px] relative leading-[128.52%] inline-block h-3.5 shrink-0">{`Don’t Make Me Think `}</div>
              <div className="w-72 relative text-mini inline-block h-[30px] shrink-0">
                {`By `}
                <span className="[text-decoration:underline]">Steve Krug</span>,
                2000
              </div>
            </div>
            <div className="w-[183px] relative text-mini text-darkgray-500 inline-block h-3.5 shrink-0">
              Second Edition
            </div>
          </div>
          <div className="absolute top-[130px] left-[0px] flex flex-row items-start justify-start gap-[19px] text-darkslategray-200">
            <div className="flex flex-row items-center justify-start gap-[11px] text-dimgray-600">
              <div className="w-[82px] h-3 flex flex-row items-start justify-start gap-[3px]">
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <img
                  className="w-3.5 relative h-[13.2px] object-cover"
                  alt=""
                  src="/star@2x.png"
                />
              </div>
              <div className="w-20 relative font-medium inline-block h-4 shrink-0">
                5.0 Ratings
              </div>
            </div>
            <div className="w-[146px] relative font-medium inline-block h-4 shrink-0">
              25 Currently reading
            </div>
            <div className="w-[146px] relative font-medium inline-block h-4 shrink-0">
              119 Have read
            </div>
          </div>
          <div className="absolute top-[176px] left-[0px] flex flex-row items-start justify-start gap-[17px]">
            <div className="w-[132px] relative h-[101px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[132px] h-4">
                Availability
              </b>
              <div className="absolute top-[27px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-mini">
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
            </div>
            <div className="w-[132px] relative h-[91.5px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[132px] h-4">
                Status
              </b>
              <div className="absolute top-[32.5px] left-[0px] flex flex-col items-start justify-start gap-[13px] text-center text-mini text-white">
                <div className="w-[85px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[26px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-100 w-[85px] h-[26px]" />
                  <div className="absolute top-[5px] left-[0px] inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminimappin@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[320px] left-[0px] flex flex-row items-start justify-start gap-[38px] text-center text-xl text-white">
            <div className="w-[209px] relative h-[61px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-coral-200 w-[209px] h-[61px]" />
              <div className="absolute top-[6px] left-[10px] w-[188px] h-12">
                <div className="absolute top-[0px] left-[0px] leading-[12px] font-semibold flex items-center justify-center w-[188px] h-12">
                  BORROW
                </div>
              </div>
            </div>
            <div className="w-[209px] relative h-[61px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-forestgreen-200 w-[209px] h-[61px]" />
              <div className="absolute top-[6px] left-[10px] w-[123px] h-12">
                <b className="absolute top-[0px] left-[0px] leading-[12px] flex items-center justify-center w-[123px] h-12">
                  Read Now
                </b>
              </div>
              <img
                className="absolute top-[0px] left-[142px] w-[66px] h-[61px]"
                alt=""
                src="/group-32.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent sharesvg="/sharesvg@2x.png" />
        <div className="absolute top-[172px] left-[1054px] rounded-3xs bg-white w-[445px] h-[418px] overflow-hidden text-xl">
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
              experience as a user advocate for companies like Apple, Netscape,
              AOL, Lexus, and others. Based in part on the success of his first
              book, Don't Make Me Think, he has become a highly sought-after
              speaker on usability design.
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
        <div className="absolute top-[132px] left-[44px] flex flex-row items-center justify-start gap-[9px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/heroiconsoutlinearrowsmallleft.svg"
          />
          <div className="w-[151px] relative leading-[128.52%] inline-block shrink-0">
            Back to results
          </div>
        </div>
        <div className="absolute top-[387px] left-[718px] w-[127px] h-10 text-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-dimgray-600 w-[127px] h-10" />
          <div className="absolute top-[10px] left-[16px] leading-[128.52%] inline-block w-[95px] h-5">
            Add to List
          </div>
          <img
            className="absolute top-[17px] left-[102px] rounded-12xs w-[17px] h-[9px] object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[48px] left-[341px] w-[1544px] h-28 text-center">
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
      <div className="absolute top-[47px] left-[341px] w-[1544px] h-[996px] text-center text-white">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black w-[1544px] h-[996px] opacity-[0.5]" />
        <div className="absolute top-[80px] left-[526px] w-[484px] h-[843px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[484px] h-[843px]" />
          <div
            className="absolute top-[715px] left-[141px] w-[209px] h-[61px] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-8xs bg-coral-200 w-[209px] h-[61px]" />
            <div className="absolute top-[6px] left-[10px] w-[188px] h-12">
              <div className="absolute top-[0px] left-[0px] leading-[12px] font-semibold flex items-center justify-center w-[188px] h-12">{`Back `}</div>
            </div>
          </div>
          <img
            className="absolute h-[16.61%] w-[28.93%] top-[43.53%] right-[35.54%] bottom-[39.86%] left-[35.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute top-[166px] left-[118px] text-6xl font-semibold text-black inline-block w-[247px] h-[35px]">
            Process Completed
          </div>
        </div>
      </div>
      <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-gray-300">
        <div className="absolute top-[0px] left-[0px] w-[306px] h-[994px]">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[306px] h-[994px] overflow-hidden" />
          <img
            className="absolute top-[38px] left-[68px] w-[120px] h-[74.2px] object-cover"
            alt=""
            src="/group-3@2x.png"
          />
        </div>
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
          <div
            className="flex flex-row items-center justify-start gap-[11px] cursor-pointer text-dimgray-600"
            onClick={onSearchMenuContainerClick}
          >
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
      </div>
    </div>
  );
};

export default BorrowComplete;
