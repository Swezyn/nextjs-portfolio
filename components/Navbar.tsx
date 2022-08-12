import React, { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"

export default function Navbar() {

  const [scrollUp, setScrollUp] = useState(false)
  let lastScroll = 0;
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
          const currentScroll = window.scrollY;

          if (currentScroll <= lastScroll){
            setScrollUp(true)
          }
          else{
            setScrollUp(false)
          }

          lastScroll = currentScroll;
        })
    }
    , [])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{transform: `translateY(${scrollUp ? 0 : -100}%)`}} className={`w-full h-16 bg-neutral-50 border-b border-b-neutral-300 flex justify-between items-center px-16 md:px-32 shadow-lg z-50 fixed transition-all ease-linear duration-500`}>
        <h1 className="font-bold text-2xl tracking-widest">Elias <span className="font-normal">Akesson</span></h1>
        <div className="flex items-center">
          <div className="overflow-hidden md:relative absolute md:top-0 top-16 md:w-fit w-full">
            <ul style={{transform: `translateX(${isOpen ? 0 : 100}%)`}} className="flex md:flex-row flex-col w-fit items-center transition duration-500">
              <li><button className="px-2 py-2 mx-2">Intro</button></li>
              <li><button className="px-2 py-2 mx-2">About</button></li>
              <li><button className="px-2 py-2 mx-2">Skills</button></li>
              <li><button className="px-2 py-2 mx-2">Contact</button></li>
            </ul>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col items-center hover:scale-110 transition-transform p-2"><FaBars /></button>
        </div>
    </header>
  )
}