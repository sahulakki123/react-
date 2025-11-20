import React from "react";
import Navbar from "./Navbar";
import {Footer ,Footer2} from "./Footer";
import Home from "./Home";


const App=()=>{


  // javascript will be written here

  let Lakki=()=>{
    alert("Hello i am Lakki Sahu ")
  }



  return(
    //return => singl element par kaam karta hai
    <>
    <div>
      <h1>Hello Cybrom </h1>
      <button onClick={Lakki}>Chick me </button>
      <p></p>
      <Home/>
      <Navbar/>
      <Footer/>
      <Footer2/>
    </div>

    </>
  )

}
export default App