import React, { useState, useEffect, useRef } from 'react'

import { BsArrowDown } from 'react-icons/bs'

export default function About() {

  const ref = useRef<any>(null)
  const [scrollY, setScrollY] = useState(700)
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (ref.current !== null)
            setScrollY(ref.current.getBoundingClientRect().top)
        })
    }
    , [])

  return (
    <div ref={ref} className='flex flex-col items-center'>
        {/* Scroll down arrow */}
        <BsArrowDown style={{ opacity: scrollY < 600 ? 0 : 1}} className='animate-bounce h-16 w-12 -z-10 transition-opacity' />
        <div style={{transform: `scale(${scrollY < 600 && scrollY > -400 ? 100 : 50}%)`, minWidth: "18rem"}} className='mt-8 w-3/5 max-w-fit transition-transform duration-500'>
          <div style={{transform: `translateX(${scrollY < 400 && scrollY > -400 ? -30 : 0}%) scale(75%)`}} className='h-72 md:h-96 w-fit aspect-square bg-neutral-700 absolute rounded-xl overflow-hidden transition-transform duration-500'>
            <img src="/me.jpeg" className="w-full h-full object-cover"/>
          </div>
          <div style={{transform: `translateX(${scrollY < 400 && scrollY > -400 ? 30 : 0}%)`}} className='h-72 md:h-96 w-full aspect-video bg-neutral-100 rounded-xl p-8 shadow-2xl transition-transform duration-500'>
            <p className='text-xs leading-relaxed md:text-xl'><span className='text-sm md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 py-1 px-6 rounded-xl text-neutral-50 '>Hi!</span> I am a 17 year old boy from Sweden, who loves programming.</p>
            <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
            <p className='text-xs leading-relaxed md:text-xl'>Coding has been a passion of mine for nearly 5 years, and I enjoy creating beautiful and functional websites.</p>
            <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
            <p className='text-xs leading-relaxed md:text-xl'>When I'm not coding, I ride mountain bikes or go skiing.</p>
          </div>
        </div>
    </div>
  )
}
