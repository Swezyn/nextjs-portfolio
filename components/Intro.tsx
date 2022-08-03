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
    <div id='intro' ref={ref} className='w-full bg-neutral-100 h-fit flex items-center flex-col pt-32'>
        <h3 style={{transform: `translateY(${scrollY < -100 ? 50 : 0}%)`, opacity: -scrollY * 0.003 + 1}} className='font-bold uppercase text-base tracking-widest leading-loose md:text-2xl text-neutral-700 transition-transform duration-300 ease-linear'>Hi, My name is</h3>
        <h1 className='font-extrabold text-5xl leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-7xl md:leading-normal'>Elias Akesson</h1>
        <div style={{transform: `scaleX(${scrollY < 0 ? 1.5 : 1}) translateY(${scrollY < -100 ? -110 : 0}%)`, borderTopWidth: `${scrollY < -100 ? 0 : 2}px`}} className='w-64 h-28 border-t-2 bg-neutral-100 border-purple-400 md:w-96 transition-all duration-150' />
        <h2 style={{transform: `translateY(${scrollY < -100 ? -400 : -100}%)`, opacity: scrollY > -100 ? 1 : 0}} className='font-bold text-2xl md:text-4xl text-neutral-900 flex transition duration-300'><span className='font-normal mr-2'>I'm a </span><Typewriter options={{strings: ['Web Developer.', 'Web Designer.', 'UI/UX Designer.'],autoStart: true,loop: true, delay: 150, deleteSpeed: 100}} /></h2>
        <button style={{transform: `translateY(${scrollY < -100 ? -400 : 0}%)`, opacity: scrollY > -100 ? 1 : 0}} className='bg-gradient-to-r from-purple-400 to-pink-600 px-8 py-3 rounded-full text-xs text-neutral-50 font-bold md:text-base md:py-4 md:px-12 transition duration-300'>Do You Want to Work With Me?</button>
        <div style={{height: `${scrollY < 0 ? 200 : 100}px`}} className="w-full overflow-hidden bg-cover mt-16 transition-all duration-700">
            <svg className='w-full h-full' viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path className="fill-neutral-200" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
        </div>
    </div>
  )
}
