import React, { useState } from 'react'

const Form = () => {

    let [name, setname]=useState("")

    let [num, setnum]=useState("")
    let [city, setcity]=useState("")

    let change=(e)=>{
        console.log(e.target.value);
        setname(e.target.value)
    }
        let change1=(e)=>{
        console.log(e.target.value);
        setnum(e.target.value)
    }
        let change2=(e)=>{
        console.log(e.target.value);
        setcity(e.target.value)
    }

  return (
    <>
    <h1>Form</h1>
    Enter name: <input type="text" onChange={change} />
    <br />
    youer name is {name}
    <br />
    Enter number: <input type="text" onChange={change1} />
    <br />
    Youer number {num}
    <br />
    Enter City: <input type="text" onChange={change2} />
    <br />
    Youer city {city}

    </>
  )
}

export default Form