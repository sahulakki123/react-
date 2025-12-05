import React, { useState } from 'react'

const Form = () => {

    // let [name, setname] = useState("")
    // let [email, setemail] = useState("")
    // let [num, setnum] = useState("")

    let [form, setform] = useState({
      name : "",
      email : "",
      number : "",
    })
     
    let handlingchange=(e)=>{
      setform({ ...form , [e.target.name] : e.target.value })
    }



    let Handeling=(e)=>{
        e.preventDefault()
        if (form.name.trim()==""){

          alert("Name cannot be empty")
        }

    }



  return (
    <>

    <h1>Form_Handeling </h1>

    <form onSubmit={Handeling}>
        Enter Name : <input type="text" name="name" value={form.name} onChange={handlingchange} /> <br /> <br />
        Enter Email : <input type="text" name="email" value={form.email} onChange={handlingchange} /> <br /> <br />
        Enter Number : <input type="text" name="number" value={form.number} onChange={handlingchange} /> <br /> <br />

        <button type='submit'>Save Data</button>
    </form>

    </>
  )
}

export default Form