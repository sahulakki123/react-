import React from "react";
import Child from './Child.jsx'
import im from './assets/img.jpg'

const Home=()=>{
    return(
        <>
        
            <h1 className="font-bold text-5xl">Home page</h1>
            <Child im={im} name={'Lakki'} age={'21'} city={'Bhopal'} />
    <Child im={im} name={'Lakki'} age={'21'} city={'Bhopal'} />
    <Child im={im} name={'Lakki'} age={'21'} city={'Bhopal'} />
    </>
    )
}
export default Home