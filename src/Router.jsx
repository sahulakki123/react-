import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'

const Router = () => {
  return (
    <>
    <Routes>
            <Route path='/' element={<Layout/>}>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>

            </Route>
    </Routes>

    </>
  )
}

export default Router