'use client'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Forgotpic from '../../../public/ForgotPassword.png'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';


const PasswordReset = () => {
  const [email, setEmail] = useState('');
  // const router = useRouter()

  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center pt-36 pb-16 bg-white dark:bg-dblack text-sm font-regular">
      <div className="bg-dlightgreen dark:bg-dlightblack p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-black dark:text-white text-center text-2xl mb-4 font-heading">Forgot Password?</h1>
        <p className='mb-4 text-black dark:text-white text-center'>Enter your registered email below to receive password reset instructions.</p>
        <Image className='mb-6' src={Forgotpic} width={400} height={400} alt='Forgot Password Image' />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 my-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
        />
        <button 
          className="w-full px-8 py-4 bg-dbluew dark:bg-dgreen/20 hover:bg-dbluew/80 dark:hover:bg-dgreen/30 rounded-full font-bold text-white dark:text-dgreen"
        >
          Submit
        </button>
        <p className="pt-8 text-center text-black dark:text-white">
          Remember Your Password?{" "}
          <Link href="/log-in" className="text-dgreen hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PasswordReset