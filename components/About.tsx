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
    <div id='about' ref={ref} className='flex flex-col items-center overflow-hidden pb-16 bg-neutral-200 dark:bg-neutral-600'>
      <div className='absolute w-full justify-center md:flex hidden'>
        <svg style={{transform: `scale(${scrollY < 600 && scrollY > -400 ? 100 : 0}%) translateY(-25%)`}} className="w-3/5 transition-transform duration-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path className='fill-rose-300' d="M30.3,-55.4C42.1,-45.7,56.5,-43.3,57.1,-35.3C57.7,-27.3,44.7,-13.6,44.8,0.1C44.9,13.8,58.2,27.5,60.6,40.8C63,54.1,54.5,66.9,42.6,68.1C30.7,69.3,15.3,58.9,4.6,51C-6.2,43.1,-12.5,37.7,-24.1,36.4C-35.8,35.1,-52.9,37.8,-60.2,32.4C-67.5,27,-65,13.5,-57.2,4.5C-49.3,-4.4,-36.2,-8.9,-28.7,-13.9C-21.2,-18.9,-19.3,-24.5,-15.4,-38.8C-11.6,-53.1,-5.8,-76,1.7,-79C9.3,-82,18.5,-65.1,30.3,-55.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      {/* Scroll down arrow */}
      <BsArrowDown style={{ opacity: scrollY < 600 ? 0 : 1}} className='animate-bounce h-16 w-12 -z-10 transition-opacity dark:fill-neutral-200' />
      <div style={{transform: `scale(${scrollY < 600 && scrollY > -400 ? 100 : 50}%)`, minWidth: "18rem"}} className='mt-8 w-3/5 max-w-screen-lg transition-transform duration-500 items-center lg:flex hidden lg:flex-col'>
        <div style={{transform: `translateX(${scrollY < 400 && scrollY > -400 ? -70 : 0}%) scale(75%)`}} className='h-72 lg:h-96 w-fit aspect-square bg-neutral-700 absolute rounded-xl overflow-hidden transition-transform duration-500'>
          <img src="/me.JPG" className="w-full h-full object-cover scale-150"/>
        </div>
        <div style={{transform: `translateX(${scrollY < 400 && scrollY > -400 ? 30 : 0}%)`}} className='h-72 lg:h-96 w-4/6 bg-neutral-100 dark:bg-neutral-500 rounded-xl p-8 shadow-2xl transition-transform duration-500'>
          <p className='text-xs leading-relaxed lg:text-xl dark:text-neutral-100'><span className='text-sm lg:text-2xl font-bold bg-rose-300 py-1 px-6 rounded-xl text-neutral-50 '>Hi!</span> I am a 17 year old boy from Sweden, who loves programming.</p>
          <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
          <p className='text-xs leading-relaxed lg:text-xl dark:text-neutral-100'>Coding has been a passion of mine for nearly 5 years, and I enjoy creating beautiful and functional websites.</p>
          <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
          <p className='text-xs leading-relaxed lg:text-xl dark:text-neutral-100'>When I'm not coding, I ride mountain bikes or go skiing.</p>
        </div>
      </div>
      <div style={{transform: `scale(${scrollY < 400 ? 100 : scrollY < 600 ? 90 : 50}%) translateY(-20%)`}} className='mt-32 w-4/5 max-w-screen-lg transition-transform duration-500 items-center lg:hidden flex flex-col'>
        <div className='h-72 lg:h-96 w-full bg-neutral-100 dark:bg-neutral-500 rounded-xl p-8 shadow-2xl transition-transform duration-500 z-10'>
          <p className='text-xs leading-relaxed lg:text-xl'><span className='text-sm lg:text-2xl font-bold bg-rose-300 py-1 px-6 rounded-xl text-neutral-50 '>Hi!</span> I am a 17 year old boy from Sweden, who loves programming.</p>
          <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
          <p className='text-xs leading-relaxed lg:text-xl'>Coding has been a passion of mine for nearly 5 years, and I enjoy creating beautiful and functional websites.</p>
          <p className='overflow-hidden text-xl tracking-widest leading-10 h-10 text-neutral-400'>{[...Array(80)].map((e, i) => ("-"))}</p>
          <p className='text-xs leading-relaxed lg:text-xl'>When I'm not coding, I ride mountain bikes or go skiing.</p>
        </div>
      </div>
    </div>
  )
}
