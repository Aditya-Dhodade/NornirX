import React from "react";

import { Img, Text } from "components";

const DesktopElevenNotliked = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
          <div className="bg-blue_gray_100 h-[78px] rounded-[50%] w-[78px]"></div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px]">
            <Text
              className="font-montserrat font-semibold text-white_A700 uppercase"
              variant="body6"
            >
              {props?.price}
            </Text>
            <Text
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {props?.artistname}
            </Text>
          </div>
          <Img
            src={props?.mail}
            className="h-[35px] md:ml-[0] ml-[892px] w-[35px]"
            alt="mail"
          />
        </div>
      </div>
    </>
  );
};

DesktopElevenNotliked.defaultProps = {
  price: "SONG NAME",
  artistname: "Artist Name",
  mail: "images/img_mail.svg",
};

export default DesktopElevenNotliked;
