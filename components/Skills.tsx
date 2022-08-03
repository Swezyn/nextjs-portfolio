import React, { useState, useEffect, useRef } from 'react'

export default function Skills() {

  const ref = useRef<any>(null)
  const [scrollY, setScrollY] = useState(0)
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (ref.current !== null)
            setScrollY(ref.current.getBoundingClientRect().top)
        })
    }
    , [])
  
  return (
    <div id='skills' ref={ref}>
        <div className='h-full w-full px-8 py-32 lg:px-16 lg:pt-64 lg:pb-48 2xl:px-64 lg:flex justify-between'>
          <div className='lg:sticky top-1/4 lg:w-2/5 lg:mb-0 mb-16 self-start overflow-hidden'>
            <h1 style={{transform: `translateY(${scrollY < 400 ? 0 : -120}%)`, transitionDelay: `${scrollY < 400 ? 100 : 0}ms`}} className='lg:text-7xl text-2xl font-bold text-neutral-900 leading-none transition-transform duration-500'>My most important skills</h1>
            <p style={{transform: `translateY(${scrollY < 400 ? 0 : -500}%)`}} className='leading-normal lg:text-2xl lg:mt-8 mt-4 transition-transform duration-500'>These are my favorite tools and frameworks for <span className='font-semibold'>Web Development</span></p>
          </div>
          <div className='lg:w-1/2'>
            <Skill name="React JS" desc="As someone who has used React for the majority of my career, I would consider myself very knowledgeable in the area." procent="75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
            <div className='lg:mb-48 mb-16' />
            <Skill name="Next JS" desc="Next JS is a relatively new framework for me, but due to how similar it is to React I'm already fairly proficient. In addition, it is now my primary framework for creating web applications." procent="50" src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
            <div className='lg:mb-48 mb-16' />
            <Skill name="Typescript" desc="My time spent fixing errors has been reduced greatly since I started using Typescript, and I will be forever grateful to this wonderful language for making my life easier." procent="65" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" />
            <div className='lg:mb-48 mb-16' />
            <Skill name="Tailwind CSS" desc="With tailwind, I have been able to style web applications faster and more efficiently." procent="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
          </div>
        </div>
    </div>
  )
}

function Skill({name, desc, procent, src}) {

  const ref = useRef<any>(null)
  const [scrollY, setScrollY] = useState(0)
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (ref.current !== null)
            setScrollY(ref.current.getBoundingClientRect().top)
        })
    }
    , [])

  return (
    <div ref={ref} className='bg-neutral-100 h-fit rounded-xl flex flex-col items-center shadow-xl lg:p-16 p-8'>
      <div className='flex w-full lg:mb-16 mb-8'>
        <div style={{transform: `scale(${scrollY < 650 ? 100 : 0}%)`}} className='aspect-square lg:h-16 h-10 transition-transform duration-300'>
          <img className='h-full w-full' src={src} />
        </div>
        <div style={{transform: `translateX(${scrollY < 650 ? 0 : -5}rem)`}} className='flex flex-col lg:ml-8 ml-4 transition-transform duration-300' >
          <h1 className='lg:text-3xl font-bold leading-loose'>{name}</h1>
          <p className='leading-normal'>{desc}</p>
        </div>
      </div>
      {/* Slider */}
      <h2 style={{opacity: scrollY < 650 ? 1 : 0}} className=' font-semibold lg:text-xl text-sm text-neutral-700 w-full leading-loose transition-opacity duration-300'>Better than</h2>
      <div className='w-full lg:h-4 h-2 border-neutral-500 bg-neutral-400 border-2 rounded-full flex items-center'>
        <div style={{width: `${scrollY < 650 ? procent : 0}%`}} className='flex justify-end transition-all duration-500'>
          <div className='aspect-square rounded-full lg:h-8 h-4 bg-gradient-to-br from-purple-400 to-pink-600 border-neutral-500 border-2 translate-x-4'>
            <p style={{opacity: scrollY < 650 ? 1 : 0}} className='-translate-y-8 font-bold lg:text-base text-xs text-neutral-700 text-center transition-opacity'>{procent}%</p>
          </div>
        </div>
      </div>
      <h2 style={{opacity: scrollY < 650 ? 1 : 0}} className='w-full text-end font-semibold lg:text-lg text-xs text-neutral-700 leading-loose transition-opacity'>Of Web Developers</h2>
    </div>
  )
}