import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import DesktopFifteenStackcontrast from "components/DesktopFifteenStackcontrast";

const DesktopFifteenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-fontspringdemoorganettosemiexp items-center justify-end mx-auto w-full">
        <div className="bg-gradient4  flex flex-col items-center justify-start pb-[9px] w-full">
          <div className="bg-black_900_4f flex flex-col items-center justify-start w-full">
            <div className="bg-gradient3  flex flex-col items-center justify-start p-[35px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1513px] mb-8 mt-2.5 mx-auto md:px-5 w-full">
                <DesktopFifteenStackcontrast className="h-[867px] md:mt-0 mt-5 relative w-[8%] md:w-full" />
                <div className="flex md:flex-1 flex-col gap-11 justify-start w-[91%] md:w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-normal leading-[normal] min-w-[285px] md:ml-[0] ml-[1080px] sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray_400 uppercase"
                    onClick={() => navigate("/desktopone")}
                  >
                    nornirx
                  </Button>
                  <div className="flex flex-col font-montserrat items-start justify-start mr-[172px] w-[88%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[54px] items-center justify-start w-[46%] md:w-full">
                      <Img
                        src="images/img_profilepic.png"
                        className="h-56 md:h-auto object-cover"
                        alt="profilepic"
                      />
                      <div className="flex flex-col items-start justify-start w-[49%] sm:w-full">
                        <Text
                          className="font-extrabold text-white_A700 uppercase"
                          variant="body5"
                        >
                          USERNAME
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                          <Text
                            className="font-light text-white_A700"
                            variant="body5"
                          >
                            Artists:
                          </Text>
                          <Text
                            className="font-light mt-0.5 text-white_A700"
                            variant="body5"
                          >
                            Top Songs:
                          </Text>
                          <Text
                            className="font-light text-white_A700"
                            variant="body5"
                          >
                            Most Listened to:
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[139px] text-center text-white_A700 uppercase"
                      variant="body2"
                    >
                      TOP MOODS this month
                    </Text>
                    <List
                      className="flex-col gap-[31px] grid items-center mt-[50px] w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] mb-[7px] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/fillerpone")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          NEO-classical{" "}
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] mb-[7px] min-w-[376px] sm:min-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/edmpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          EDM
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full sm:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 uppercase"
                          onClick={() => navigate("/instrumentalpage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          INSTRUMENTAL
                        </Button>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
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
                          onClick={() => navigate("/rappage")}
                          shape="CircleBorder48"
                          size="2xl"
                          variant="GradientGray5066WhiteA70019"
                        >
                          RAP
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

export default DesktopFifteenPage;
