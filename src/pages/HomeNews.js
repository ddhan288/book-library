import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopMainContainer from "../components/TopMainContainer";

const HomeNews = () => {
  const navigate = useNavigate();

  const onProfileAccountContainerClick = useCallback(() => {
    navigate("/homeprofile");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/book-preview");
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
    <div className="w-full relative bg-white h-[1080px] text-left text-6xl text-dimgray-600 font-inter">
      <img
        className="absolute top-[-67px] left-[-37px] w-[1994.3px] h-[1143.5px]"
        alt=""
        src="/bg-vector.svg"
      />
      <div className="absolute top-[48px] left-[341px] rounded-tl-none rounded-tr-3xs rounded-b-none w-[1544px] h-[994px] overflow-y-auto">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[2313px]" />
        <div className="absolute top-[850px] left-[44px] leading-[128.52%] inline-block w-[228px] h-[34px]">
          Recent Readings
        </div>
        <div className="absolute top-[850px] left-[1353px] text-xl leading-[128.52%] text-gray-300 text-right inline-block w-[143px] h-[34px]">
          Show All
        </div>
        <div className="absolute top-[1218px] left-[44px] leading-[128.52%] inline-block w-[238px] h-[34px]">
          Academic Books
        </div>
        <div className="absolute top-[1208px] left-[1354px] text-xl leading-[128.52%] text-gray-300 text-right inline-block w-[143px] h-[34px]">
          Show All
        </div>
        <div className="absolute top-[1586px] left-[1354px] text-xl leading-[128.52%] text-gray-300 text-right inline-block w-[143px] h-[34px]">
          Show All
        </div>
        <div className="absolute top-[1586px] left-[44px] leading-[128.52%] text-gray-300 inline-block w-[513px] h-[34px]">{`Journals, Articles & Paper Publications`}</div>
        <div className="absolute top-[1958px] left-[44px] leading-[128.52%] text-gray-300 inline-block w-[513px] h-[34px]">
          News
        </div>
        <div className="absolute top-[527px] left-[44px] overflow-x-auto flex flex-row items-start justify-start gap-[39px] text-3xs">
          <div
            className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0 cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Design of Every..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Don Norman, 1988
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Sprint : How to solve...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jake Knapp, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Learn UX : Design Gr...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jeff Gothelf, 2016
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Road to React
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Steve Krug, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Harry Potter and The...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                J.K. Rowling, 2002
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block">
                You Don’t Know JS: S..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Kyle Simpson, 2014
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[895px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Design of Every..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Don Norman, 1988
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Sprint : How to solve...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jake Knapp, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Learn UX : Design Gr...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jeff Gothelf, 2016
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Road to React
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Steve Krug, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Harry Potter and The ...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                J.K. Rowling, 2002
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                You Don’t Know JS: S..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Kyle Simpson, 2014
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1263px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Design of Every..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Don Norman, 1988
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Sprint : How to solve...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jake Knapp, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Learn UX : Design Gr...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jeff Gothelf, 2016
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Road to React
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Steve Krug, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Harry Potter and The ...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                J.K. Rowling, 2002
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                You Don’t Know JS: S..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Kyle Simpson, 2014
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1631px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Design of Every..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Don Norman, 1988
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Sprint : How to solve...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jake Knapp, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Learn UX : Design Gr...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Jeff Gothelf, 2016
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                The Road to React
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Steve Krug, 2000
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
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
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                Harry Potter and The ...
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                J.K. Rowling, 2002
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                You Don’t Know JS: S..
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Kyle Simpson, 2014
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.9</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2003px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                14 Mar 2023
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                The Hindu News
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                14 Mar 2023
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                TOI News
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
          <div className="w-40 relative rounded-3xs bg-white h-[260px] overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[130px] relative text-xs leading-[128.52%] inline-block h-3.5 shrink-0">
                14 Mar 2023
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-3.5 shrink-0">
                Deccan Cronicle
              </div>
              <div className="w-[101px] relative leading-[128.52%] inline-block h-[11px] shrink-0">
                <span>4.5</span>
                <span className="text-darkgray-300">/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[413px] left-[44px] text-16xl leading-[128.52%] font-semibold inline-block w-[268px] h-[45px]">
          Good Morning
        </div>
        <div className="absolute top-[482px] left-[44px] leading-[128.52%] inline-block w-[286px] h-[33px]">
          Recommended for You
        </div>
        <div className="absolute top-[482px] left-[1367px] text-xl leading-[128.52%] text-gray-300 text-right inline-block w-[129px] h-[33px]">
          Show All
        </div>
        <div className="absolute top-[136px] left-[634px] rounded-3xs bg-white box-border w-[863px] h-[235px] overflow-hidden text-white border-[1px] border-solid border-tomato-300">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(182.98deg,_#eb5231,_#571fcf)] w-[58px] h-[233px]" />
          <div className="absolute top-[-227px] left-[13px] w-[848px] h-[229px]">
            <div className="absolute top-[193px] left-[0px] leading-[128.52%] font-medium inline-block w-[157px] h-8 [transform:_rotate(-90deg)] [transform-origin:0_0]">
              New Arrivals
            </div>
            <div className="absolute top-[0px] left-[45px] w-[803px] h-[229px] overflow-x-auto">
              <div className="absolute top-[13px] left-[35px] flex flex-row items-start justify-start gap-[48px]">
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[16px] left-[22px] rounded-8xs w-[123px] h-[170px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[2px] left-[13px] w-[848px] h-[233px] text-center">
            <div className="absolute top-[197px] left-[0px] leading-[128.52%] font-medium inline-block w-[157px] h-8 [transform:_rotate(-90deg)] [transform-origin:0_0]">
              News Rack
            </div>
            <div className="absolute top-[0px] left-[45px] w-[803px] h-[233px] overflow-x-auto">
              <div className="absolute top-[14px] left-[35px] flex flex-row items-start justify-start gap-[48px]">
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[16px] left-[22px] rounded-8xs w-[123px] h-[170px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
                <div className="w-[167px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] h-[203px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[137px] left-[44px] rounded-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(140.88deg,_#eb5231,_#571fcf)] w-[547px] h-[233px] overflow-hidden text-xl text-white">
          <div className="absolute top-[33px] left-[23px] w-[500px] h-[168px]">
            <div className="absolute top-[0px] left-[13px] text-6xl leading-[128.52%] font-medium inline-block w-48 h-[41px]">
              Today’s Quote
            </div>
            <div className="absolute top-[52px] left-[13px] leading-[150%] inline-block w-[487px] h-[70px]">
              “There is more treasure in books than in all the pirate’s loot on
              Treasure Island.”
            </div>
            <div className="absolute top-[137px] left-[0px] leading-[128.52%] text-right inline-block w-[487px] h-[31px]">
              -Walt Disney
            </div>
          </div>
          <div className="absolute top-[196px] left-[36px] w-[70px] flex flex-row items-end justify-between">
            <div className="w-2.5 relative rounded-[50%] bg-white box-border h-2.5 border-[1px] border-solid border-white" />
            <div className="w-2.5 relative rounded-[50%] bg-purple box-border h-2.5 border-[1px] border-solid border-white" />
            <div className="w-2.5 relative rounded-[50%] bg-purple box-border h-2.5 border-[1px] border-solid border-white" />
            <div className="w-2.5 relative rounded-[50%] bg-purple box-border h-2.5 border-[1px] border-solid border-white" />
          </div>
        </div>
      </div>
      <TopMainContainer
        onProfileAccountContainerClick={onProfileAccountContainerClick}
      />
      <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-mini text-gray-300">
        <div className="absolute top-[0px] left-[0px] w-[306px] h-[994px]">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[306px] h-[994px] overflow-hidden">
            <div className="absolute top-[856px] left-[68px] flex flex-col items-start justify-start gap-[15px]">
              <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`About `}</div>
              <div className="w-[134px] relative inline-block h-[19px] shrink-0">
                Support
              </div>
              <div className="w-[134px] relative inline-block h-[19px] shrink-0">{`Terms & Condition`}</div>
            </div>
          </div>
          <div className="absolute top-[212px] left-[66px] flex flex-col items-center justify-start text-xl">
            <div className="flex flex-col items-center justify-start gap-[34px]">
              <div className="w-[174px] flex flex-row items-center justify-start gap-[12px] text-dimgray-600">
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
                className="flex flex-row items-center justify-start gap-[11px] cursor-pointer"
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
          <img
            className="absolute top-[38px] left-[68px] w-[120px] h-[74.2px] object-cover"
            alt=""
            src="/group-3@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
