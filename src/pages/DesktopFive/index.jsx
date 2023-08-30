import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import firebase from "../../firebase";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";
// import { useHistory } from 'react-router-dom';

// import DesktopFiveLogin from "components/DesktopFiveLogin";
// import DesktopTwoNornirx from "components/DesktopTwoNornirx";

const DesktopFivePage = () => {
  const navigate = useNavigate();
//   const history = useHistory();


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username,setUsernmae] = useState("");

const signUp = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const database = getDatabase();
    const databaseRef = ref(database, 'users/' + user.uid);

    const data = {
      name: username,
      email: email,
      vect: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    set(databaseRef, data)
      .then(() => {
        // prompt('Data stored in Firebase Realtime Database.');
        navigate("/load1");
      })
      .catch((error) => {
        prompt('Error storing data in Firebase:', error);
      });
        prompt("signup successful");
        // navigate("/desktopfour");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div
        className="bg-black_900 bg-cover bg-no-repeat flex flex-col h-[718px] w-[1519px] font-fontspringdemoorganettosemiexp"
        style={{ backgroundImage: "url('images/temp6.png')" }}
      >
        <div className=" flex flex-col md:gap-10 gap-[89px] items-center justify-end p-11 md:px-10 sm:px-5 h-[718px] w-[1519px]">
          <h1
            className=" text-white_A700 max-w-[544px] md:max-w-full"
            style={{
              fontSize: "50px",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              top: "50px",
            }}
          >
            Nornir
            <span
              style={{ fontSize: "50px", color: "red", fontWeight: "bold" }}
            >
              X
            </span>{" "}
          </h1>

          <div className="flex flex-col font-montserrat items-center justify-start w-[88%] md:w-full">
            <div
              style={{ position: "absolute", top: "130px" }}
              className="flex flex-col gap-5 items-center justify-start w-auto md:w-full"
            >
              <Text
                className="text-black_900_01 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Hello there!
              </Text>
              <Text
                style={{ fontSize: "35px" }}
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
            <div style={{ position: "absolute", top: "300px", left: "330px" }}>
              <div className="flex flex-col md:gap-10 gap-[103px] items-center justify-start mt-16 w-[90%] md:w-full">
                <form onSubmit={signUp}>
                  <div
                    // style={{ position:'absolute', top:'230px' }}
                    className="flex flex-col items-center justify-start w-full"
                  >
                    <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between">
                        <input
                          class="sm:flex-1 w-auto sm:w-full 
              rounded-[36px] 
              outline outline-[4px] outline-gray_800 
              p-[25px] sm:px-5"
                          style={{
                            backgroundColor: "transparent",
                            height: "75px",
                            width: "440px",
                            borderRadius: "50px",
                          }}
                          //   id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          //   wrapClassName="sm:flex-1 w-auto sm:w-full"
                          //   className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-[400px]"
                          type="email"
                          name="groupNine"
                          placeholder="Email Id"
                          shape="RoundedBorder36"
                          size="sm"
                          variant="OutlineGray800"
                        ></input>
                        <input
                          class="sm:flex-1 w-auto sm:w-full 
                                rounded-[36px] 
                                outline outline-[4px] outline-gray_800 
                                p-[25px] sm:px-5"
                          style={{
                            backgroundColor: "transparent",
                            height: "75px",
                            width: "440px",
                            borderRadius: "50px",
                
                            
                            // borderWidth:'5px',
                            // borderBlockColor:'black'
                            
                          }}
                          //   id="email"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          //   wrapClassName="sm:flex-1 w-auto sm:w-full"
                          //   className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-[400px]"
                          type="password"
                          name="groupNine"
                          placeholder="Password"
                          shape="RoundedBorder36"
                          size="sm"
                          variant="OutlineGray800"
                        ></input>
                        {/* <input
                          class="sm:flex-1 w-auto sm:w-full 
                            rounded-[36px] 
                            outline outline-[4px] outline-gray_800 
                            p-[25px] sm:px-5"
                          style={{
                            backgroundColor: "transparent",
                            height: "75px",
                            width: "440px",
                            borderRadius: "50px",
                          }}
                          //   id="pass"
                          // ref="password"

                          //   style={{backgroundColor:"transparent", height:"75px", width:'440px',borderRadius:'50px'}}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          wrapClassName="sm:flex-1 w-auto sm:w-full"
                          className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-[400px]"
                          type="password"
                          name="groupTen"
                          placeholder="Password"
                          shape="RoundedBorder36"
                          size="sm"
                          variant="OutlineGray800"
                        ></input> */}
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between">
                        <input
                      class="sm:flex-1 w-auto sm:w-full 
                      rounded-[36px] 
                      outline outline-[4px] outline-gray_800 
                      p-[25px] sm:px-5"
                style={{
                  backgroundColor: "transparent",
                  height: "75px",
                  width: "440px",
                  borderRadius: "50px",
      
                  
                  borderWidth:'5px',
                  borderBlockColor:'black'
                  
                }}

                           value={username}
                          onChange={(e) => setUsernmae(e.target.value)}
                          // wrapClassName="sm:flex-1 w-auto sm:w-full"
                          // className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-[400px]"
                          type="text"
                          name="groupEight"
                          placeholder="Username"
                          shape="RoundedBorder36"
                          size="sm"
                          variant="OutlineGray800"
                        ></input>
                        <Input
                          wrapClassName="sm:flex-1 w-auto sm:w-full"
                          className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-lg w-[400px]"
                          type="password"
                          name="groupEleven"
                          placeholder="Confirm Password"
                          shape="RoundedBorder36"
                          size="sm"
                          variant="OutlineGray800"
                        ></Input>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    style={{
                      position: "absolute",
                      top: "280px",
                      left: "200px",
                      fontSize: "30px",
                    }}
                    className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[411px] sm:min-w-full sm:text-[33px] md:text-[35px] text-[37px] text-center text-white_A700 uppercase w-auto h-[60px]"
                    // onClick={() => navigate("/desktopseven")}
                    shape="RoundedBorder36"
                    size="sm"
                    variant="FillBlack90001"
                  >
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>

            {/* <div className="sign-in-container">
              <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
              </form>
            </div> */}
            <a onClick={() => navigate("/desktopfour")} href="javascript:">
              <Text
                style={{ position: "absolute", top: "670px", left: "630px" }}
                className=" text-[21px] text-black text-left w-auto"
              >
                Already user?
              </Text>
              <Text
                style={{
                  position: "absolute",
                  top: "670px",
                  left: "780px",
                  color: "red",
                }}
                className=" text-[21px]"
              >
                Log In{" "}
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
