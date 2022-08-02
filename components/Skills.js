import React, { useState, useEffect, useRef } from 'react'

export default function Skills() {
  
  return (
    <div>
        <div className='h-full w-full px-8 py-64 md:p-64 flex justify-between'>
          <div className='sticky top-1/4 w-2/5 self-start'>
            <h1 className='md:text-7xl text-2xl font-bold text-neutral-900 leading-normal'>My most important skills</h1>
            <p className='leading-normal md:text-2xl md:mt-8 mt-4'>These are my favorite tools and frameworks for <span className='font-semibold'>Web Development</span></p>
          </div>
          <div className='w-1/2'>
            <Skill name="React JS" desc="Lol" procent="75" y="1100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
            <div className='mb-48' />
            <Skill name="Next JS" desc="Lol" procent="50" y="1700" src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
            <div className='mb-48' />
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
            if (props.name === "React JS"){
                console.log(ref.current.getBoundingClientRect().top)
            }
        })
    }
    , [])

  return (
    <div ref={ref} className='bg-neutral-100 h-fit rounded-xl flex flex-col items-center shadow-xl md:p-16 p-8'>
      <div className='flex w-full md:mb-16 mb-8'>
        <div style={{transform: `scale(${scrollY < 650 ? 100 : 0}%)`}} className='aspect-square md:h-16 h-10 transition-transform'>
          <img className='h-full w-full' src={props.src} />
        </div>
        <div style={{transform: `translateX(${scrollY < 650 ? 0 : -5}rem)`}} className='flex flex-col md:ml-8 ml-4 transition-transform' >
          <h1 className='md:text-3xl font-bold leading-normal'>{props.name}</h1>
          <p className='leading-normal'>{props.desc}</p>
        </div>
      </div>
      {/* Slider */}
      <h2 style={{opacity: scrollY < 500 ? 1 : 0}} className=' font-semibold md:text-xl text-sm text-neutral-700 w-full leading-loose transition-opacity'>Better than</h2>
      <div className='w-full md:h-4 h-2 border-neutral-500 bg-neutral-400 border-2 rounded-full flex items-center'>
        <div style={{width: `${scrollY < 500 ? props.procent : 0}%`}} className='flex justify-end transition-all'>
          <div className='aspect-square rounded-full md:h-8 h-4 bg-gradient-to-br from-purple-400 to-pink-600 border-neutral-500 border-2 translate-x-4'>
            <p style={{opacity: scrollY < 500 ? 1 : 0}} className='-translate-y-8 font-bold md:text-base text-xs text-neutral-700 text-center transition-opacity'>{props.procent}%</p>
          </div>
        </div>
      </div>
      <h2 style={{opacity: scrollY < 500 ? 1 : 0}} className='w-full text-end font-semibold md:text-lg text-xs text-neutral-700 leading-loose transition-opacity'>Of Web Developers</h2>
    </div>
  )
}