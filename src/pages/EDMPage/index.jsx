import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import DesktopElevenNotliked from "components/DesktopElevenNotliked";

const EDMPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient4  flex flex-col font-montserrat gap-[9px] items-center justify-end mx-auto w-full">
        <div className="md:h-[1483px] h-[2004px] md:px-5 relative w-full">
          <Img
            src="images/img_rectangle10_3.png"
            className="h-[1483px] mx-auto object-cover w-full"
            alt="rectangleTen"
          />
          <div className="absolute bg-black_900_4f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 w-full">
            <div className="flex flex-col items-end justify-start mt-7 w-[95%] md:w-full">
              <div className="flex flex-row font-fontspringdemoorganettosemiexp sm:gap-10 items-start justify-between w-3/5 md:w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-normal leading-[normal] min-w-[285px] mt-[3px] sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray_400 uppercase"
                  onClick={() => navigate("/desktopone")}
                >
                  nornirx
                </Button>
                <Img
                  src="images/img_backbutton.png"
                  className="h-[78px] md:h-auto object-cover w-[78px]"
                  alt="backbutton"
                />
              </div>
              <Text
                className="font-extrabold font-montserrat mt-[70px] text-center text-white_A700 uppercase"
                variant="body3"
              >
                Mood Name
              </Text>
              <List
                className="flex-col font-montserrat gap-[34px] grid items-center mt-[33px] w-full"
                orientation="vertical"
              >
                {new Array(11).fill({}).map((props, index) => (
                  <React.Fragment key={`DesktopElevenNotliked${index}`}>
                    <DesktopElevenNotliked
                      className="bg-gradient  flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-[61px] w-full"
                      price="SONG NAME"
                      artistname="Artist Name"
                      mail="images/img_favorite_white_a700.svg"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <DesktopElevenNotliked
          className="bg-gradient  flex flex-col items-center justify-start max-w-[1465px] mx-auto p-[22px] md:px-5 rounded-[61px] w-full"
          price="SONG NAME"
          artistname="Artist Name"
          mail="images/img_favorite_white_a700.svg"
        />
      </div>
    </>
  );
};

export default EDMPagePage;
