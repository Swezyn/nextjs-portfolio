import React, { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { FaCheckCircle } from 'react-icons/fa'

export default function Contact() {

  const ref = useRef<any>(null)
  const [scrollY, setScrollY] = useState(700)
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (ref.current !== null)
            setScrollY(ref.current.getBoundingClientRect().top)
        })
    }
    , [])

  const [sendStatus, setSendStatus] = useState('')
  const [nameInput, setNameInput] = useState<{value: string; error: string}>({value: "", error: ""})
  const [emailInput, setEmailInput] = useState<{value: string; error: string}>({value: "", error: ""})
  const [subjectInput, setSubjectInput] = useState<{value: string; error: string}>({value: "", error: ""})
  const [messageInput, setMessageInput] = useState<{value: string; error: string}>({value: "", error: ""})

  function SendEmail(e){
    e.preventDefault()

    let toSend : boolean = true

    if (!nameInput.value || nameInput.value.length < 3) {
      setNameInput({...nameInput, error: "At least 3 characters"})
      toSend = false
    }
    else setNameInput({...nameInput, error: ""})
    if (!emailInput.value || !emailInput.value.includes("@") || !emailInput.value.includes(".") || emailInput.value.length < 5 || emailInput.value.length > 50){
      setEmailInput({...emailInput, error: "Not a valid email adress"})
      toSend = false
    }
    else setEmailInput({...emailInput, error: ""})
    if (!subjectInput.value) {
      setSubjectInput({...subjectInput, error: "Please enter a subject"})
      toSend = false
    }
    else setSubjectInput({...subjectInput, error: ""})
    if (!messageInput.value || messageInput.value.length < 10) {
      setMessageInput({...messageInput, error: "At least 10 characters"})
      toSend = false
    }
    else setMessageInput({...messageInput, error: ""})

    if (toSend){
      emailjs.sendForm('service_wbib4ob', 'template_234jnup', e.target, 'UIsk6ldu4j8ZHw4gl')
        .then((result) => {
            setSendStatus('success')
        }, (error) => {
            setSendStatus('error')
        });
    }
  }

  function Reset(){
    setSendStatus('')
    setSubjectInput({value: "", error: ""})
    setMessageInput({value: "", error: ""})
  }

  return (
    <div id='contact' ref={ref} className='w-full bg-purple-400 bg-opacity-30'>
      <div className="w-full">
        <svg className={`${scrollY < 600 ? 'lg:h-48 h-16' : 'h-0'} w-full transition-all duration-500`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="fill-neutral-200"></path>
        </svg>
      </div>
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center w-full lg:px-32 pb-32'>
        {sendStatus === 'success' ?
        <div className='lg:w-1/2 w-full h-96 flex flex-col items-center'>
          <div className='bg-neutral-100 border-l-8 border-green-600 rounded-xl h-24 w-96 mt-16 flex items-center py-2 px-4'>
              <FaCheckCircle size={50} className='fill-green-600'/>
              <div className='ml-4'>
                <h2 className='font-bold text-xl leading-tight'>Success</h2>
                <p className='text-sm leading-tight text-neutral-500'>Your email has been sent!</p>
              </div>
            </div> 
            <button onClick={() => Reset()} className='bg-purple-400 text-neutral-50 rounded-xl py-2 px-6 mt-8 hover:-translate-y-1 hover:shadow-lg transition'>Send Another</button>
        </div>
        :
        <form style={{opacity: sendStatus === "success" ? 0 : 1}} onSubmit={SendEmail} className='lg:w-1/2 w-full transition-all duration-500'>
          <div className='flex flex-col items-center w-full'>
            {/* Name */}
            <div style={{transform: `translateY(${scrollY < 500 ? 0 : -100}%)`, opacity: scrollY < 500 ? 1 : 0, pointerEvents: scrollY < 500 ? "all" : "none"}} className='flex flex-col lg:w-96 w-3/4 transition duration-500'>
              <label className='translate-y-2 bg-neutral-200 px-6 py-1 rounded-full w-fit ml-4 font-semibold'>Name</label>
              <div className={`bg-neutral-100 rounded-xl w-full shadow-xl overflow-hidden ${nameInput.error && "border-red-600 border-2"}`}>
                <input className='w-full p-3' name='name' placeholder='Your name here' value={nameInput["value"]} onChange={(e) => setNameInput(nameInput => ({...nameInput, value: e.target.value}))}/>
              </div>
              <label className={`text-red-600 px-6 text-sm leading-loose ${!nameInput.error && "text-opacity-0"}`}>{nameInput.error}</label>
            </div>
            {/* Email */}
            <div style={{transform: `translateY(${scrollY < 500 ? 0 : -100}%)`, opacity: scrollY < 500 ? 1 : 0}} className='flex flex-col lg:w-96 w-3/4 transition duration-500 delay-150'>
              <label className='translate-y-2 bg-neutral-200 px-6 py-1 rounded-full w-fit ml-4 font-semibold'>Email</label>
              <div className={`bg-neutral-100 rounded-xl w-full shadow-xl overflow-hidden ${emailInput.error && "border-red-600 border-2"}`}>
                <input className='w-full p-3' name='email' placeholder='Your email here' value={emailInput["value"]} onChange={(e) => setEmailInput(emailInput => ({...emailInput, value: e.target.value}))}/>
              </div>
              <label className={`text-red-600 px-6 text-sm leading-loose ${!emailInput.error && "text-opacity-0"}`}>{emailInput.error}</label>
            </div>
            {/* Subject */}
            <div style={{transform: `translateY(${scrollY < 500 ? 0 : -100}%)`, opacity: scrollY < 500 ? 1 : 0}} className='flex flex-col lg:w-96 w-3/4 transition duration-500 delay-300'>
              <label className='translate-y-2 bg-neutral-200 px-6 py-1 rounded-full w-fit ml-4 font-semibold'>Subject</label>
              <div className={`bg-neutral-100 rounded-xl w-full shadow-xl overflow-hidden ${subjectInput.error && "border-red-600 border-2"}`}>
                <input className='w-full p-3' name='subject' placeholder='The subject here' value={subjectInput["value"]} onChange={(e) => setSubjectInput(subjectInput => ({...subjectInput, value: e.target.value}))}/>
              </div>
              <label className={`text-red-600 px-6 text-sm leading-loose ${!subjectInput.error && "text-opacity-0"}`}>{subjectInput.error}</label>
            </div>
            {/* Message */}
            <div style={{transform: `translateY(${scrollY < 500 ? 0 : -50}%)`, opacity: scrollY < 500 ? 1 : 0}} className='flex flex-col lg:w-96 w-3/4 transition duration-500 delay-500'>
              <label className='translate-y-2 bg-neutral-200 px-6 py-1 rounded-full w-fit ml-4 font-semibold'>Message</label>
              <div className={`bg-neutral-100 rounded-xl w-full shadow-xl overflow-hidden ${messageInput.error && "border-red-600 border-2"}`}>
                <textarea className='p-3 w-full' rows={5} name='message' placeholder='The message here' value={messageInput["value"]} onChange={(e) => setMessageInput(messageInput => ({...messageInput, value: e.target.value}))}/>
              </div>
              <label className={`text-red-600 px-6 text-sm leading-loose ${!messageInput.error && "text-opacity-0"}`}>{messageInput.error}</label>
            </div>
            <input className='bg-neutral-50 w-32 text-center cursor-pointer mt-16 px-8 py-3 rounded-full text-xs text-neutral-700 font-bold lg:text-base lg:py-4 lg:px-12 hover:shadow-xl hover:-translate-y-1 transition' type="submit" value="Send Message" />
          </div>
        </form>
        }
        <div className='lg:w-1/2 w-3/4 overflow-hidden mb-16'>
          <h1 style={{transform: `translateY(${scrollY < 600 ? 0 : -120}%)`, transitionDelay: `${scrollY < 400 ? 100 : 0}ms`}} className='transition-transform duration-500 h-fit lg:text-7xl text-5xl font-bold  text-neutral-50'>Contact Me</h1>
          <p style={{transform: `translateY(${scrollY < 600 ? 0 : -430}%)`}} className='leading-normal lg:text-2xl lg:mt-8 mt-4 transition-transform duration-500  text-neutral-200'>For additional <span className='font-semibold'>information</span> or <span className='font-semibold'>freelancing requests</span> please send me an email</p>
        </div>
      </div>
    </div>
  )
}
