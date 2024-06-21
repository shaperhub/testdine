'use client'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Forgotpic from '../../../public/ForgotPassword.png'
import EmailIcon from '../../../public/email.png'
import {auth} from '@/app/firebase/config'
import {sendPasswordResetEmail} from 'firebase/auth'
import { useRouter } from 'next/navigation';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter()

  const emailcheck = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (!emailRegex.test(email)) {
      setEmailError("Error! you have entered invalid email.");
    } else {
      setEmailError("");
      resetPassword()
    }
  }

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email).then(() => {
    // Password reset email sent!
      setSuccess("We have sent you an email link to set a new password")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-36 pb-16 bg-white/50 dark:bg-black/80 text-sm font-regular">
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-xl w-96">
        <h1 className="text-black dark:text-white text-center text-xl mb-4 font-bold">Forgot Password?</h1>
        <p className='mb-4 text-black dark:text-white text-center'>Enter your registered email below to receive password reset instructions.</p>
        <Image className='mb-6' src={Forgotpic} width={400} height={400} alt='Forgot Password Image' />

        <div className='flex mb-2'>
          <span className='mr-2'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.75 15.3745H5.25C3 15.3745 1.5 14.2495 1.5 11.6245V6.37451C1.5 3.74951 3 2.62451 5.25 2.62451H12.75C15 2.62451 16.5 3.74951 16.5 6.37451V11.6245C16.5 14.2495 15 15.3745 12.75 15.3745Z" stroke="#A0A8B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.75 6.74951L10.4025 8.62451C9.63 9.23951 8.3625 9.23951 7.59 8.62451L5.25 6.74951" stroke="#A0A8B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <label htmlFor="email" className='text-sm text-black dark:text-white'>Email Address</label>
        </div>
        <input 
          type="email" 
          id="email" 
          name="email" 
          aria-label='Email Address'
          placeholder="Enter email" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-6 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
        />
        <button 
          id='passwordReset'
          aria-label='Password Reset Button'
          onClick={emailcheck}
          className="w-full bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white text-center font-bold"
        >
          Submit
        </button>
        {emailerror && <span className='text-dred text-sm my-4'>{emailerror}</span>}
        {success && <span className='text-dgreen text-sm my-4'>{success}</span>}
        <p className="pt-8 text-center text-black dark:text-white">
          Remember Your Password?{" "}
          <Link href="/log-in" className="text-dblue dark:text-dyellow font-bold underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PasswordReset