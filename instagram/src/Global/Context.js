import React, { createContext } from 'react';
// import {auth,db}  from '../config';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAqbF6CCCB7P4dmH0pvcLcnbZw3GoX8XEI",
//   authDomain: "instagram-90b10.firebaseapp.com",
//   projectId: "instagram-90b10",
//   storageBucket: "instagram-90b10.appspot.com",
//   messagingSenderId: "613987590456",
//   appId: "1:613987590456:web:57cf40bd0ab8e26dc361cd",
//   measurementId: "G-P6TZ1QXW88"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const ContextProvider = createContext();
const Context = (props) => {
    const [model, setModel] = React.useState(false)
    const openModel = () =>{
      setModel(true)
    };
    const closeModel = (e)=>{
      setModel(false)
    };


    // const register = async (user) =>{
    //   const {username, email, password}= user;
    //   try{
    //     const res = await getAuth.createUserWithEmailAndPassword({
    //      email,password
    //     })
    //     res.user.updateProfile({
    //       displayName: username
    //     })
    //     setModel(false)
    //     alert("succfull")
    //   }catch(error){
    //     console.log(error)
    //   }

    // };
  return (
    <ContextProvider.Provider value={{ model, openModel ,closeModel}}>
        {props.children}
    </ContextProvider.Provider>
  )
};



export default Context;
