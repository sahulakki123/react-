import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Te.css'
import logo from './assets/react.svg'

const Layout = () => {
  return (
    <> 
     <header className="w-full flex h-15 justify-around items-center border-2 bg-gray-950 text-amber-50">
                <img src={logo} alt="" className="h-10" />
                <nav>
                    <ul className=" hidden sm:flex gap-10 font-bold text-2xl ">
                        <li className="hover:text-sky-400 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:text-sky-400 cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="hover:text-sky-400 cursor-pointer"><Link to="/contact">Contact</Link></li>
                        <li className="hover:text-sky-400 cursor-pointer"><Link to="/service">Service</Link></li>
                        <li className="hover:text-sky-400 cursor-pointer"><Link to="/user">user</Link></li>
                    </ul>
                </nav>
                <button className="border p-2 rounded-2xl text-withe-400 bg-amber-800 font-bold hover:text-sky-400 cursor-pointer">Download</button>
            </header>

            {/* Child componed will apper here */}
            <Outlet/>


      

    </>
  )
}

export default Layout