import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-black_900 bg-cover bg-no-repeat flex flex-col h-[718px] w-[1534px] font-fontspringdemoorganettosemiexp "
        style={{ backgroundImage: "url('images/img_desktoptwo.png')" }}
      >
        <div className="  flex flex-col md:gap-10 gap-[195px] items-center justify-start p-[59px] md:px-10 sm:px-5 w-full">
        <h1
          className=" text-white_A700 max-w-[544px] md:max-w-full"
          style={{ fontSize: '50px', color: 'white',fontWeight: 'bold' }}>Nornir<span style={{ fontSize: '50px', color: 'red',fontWeight: 'bold' }}>X</span> </h1>
          <div 
          style={{ position:'absolute', top:'230px' }}
          className="flex flex-col font-montserrat gap-[17px] items-start justify-center mb-[281px] self-stretch w-auto sm:w-full">
            <Text
              className="max-w-[544px] md:max-w-full text-left text-white_A700 uppercase"
              variant="body2"
            >
              Get Song recommendations according to your Mood
            </Text>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[544px] sm:min-w-full md:text-4xl sm:text-[34px] text-[38px] text-black_900_01 text-center uppercase w-auto"
              onClick={() => navigate("/login")}
              shape="CircleBorder48"
              size="lg"
              variant="FillWhiteA700"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
