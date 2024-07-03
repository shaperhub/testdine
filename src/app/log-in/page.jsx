'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import LoginPic from '../../../public/LoginGraphic.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Loader2 } from "lucide-react"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [perror, setPerror] = useState('');
  const [validateerror, setValidateerror] = useState('');
  const [passwordvisible, setPasswordvisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [errorm, setErrorm] = useState('')


  const emailcheck = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (!emailRegex.test(email)) {
      setEmailError("Error! you have entered invalid email.");
    } else {
      setEmailError("");
    }
  }

  const passcheck = () => {
    if(password.length < 6) {
      setPerror("Password must be at least 6 characters long")
    } else {
      setPerror('')
    }
  }

  const validateform = () => {
    setLoading(true)
    emailcheck()
    passcheck()
    setTimeout(() => {
      if (emailerror.length==0 && email.length>4 && perror.length==0 && password.length>5) {
        setValidateerror('')
        handleSignIn()
      }
      else {
        setLoading(false)
        setValidateerror("Complete the form")
      }
    }, 2000)
  }

  // Sign In function for Email and Password users
  const handleSignIn = async() => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
        router.push('/user-profile')
      })
    }catch(error) {
      setLoading(false)
      console.log("Yippee")
      setErrorm(error.message)
      setEmail('')
      setPassword('')
      console.error(error.message)
    }
  };

  // Sign In function for Google users
  const handleGoogleSignIn = async(e) => {
    try {
      e.preventDefault();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
        router.push('/user-profile')
      })
    }catch(error) {
      setErrorm(error.message)
      console.error(error.message)
    }
  };

  return (
    <div className="bg-white/50 dark:bg-black/80 pt-36 pb-16 flex items-center justify-center text-sm font-regular">
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-xl w-96">
        <div className='mb-8 flex justify-center'>
          <Image className='' src={LoginPic} width={300} height={250} alt='Login Graphic' />
        </div>
        <h1 className="font-bold text-black dark:text-white text-xl my-2">Welcome Back!</h1>
        <p className="text-ddarkgrey dark:text-dgrey mb-5 text-sm">Let&apos;s get you logged in so you can start exploring</p>

        <>
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
            value={email} 
            required
            onChange={(e) => setEmail(e.target.value)} 
            className={emailerror ? "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
          />

          <div className='flex mb-2'>
            <span className='mr-2'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.75 1.5 13.5 3.5175 13.5 6V7.5" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <label htmlFor="password" className='text-sm text-black dark:text-white'>Password</label>
          </div>
          <input 
            type={passwordvisible ? "text" : "password"} 
            id="password" 
            name="password" 
            aria-label='Password'
            placeholder="Enter password" 
            value={password} 
            required
            onChange={(e) => setPassword(e.target.value)} 
            className={perror ? "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
          />
          {passwordvisible==false && <span className='relative float-right -mt-9 mr-4' onClick={() => setPasswordvisible(true)}><FaEye/></span>}
          {passwordvisible==true && <span className='relative float-right -mt-9 mr-4' onClick={() => setPasswordvisible(false)}><FaEyeSlash/></span>}

          <div className="pt-4 text-right mb-6">
            <Link href="/password-reset" className="text-dblue dark:text-dyellow underline">
              Forgot Password?
            </Link>
        </div>
          <button 
            id='loginButton'
            aria-label='Log In Button'
            onClick={validateform}
            className="w-full text-center bg-transparent p-3 mb-4 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white font-bold inline-flex justify-center items-center"
          >
            Log In
            {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </button>
        </>
        {errorm=='Firebase: Error (auth/invalid-credential).' && <span className='text-red-600 text-sm text-center'>Incorrect Email or Password<br></br></span>}
        {emailerror && <span className='text-red-600 text-sm text-center'>{emailerror}<br></br></span>}
        {perror && <span className='text-red-600 text-sm text-center'>{perror}<br></br></span>}
        {validateerror && <div className='w-full bg-dred/20 text-red-600 text-xs text-center p-4 my-4'><span>{validateerror}</span></div>}
        <div className="my-6 flex items-center justify-center">
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
          <p className="w-full px-5 text-center text-black dark:text-white">
            Or Log In With
          </p>
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
        </div>
        <div className='flex justify-center'>
          <button onClick={handleGoogleSignIn} className="" aria-label='Google Log In Button'>
            <span className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_95:967)">
                  <path
                    d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                    fill="#34A853"
                  />
                  <path
                    d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_95:967">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
        <p className="pt-4 text-center text-black dark:text-white">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-dblue dark:text-dyellow font-bold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;