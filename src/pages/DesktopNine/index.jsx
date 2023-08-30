import React , { useEffect, useState } from "react";

import { Text } from "components";
import { getDatabase, ref, onValue, set, update, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const DesktopNinePage = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  var s = "";
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/load2'); // Redirect to the other page after 5 seconds
    }, 6000);

    return () => {
      clearTimeout(redirectTimer); // Clear the timer if the component is unmounted
    };
  }, [navigate]);

  useEffect(() => {

    
    const fetchData = async () => {
      const databaseRef = ref(db, "users/" + userId + "/name");
      onValue(databaseRef, async (snapshot)  => {
        const data = await snapshot.val();
        // prompt(data);    
        s =  data;
        setData(s);
      });
      // Perform your asynchronous operation here

    };

    fetchData();
  }, []);
  
  return  (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="bg-gradient4  flex flex-col items-center justify-start pb-[9px] w-full">
          <div className="bg-black_900_ea flex flex-col items-center justify-start p-[150px] md:px-10 sm:px-5 w-full">
            <Text
              className="my-[71px] text-center text-white_A700 uppercase"
              as="h2"
              variant="h2"
            >
              <span className="md:text-5xl text-white_A700 text-[69px] font-montserrat font-extrabold">
                Welcome{" "}
              </span>
              <span
              className="md:text-5xl text-deep_purple_A100 text-[69px] font-montserrat font-extrabold">
               
                {data ? <div>{data}</div> : <div>User</div>}
              </span>
            </Text>
            
          <div>
          <img 
          style={{height:"100px"}}
          src="images/loading-unscreen.gif" alt="GIF Image" />

            {/* <video autoPlay loop 
            style={{height:"100px"}}
            > */}
              {/* <source src="images/loading.mp4" type="video/mp4" /> */}
              {/* Your browser does not support the video tag. */}
            {/* </video> */}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNinePage;
