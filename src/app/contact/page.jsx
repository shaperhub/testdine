'use client'
import { useState } from 'react'
import Image from "next/image"
import Contactimage from "../../../public/LoginGraphic.png"
import { Loader2 } from "lucide-react"

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [nameerror, setNameError] = useState('')
  const [emailerror, setEmailError] = useState('')
  const [messageerror, setMessageError] = useState('')
  const [validateerror, setValidateError] = useState('')
  const [validated, setValidated] = useState('')

  const namecheck = () => {
    const nameregex = /^([a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+)*[.]{0,1}){1,2}$/
    if (name.length < 2) {
      setNameError("Name cannot be empty")
    } else {
      if (!nameregex.test(name)) {
        setNameError("Invalid Name")
      } else {
        setNameError('')
      }
    }
  }

  const emailcheck = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (!emailRegex.test(email)) {
      setEmailError("Error! you have entered invalid email.")
    } else {
      setEmailError("")
    }
  }
  
  const messagecheck = () => {
    if (message.length < 3) {
      setMessageError("Message Too Short")
    } else {
      setMessageError("")
    }
  }
  
  const handleForm = () => {
    setLoading(true)
    namecheck()
    emailcheck()
    messagecheck()
    setTimeout(() => {
      if (nameerror.length==0 && name.length>1 && emailerror.length==0 && email.length>4 && messageerror.length==0 && message.length>2) {
        setValidateError('')
        handleContact()
      } else {
        setValidateError("Complete the form")
        setLoading(false)
      }
    }, 2000)
  }

  const handleContact = () => {
    setValidated("Thanks for contacting us")
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setLoading(false)
    setTimeout(() => {setValidated('')}, 3000)
  }

  return (
    <div className="bg-white/50 dark:bg-black/80 min-h-screen flex flex-col md:flex-row items-center justify-center text-sm font-regular pt-24 md:pt-16 shadow-xl">
      <div className="bg-white dark:bg-black w-80 md:w-1/2 lg:w-1/3 px-12 py-12">
        <h2 className="font-heading text-black dark:text-white text-3xl lg:text-4xl pb-8">Contact Us</h2>
        <h4 className="font-heading text-ddarkgrey dark:text-dgrey text-xl lg:text-2xl pb-8">Got Questions? Let&apos;s give you the answers you need.</h4>
        <Image className="pb-8" src={Contactimage} width="320" height="160" alt="Contact Page Image" quality={100} />
        <div className="mt-4">
          <p className="text-black dark:text-white font-heading text-xl">For General Inquiries</p>
          <p className="text-ddarkgrey dark:text-dgrey text-base">info@dineintel.io </p>
        </div>
        <div className="mt-4">
          <p className="text-black dark:text-white font-heading text-xl">For Payment Issues</p>
          <p className="text-ddarkgrey dark:text-dgrey text-base">support@dineintel.io </p>
        </div>
      </div>
      <div className="bg-dlightestgreen dark:bg-dblack p-10 w-80">
        <>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your Name"
            aria-label='Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)} 
            onBlur={namecheck}
            className="w-full p-3 mt-2 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          {nameerror && <span className='text-red-600 text-xs mb-4'>{nameerror}<br></br></span>}

          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email Address"
            aria-label='Email Address'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={emailcheck}
            className="w-full p-3 mt-2 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          {emailerror && <span className='text-red-600 text-xs mb-4'>{emailerror}<br></br></span>}

          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Phone Number"
            aria-label='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 mt-2 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            aria-label='Message'
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            onBlur={messagecheck}
            className="w-full p-3 mt-2 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey resize-none"
          ></textarea>
          {messageerror && <span className='text-red-600 text-xs mb-4'>{messageerror}<br></br></span>}

          <button 
            onClick={handleForm}
            className="w-full bg-transparent p-3 mt-4 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white text-center font-bold inline-flex justify-center items-center"
          >
            Submit
            {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </button>
        </>
        {validateerror && <div className='w-full bg-dred/20 text-red-600 text-xs text-center p-4 my-4'><span>{validateerror}</span></div>}
        {validated && <div className='w-full bg-dgreen/20 text-green-600 text-xs text-center p-4 my-4'><span>{validated}</span></div>}
      </div>
    </div>
  )
}

export default Contact
