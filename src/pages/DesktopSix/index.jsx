// import React, { useState } from "react";
import "./main.css";
// import firebase from 'firebase/app';

import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set, update, child, get } from "firebase/database";
import firebase from "../../firebase";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";


import { Button, List, Text } from "components";
import DesktopSixStackellipseone from "components/DesktopSixStackellipseone";
import DesktopSixStackrectangletwelve from "components/DesktopSixStackrectangletwelve";

const DesktopSixPage = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const db = getDatabase();
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  const handleHoverStart = () => {
    setIsPlaying(true);
  };

  const handleHoverEnd = () => {
    setIsPlaying(false);
  };
  const handleClick = () =>{
        if(isClicked == true){
          setIsClicked(false);
          var data;
          const temp = [];
          const databaseRef = ref(db, "users/" + userId + "/vect");
          onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            for(let i=0;i<data.length;i++){
              temp[i] = data[i];
            }
            
          });
          // prompt(temp);
          const new_weight = [
            0.0791372332326711, 0.3481523773553712, -0.3597472966505901,
            0.622424437376306, 0.7328996065465558, -0.5237708319182784,
            -0.8359439716177218, -0.4711193933368549, 1.7418822022224314,
            -0.7633342583475338, -0.5187178335792635, 0.2423292186010647,
            -0.4342621697369818
          ];
          var temp1 = [];
          for (let i = 0; i < new_weight.length; i++) {
            temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
          }
          const databaseref = ref(db, "users/" + userId);
          const data_update = {
            vect: temp1,
          };
          update(databaseref, data_update)
          .then(() => {
                // prompt("Data stored in Firebase Realtime Database.");
            })
            .catch((error) => {
              // prompt("Error storing data in Firebase:", error);
            });
        

          
        }else{
          setIsClicked(true);
        }
  };
  const [isClicked0, setIsClicked0] = useState(true);
  const [isPlaying0, setIsPlaying0] = useState(false);
  
  const handleHoverStart0 = () => {
    setIsPlaying0(true);
  };
  const handleHoverEnd0 = () => {
    setIsPlaying0(false);
  };

  const [isClicked1, setIsClicked1] = useState(true);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const handleHoverStart1 = () => {
    setIsPlaying1(true);
  };
  const handleHoverEnd1 = () => {
    setIsPlaying1(false);
  };
  const [isClicked2, setIsClicked2] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(false);
  
  const handleHoverStart2 = () => {
    setIsPlaying2(true);
  };
  const handleHoverEnd2 = () => {
    setIsPlaying2(false);
  };
  const [isClicked3, setIsClicked3] = useState(true);
  const [isPlaying3, setIsPlaying3] = useState(false);
  
  const handleHoverStart3 = () => {
    setIsPlaying3(true);
  };
  const handleHoverEnd3 = () => {
    setIsPlaying3(false);
  };
  const [isClicked4, setIsClicked4] = useState(true);
  const [isPlaying4, setIsPlaying4] = useState(false);
  
  const handleHoverStart4 = () => {
    setIsPlaying4(true);
  };
  const handleHoverEnd4 = () => {
    setIsPlaying4(false);
  };
  const [isClicked5, setIsClicked5] = useState(true);
  const [isPlaying5, setIsPlaying5] = useState(false);
  
  const handleHoverStart5 = () => {
    setIsPlaying5(true);
  };
  const handleHoverEnd5 = () => {
    setIsPlaying5(false);
  };
  const [isClicked6, setIsClicked6] = useState(true);
  const [isPlaying6, setIsPlaying6] = useState(false);
  
  const handleHoverStart6 = () => {
    setIsPlaying6(true);
  };
  const handleHoverEnd6 = () => {
    setIsPlaying6(false);
  };
  const [isClicked7, setIsClicked7] = useState(true);
  const [isPlaying7, setIsPlaying7] = useState(false);
  

  const handleHoverStart7 = () => {
    setIsPlaying7(true);
  };
  const handleHoverEnd7 = () => {
    setIsPlaying7(false);
  };
  const [isClicked8, setIsClicked8] = useState(true);
  const [isPlaying8, setIsPlaying8] = useState(false);
  
  const handleHoverStart8 = () => {
    setIsPlaying8(true);
  };
  const handleHoverEnd8 = () => {
    setIsPlaying8(false);
  };
  const [isClicked9, setIsClicked9] = useState(true);
  const [isPlaying9, setIsPlaying9] = useState(false);
 
  const handleHoverStart9 = () => {
    setIsPlaying9(true);
  };
  const handleHoverEnd9 = () => {
    setIsPlaying9(false);
  };
  const [isClicked10, setIsClicked10] = useState(true);
  const [isPlaying10, setIsPlaying10] = useState(false);
  
  const handleHoverStart10 = () => {
    setIsPlaying10(true);
  };
  const handleHoverEnd10 = () => {
    setIsPlaying10(false);
  };
  const [isClicked11, setIsClicked11] = useState(true);
  const [isPlaying11, setIsPlaying11] = useState(false);
  
  const handleHoverStart11 = () => {
    setIsPlaying11(true);
  };
  const handleHoverEnd11 = () => {
    setIsPlaying11(false);
  };
  const [isClicked12, setIsClicked12] = useState(true);
  const [isPlaying12, setIsPlaying12] = useState(false);
  
  const handleHoverStart12 = () => {
    setIsPlaying12(true);
  };
  const handleHoverEnd12 = () => {
    setIsPlaying12(false);
  };
  const [isClicked13, setIsClicked13] = useState(true);
  const [isPlaying13, setIsPlaying13] = useState(false);
  
  const handleHoverStart13 = () => {
    setIsPlaying13(true);
  };
  const handleHoverEnd13 = () => {
    setIsPlaying13(false);
  };
  const [isClicked14, setIsClicked14] = useState(true);
  const [isPlaying14, setIsPlaying14] = useState(false);
  
  const handleHoverStart14 = () => {
    setIsPlaying14(true);
  };
  const handleHoverEnd14 = () => {
    setIsPlaying14(false);
  };
  const [isClicked15, setIsClicked15] = useState(true);
  const [isPlaying15, setIsPlaying15] = useState(false);
  
  const handleHoverStart15 = () => {
    setIsPlaying15(true);
  };
  const handleHoverEnd15 = () => {
    setIsPlaying15(false);
  };
  const [isClicked16, setIsClicked16] = useState(true);
  const [isPlaying16, setIsPlaying16] = useState(false);
  
  const handleHoverStart16 = () => {
    setIsPlaying16(true);
  };
  const handleHoverEnd16 = () => {
    setIsPlaying16(false);
  };
  const [isClicked17, setIsClicked17] = useState(true);
  const [isPlaying17, setIsPlaying17] = useState(false);
  
  const handleHoverStart17 = () => {
    setIsPlaying17(true);
  };
  const handleHoverEnd17 = () => {
    setIsPlaying17(false);
  };
  const [isClicked18, setIsClicked18] = useState(true);
  const [isPlaying18, setIsPlaying18] = useState(false);
  
  const handleHoverStart18 = () => {
    setIsPlaying18(true);
  };
  const handleHoverEnd18 = () => {
    setIsPlaying18(false);
  };
  const [isClicked19, setIsClicked19] = useState(true);
  const [isPlaying19, setIsPlaying19] = useState(false);
  

  const handleHoverStart19 = () => {
    setIsPlaying19(true);
  };
  const handleHoverEnd19 = () => {
    setIsPlaying19(false);
  };
  const [isClicked20, setIsClicked20] = useState(true);
  const [isPlaying20, setIsPlaying20] = useState(false);
  
  const handleHoverStart20 = () => {
    setIsPlaying20(true);
  };
  const handleHoverEnd20 = () => {
    setIsPlaying20(false);
  };
  const [isClicked21, setIsClicked21] = useState(true);
  const [isPlaying21, setIsPlaying21] = useState(false);
  
  const handleHoverStart21 = () => {
    setIsPlaying21(true);
  };
  const handleHoverEnd21 = () => {
    setIsPlaying21(false);
  };
  const [isClicked22, setIsClicked22] = useState(true);
  const [isPlaying22, setIsPlaying22] = useState(false);
  const [isClicked23, setIsClicked23] = useState(true);
  const [isPlaying23, setIsPlaying23] = useState(false);
  const handleHoverStart22 = () => {
    setIsPlaying22(true);
  };
  const handleHoverEnd22 = () => {
    setIsPlaying22(false);
  };
  const handleHoverStart23 = () => {
    setIsPlaying23(true);
  };
  const handleHoverEnd23 = () => {
    setIsPlaying23(false);
  };
  const [isClicked24, setIsClicked24] = useState(true);
  const [isPlaying24, setIsPlaying24] = useState(false);
 
  const handleHoverStart24 = () => {
    setIsPlaying24(true);
  };
  const handleHoverEnd24 = () => {
    setIsPlaying24(false);
  };
  const [isClicked25, setIsClicked25] = useState(true);
  const [isPlaying25, setIsPlaying25] = useState(false);
  
  const handleHoverStart25 = () => {
    setIsPlaying25(true);
  };
  const handleHoverEnd25 = () => {
    setIsPlaying25(false);
  };
  const [isClicked26, setIsClicked26] = useState(true);
  const [isPlaying26, setIsPlaying26] = useState(false);
  
  const handleHoverStart26 = () => {
    setIsPlaying26(true);
  };
  const handleHoverEnd26 = () => {
    setIsPlaying26(false);
  };
  const [isClicked27, setIsClicked27] = useState(true);
  const [isPlaying27, setIsPlaying27] = useState(false);
  
  const handleHoverStart27 = () => {
    setIsPlaying27(true);
  };
  const handleHoverEnd27 = () => {
    setIsPlaying27(false);
  };
  const [isClicked28, setIsClicked28] = useState(true);
  const [isPlaying28, setIsPlaying28] = useState(false);
  
  const handleHoverStart28 = () => {
    setIsPlaying28(true);
  };
  const handleHoverEnd28 = () => {
    setIsPlaying28(false);
  };
  const [isClicked29, setIsClicked29] = useState(true);
  const [isPlaying29, setIsPlaying29] = useState(false);
  
  const handleHoverStart29 = () => {
    setIsPlaying29(true);
  };
  const handleHoverEnd29 = () => {
    setIsPlaying29(false);
  };
  const [isClicked30, setIsClicked30] = useState(true);
  const [isPlaying30, setIsPlaying30] = useState(false);
  
  const handleHoverStart30 = () => {
    setIsPlaying30(true);
  };
  const handleHoverEnd30 = () => {
    setIsPlaying30(false);
  };
  const [isClicked31, setIsClicked31] = useState(true);
  const [isPlaying31, setIsPlaying31] = useState(false);
  
  const handleHoverStart31 = () => {
    setIsPlaying31(true);
  };
  const handleHoverEnd31 = () => {
    setIsPlaying31(false);
  };
  const [isClicked32, setIsClicked32] = useState(true);
  const [isPlaying32, setIsPlaying32] = useState(false);
  
  const handleHoverStart32 = () => {
    setIsPlaying32(true);
  };
  const handleHoverEnd32 = () => {
    setIsPlaying32(false);
  };
  const [isClicked33, setIsClicked33] = useState(true);
  const [isPlaying33, setIsPlaying33] = useState(false);
  
  const handleHoverStart33 = () => {
    setIsPlaying33(true);
  };
  const handleHoverEnd33 = () => {
    setIsPlaying33(false);
  };
  const [isClicked34, setIsClicked34] = useState(true);
  const [isPlaying34, setIsPlaying34] = useState(false);
  const handleHoverStart34 = () => {
    setIsPlaying34(true);
  };
  const handleHoverEnd34 = () => {
    setIsPlaying34(false);
  };
  const [isClicked35, setIsClicked35] = useState(true);
  const [isPlaying35, setIsPlaying35] = useState(false);
  
  const handleHoverStart35 = () => {
    setIsPlaying35(true);
  };
  const handleHoverEnd35 = () => {
    setIsPlaying35(false);
  };
  const [isClicked36, setIsClicked36] = useState(true);
  const [isPlaying36, setIsPlaying36] = useState(false);
  
  const handleHoverStart36 = () => {
    setIsPlaying36(true);
  };
  const handleHoverEnd36 = () => {
    setIsPlaying36(false);
  };
  const [isClicked37, setIsClicked37] = useState(true);
  const [isPlaying37, setIsPlaying37] = useState(false);
  
  const handleHoverStart37 = () => {
    setIsPlaying37(true);
  };
  const handleHoverEnd37 = () => {
    setIsPlaying37(false);
  };
  const [isClicked38, setIsClicked38] = useState(true);
  const [isPlaying38, setIsPlaying38] = useState(false);
  
  const handleHoverStart38 = () => {
    setIsPlaying38(true);
  };
  const handleHoverEnd38 = () => {
    setIsPlaying38(false);
  };
  const [isClicked39, setIsClicked39] = useState(true);
  const [isPlaying39, setIsPlaying39] = useState(false);
  
  const handleHoverStart39 = () => {
    setIsPlaying39(true);
  };
  const handleHoverEnd39 = () => {
    setIsPlaying39(false);
  };
  const [isClicked40, setIsClicked40] = useState(true);
  const [isPlaying40, setIsPlaying40] = useState(false);
  const handleHoverStart40 = () => {
    setIsPlaying40(true);
  };
  const handleHoverEnd40 = () => {
    setIsPlaying40(false);
  };
  const [isClicked41, setIsClicked41] = useState(true);
  const [isPlaying41, setIsPlaying41] = useState(false);
  
  const handleHoverStart41 = () => {
    setIsPlaying41(true);
  };
  const handleHoverEnd41 = () => {
    setIsPlaying41(false);
  };
  const [isClicked42, setIsClicked42] = useState(true);
  const [isPlaying42, setIsPlaying42] = useState(false);
  
  const handleHoverStart42 = () => {
    setIsPlaying42(true);
  };
  const handleHoverEnd42 = () => {
    setIsPlaying42(false);
  };
  const [isClicked43, setIsClicked43] = useState(true);
  const [isPlaying43, setIsPlaying43] = useState(false);
  const handleHoverStart43 = () => {
    setIsPlaying43(true);
  };
  const handleHoverEnd43 = () => {
    setIsPlaying43(false);
  };
  const [isClicked44, setIsClicked44] = useState(true);
  const [isPlaying44, setIsPlaying44] = useState(false);
  
  const handleHoverStart44 = () => {
    setIsPlaying44(true);
  };
  const handleHoverEnd44 = () => {
    setIsPlaying44(false);
  };
  const [isClicked45, setIsClicked45] = useState(true);
  const [isPlaying45, setIsPlaying45] = useState(false);
  
  const handleHoverStart45 = () => {
    setIsPlaying45(true);
  };
  const handleHoverEnd45 = () => {
    setIsPlaying45(false);
  };
  const [isClicked46, setIsClicked46] = useState(true);
  const [isPlaying46, setIsPlaying46] = useState(false);
  
  const handleHoverStart46 = () => {
    setIsPlaying46(true);
  };
  const handleHoverEnd46 = () => {
    setIsPlaying46(false);
  };
  const [isClicked47, setIsClicked47] = useState(true);
  const [isPlaying47, setIsPlaying47] = useState(false);
  
  const handleHoverStart47 = () => {
    setIsPlaying47(true);
  };
  const handleHoverEnd47 = () => {
    setIsPlaying47(false);
  };
  const [isClicked48, setIsClicked48] = useState(true);
  const [isPlaying48, setIsPlaying48] = useState(false);
  
  const handleHoverStart48 = () => {
    setIsPlaying48(true);
  };
  const handleHoverEnd48 = () => {
    setIsPlaying48(false);
  };
  const [isClicked49, setIsClicked49] = useState(true);
  const [isPlaying49, setIsPlaying49] = useState(false);
  
  const handleHoverStart49 = () => {
    setIsPlaying49(true);
  };
  const handleHoverEnd49 = () => {
    setIsPlaying49(false);
  };
  const handleClick0 = () =>{
    if(isClicked0 == true){
      setIsClicked0(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.6814634636319173, 0.7119008174692415, -0.9219996256218784, 0.8837169097614022, 0.7328996065465558, 0.8754680384239358, -0.7937005322961324, -0.4711303622765293, 1.985711919196231, 0.9439633292942828, -0.4533275281868588, 0.2423292186010647, -0.1193956085273099]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked0(true);
}
};

const handleClick1 = () =>{
    if(isClicked1 == true){
      setIsClicked1(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.0791372332326711, 0.3481523773553712, -0.3597472966505901, 0.622424437376306, 0.7328996065465558, -0.5237708319182784, -0.8359439716177218, -0.4711193933368549, 1.7418822022224314, -0.7633342583475338, -0.5187178335792635, 0.2423292186010647, -0.4342621697369818]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked1(true);
}
};

const handleClick2 = () =>{
    if(isClicked2 == true){
      setIsClicked2(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.8784860623606421, 0.2682076652424331, 1.608135854748919, 0.7756921042444517, 0.7328996065465558, -0.4211811339415627, 0.337005248669331, -0.4711303622765293, 3.9575522390713087, 0.2262939893563512, -0.3543620075828133, 0.2423292186010647, 0.6677707944968697]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked2(true);
}
};

const handleClick3 = () =>{
    if(isClicked3 == true){
      setIsClicked3(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.9341218459436296, 0.1402961258617315, -0.0786211321649459, 0.5149975551371248, -1.364443357681728, -0.38733710986677, -0.9432484744200076, -0.4708691644005319, 3.0935469376206703, -1.3261381091409643, -0.4219773766934966, 0.2423292186010647, 0.5103375138920339]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked3(true);
}
};

const handleClick4 = () =>{
    if(isClicked4 == true){
      setIsClicked4(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.2360989247332888, 1.2954972158936915, 1.0458835257776309, 0.9355369271680574, 0.7328996065465558, 0.3149263896851803, -0.9789549727662852, -0.4711303622765293, 2.2030384060641834, 0.6040146945868414, 0.9793146172285478, 0.2423292186010647, -0.4342621697369818]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked4(true);
}
};

const handleClick5 = () =>{
    if(isClicked5 == true){
      setIsClicked5(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.2986767003875366, -0.4832726286191884, 0.4836311968063423, -0.1869643729637966, 0.7328996065465558, -0.5089640713855565, 1.613558816489625, -0.4709966783242472, -0.4313826664570903, -0.087214195984956, -0.9535019261122036, 0.2423292186010647, 0.4316208735896158]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked5(true);
}
};

const handleClick6 = () =>{
    if(isClicked6 == true){
      setIsClicked6(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.563249904394682, -0.291405319548136, 0.7647573612919865, 0.4502225333788057, 0.7328996065465558, -0.4656014155397283, -0.1470983990306354, -0.4711303622765293, -0.6937646445049839, -1.6014965032539918, -0.0186430653726475, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked6(true);
}
};

const handleClick7 = () =>{
    if(isClicked7 == true){
      setIsClicked7(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.343054049757454, -0.8949878960008213, 0.4836311968063423, 0.0655585580140191, 0.7328996065465558, -0.5893436285631894, 0.1859155751833542, 0.2932676212854186, -0.1875529494832904, -1.3563557655594034, -0.1531763955629119, 0.2423292186010647, 0.3529042332871979]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked7(true);
}
};

const handleClick8 = () =>{
    if(isClicked8 == true){
      setIsClicked8(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.5006721287404343, -0.4872698642248353, 1.0458835257776309, 0.267457318140718, 0.7328996065465558, -0.572421616525793, 0.7224380891947825, -0.4593044741900328, -0.55859817096516, -0.1438723017695294, 0.9394627297369864, 0.2423292186010647, 0.6677707944968697]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked8(true);
}
};

const handleClick9 = () =>{
    if(isClicked9 == true){
      setIsClicked9(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-1.3225378262945449, -0.6591509952676529, 1.3270096902632749, 0.6628839125053484, 0.7328996065465558, -0.5205979546612666, 0.1458305597687073, -0.4552253997486036, 0.0668780595328487, -1.2128218975718172, 0.1040675381951198, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked9(true);
}
};

const handleClick10 = () =>{
    if(isClicked10 == true){
      setIsClicked10(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.8278231084018269, -0.3553610892384867, -1.2031257901075223, 0.7258651644303601, 0.7328996065465558, -0.5417504697080121, -0.9559831754709684, -0.4706230488165868, -0.4419839584994294, -1.3979050431347575, 0.343876271175594, 0.2423292186010647, 0.7464874347992877]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked10(true);
}
};

const handleClick11 = () =>{
    if(isClicked11 == true){
      setIsClicked11(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.7990206353867896, -0.1075324816883778, 1.0458835257776309, 0.6443482908945064, 0.7328996065465558, -0.5861707513061777, -0.8091178459171504, -0.4711133946979704, 0.4803284491840746, -1.1637182058918534, 0.79506605739256, 0.2423292186010647, -0.2768288891321459]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked11(true);
}
};

const handleClick12 = () =>{
    if(isClicked12 == true){
      setIsClicked12(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.5682227340188541, 0.4800611523417198, 0.2025050323206982, 0.9911437920005834, 0.7328996065465558, 0.3572314197786713, -0.7603991348747334, -0.4711303622765293, -0.5824510780604228, -0.3478414825939944, 1.7680831004052866, 0.2423292186010647, 0.8252040751017057]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked12(true);
}
};

const handleClick13 = () =>{
    if(isClicked13 == true){
      setIsClicked13(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.354312483970524, 0.9717211318362912, 0.7647573612919865, 0.4767304653599024, 0.7328996065465558, -0.1853305911703506, -0.9562915217433888, -0.4631093251396012, -0.6736221896245393, -0.3100694120709453, 0.4290596806888075, 2.6274779916895823, -1.5362951339708335]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked13(true);
}
};

const handleClick14 = () =>{
    if(isClicked14 == true){
      setIsClicked14(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-1.18180739863117, 1.0276824303153482, -0.9219996256218784, 0.1695972083458423, 0.7328996065465558, -0.1610051988665932, -0.9667752950056808, -0.4377093742059957, -0.5707896568138499, 0.4000455137623765, 1.5145254662402243, 0.2423292186010647, 0.4316208735896158]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked14(true);
}
};

const handleClick15 = () =>{
    if(isClicked15 == true){
      setIsClicked15(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.867227628147572, 0.5040445659756013, 1.3270096902632749, 0.4302917574531691, -1.364443357681728, -0.5766521195351421, -0.6682035994210455, -0.4710820303860889, 0.4326226349935485, -0.5442562493138494, -0.0265470230584739, 0.2423292186010647, 0.6677707944968697]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked15(true);
}
};

const handleClick16 = () =>{
    if(isClicked16 == true){
      setIsClicked16(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.7096095491645917, 0.0363680001149115, 1.0458835257776309, 0.4376661445456547, -1.364443357681728, -0.5237708319182784, 0.1550809479413181, -0.4711303622765293, -0.5267942948381424, -0.0532193325142118, 0.4051817581001126, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked16(true);
}
};

const handleClick17 = () =>{
    if(isClicked17 == true){
      setIsClicked17(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.546362253075077, 0.3401579061440774, 1.608135854748919, 0.1731847480124568, -1.364443357681728, 1.647534837630146, -0.9555206560623378, -0.4710929993257632, -0.373075560224225, -0.0645509536711266, -1.2202771029619677, 0.2423292186010647, 0.5890541541944517]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked17(true);
}
};

const handleClick18 = () =>{
    if(isClicked18 == true){
      setIsClicked18(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.1692047069372313, 0.2562159584254924, -0.3597472966505901, 0.9580587039640266, -1.364443357681728, -0.537519966698663, -0.4246100442089604, -0.4711303622765293, -0.6020634683387504, 0.9250772940327582, -0.3397828587421505, 0.2423292186010647, 0.0380376720775259]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked18(true);
}
};

const handleClick19 = () =>{
    if(isClicked19 == true){
      setIsClicked19(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.1354294042980212, 0.9757183674419382, -0.9219996256218784, 0.7340367825598711, -1.364443357681728, -0.4402183974836338, 0.9721985698552746, -0.4711303622765293, 0.4167206969300398, 0.502030104174609, 0.9720748576675812, 0.2423292186010647, 0.2741875929847799]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked19(true);
}
};

const handleClick20 = () =>{
    if(isClicked20 == true){
      setIsClicked20(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.4056318254117018, -1.050880084621051, 1.3270096902632749, -0.1152135796315049, 0.7328996065465558, -0.5967470088295503, 0.5374303257425657, -0.4711303622765293, -0.5426962329016513, -1.1221689283164995, -0.8808054413463459, -2.1428195544874526, -1.3001452130635796]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked20(true);
}
};

const handleClick21 = () =>{
    if(isClicked21 == true){
      setIsClicked21(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.3380812201332816, -0.50725604225307, -0.9219996256218784, 0.175975056642046, 0.7328996065465558, -0.6126113951146095, -0.9481820147787332, -0.4704859370706565, -0.3518729761395469, -0.3667275178555187, -0.5501344048851113, -2.1428195544874526, -1.4575784936684155]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked21(true);
}
};

const handleClick22 = () =>{
    if(isClicked22 == true){
      setIsClicked22(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-1.5420772934494102, -1.162802681579165, -0.6408734611362343, -0.6593237624013846, 0.7328996065465558, -0.5142522001472429, 1.4778864566246668, -0.4695090158809024, -0.4631865425841077, -0.4422716589016169, 1.857617007636329, -2.1428195544874526, -2.244744896692595]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked22(true);
}
};

const handleClick23 = () =>{
    if(isClicked23 == true){
      setIsClicked23(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.3380812201332816, -1.0308939065928169, -0.9219996256218784, 0.3033327148068638, -1.364443357681728, -0.2128288607311197, 0.1119124698024675, -0.4711303622765293, -0.8066684047558955, -0.3780591390124335, 1.96515068405106, -2.1428195544874526, 0.2741875929847799]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked23(true);
}
};

const handleClick24 = () =>{
    if(isClicked24 == true){
      setIsClicked24(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-2.375201425216591, -0.2954025551537829, -1.4842519545931667, 0.321270413139937, 0.7328996065465558, -0.4782929245677756, -0.1224306972370066, -0.4710957415606818, -0.5638988169863294, -1.553148252984489, -1.3759983533352451, -2.1428195544874526, 0.6677707944968697]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked24(true);
}
};

const handleClick25 = () =>{
    if(isClicked25 == true){
      setIsClicked25(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [1.2274975229658127, -0.2434384922803728, 0.4836311968063423, 0.4526142264898822, 0.7328996065465558, -0.5629029847547576, -0.9627359588369744, 0.3995292243814741, -0.5718497860180838, 0.502030104174609, -0.5541195936342672, 0.2423292186010647, 0.8252040751017057]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked25(true);
}
};

const handleClick26 = () =>{
    if(isClicked26 == true){
      setIsClicked26(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [1.4188909045880025, 0.7518731735257107, -1.2031257901075223, 0.8781362925022239, 0.7328996065465558, -0.0372629858431322, -0.8747956019426875, -0.4711303622765293, -0.2882652238855121, 0.4944756900699992, -0.4558182711550815, 0.2423292186010647, 0.8252040751017057]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked26(true);
}
};

const handleClick27 = () =>{
    if(isClicked27 == true){
      setIsClicked27(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.0447055431110984, 0.8877791841177057, -0.6408734611362343, 0.8536214381136907, 0.7328996065465558, -0.2107136092264452, 0.3092540841514986, -0.4711303622765293, -0.6640810267864342, -0.0494421254619069, -0.0907417718261318, 0.2423292186010647, 0.5103375138920339]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked27(true);
}
};

const handleClick28 = () =>{
    if(isClicked28 == true){
      setIsClicked28(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.2755034444790338, 0.8957736553289997, -1.4842519545931667, 1.0298094972963183, 0.7328996065465558, -0.5766521195351421, -0.975316486751725, -0.4698792175949144, -0.5267942948381424, -0.32140103322786, -0.886052606532735, 0.2423292186010647, -0.1193956085273099]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked28(true);
}
};

const handleClick29 = () =>{
    if(isClicked29 == true){
      setIsClicked29(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.0672224115372384, 1.0116934878927606, 1.608135854748919, 0.6581005262831956, 0.7328996065465558, 0.3466551622552985, 0.6977703874011535, -0.4711303622765293, -0.3465723301183773, -0.3742819319601285, -0.922849182649944, 0.2423292186010647, 0.5103375138920339]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked29(true);
}
};

const handleClick30 = () =>{
    if(isClicked30 == true){
      setIsClicked30(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.8109354570822219, -0.8430238331274112, -1.2031257901075223, -0.2694777852959321, -1.364443357681728, 3.1282108909023303, 0.5127626239489368, -0.4711303622765293, -0.594112499306996, -0.3893907601693482, 0.6262601039595526, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked30(true);
}
};

const handleClick31 = () =>{
    if(isClicked31 == true){
      setIsClicked31(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [1.5145875953990977, -0.8070487126765892, -1.2031257901075223, -0.2236370006669682, 0.7328996065465558, 3.308007268799667, 0.1704982615623362, -0.4665713967243437, -0.5638988169863294, -1.4734491841808557, 0.9401269278618452, 0.2423292186010647, 0.8252040751017057]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked31(true);
}
};

const handleClick32 = () =>{
    if(isClicked32 == true){
      setIsClicked32(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [1.914262009963084, -0.6831344089015344, -0.3597472966505901, -0.0008109258183507, -1.364443357681728, 3.1810921785191937, -0.5602824040739192, -0.4709096123655814, -0.1822523034621208, 0.6682272144760248, 0.6431971561434661, 0.2423292186010647, 0.8252040751017057]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked32(true);
}
};

const handleClick33 = () =>{
    if(isClicked33 == true){
      setIsClicked33(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.1572898852417986, -0.3793445028723683, 0.4836311968063423, -0.473369623015195, -1.364443357681728, 6.914511084269773, -0.0299268155108984, -0.4711303622765293, 0.0350741834058313, 0.1885219188333021, 1.9786006960794624, 0.2423292186010647, 0.8252040751017057]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked33(true);
}
};

const handleClick34 = () =>{
    if(isClicked34 == true){
      setIsClicked34(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.1910651878810087, 1.1356077916678151, -1.4842519545931667, 0.5486805664514507, -1.364443357681728, 1.7004161252470098, 0.6576853719865066, -0.4706299044038833, -0.5919922408985282, -0.2458568921817619, -1.1854399113130936, 0.2423292186010647, 0.5103375138920339]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked34(true);
}
};

const handleClick35 = () =>{
    if(isClicked35 == true){
      setIsClicked35(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.6132564708711342, -0.8310321263104707, 1.0458835257776309, -0.5554844198288176, 0.7328996065465558, -0.5544419787360594, 1.5025541584182955, 2.5590392227851835, -0.4313826664570903, -1.416791078396282, -0.1209627865072328, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked35(true);
}
};

const handleClick36 = () =>{
    if(isClicked36 == true){
      setIsClicked36(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.8327959380259996, -1.4625953520026842, -0.6408734611362343, -1.0077137255815125, 0.7328996065465558, -0.5618453590024203, 1.613558816489625, 1.7946412392232356, -0.5055917107534642, -1.0881740648457556, -1.258402075328895, 0.2423292186010647, -0.4342621697369818]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked36(true);
}
};

const handleClick37 = () =>{
    if(isClicked37 == true){
      setIsClicked37(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-1.6377739842605052, -1.830341027722201, 0.4836311968063423, -2.005846983937394, 0.7328996065465558, -0.2075407319694333, 1.7646484899756023, 2.415071889558269, -0.1133439051869164, -0.7444482230860092, -1.5743611233244943, 0.2423292186010647, -1.7724450548780877]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked37(true);
}
};

const handleClick38 = () =>{
    if(isClicked38 == true){
      setIsClicked38(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-2.150032740955191, -2.4368415861670085, -1.2031257901075223, -5.695432223291244, -1.364443357681728, -0.4232963854462373, 2.088412076016981, 2.569322603729963, -0.1822523034621208, -1.3223609020886593, 1.657726581959903, -2.1428195544874526, 0.1167543123799439]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked38(true);
}
};

const handleClick39 = () =>{
    if(isClicked39 == true){
      setIsClicked39(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.5513350826992491, -2.407142125617052, 0.4836311968063423, -5.614114657514647, 0.7328996065465558, 0.4206889649189076, 2.085328613292777, 2.740712286142956, -0.6010033391345164, -0.5480334563661543, -1.5913978052271374, -2.1428195544874526, -4.448810825160298]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked39(true);
}
};

const handleClick40 = () =>{
    if(isClicked40 == true){
      setIsClicked40(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.7096095491645917, 0.1442933614673785, 1.0458835257776309, 0.0838948718656049, 0.7328996065465558, -0.537519966698663, -0.0792622190981562, -0.4628693795842231, -0.5426962329016513, 0.7739890119405619, -0.756268292935215, 0.2423292186010647, -2.244744896692595]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked40(true);
}
};

const handleClick41 = () =>{
    if(isClicked41 == true){
      setIsClicked41(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.7096095491645917, -0.7710735922257668, -0.9219996256218784, -0.3677365106093207, 0.7328996065465558, -0.5280013349276275, -0.7295645076326973, -0.4711303622765293, -0.6497692825292763, -0.1249862665080049, -1.538295165144631, 0.2423292186010647, -1.3788618533659975]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked41(true);
}
};

const handleClick42 = () =>{
    if(isClicked42 == true){
      setIsClicked42(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.1241709700849512, 0.1642795394956131, -0.6408734611362343, 0.4613837678971622, 0.7328996065465558, -0.6432825419323904, 0.1859155751833542, -0.4633492706949795, -0.8766369322353337, 0.9250772940327582, -1.3614192044945823, 0.2423292186010647, -2.0085949757853414]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked42(true);
}
};

const handleClick43 = () =>{
    if(isClicked43 == true){
      setIsClicked43(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [1.4188909045880025, 0.4520805031021913, 1.3270096902632749, 0.0711391752731975, 0.7328996065465558, -0.5480962242220357, -0.2642699825503726, -0.2510660100582466, 0.2311980861891052, 1.790057709010581, -0.2536031520416479, 0.2423292186010647, -2.9531946594143568]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked43(true);
}
};

const handleClick44 = () =>{
    if(isClicked44 == true){
      setIsClicked44(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.0334471088980284, -0.7231067649580037, -0.3597472966505901, -1.0888319835988534, -1.364443357681728, -0.1091815370020667, 0.7162711637463752, -0.4711303622765293, 0.7347594582002137, 0.6153463157437562, -0.2621048880398478, -2.1428195544874526, -3.1106279400191927]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked44(true);
}
};

const handleClick45 = () =>{
    if(isClicked45 == true){
      setIsClicked45(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-2.026189964611421, 1.3994253416405118, -1.2031257901075223, 0.7119136212824145, 0.7328996065465558, -0.044666366109493, -0.9796027774500132, 2.363654984834372, 0.8460730246447746, -1.258148382199476, -0.9325464752728908, 0.2423292186010647, -0.6704120906442358]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked45(true);
}
};

const handleClick46 = () =>{
    if(isClicked46 == true){
      setIsClicked46(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [1.1768345690069977, -0.1195241885053186, 1.3270096902632749, -0.1650405194455964, -1.364443357681728, -0.5935741315725386, -0.8495112076042177, 1.6506739059963216, -0.6911143214943991, 0.0638740861072402, -0.3571184298009801, 0.2423292186010647, 0.5890541541944517]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked46(true);
}
};

const handleClick47 = () =>{
    if(isClicked47 == true){
      setIsClicked47(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.5006721287404343, -0.5272422202813045, -0.3597472966505901, -0.1445118202421907, -1.364443357681728, -0.4952149366051719, -0.9713079852102604, 2.212832064310938, -0.2723632858220034, -1.4281226995531968, 1.638265576901524, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked47(true);
}
};

const handleClick48 = () =>{
    if(isClicked48 == true){
      setIsClicked48(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [0.5913959899273571, 0.4440860318908974, 0.4836311968063423, -0.0002130025405816, 0.7328996065465558, -0.5925165058202012, 0.219833665149594, 2.552183635488664, -0.3571736221607163, 0.3018381304024489, -0.6208050853701478, 0.2423292186010647, 0.3529042332871979]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked48(true);
}
};

const handleClick49 = () =>{
    if(isClicked49 == true){
      setIsClicked49(false);
      var data;
      const temp = [];
      const databaseRef = ref(db, "users/" + userId + "/vect");
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        for(let i=0;i<data.length;i++){
          temp[i] = data[i];
        }

      });
  // prompt(temp);
const new_weight = [-0.6639194248299493, -0.4153196233231906, 0.2025050323206982, -0.0789395674468462, 0.7328996065465558, -0.5904012543155267, 0.1365801715960964, 2.349943810241332, -0.4154807283935816, -1.469671977128551, -0.8094705627364502, 0.2423292186010647, 0.9039207154041236]
var temp1 = [];
  for (let i = 0; i < new_weight.length; i++) {
    temp1[i] = 0.8 * temp[i] + 0.2 * new_weight[i];
  }
  const databaseref = ref(db, "users/" + userId);
  const data_update = {
    vect: temp1,
  };
  update(databaseref, data_update)
  .then(() => {
        // prompt("Data stored in Firebase Realtime Database.");
    })
    .catch((error) => {
      // prompt("Error storing data in Firebase:", error);
    });


  
}else{
  setIsClicked49(true);
}
};

  return (
    <>
      <div className="bg-black_900 font-montserrat h-[3577px] mx-auto relative w-full">
        <div className="md:h-[3575px] h-[3577px] m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto w-full"
            style={{ backgroundImage: "url('images/img_group670.png')" }}
          >
            <div
              // style={{position}}
              className="bg-gradient3  flex flex-col items-end justify-end p-[62px] md:px-10 sm:px-5 w-full"
            >
              <div>
          
                {/* <button
                      onClick={() => navigate("/desktopeleven")}
                      style={{
                        position: "absolute",
                        top: "3400px",
                        width: "450px",
                        height: "140px",
                        background:"white",
                        borderRadius: "60px",
                        left: "1050px",
                      }}
                    > */}
                      {/* <img
                      style={{marginLeft:"60px", height:"100px"}} 
                      src="images/next.png" alt="" /> */}

                    {/* </button> */}
                  </div>
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[2675px] inset-x-[0] items-center justify-start mx-auto p-20 md:px-10 sm:px-5 top-[0] w-full"
            style={{ backgroundImage: "url('images/img_group671.png')" }}
          >
            <Text
              className="mb-[2430px] text-center text-white_A700 uppercase"
              as="h3"
              variant="h3"
            >
              <span className="md:text-5xl text-white_A700 text-[68px] font-montserrat font-extrabold">
                getting{" "}
              </span>
              <span className="md:text-5xl text-deep_purple_A100 text-[68px] font-montserrat font-extrabold">
                started
              </span>
            </Text>

          </div>
        </div>
        <List
          style={{ position: "absolute", top: "-150px" }}
          className="absolute bottom-[2%] sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-center max-w-[1488px] mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div>
                <button
                      onMouseEnter={handleHoverStart}
                      onMouseLeave={handleHoverEnd}
                      onClick={handleClick}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked ? "white" : "yellow",
                      }}
                    >
                      <div
                        style={{ position: "relative", top: "32px", left: "-15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Numb / Encore</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-52px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            JAY-Z
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737282412ad025c14f7039f516"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying && (
                        <audio
                          src="https://p.scdn.co/mp3-preview/2c6ac3619264942e7f194dc9eef4f96247338a82?cid=578ab8eec910483d891f8aaeaf0bbef2"
                          autoPlay
                          onEnded={handleHoverEnd}
                        />
                      )}
                  </div>

               <div>
                <button
                      onMouseEnter={handleHoverStart1}
                      onMouseLeave={handleHoverEnd1}
                      onClick={handleClick1}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked1 ? "white" : "yellow",
                      }}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-48px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Crawling</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "17px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Linkin Park
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying1 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/757e39055aca3abc9157fe579869d63baca5a54e?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd1}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick2}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked2 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart2}
                      onMouseLeave={handleHoverEnd2}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "30px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Ex de Verdad [En Vivo]</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-85px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Ha*Ash
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273996dd344d4aa79463b40bb8f"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying2 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/ef1f8faa551c46987b618f4a35a2af70031cfa3d?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd2}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick3}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked3 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart3}
                      onMouseLeave={handleHoverEnd3}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-45px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Pyramids</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "21px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Frank Ocean
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying3 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd3}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick4}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked4 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart4}
                      onMouseLeave={handleHoverEnd4}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-45px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Papercut</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "15px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Linkin Park
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying4 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/dc49871bd9a79e4e75713689d9ccdfa008e62fb1?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd4}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick5}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked5 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart5}
                      onMouseLeave={handleHoverEnd5}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-45px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Sewindu</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Tulus
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737847ec0808b24c9f57386d88"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying5 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/1e6b831ed5c7bf4a7674e7ec70155ad9b52de225?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd5}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick6}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked6 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart6}
                      onMouseLeave={handleHoverEnd6}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-65px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Swim</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "55px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Chase Atlantic
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying6 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/e201f50b9d4426569bcc1a46acee0c4d5fa2e91c?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd6}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick7}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked7 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart7}
                      onMouseLeave={handleHoverEnd7}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-5px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Bawalah Cintaku</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-60px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Afgan
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273daa3a5d2478cc796925f7c90"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying7 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/9a70f8404d13aeacaa5d6549743ec90da621496f?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd7}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick8}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked8 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart8}
                      onMouseLeave={handleHoverEnd8}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Untuk Perempuan Yang </h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-50px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Payung Teduh
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2738ee03809d40edb632fadd3c0"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying8 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/bfe383547457ead3af8a07f8c440800ff323ec1c?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd8}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick9}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked9 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart9}
                      onMouseLeave={handleHoverEnd9}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "25px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>As the World Caves In</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-50px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Matt Maltese
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b27367d0cba50eae9026b8958755"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying9 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/0d6e18e28bfba17d2a6d969d58b10c79018a9385?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd9}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick10}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked10 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart10}
                      onMouseLeave={handleHoverEnd10}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-55px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Antidote</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "15px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Travis Scott
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737433176f037e0ba14190c34f"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying10 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/acd5af9c79ae22c4a0ff7bd185193d9c6ef6cae2?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd10}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick11}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked11 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart11}
                      onMouseLeave={handleHoverEnd11}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>In My Place</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Coldplay
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying11 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/601677ed6c8fa893554bd225a488aa21d5181730?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd11}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick12}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked12 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart12}
                      onMouseLeave={handleHoverEnd12}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-60px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Famous</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "25px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Kanye West
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2732a7db835b912dc5014bd37f4"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying12 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd12}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick13}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked13 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart13}
                      onMouseLeave={handleHoverEnd13}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Fight For Your Right</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-40px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Beastie Boys
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273a7ea08ab3914c5fb2084a8ac"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying13 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd13}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick14}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked14 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart14}
                      onMouseLeave={handleHoverEnd14}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Lonely Boy</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "25px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            The Black Keys
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2736a21b97de47168df4f0c1993"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying14 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/cb384c17027f77dd419356db04186415edea2b90?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd14}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick15}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked15 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart15}
                      onMouseLeave={handleHoverEnd15}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "10px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Dancin (feat. Luvli)</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-35px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Aaron Smith
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273f7a3a5656060030a0d24855c"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying15 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/96554d5eb7ca8f02d0e07955b2c33fdd7874e2ca?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd15}
                      />
                    )}
                  </div>
                  <div>
                <button
                      onClick={handleClick16}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked16 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart16}
                      onMouseLeave={handleHoverEnd16}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-60px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Yaanji"</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "10px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Sam C.S.
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2735c073450ec8b1d4072b1ad3f"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying16 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/0dca6adb7b828ca710a841a0b613c655a3bd6a69?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd16}
                      />
                    )}
                  </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div>
                <button
                      onClick={handleClick17}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked17 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart17}
                      onMouseLeave={handleHoverEnd17}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "10px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Sure Thing - Remix</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-60px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Pusha T
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b27394212667eb01381e27326cfe"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying17 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/b4f8cffe018b7acb7481db4b97a571f89e3f2106?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd17}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick18}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked18 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart18}
                      onMouseLeave={handleHoverEnd18}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "25px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>My Alcoholic Friends</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-10px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            The Dresden Dolls
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273c3c284fed41a5797ffbbe2ed"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying18 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/091f2a6a9e832223051751a0a5a17929503b4bb3?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd18}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick19}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked19 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart19}
                      onMouseLeave={handleHoverEnd19}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Dil Ibaadat</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Pritam
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273bcb8ec035de7b2dda0f74660"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying19 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/e826204e38ff23fe52818d1cd230404ab1659d5f?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd19}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick20}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked20 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart20}
                      onMouseLeave={handleHoverEnd20}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "25px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>If You Don't Know Me </h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-55px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Simply Red
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2738f8dc242b396ddc31c01d36c"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying20 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/0c6cd273031aef9c142b6eaeb56ea470ceb7e1a8?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd20}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick21}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked21 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart21}
                      onMouseLeave={handleHoverEnd21}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Back to the Old House</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-60px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            The Smiths
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273ed3953f8af1f764a146b7583"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying21 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/0bc3a6e402dd9a6182bb7c176cad5ef5bdc3aa31?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd21}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick22}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked22 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart22}
                      onMouseLeave={handleHoverEnd22}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>She's Always a Woman</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-80px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Billy Joel
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2736ce61113662ecf693b605ee5"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying22 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/683fb824088e7713ccfdd520becab33b041574ff?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd22}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick23}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked23 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart23}
                      onMouseLeave={handleHoverEnd23}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>It's A Wrap</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "15px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Mariah Carey
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273a9e20a20b9fc607d81f9c335"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying23 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd23}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick24}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked24 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart24}
                      onMouseLeave={handleHoverEnd24}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-25px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Ultraviolence</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "5px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Lana Del Rey
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying24 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd24}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick25}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked25 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart25}
                      onMouseLeave={handleHoverEnd25}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-65px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Some</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "30px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Steve Lacy
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737c0c6c1cfac7464b6211587d"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying25 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/a466cb9f6f92804a89a984aa05595604cc188a82?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd25}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick26}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked26 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart26}
                      onMouseLeave={handleHoverEnd26}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>24K Magic</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "10px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Bruno Mars
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying26 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/3a76820d510fa5f84abb413e9d13815bcc86da0f?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd26}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick27}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked27 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart27}
                      onMouseLeave={handleHoverEnd27}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Blue Jeans</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Lana Del Rey
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying27 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd27}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick28}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked28 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart28}
                      onMouseLeave={handleHoverEnd28}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Everybody's Changing</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-90px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Keane
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737d6cd95a046a3c0dacbc7d33"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying28 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd28}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick29}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked29 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart29}
                      onMouseLeave={handleHoverEnd29}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Maquiavélico</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-10px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Canserbero
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273fd7bf6e660e2da01813c70f7"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying29 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/6f1349e64fcba20839bb4ed991e87f90bb8dc38d?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd29}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick30}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked30 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart30}
                      onMouseLeave={handleHoverEnd30}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-5px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>What They Want</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-60px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Russ
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273cb045e684adce8d49ada4045"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying30 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/25f6ad05a44d673044266ce55cc48c9d1f154a3b?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd30}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick31}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked31 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart31}
                      onMouseLeave={handleHoverEnd31}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>X (feat. Future)</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-30px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            21 Savage
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2732dd1ac4a61495080ef8f78ca"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying31 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/e78593e7e98516fdbefcca7cec67ae2e787baf8e?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd31}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick32}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked32 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart32}
                      onMouseLeave={handleHoverEnd32}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-45px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>No Heart</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "5px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            21 Savage
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2732dd1ac4a61495080ef8f78ca"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying32 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/117a84c65c137bf12d5dbe28dd8a8700a6ac50e7?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd32}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick33}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked33 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart33}
                      onMouseLeave={handleHoverEnd33}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-55px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Jungle</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "40px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            A Boogie Wit
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b27370ed76855fb92d540a595463"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying33 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/e36886ed66a1c78319af4b2e2e138ed7c9a39cc4?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd33}
                      />
                    )}
                  </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div>
                <button
                      onClick={handleClick34}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked34 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart34}
                      onMouseLeave={handleHoverEnd34}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-45px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Choo Lo</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "45px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            The Local Train
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying34 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/8724e86c8688b0cc38cdffea47836be4b99af416?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd34}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick35}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked35 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart35}
                      onMouseLeave={handleHoverEnd35}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-45px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Anchor</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Novo Amor
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273277620423172f5a151f452e3"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying35 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/a7679ada378b47d98531faf9ba25ccc16b6c8f04?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd35}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick36}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked36 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart36}
                      onMouseLeave={handleHoverEnd36}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Only Time</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Enya
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b27370dd4e18b9c3431ee7a9b8a1"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying36 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/8158001dfd050b71c8795546d63398f577021b33?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd36}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick37}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked37 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart37}
                      onMouseLeave={handleHoverEnd37}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Cello Suite</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "80px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Johann Sebastian Bach
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273cbb64bd416bb225456100bbc"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying37 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/6d1dba76979cc7339432e66bd063dfea637a2832?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd37}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick38}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked38 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart38}
                      onMouseLeave={handleHoverEnd38}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Moonlight</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "80px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Ludwig van Beethoven
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2735fbde95caaf1018f9af50f71"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying38 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/4423bbe58e0471b17db02036ac93f9e1696dc663?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd38}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick39}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked39 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart39}
                      onMouseLeave={handleHoverEnd39}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Gymnopédie No. 1</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-40px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Erik Satie
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b273fa24c97b4c8aaf5ccdcccf08"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying39 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/23063b891af42f8aedfe5ed0bad332ee6fb2b94e?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd39}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick40}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked40 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart40}
                      onMouseLeave={handleHoverEnd40}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Lovely Day</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "10px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Bill Withers
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2735ade9b4d547203c9061fc340"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying40 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/fdd27d4b10c891ee9e00b1820484b8898fcf905a?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd40}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick41}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked41 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart41}
                      onMouseLeave={handleHoverEnd41}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Baby Can I Hold You</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-20px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Tracy Chapman
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2737602becfedf6e25752cb54ff"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying41 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/c2bb675f67e498694633c81f3e8c1682b0197e30?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd41}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick42}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked42 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart42}
                      onMouseLeave={handleHoverEnd42}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "25px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Woman - Remastered</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-40px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            John Lennon
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2736eac0f2b77d85a59f0cf9b3e"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying42 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd42}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick43}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px", 
                        backgroundColor: isClicked43 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart43}
                      onMouseLeave={handleHoverEnd43}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "25px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Ob-La-Di, Ob-La-Da</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-40px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            The Beatles
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying43 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd43}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick44}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked44 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart44}
                      onMouseLeave={handleHoverEnd44}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>That's Life</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "30px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Frank Sinatra
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2735c21d73934bb9760a2f791a2"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying44 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd44}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick45}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked45 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart45}
                      onMouseLeave={handleHoverEnd45}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Be Quiet and Drive</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-55px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Deftones
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2730b1129853982ea17845d4eb6"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying45 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/6f38e4008337f1daec8f1fd97b302be79b3d2951?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd45}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick46}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked46 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart46}
                      onMouseLeave={handleHoverEnd46}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-15px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Instant Crush </h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-15px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Daft Punk
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying46 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/a52d000457fc91fdb18bfaa1f690c82bf7b1a036?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd46}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick47}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked47 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart47}
                      onMouseLeave={handleHoverEnd47}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-5px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Black Out Days </h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-10px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Phantogram
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2735590ae4417d7af76c76edc7a"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying47 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd47}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick48}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked48 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart48}
                      onMouseLeave={handleHoverEnd48}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-35px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Mr. Rager</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "-5px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Kid Cudi
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b27359e842b6a3566a141f27f815"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying48 && (
                      <audio
                        src="None"
                        autoPlay
                        onEnded={handleHoverEnd48}
                      />
                    )}
                  </div>

               <div>
                <button
                      onClick={handleClick49}
                      style={{
                        position: "relative",
                        top: "400px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "0px",
                        backgroundColor: isClicked49 ? "white" : "yellow",
                      }}
                      onMouseEnter={handleHoverStart49}
                      onMouseLeave={handleHoverEnd49}
                    >
                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
                      <div
                        style={{ position: "relative", top: "32px", left: "-65px" }}
                      >
                        <h4 style={{ fontSize: "23px" }}>Sweet</h4>
                        <div
                          style={{
                            position: "relative",
                            top: "5px",
                            left: "80px",
                          }}
                        >
                          <h4 style={{ fontSize: "23px", fontWeight: "bold" }}>
                            Cigarettes After Sex
                          </h4>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", left: "15px", top: "-40px" }}
                        className="image-container"
                      >
                        <img
                          src="https://i.scdn.co/image/ab67616d0000b2736b701428ed4c6e053902174a"
                          alt="Image"
                          className="circular-image"
                        />
                      </div>
                    </button>
                    {isPlaying49 && (
                      <audio
                        src="https://p.scdn.co/mp3-preview/cb4686549921f717a8ded84dae3316ba3d6dc3da?cid=578ab8eec910483d891f8aaeaf0bbef2"
                        autoPlay
                        onEnded={handleHoverEnd49}
                      />
                    )}
                  </div>
            </div>
          </div>
        </List>
      </div>
      <div>
                <button
                      onClick={() => navigate("/main")}
                      style={{
                        position: "absolute",
                        top: "3350px",
                        width: "450px",
                        height: "120px",
                        borderRadius: "60px",
                        left: "1060px",
                        background:"white"
                      }}
  
                    >
                                            <img
                      style={{marginLeft:"60px", height:"100px"}} 
                      src="images/next.png" alt="" />

                      {/* // style={{position:"relative",top:'400px',width:"450px",height:"120px",borderRadius:"60px", left:"0px",background:'white'}}>      */}
  
                     
                    </button>
                  </div>
    </>
  );
};

export default DesktopSixPage;
