import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {

    function scrollTo(element: string) {
        if (element === 'intro') {
            window.scrollTo({
                top: 0
            })
        }
        else if (element === 'about') {
            window.scrollTo({
                top: document.getElementById('about').offsetTop - 200
            })
        }
        else {
            window.scrollTo({
                top: document.getElementById(element).offsetTop
            })
        }
    }

  return (
    <div className='h-64 w-full bg-neutral-100 lg:py-16 lg:px-64 py-4 px-8 flex justify-between'>
        {/* About */}
        <div className='lg:w-1/2 w-1/2'>
            <h1 className='text-neutral-700 font-bold leading-loose lg:text-base text-xs'>About Me</h1>
            <p className='text-neutral-600 lg:text-base text-xs'>I am a 17 year old boy from Sweden, who loves programming. 
                Coding has been a passion of mine for nearly 5 years, and I enjoy creating beautiful and functional websites. 
                When I'm not coding, I ride mountain bikes or go skiing.</p>
        </div>
        <div className='flex lg:flex-row flex-col items-center w-1/2 ml-4'>
            {/* Quick Links */}
            <div className='lg:w-1/2 mb-4 lg:ml-16'>
                <h1 className='text-neutral-700 font-bold leading-loose lg:text-base text-xs'>Quick Links</h1>
                <div className='flex flex-col'>
                    <button onClick={() => scrollTo("intro")} className='text-neutral-600 w-fit leading-loose lg:text-base text-xs'>Intro</button>
                    <button onClick={() => scrollTo("about")} className='text-neutral-600 w-fit leading-loose lg:text-base text-xs'>About</button>
                    <button onClick={() => scrollTo("skills")} className='text-neutral-600 w-fit leading-loose lg:text-base text-xs'>Skills</button>
                    <button onClick={() => scrollTo("contact")} className='text-neutral-600 w-fit leading-loose lg:text-base text-xs'>Contact</button>
                </div>
            </div>
            {/* Social Media */}
            <div className='lg:w-1/2'>
                <h1 className='text-neutral-700 font-bold leading-loose lg:text-base text-xs'>Social Media</h1>
                <div className='flex lg:flex-col'>
                    <button><FaInstagram size={25} className='fill-neutral-600 lg:my-2 lg:scale-100 scale-50' /></button>
                    <button><FaTwitter size={25} className='fill-neutral-600 lg:my-2 lg:scale-100 scale-50' /></button>
                    <button><FaFacebook size={25} className='fill-neutral-600 lg:my-2 lg:scale-100 scale-50' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
