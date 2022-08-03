import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {

    function scrollTo(element: string) {
        if (element === 'intro') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: document.getElementById(element).offsetTop,
                behavior: 'smooth'
            })
        }
    }

  return (
    <div className='h-64 w-full bg-neutral-600 py-16 px-64 flex justify-between'>
        {/* About */}
        <div className='w-1/4'>
            <h1 className='text-neutral-50 font-bold leading-loose'>About Me</h1>
            <p className='text-neutral-300'>I am a 17 year old boy from Sweden, who loves programming. 
                Coding has been a passion of mine for nearly 5 years, and I enjoy creating beautiful and functional websites. 
                When I'm not coding, I ride mountain bikes or go skiing.</p>
        </div>
        {/* Quick Links */}
        <div className='w-1/4'>
            <h1 className='text-neutral-50 font-bold'>Quick Links</h1>
            <div className='flex flex-col'>
                <button onClick={() => scrollTo("intro")} className='text-neutral-300 w-fit leading-loose'>Intro</button>
                <button onClick={() => scrollTo("about")} className='text-neutral-300 w-fit leading-loose'>About</button>
                <button onClick={() => scrollTo("skills")} className='text-neutral-300 w-fit leading-loose'>Skills</button>
                <button onClick={() => scrollTo("contact")} className='text-neutral-300 w-fit leading-loose'>Contact</button>
            </div>
        </div>
        {/* Social Media */}
        <div className='w-1/4'>
            <h1 className='text-neutral-50 font-bold leading-loose'>Social Media</h1>
            <div className='flex flex-col'>
                <button><FaInstagram size={25} className='fill-neutral-300 my-2' /></button>
                <button><FaTwitter size={25} className='fill-neutral-300 my-2' /></button>
                <button><FaFacebook size={25} className='fill-neutral-300 my-2' /></button>
            </div>
        </div>
    </div>
  )
}
