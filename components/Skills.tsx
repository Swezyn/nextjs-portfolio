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
        <div id='skills' ref={ref} className='h-full w-full px-8 pt-16 pb-32 lg:px-16 lg:pt-64 lg:pb-48 2xl:px-64 lg:flex justify-between bg-neutral-200 dark:bg-neutral-600'>
          <div className='lg:sticky top-1/4 lg:h-96 h-64 lg:w-2/5 self-start overflow-hidden'>
            <svg className={`transition-transform duration-500 absolute -z-10 overflow-hidden -translate-y-32 lg:translate-x-8 -translate-x-4 ${scrollY < 600 ? "lg:scale-125 scale-100" : "scale-0 delay-200"}`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-rose-300' d="M26.8,-39.8C38.8,-39.6,55.1,-40.4,57.3,-34C59.6,-27.5,47.8,-13.7,46.9,-0.5C46.1,12.8,56.4,25.6,54.5,32.7C52.6,39.8,38.5,41.1,27.4,39.5C16.3,37.8,8.2,33.2,-3.7,39.6C-15.5,45.9,-31,63.2,-44.7,66.3C-58.4,69.5,-70.3,58.5,-78.2,45C-86.2,31.6,-90.2,15.8,-87.9,1.3C-85.5,-13.1,-76.9,-26.2,-64.9,-32.7C-52.9,-39.1,-37.5,-38.7,-26.2,-39.2C-14.8,-39.7,-7.4,-41,0,-41.1C7.5,-41.1,14.9,-40,26.8,-39.8Z" transform="translate(100 100)" />
            </svg>
            <div className='lg:translate-y-0 translate-y-8'>
              <h1 style={{transform: `translateY(${scrollY < 600 ? 0 : -250}%)`, transitionDelay: `${scrollY < 600 ? 100 : 0}ms`}} className='lg:text-7xl text-2xl font-bold text-neutral-900 dark:text-neutral-50 leading-none transition-transform duration-500'>My most important skills</h1>
              <p style={{transform: `translateY(${scrollY < 600 ? 0 : -400}%)`}} className='text-neutral-600 dark:text-neutral-100 leading-normal lg:text-2xl lg:mt-8 mt-4 transition-transform duration-500 delay-100'>These are my favorite tools and frameworks for <span className='font-semibold'>Web Development</span></p>
            </div>
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
    <div ref={ref} className='bg-neutral-100 dark:bg-neutral-500 h-fit rounded-xl flex flex-col items-center shadow-xl lg:p-16 p-8'>
      <div className='flex w-full lg:mb-16 mb-8'>
        <div className={`aspect-square lg:h-16 h-10 transition-transform duration-300 ${scrollY < 650 ? "scale-100" : "scale-0"}`}>
          <img className='h-full w-full' src={src} />
        </div>
        <div style={{transform: `translateX(${scrollY < 650 ? 0 : -5}rem)`}} className='flex flex-col lg:ml-8 ml-4 transition-transform duration-300' >
          <h1 className='lg:text-3xl font-bold leading-loose dark:text-neutral-50'>{name}</h1>
          <p className='leading-normal dark:text-neutral-100'>{desc}</p>
        </div>
      </div>
      {/* Slider */}
      <h2 style={{opacity: scrollY < 650 ? 1 : 0}} className=' font-semibold lg:text-xl text-sm text-neutral-700 dark:text-neutral-200 w-full leading-loose transition-opacity duration-300'>Better than</h2>
      <div className='w-full lg:h-4 h-2 border-neutral-500 bg-neutral-400 border-2 rounded-full flex items-center'>
        <div style={{width: `${scrollY < 650 ? procent : 0}%`}} className='flex justify-end transition-all duration-500'>
          <div className='rounded-full lg:h-8 lg:w-8 h-4 w-4 bg-rose-300 border-neutral-500 border-2 translate-x-4'>
            <p style={{opacity: scrollY < 650 ? 1 : 0}} className='-translate-y-8 font-bold lg:text-base text-xs text-neutral-700 dark:text-neutral-100 text-center transition-opacity'>{procent}%</p>
          </div>
        </div>
      </div>
      <h2 style={{opacity: scrollY < 650 ? 1 : 0}} className='w-full text-end font-semibold lg:text-lg text-xs text-neutral-700 dark:text-neutral-200 leading-loose transition-opacity'>Of Web Developers</h2>
    </div>
  )
}