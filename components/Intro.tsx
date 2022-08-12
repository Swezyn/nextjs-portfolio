import React, {useEffect, useState, useRef} from 'react'
import Typewriter from 'typewriter-effect';

export default function Intro() {

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
    <div id='intro' ref={ref} className='w-full bg-neutral-100 h-fit flex items-center flex-col pt-48'>
        <div className='absolute w-full flex justify-between overflow-hidden -translate-y-64'>
            <svg style={{transform: "translateX(-20rem) translateY(-20rem)"}} className='w-full' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path className='fill-purple-400 opacity-20' d="M19.3,-32.8C29.3,-27.7,44.5,-31.1,54.9,-27.1C65.2,-23,70.5,-11.5,64.9,-3.3C59.2,5,42.5,9.9,35.9,20.5C29.4,31.1,33.1,47.4,28.8,59.6C24.5,71.8,12.2,80,-1.3,82.2C-14.8,84.4,-29.5,80.6,-40,71.9C-50.5,63.3,-56.7,49.8,-61.4,37C-66,24.2,-69.1,12.1,-71.2,-1.2C-73.2,-14.4,-74.1,-28.9,-70.3,-43.1C-66.4,-57.2,-57.7,-71.1,-45.2,-74.8C-32.7,-78.5,-16.4,-72.1,-5.9,-61.9C4.7,-51.8,9.3,-38,19.3,-32.8Z" transform="translate(100 100)" />
            </svg>
            <svg style={{transform: "translateX(15rem)"}} className='w-full' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path className='fill-purple-400 opacity-20' d="M18.5,-34.9C27.4,-27,40.3,-28.8,49.5,-24.7C58.8,-20.5,64.3,-10.2,67.7,1.9C71,14.1,72.3,28.3,63.3,32.9C54.3,37.6,35.2,32.7,23,31.4C10.7,30.1,5.4,32.4,-2.8,37.2C-10.9,41.9,-21.7,49.2,-34.8,50.9C-47.8,52.7,-63,48.9,-63.6,39.5C-64.2,30.1,-50.2,15,-44.2,3.5C-38.1,-8.1,-40,-16.1,-40.1,-26.8C-40.2,-37.4,-38.5,-50.5,-31.5,-59.6C-24.5,-68.7,-12.3,-73.7,-3.7,-67.2C4.8,-60.8,9.6,-42.9,18.5,-34.9Z" transform="translate(100 100)" />
            </svg>
        </div>      
        <h3 style={{transform: `translateY(${scrollY < -200 ? 50 : 0}%)`, opacity: -scrollY * 0.003 + 1}} className='font-bold uppercase text-base tracking-widest leading-loose lg:text-2xl text-neutral-700 transition-transform duration-500 ease-linear'>Hi, My name is</h3>
        <h1 className='font-extrabold text-4xl leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 lg:text-7xl lg:leading-normal'>Elias Akesson</h1>
        <div style={{transform: `scaleX(${scrollY < 0 ? 1.5 : 1}) translateY(${scrollY < -200 ? -110 : 0}%)`, borderTopWidth: `${scrollY < -200 ? 0 : 2}px`}} className='w-1/2 h-28 border-t-2 bg-neutral-100 border-purple-400 lg:w-96 transition-all duration-500' />
        <div style={{transform: `translateY(${scrollY < -200 ? -100 : 0}%)`, opacity: scrollY > -250 ? 1 : 0}} className="w-full flex flex-col items-center transition duration-500 mb-16">
            <h2 className='font-bold text-2xl lg:text-4xl text-neutral-900 flex transition duration-300 -translate-y-16'><span className='font-normal mr-2'>I'm a </span><Typewriter options={{strings: ['Web Developer.', 'Web Designer.', 'UI/UX Designer.'],autoStart: true,loop: true, delay: 150, deleteSpeed: 100}} /></h2>
            <button onClick={() => window.scrollTo({top: document.getElementById("contact").offsetTop})} className='bg-purple-400 bg-opacity-50 px-8 py-3 rounded-full text-xs text-neutral-50 font-bold lg:text-base lg:py-4 lg:px-12 hover:shadow-xl hover:-translate-y-1 transition'>Do You Want to Work With Me?</button>
        </div>
        <div className={`w-full overflow-hidden bg-cover mt-16 transition-all duration-700 ${scrollY < 0 ? "lg:h-64 h-16" : "lg:h-32 h-8"}`}>
            <svg className='w-full h-full' viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path className="fill-neutral-200" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
        </div>
    </div>
  )
}
