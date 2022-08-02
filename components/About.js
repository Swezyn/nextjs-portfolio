import React, { useState, useEffect } from 'react'

import { BsArrowDown } from 'react-icons/bs'

export default function About() {

    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })
    }
    , [])

  return (
    <div className='flex flex-col items-center'>
        {/* Scroll down arrow */}
        <BsArrowDown style={{ opacity: -scrollY * 0.005 + 1}} className='animate-bounce h-16 w-12 -z-10' />
        <div style={{transform: `scale(${Math.min(scrollY * 0.3 + 50, 100)}%)`, minWidth: "18rem"}} className='mt-8 w-3/5 max-w-fit'>
          <div style={{transform: `translateX(-${scrollY > 200 ? Math.min(30, (scrollY - 200) * 0.1) : 0}%) scale(75%)`}} className='h-72 md:h-96 w-fit aspect-square bg-neutral-700 absolute rounded-xl overflow-hidden'>
            <img src="/me.jpeg" className="w-full h-full object-cover"/>
          </div>
          <div style={{transform: `translateX(${scrollY > 200 ? Math.min(30, (scrollY - 200) * 0.1) : 0}%)`}} className='h-72 md:h-96 w-full aspect-video bg-neutral-100 rounded-xl p-8 shadow-2xl'>
            <p className='text-sm leading-relaxed md:text-xl'><span className='text-1xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 py-1 px-6 rounded-xl text-neutral-50 '>Hi!</span> I am a 17 year old boy from Sweden, who loves programming.</p>
            <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
            <p className='text-sm leading-relaxed md:text-xl'>I have been coding for nearly 5 years, and I specialize in making full-stack applications.</p>
            <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
            <p className='text-sm leading-relaxed md:text-xl'>When I'm not coding, I ride mountain bikes or go skiing.</p>
          </div>
        </div>
    </div>
  )
}
