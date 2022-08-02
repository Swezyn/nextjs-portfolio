import React, {useEffect, useState} from 'react'
import Typewriter from 'typewriter-effect';

export default function Intro() {

    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })
    }
    , [])

  return (
    <div className='w-full bg-neutral-100 h-fit flex items-center flex-col pt-32'>
        <h3 style={{transform: `translateY(${scrollY  * 0.45}px)`, opacity: -scrollY * 0.003 + 1}} className='font-bold uppercase text-base tracking-widest leading-loose md:text-2xl text-neutral-700'>Hi, My name is</h3>
        <h1 style={{transform: `translateY(${scrollY  * 0.35}px)`, opacity: -scrollY * 0.003 + 1}} className='font-extrabold text-5xl leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-7xl md:leading-normal'>Elias Akesson</h1>
        <div style={{transform: `scaleX(${Math.min(scrollY * 0.005 + 1, 1.5)})`, borderTopWidth: `${scrollY > 200 ? 0 : 2}px`}} className='w-64 h-24 border-t-2 bg-neutral-100 border-purple-400 md:w-96' />
        <h2 style={{opacity: -scrollY * 0.0035 + 1}} className='font-bold text-2xl md:text-4xl text-neutral-900 -translate-y-16 flex'><span className='font-normal mr-2'>I'm a </span><Typewriter options={{strings: ['Web Developer.', 'Web Designer.', 'UI/UX Designer.'],autoStart: true,loop: true, delay: 150, deleteSpeed: 100, pauseFor: 3000}} /></h2>
        <button style={{transform: `translateY(-${scrollY  * 0.25}px)`, opacity: -scrollY * 0.004 + 1}} className='bg-gradient-to-r from-purple-400 to-pink-600 px-8 py-3 rounded-full text-xs text-neutral-50 font-bold md:text-base md:py-4 md:px-12'>Do You Want to Work With Me?</button>
        <div style={{height: `${Math.min(scrollY * 0.4, 200) + 100}px`}} className="w-full overflow-hidden bg-cover mt-16">
            <svg className='w-full h-full' viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path className="fill-neutral-200" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
        </div>
    </div>
  )
}
