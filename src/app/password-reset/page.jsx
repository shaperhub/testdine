import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';


const PasswordReset = () => {
  // const [email, setEmail] = useState('');
  // const router = useRouter()


  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-white dark:bg-dblack text-sm font-regular">
      <div className="bg-dlightgreen dark:bg-dlightblack p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-black dark:text-white text-2xl mb-5">Password Reset</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value=""
          className="w-full p-3 mb-4 bg-dlightestgreen dark:bg-gray-700 rounded outline-none text-[16px] text-black dark:text-white placeholder-dgrey"
        />
        <button 
          className="w-full p-3 bg-dblue rounded text-white hover:bg-dlightblue"
        >
          Reset Password
        </button>
      </div>
    </div>
  )
}

export default PasswordReset