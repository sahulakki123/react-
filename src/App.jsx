import React from "react";
import Navbar from "./Navbar";
import {Footer ,Footer2} from "./Footer";
import Home from "./Home";
import react1 from './assets/img.jpg'


const App=()=>{


  // javascript will be written here

  let Lakki=()=>{
    alert("Hello i am Lakki Sahu ")
  }



  return(
    //return => singl element par kaam karta hai
    <>
    <div>
      <h1 style={{color:'red', fontSize:'50px'}}>Hello Cybrom </h1>
      <img src={react1} alt=""  style={{height:'200px', width:'200px'}}/> <br />
      <button onClick={Lakki} style={{color:'blue'}}>Chick me </button>
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