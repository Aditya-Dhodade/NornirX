import React from "react";

import { Img, Text } from "components";

const DesktopSixStackrectangletwelve = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white_A700 h-[122px] inset-[0] justify-center m-auto rounded-[61px] w-[99%]"></div>
        <div className="absolute flex sm:flex-col flex-row gap-7 h-max inset-[0] items-center justify-center m-auto w-1/2">
          <Text
            className="font-montserrat text-black_900_01 text-center uppercase"
            variant="body1"
          >
            {props?.next}
          </Text>
          <Img
            src="images/img_arrowright.svg"
            className="h-[55px]"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

DesktopSixStackrectangletwelve.defaultProps = { next: "Next" };

export default DesktopSixStackrectangletwelve;
