import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";
import DesktopFourteenStackinfo from "components/DesktopFourteenStackinfo";

const DesktopFourteenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-end mx-auto w-full">
        <div className="bg-gradient4  flex flex-col items-center justify-start pb-[9px] w-full">
          <div className="bg-black_900_4f flex flex-col items-center justify-start w-full">
            <div className="bg-gradient3  flex flex-col items-start justify-end p-[45px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start mb-[3px] mt-[18px] w-[94%] md:w-full">
                <DesktopFourteenStackinfo className="h-[867px] md:mt-0 mt-[21px] relative shadow-bs1 w-[9%] md:w-full" />
                <div className="flex flex-col gap-[52px] items-start justify-start w-[87%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[279px] items-start justify-start w-[61%] md:w-full">
                    <Text
                      className="font-extrabold font-montserrat sm:mt-0 mt-[69px] text-center text-white_A700 uppercase"
                      variant="body5"
                    >
                      ABOUT US
                    </Text>
                    <Button
                      className="common-pointer bg-transparent cursor-pointer font-fontspringdemoorganettosemiexp font-normal leading-[normal] mb-[30px] min-w-[285px] sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray_400 uppercase"
                      onClick={() => navigate("/desktopone")}
                    >
                      nornirx
                    </Button>
                  </div>
                  <div className="bg-gradient1  md:ml-[0] ml-0.5 p-px sm:ml-[0] w-full ">
                    <div className="bg-black_900_4f bg-gradient7  border-solid h-[647px] shadow-bs1"></div>
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

export default DesktopFourteenPage;
