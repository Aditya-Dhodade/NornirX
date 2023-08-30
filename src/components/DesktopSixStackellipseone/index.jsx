import React from "react";

import { Text } from "components";

const DesktopSixStackellipseone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white_A700 h-[122px] inset-[0] justify-center m-auto rounded-[61px] w-[99%]"></div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-center justify-center m-auto w-[91%]">
          <div className="bg-gray_500 h-[92px] rounded-[50%] w-[92px]"></div>
          <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[13px] w-[59%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="font-montserrat font-normal text-black_900_01"
                variant="body8"
              >
                {props?.loremipsumdopomOne}
              </Text>
            </div>
            <Text
              className="font-montserrat font-semibold text-black_900_01"
              variant="body8"
            >
              {props?.dualipa}
            </Text>
          </div>
          <div className="bg-white_A700 flex flex-col h-[38px] items-center justify-start sm:ml-[0] ml-[29px] sm:mt-0 my-[27px] rounded-[50%] w-[38px]">
            <div className="bg-black_900_01 h-[38px] rounded-[50%] w-[38px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSixStackellipseone.defaultProps = {
  loremipsumdopomOne: "Lorem Ipsum Dopomor Lipsum",
  dualipa: "Dua Lipa",
};

export default DesktopSixStackellipseone;
