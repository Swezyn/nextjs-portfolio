import React, { useState, useEffect, useRef } from 'react'

export default function Skills() {
  
  return (
    <div>
        <div className='h-full w-full px-8 py-32 lg:px-16 lg:py-64 2xl:px-64 lg:flex justify-between'>
          <div className='lg:sticky top-1/4 lg:w-2/5 lg:mb-0 mb-16 self-start'>
            <h1 className='lg:text-7xl text-2xl font-bold text-neutral-900 leading-normal'>My most important skills</h1>
            <p className='leading-normal lg:text-2xl lg:mt-8 mt-4'>These are my favorite tools and frameworks for <span className='font-semibold'>Web Development</span></p>
          </div>
          <div className='lg:w-1/2'>
            <Skill name="React JS" desc="Lol" procent="75" y="1100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
            <div className='lg:mb-48 mb-16' />
            <Skill name="Next JS" desc="Lol" procent="50" y="1700" src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
            <div className='lg:mb-48 mb-16' />
            <Skill name="Tailwind CSS" desc="Lol" procent="65" y="2300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
          </div>
        </div>
    </div>
  )
}

function Skill(props){

  const ref = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(ref.current.getBoundingClientRect().top)
        })
    }
    , [])

  return (
    <div ref={ref} className='bg-neutral-100 h-fit rounded-xl flex flex-col items-center shadow-xl lg:p-16 p-8'>
      <div className='flex w-full lg:mb-16 mb-8'>
        <div style={{transform: `scale(${scrollY < 650 ? 100 : 0}%)`}} className='aspect-square lg:h-16 h-10 transition-transform duration-300'>
          <img className='h-full w-full' src={props.src} />
        </div>
        <div style={{transform: `translateX(${scrollY < 650 ? 0 : -5}rem)`}} className='flex flex-col lg:ml-8 ml-4 transition-transform duration-300' >
          <h1 className='lg:text-3xl font-bold leading-normal'>{props.name}</h1>
          <p className='leading-normal'>{props.desc}</p>
        </div>
      </div>
      {/* Slider */}
      <h2 style={{opacity: scrollY < 650 ? 1 : 0}} className=' font-semibold lg:text-xl text-sm text-neutral-700 w-full leading-loose transition-opacity duration-300'>Better than</h2>
      <div className='w-full lg:h-4 h-2 border-neutral-500 bg-neutral-400 border-2 rounded-full flex items-center'>
        <div style={{width: `${scrollY < 650 ? props.procent : 0}%`}} className='flex justify-end transition-all duration-500'>
          <div className='aspect-square rounded-full lg:h-8 h-4 bg-gradient-to-br from-purple-400 to-pink-600 border-neutral-500 border-2 translate-x-4'>
            <p style={{opacity: scrollY < 650 ? 1 : 0}} className='-translate-y-8 font-bold lg:text-base text-xs text-neutral-700 text-center transition-opacity'>{props.procent}%</p>
          </div>
        </div>
      </div>
      <h2 style={{opacity: scrollY < 650 ? 1 : 0}} className='w-full text-end font-semibold lg:text-lg text-xs text-neutral-700 leading-loose transition-opacity'>Of Web Developers</h2>
    </div>
  )
}