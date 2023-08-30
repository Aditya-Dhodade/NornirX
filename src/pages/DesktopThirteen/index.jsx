import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, List } from "components";
import DesktopElevenNotliked from "components/DesktopElevenNotliked";
import DesktopThirteenStackfavorite from "components/DesktopThirteenStackfavorite";

const DesktopThirteenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-fontspringdemoorganettosemiexp items-center justify-end mx-auto w-full">
        <div className="bg-gradient4  flex flex-col items-center justify-start pb-[9px] w-full">
          <div className="bg-black_900_4f flex flex-col items-center justify-start w-full">
            <div className="bg-gradient3  flex flex-col items-start justify-end p-[37px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-11 items-center justify-start mb-3.5 mt-[26px] md:px-5 w-[95%] md:w-full">
                <DesktopThirteenStackfavorite className="h-[867px] relative shadow-bs1 w-[9%] md:w-full" />
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-[89%] md:w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-normal leading-[normal] min-w-[285px] sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray_400 uppercase"
                    onClick={() => navigate("/desktopone")}
                  >
                    nornirx
                  </Button>
                  <List
                    className="flex-col font-montserrat gap-[34px] grid items-center w-full"
                    orientation="vertical"
                  >
                    {new Array(5).fill({}).map((props, index) => (
                      <React.Fragment key={`DesktopElevenNotliked${index}`}>
                        <DesktopElevenNotliked
                          className="bg-gradient  flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-[61px] w-full"
                          price="SONG NAME"
                          artistname="Artist Name"
                          mail="images/img_mail.svg"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThirteenPage;
