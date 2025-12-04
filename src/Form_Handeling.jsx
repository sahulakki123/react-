import React, { useState } from 'react'
import './Te.css'

const Form = () => {

    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [num, setnum] = useState("")


    let Handeling=(e)=>{

        e.preventDefault()

        alert([name, email, num])
    }



  return (
    <>

    <h1>Form_Handeling </h1>

    <form onSubmit={Handeling} className=''>
        Enter Name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
        Enter Email : <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /> <br /> <br />
        Enter Number : <input type="number" value={num} onChange={(e)=>{setnum(e.target.value)}} /> <br /> <br />

        <button type='submit'>Save Data</button>
    </form>

    </>
  )
}

export default Form