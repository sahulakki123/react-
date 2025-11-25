import React from 'react'
import './Te.css'
import logo from './assets/react.svg'

const Te = () => {
  return (
    <>
            <header className="w-full flex h-15 justify-around items-center border-2 bg-gray-950 text-amber-50">
            <img src={logo} alt="" className="h-10" />
            <nav>
                <ul className="flex gap-10 font-bold text-2xl">
                    <li className="hover:text-sky-400 cursor-pointer">Home</li>
                    <li className="hover:text-sky-400 cursor-pointer">About</li>
                    <li className="hover:text-sky-400 cursor-pointer">Contact</li>
                    <li className="hover:text-sky-400 cursor-pointer">Service</li>
                    <li className="hover:text-sky-400 cursor-pointer">user</li>
                </ul>
            </nav>
            <button className="border p-2 rounded-2xl text-blue-400 bg-amber-800 font-bold">Download</button>
        </header>

    </>
  )
}

export default Te