import React, {useEffect} from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaMoon, FaSun } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

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

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark")
            }
            else {
                document.documentElement.classList.remove("dark")
            }
        })
    }
    , [])

    function toggleDarkMode() {
        if (!document.documentElement.classList.contains('dark')){
            document.documentElement.classList.add('dark')
        } else{
            document.documentElement.classList.remove('dark')
        }
    }

  return (
    <div className='lg:h-64 h-80 w-full bg-neutral-100 dark:bg-neutral-600 lg:py-16 lg:px-64 py-4 px-8 flex lg:flex-row flex-col justify-between'>
        <div className='flex'>
            {/* About */}
            <div className='lg:w-1/2 w-1/2'>
                <h1 className='text-neutral-700 dark:text-neutral-50 font-bold leading-loose lg:text-base text-xs'>About Me</h1>
                <p className='text-neutral-600 dark:text-neutral-200 lg:text-base text-xs'>I am a 17 year old boy from Sweden, who loves programming. 
                    Coding has been a passion of mine for nearly 5 years, and I enjoy creating beautiful and functional websites. 
                    When I'm not coding, I ride mountain bikes or go skiing.</p>
            </div>
            <div className='flex lg:flex-row flex-col lg:items-start items-center w-1/2 ml-4'>
                {/* Quick Links */}
                <div className='lg:w-1/2 mb-4 lg:ml-16'>
                    <h1 className='text-neutral-700 dark:text-neutral-50 font-bold leading-loose lg:text-base text-xs'>Quick Links</h1>
                    <div className='flex flex-col'>
                        <button onClick={() => scrollTo("intro")} className='text-neutral-600 dark:text-neutral-200 w-fit leading-loose lg:text-base text-xs'>Intro</button>
                        <button onClick={() => scrollTo("about")} className='text-neutral-600 dark:text-neutral-200 w-fit leading-loose lg:text-base text-xs'>About</button>
                        <button onClick={() => scrollTo("skills")} className='text-neutral-600 dark:text-neutral-200 w-fit leading-loose lg:text-base text-xs'>Skills</button>
                        <button onClick={() => scrollTo("contact")} className='text-neutral-600 dark:text-neutral-200 w-fit leading-loose lg:text-base text-xs'>Contact</button>
                    </div>
                </div>
                {/* Social Media */}
                <div className='lg:w-1/2'>
                    <h1 className='text-neutral-700 dark:text-neutral-50 font-bold leading-loose lg:text-base text-xs'>Social Media</h1>
                    <div className='flex lg:flex-col'>
                        <button><FaInstagram size={25} className='fill-neutral-600 dark:fill-neutral-200 lg:my-2 lg:scale-100 scale-50' /></button>
                        <button><FaTwitter size={25} className='fill-neutral-600 dark:fill-neutral-200 lg:my-2 lg:scale-100 scale-50' /></button>
                        <button><FaFacebook size={25} className='fill-neutral-600 dark:fill-neutral-200 lg:my-2 lg:scale-100 scale-50' /></button>
                    </div>
                </div>
            </div>
        </div>
        {/* Dark Mode */}
        <div className='lg:w-1/2 flex lg:flex-col lg:my-0 my-4'>
                <div>
                    <h1 className='text-neutral-700 dark:text-neutral-50 font-bold leading-loose lg:text-base text-xs'>Dark Mode</h1>
                    <p className='text-neutral-600 dark:text-neutral-200 lg:text-base text-xs'>Some people prefer dark mode. Do you?</p>
                </div>
                <button onClick={() => toggleDarkMode()} className="w-16 h-8 bg-neutral-500 rounded-full p-1 flex mt-4 ml-4">
                    <div className='bg-neutral-100 w-6 h-6 rounded-full dark:translate-x-8 transition-transform duration-300'></div>
                    <BsSunFill className='absolute m-1 dark:fill-neutral-500 fill-yellow-500 duration-75' />
                    <FaMoon className='absolute my-1 mx-9 fill-neutral-500' />
                </button>
            </div>
    </div>
  )
}
