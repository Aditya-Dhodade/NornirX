import React from "react";

import { Img, Text } from "components";

const DesktopEightPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="bg-gradient4  flex flex-col items-center justify-start pb-[9px] w-full">
          <div className="bg-black_900_ea flex flex-col gap-[26px] items-center justify-start p-[404px] md:px-10 sm:px-5 w-full">
            <Text
              className="lowercase text-center text-white_A700"
              as="h1"
              variant="h1"
            >
              System firing up
            </Text>
            <Img
              src="images/img_component19.svg"
              className="h-14 mb-[5px]"
              alt="componentNineteen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopEightPage;
