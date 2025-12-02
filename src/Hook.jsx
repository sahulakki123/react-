import React, { useState } from 'react'

const Hook = () => {


    // Hook==================
    // useState => Stage management
    // change==stage
    //  useState react ki Al ko updata karega 
    // let [variable , function ] = useState(initial value)
   let [count, setcount] = useState(0)

   let Ice =()=>{
    setcount(count + 1 )
    console.log(count);
    
   }
     let Dce =()=>{
    setcount(count - 1 )
    console.log(count);
    
   }

    


  return (
    <>
    <h1> Counter </h1>
    <p>Count: {count}</p>
    <button onClick={Ice}>Increment</button>
    <button onClick={Dce}>Decrement</button>
    </>
  )
}

export default Hook