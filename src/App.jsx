import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";


const App=()=>{
  return(
    //return => singl element par kaam karta hai
    <>
    <div>
      <h1>Hello Cybrom </h1>
      <p></p>
      <Home/>
      <Navbar/>
      <Footer/>
    </div>

    </>
  )

}
export default App