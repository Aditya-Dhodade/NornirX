import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, List } from "components";
import DesktopTwelveStackcamera from "components/DesktopTwelveStackcamera";

const DesktopTwelvePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-fontspringdemoorganettosemiexp items-center justify-end mx-auto w-full">
        <div className="bg-gradient4  flex flex-col items-center justify-start pb-[9px] w-full">
          <div className="bg-black_900_4f flex flex-col items-center justify-start w-full">
            <div className="bg-gradient3  flex flex-col items-start justify-end p-[39px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start mb-[13px] mt-6 md:px-5 w-[92%] md:w-full">
                <div className="bg-gradient2  md:mt-0 md:w-full mt-[17px] p-px relative sm:mt-0 sm:w-full w-[9%] ">
                  <DesktopTwelveStackcamera className="bg-black_900_4f border-solid h-[867px] relative shadow-bs2 sm:w-full" />
                </div>
                <div className="flex flex-col md:gap-10 gap-[121px] items-center justify-start w-[86%] md:w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-normal leading-[normal] min-w-[285px] sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray_400 uppercase"
                    onClick={() => navigate("/desktopone")}
                  >
                    nornirx
                  </Button>
                  <div className="flex flex-col font-montserrat gap-[34px] items-start justify-start w-full">
                    <List
                      className="flex-col gap-[34px] grid items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 w-full">
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/rockpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          ROCK
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/latinjazzpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          Latin Jazz
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/rappage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          RAP
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 w-full">
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/metalpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          METAL
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/edmpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          EDM
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/neoclassicalpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          NEO-classical{" "}
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 w-full">
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/instrumentalpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          INSTRUMENTAL
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/hiphoppage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          Hip Hop
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/jazzpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          Jazz
                        </Button>
                      </div>
                    </List>
                    <Button
                      className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                      onClick={() => navigate("/fillerpone")}
                      shape="CircleBorder48"
                      size="2xl"
                      variant="GradientGray5066WhiteA70019"
                    >
                      NEO-classical{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwelvePage;
