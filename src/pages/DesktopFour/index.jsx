import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";

const DesktopFourPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        prompt('login suc');
        navigate("/main");
        console.log(userCredential);
      })
      .catch((error) => {
        prompt(error);
        console.log(error);
      });
  };

  return (
    <>
<div
        className="bg-black_900 bg-cover bg-no-repeat flex flex-col h-[718px] w-[1519px]font-fontspringdemoorganettosemiexp"
        style={{ backgroundImage: "url('images/img_desktoptwo.png')", overflow:"hidden" }}
      >
         <h1
          className=" text-white_A700 max-w-[544px] md:max-w-full"
          style={{position:"absolute",left:'290px', top: '30px', fontSize: '50px', color: 'black',fontWeight: 'bold' }}>Nornir<span style={{ fontSize: '50px', color: 'red',fontWeight: 'bold' }}>X</span> </h1>
         
        <div className="  flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between max-w-[1581px] md:px-5 w-full">
            <div className="bg-white_A700 flex md:flex-1 flex-col justify-start p-10 sm:px-5 rounded-bl-none rounded-br-[63px] rounded-tl-none rounded-tr-[63px] w-[52%] h-[718px] md:w-full">

              <div className="flex flex-col font-montserrat gap-[15px] items-center justify-start md:ml-[0] ml-[125px] mt-[121px] w-auto md:w-full">
                <Text
                  style={{ position:'absolute', top:'100px', left:'230px',fontSize:'50px' }}
                  className="text-black_900_01 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Hello there!
                </Text>
                <Text
                  style={{ position:'absolute', top:'180px', left:'150px', fontSize:'30px' }}

                  className="not-italic text-black_900_01 text-center"
                  variant="body3"
                >
                  <>
                    Welcome to the only
                    <br />
                    song recommender you need
                  </>
                </Text>
              </div>
              <div 
              className="flex flex-col font-montserrat items-start justify-start mt-[50px] mx-auto w-[79%] md:w-full">
                <form onSubmit={signIn}>
                <div
                style={{ position:'absolute', top:'310px', left:'140px' }}
                                  >
                <input
                                      class="sm:flex-1 w-auto sm:w-full 
                                      rounded-[36px] 
                                      outline outline-[4px] outline-gray_800 
                                      p-[25px] sm:px-5"
                                              style={{backgroundColor:"transparent", height:"75px", width:'440px',borderRadius:'50px'}}
                  wrapClassName="w-[500px]"
                  // className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-full"
                  type="email"
                  name="emailid"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  
                  placeholder="Email Id"
                  shape="RoundedBorder36"
                  size="sm"
                  variant="OutlineGray800"
                ></input>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                                      class="sm:flex-1 w-auto sm:w-full 
                                      rounded-[36px] 
                                      outline outline-[4px] outline-gray_800 
                                      p-[25px] sm:px-5"
                                              style={{backgroundColor:"transparent", height:"75px", width:'440px',borderRadius:'50px',
                                            position:"absolute", top:'100px', left:"0px"}}
                  wrapClassName="mt-[29px] w-[500px]"
                  // className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  shape="RoundedBorder36"
                  size="sm"
                  variant="OutlineGray800"
                  ></input>
                  </div>
                <a
                  href="javascript:"
                  className="font-normal ml-96 md:ml-[0] mt-[31px] sm:text-[17px] md:text-[19px] text-[21px] text-blue_800 text-left w-auto"
                >
                  <Text
                                  style={{ position:'absolute', top:'510px', left:'420px' , color:"red", fontSize:'20px' }}

                  className="">Forgot Password?</Text>
                </a>
                <Button
                type = "submit"
                  style={{ position:'absolute', top:'530px', left:'220px', fontSize:'30px' }}
                  className="cursor-pointer font-extrabold leading-[normal] min-w-[300px] sm:min-w-full mt-[26px] sm:text-[33px] md:text-[35px] text-[37px] text-center text-white_A700 uppercase w-auto h-[60px]"
                  shape="RoundedBorder36"
                  size="sm"
                  variant="FillBlack90001"
                >
                  Log in
                </Button>
                </form>
              </div>
              <div className="font-montserrat md:h-[182px] h-[29px] mb-[125px] md:ml-[0] ml-[143px] mt-7 relative w-[59%] sm:w-full">
              <a
                  onClick={() => navigate("/signup")}

                  href="javascript:"
                >
                  <Text
                                  style={{ position:'absolute', top:'380px', left:'80px',  }}

                                  className=" text-[21px] text-black text-left w-auto">New Here?</Text>
                                    <Text
                                  style={{ position:'absolute', top:'380px', left:'200px',color:'red'  }}

                                  className=" text-[21px]">Sign Up</Text>
                </a>
                {/* <Text
                  className="absolute font-normal h-full inset-[0] justify-center m-auto not-italic text-black_900_01 text-left w-max"
                  variant="body4"
                ></Text> */}
                {/* <DesktopFourSignup
                  className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[15%] w-auto sm:w-full"
                  signup="New here ? "
                /> */}
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-montserrat md:gap-10 gap-[750px] justify-start w-[47%] md:w-full">
              <Button
                className="cursor-pointer font-black leading-[normal] min-w-[740px] md:min-w-full sm:text-3xl md:text-[32px] text-[34px] text-center text-white_A700 uppercase w-auto"
                shape="RoundedBorder53"
                size="xl"
                variant="Outline"
              >
                Music that defines you
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
