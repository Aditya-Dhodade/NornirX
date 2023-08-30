import React from "react";

import { Img } from "components";

const DesktopFourteenStackinfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[867px] md:h-[889px] inset-y-[0] left-[0] my-auto w-[77%]">
          <Img
            src="images/img_subtract_2.png"
            className="absolute h-[889px] inset-[0] justify-center m-auto object-cover"
            alt="subtract"
          />
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[47%]">
            <Img src="images/img_home.svg" className="h-[43px]" alt="home" />
            <Img
              src="images/img_favorite.svg"
              className="h-[37px] mt-[257px]"
              alt="favorite"
            />
            <Img
              src="images/img_camera.svg"
              className="h-[43px] mt-[113px] w-[43px]"
              alt="camera"
            />
            <Img
              src="images/img_contrast.svg"
              className="h-[43px] mt-[113px]"
              alt="contrast"
            />
          </div>
        </div>
        <div className="absolute bg-gradient1  border border-solid border-white_A700 flex flex-col h-[82px] items-center justify-start p-[19px] right-[0] rounded-[50%] top-[28%] w-[82px]">
          <Img src="images/img_info.svg" className="h-[43px]" alt="info" />
        </div>
      </div>
    </>
  );
};

DesktopFourteenStackinfo.defaultProps = {};

export default DesktopFourteenStackinfo;
