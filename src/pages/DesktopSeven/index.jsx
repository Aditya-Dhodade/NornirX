import React, { useEffect } from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";


const DesktopSevenPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/select'); // Redirect to the other page after 5 seconds
    }, 6000);

    return () => {
      clearTimeout(redirectTimer); // Clear the timer if the component is unmounted
    };
  }, [navigate]);
  return (

    // <>
        <div
      className="bg-black_900 bg-cover bg-no-repeat flex flex-col h-[718px] w-[1549px] m-auto md:px-5 w-full"
      style={{ backgroundImage: "url('images/use.png')" }}

      
    > 
              <div className="flex flex-col gap-[37px] items-center justify-start max-w-[1358px] mb-[1876px] mt-[298px] w-full">
            <Text
            style={{position:'absolute', top:'200px', left:"250px"}}
              className="text-center text-white_A700 uppercase"
              variant="body10"
            >
              <span className="md:text-5xl text-white_A700 text-[100px] font-montserrat font-extrabold">
                getting{" "}
              </span>
              <span className="md:text-5xl text-deep_purple_A100 text-[100px] font-montserrat font-extrabold">
                started
              </span>
            </Text>
            <Text 
            style={{position:'absolute', top:'350px', left:"150px"}}

            className="text-center text-white_A700" as="h5" variant="h5">
              Select at least 5 songs from the following{" "}
            </Text>
            <div>
            <img 
          style={{position:"absolute",top:"500px", height:"100px"}}
          src="images/loading-unscreen.gif" alt="GIF Image" />
            </div>
          </div></div>
    //   <div className="bg-black_900 font-montserrat h-[3577px] mx-auto relative w-full">
    //     <div
    //       className="bg-cover bg-no-repeat h-[3577px] m-auto md:px-5 w-full"
    //       style={{ backgroundImage: "url('images/img_group670.png')" }}
    //     >
    //       <Img
    //         src="images/img_rectangle11.png"
    //         className="h-[3577px] m-auto object-cover w-full"
    //         alt="rectangleEleven"
    //       />
    //       <Img
    //         src="images/img_rectangle12.png"
    //         className="absolute h-[3577px] inset-[0] justify-center m-auto object-cover w-full"
    //         alt="rectangleTwelve"
    //       />
    //     </div>
    //     <div
    //       className="absolute bg-cover bg-no-repeat flex flex-col h-[2675px] inset-x-[0] items-center justify-start mx-auto p-[121px] md:px-10 sm:px-5 top-[0] w-full"
    //       style={{ backgroundImage: "url('images/img_group671.png')" }}
    //     >
          // <div className="flex flex-col gap-[37px] items-center justify-start max-w-[1358px] mb-[1876px] mt-[298px] w-full">
          //   <Text
          //     className="text-center text-white_A700 uppercase"
          //     variant="body10"
          //   >
          //     <span className="md:text-5xl text-white_A700 text-[114px] font-montserrat font-extrabold">
          //       getting{" "}
          //     </span>
          //     <span className="md:text-5xl text-deep_purple_A100 text-[114px] font-montserrat font-extrabold">
          //       started
          //     </span>
          //   </Text>
          //   <Text className="text-center text-white_A700" as="h5" variant="h5">
          //     Select at least 5 songs from the following{" "}
          //   </Text>
          // </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default DesktopSevenPage;
