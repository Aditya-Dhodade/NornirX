import React from "react";

import { Img } from "components";

const DesktopElevenStackhome = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[867px] md:h-[889px] inset-y-[0] left-[0] my-auto w-[77%]">
          <Img
            src="images/img_subtract.png"
            className="absolute h-[889px] inset-[0] justify-center m-auto object-cover"
            alt="subtract"
          />
          <div className="absolute bottom-[12%] flex flex-col md:gap-10 gap-[113px] inset-x-[0] items-center justify-start mx-auto w-[47%]">
            <Img src="images/img_info.svg" className="h-[43px]" alt="info" />
            <Img
              src="images/img_favorite.svg"
              className="h-[37px]"
              alt="favorite"
            />
            <Img
              src="images/img_camera.svg"
              className="h-[43px] w-[43px]"
              alt="camera"
            />
            <Img
              src="images/img_contrast.svg"
              className="h-[43px]"
              alt="contrast"
            />
          </div>
        </div>
        <div className="absolute bg-gradient1  mt-24 p-px rounded-[41px] top-[11%] w-[69%] ">
          <div className="absolute bg-gradient1  border-solid flex flex-col h-[82px] items-center justify-start p-[19px] right-[0] rounded-[50%] top-[0]">
            <Img src="images/img_home.svg" className="h-[43px]" alt="home" />
          </div>
        </div>
      </div>
    </>
  );
};

DesktopElevenStackhome.defaultProps = {};

export default DesktopElevenStackhome;
