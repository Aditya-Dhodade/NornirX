import React, { useEffect, useState } from "react";
import "./main.css";
// import 'whatwg-fetch';

import { useNavigate, Link } from "react-router-dom";

import { Button, List, Text } from "components";
import DesktopElevenNotliked from "components/DesktopElevenNotliked";
import DesktopElevenStackhome from "components/DesktopElevenStackhome";
import { getDatabase, ref, onValue, set, update, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import axios from 'axios';
import Heart from "react-animated-heart";

// import csv from 'csv-parser';
// import fs from 'fs';
// import Papa from 'papaparse';


const DesktopElevenPage = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  var s = "";
  const [data, setData] = useState(null);
  var tempo;
  const [data11, setData11] = useState(null);
  const [datapi, setDatapi] = useState(null);
  const [result, setResult] = useState(null);
  const [liked, setLiked] = useState(false);
  const [isClick, setClick] = useState(false);

  const [isClick1, setClick1] = useState(false);
  const [isClick2, setClick2] = useState(false);
  const [isClick3, setClick3] = useState(false);
  const [isClick4, setClick4] = useState(false);
  const [isClick5, setClick5] = useState(false);


  const liked1 = () => {
    setClick1(!isClick1);
    var weight_str = datapi.data[0]['weight_str'];
    weight_str = weight_str.substring(0,weight_str.length - 4);
    var new_weight = [];
    var s = "";
     var count =0;
    for(let i=0;i<weight_str.length;i++){
      if(weight_str[i] == "+"){
          new_weight[count] = parseFloat(s);
          s= "";
          count++
      }else{
          s += weight_str[i]
      }
    }
    new_weight[count] = parseFloat(s);
    new_weight[count+1] = 0;
    var temp1 = []
    // prompt(temp.length);
    for (let i = 0; i < new_weight.length; i++) {
      temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
    }
    // prompt(temp1);
    const databaseref = ref(db, "users/" + userId);
    const data_update = {
      vect: temp1,
    };
    update(databaseref, data_update)
    .then(() => {
          prompt("Data stored in Firebase Realtime Database.");
      })
      .catch((error) => {
        prompt("Error storing data in Firebase:", error);
      });
  }
 
  const liked2 = () =>
  {
    setClick2(!isClick2);
  }
  const liked3 = () => {
    setClick3(!isClick3);


  }
  const liked4 = () => {
    setClick4(!isClick4);
  }
  const liked5 = () => {
    setClick5(!isClick5);
  }


  var data1;
  const temp = [];
  var s11 = "";
  var val = "";
  var i =0;
  var temp11 = "";



  useEffect(() => {

    
    const fetchData11 = async () => {
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, async (snapshot)  => {
        const data11 = await snapshot.val();
        s11 =  data11;
        // setData(s11);
        for(let i =0;i<data11.length;i++){
          temp[i] = data11[i];
          temp11 += ("+"+data11[i].toString());
        }
        temp11 += "+0";
        temp11 = temp11.substring(1);
        // prompt("abcd"+temp11);
        console.log(temp11);
        axios.post('get_recomm?weight_string='+temp11)
        .then(datapi => {
          // Handle the response data here
          // datapi = response.data;
          setDatapi(datapi);
          console.log(JSON.stringify(datapi.data));


        })
        .catch(error => {
          console.log("sdfs",error);
        });

      });
      
    };
    
    fetchData11();
  }, []);



  


 
useEffect(() => {
    
    
  const fetchDatapi = async () => {


    const databaseRef = ref(db, "users/" + userId + "/name");
    onValue(databaseRef, async (snapshot)  => {
      const data = await snapshot.val();
      // prompt(data);    
      s =  data;
      setData(s);
    });
  
  };

  fetchDatapi();
}, []);
  
  
  useEffect(() => {
    
    
    const fetchData = async () => {
      const databaseRef = ref(db, "users/" + userId + "/name");
      onValue(databaseRef, async (snapshot)  => {
        const data = await snapshot.val();
        s =  data;
        setData(s);
      });

    };

    fetchData();
  }, []);

  return (
    <>

     
 

      <div 
      
      className=" justify-end mx-auto w-full">
        <div className="bg-gradient4  sm:h-[1000px] h-[1809px] md:h-[1207px] pb-[9px] md:px-5 relative w-full">
          {/* <div className="bg-gradient3  h-[1800px] m-auto w-full"></div> */}
          <div className="absolute bg-black_900_4f flex flex-col h-max inset-[0] items-start  m-auto p-[39px] sm:px-5 w-full h-[1800px]">

            <div className=" flex-row gap-[34px] items-start justify-start mb-7 mt-6 w-[94%] md:w-full">
              <div className=" justify-start w-[90%] md:w-full">
             </div>
             </div>
          </div>
        </div>
      </div>

      <h1
            className=" text-white_A700"
            style={{
              fontSize: "50px",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              top: "20px",
              left:"650px"
            }}
          >
            Nornir
            <span
              style={{ fontSize: "50px", color: "red", fontWeight: "bold" }}
            >
              X
            </span>{" "}
          </h1>

                <Text
                  className="font-montserrat font-semibold ml-2 md:ml-[0] mt-[38px] text-shadow-ts text-white_A700 uppercase"
                  variant="body3"
                  style={{position:"absolute",top:"150px",left:"300px"}}
                >
                  {/* <span className="md:text-[43px] sm:text-[37px] text-white_A700 text-[47px] font-extrabold">
                    Hello{" "}
                  </span> */}
                  <span
                  style={{position:"relative",top:"-78px",left:"200px"}}
                  className="md:text-[43px] sm:text-[37px] text-deep_purple_A100 text-[47px] font-extrabold">
                  {data ? <div>{"Hello  " + data}</div> : <div>Hello User</div>}
                  </span>
                </Text>


                 {datapi ?            <div>     <a href={(datapi.data)[0]['redirect_link']} target="_blank">
                <button
                  style={{position:"absolute",top:"550px",height:"130px",width:"1225px",left:"75px"}}
                  className="glass-button">
 <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[0]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[0]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[0]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>

</div>  
                  </button>
                  </a>  
                  {/* <div style={{position:"absolute", top:"570px", left:"1350px"}}> */}
                  <button 
                  style={{position:"absolute",top:"550px",left:"1300px",height:"130px"}}
                  className="glass-button1">
                    <Heart
                              isClick={isClick1} onClick={liked1} />
                              </button>
                              </div>
                  :  
                <button
                  style={{position:"absolute",top:"550px",height:"130px",width:"1300px",left:"75px"}}
                  className="glass-button2">
 <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[0]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[0]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[0]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
            <Heart
            isClick={isClick1} onClick={() => setClick(!isClick)} />
</div>  
                  </button>
                  }
                  {datapi ? <div><a href={(datapi.data)[1]['redirect_link']} target="_blank"><button 
                  style={{position:"absolute",top:"400px",height:"130px",width:"1225px",left:"75px"}}
                  className="glass-button">
                  <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[1]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[1]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[1]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
</div>  
                  </button></a>
                  <button 
                  style={{position:"absolute",top:"400px",left:"1300px",height:"130px"}}
                  className="glass-button1">
                    <Heart
                              isClick={isClick2} onClick={liked2} />
                              </button></div> :<button 
                  style={{position:"absolute",top:"400px",height:"130px",width:"1300px",left:"75px"}}
                  className="glass-button2">
                  <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[1]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[1]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[1]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
            <Heart
            isClick={isClick2} onClick={() => setClick(!isClick)} />
</div>  
                  </button>}
                 {datapi ? <div><a href={(datapi.data)[2]['redirect_link']} target="_blank"> <button 
                  style={{position:"absolute",top:"700px",height:"130px",width:"1225px",left:"75px"}}
                  className="glass-button">
      <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[2]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[2]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[2]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>

</div>  
                  </button></a>
                  <button 
                  style={{position:"absolute",top:"250px",left:"1300px",height:"130px"}}
                  className="glass-button1">
                    <Heart
                              isClick={isClick3} onClick={liked3} />
                              </button>
                  </div>: <button 
                  style={{position:"absolute",top:"700px",height:"130px",width:"1300px",left:"75px"}}
                  className="glass-button2">
      <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[2]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[2]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[2]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
            <Heart
            isClick={isClick3} onClick={() => setClick(!isClick)} />
</div>  
                  </button>}
                  {datapi ? <div><a href={(datapi.data)[3]['redirect_link']} target="_blank">
                  <button 
                  style={{position:"absolute",top:"850px",height:"130px",width:"1225px",left:"75px"}}
                  className="glass-button">
   <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[3]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[3]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[3]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
</div>  
                  </button>
                  </a>
                                    <button 
                                    style={{position:"absolute",top:"850px",left:"1300px",height:"130px"}}
                                    className="glass-button1">
                                      <Heart
                                                isClick={isClick4} onClick={liked4} />
                                                </button>
                  </div>:<button 
                  style={{position:"absolute",top:"850px",height:"130px",width:"1300px",left:"75px"}}
                  className="glass-button2">
   <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[3]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[3]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[3]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
            <Heart
            isClick={isClick4} onClick={() => setClick(!isClick)} />
</div>  
                  </button>}

                  {datapi ? <div><a href={(datapi.data)[4]['redirect_link']} target="_blank">
                  <button 
                  style={{position:"absolute",top:"250px",height:"130px",width:"1225px",left:"75px"}}
                  className="glass-button">
 <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[4]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[4]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[4]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>

</div>  
                  </button>
                  </a>
                  <button 
                  style={{position:"absolute",top:"700px",left:"1300px",height:"130px"}}
                  className="glass-button1">
                    <Heart
                              isClick={isClick5} onClick={liked5} />
                              </button>
                  </div> : <button 
                  style={{position:"absolute",top:"250px",height:"130px",width:"1300px",left:"75px"}}
                  className="glass-button2">
 <div
                                style={{ position: "relative", left: "5px", top: "10px" }}
                                className="image-container"
                              >

                          {datapi ?                           <img
                                  src={(datapi.data)[4]['poster_link']}
                                  alt="Image"
                                  className="circular-image"
                                />  :                           <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35v1umVMfJ04UPqguGdee66xNca8pEiEapg&usqp=CAU"
                                  alt="Image"
                                  className="circular-image"
                                /> }


                              </div>

                              <Text
                              style={{position:"relative",top:"-70px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-white_A700 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[4]["name"]}</div> : <div>Loading.....</div>}
            </Text>
            <Text
                              style={{position:"relative",top:"-50px",left:"-70px",fontWeight:"bold"}}
              className="font-medium font-montserrat mt-[3px] text-deep_purple_A100 uppercase"
              variant="body6"
            >
              {datapi ? <div>{(datapi.data)[4]["artist"]}</div> : <div>Loading.....</div>}
            </Text>
             <div style={{position:"Relative",top:"-145px",left:"620px"}}>
            <Heart
            isClick={isClick5} onClick={() => setClick(!isClick)} />
</div>  
                  </button>}
            


    </>
  );
};

export default DesktopElevenPage;
