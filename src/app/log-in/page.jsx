'use client'
import { useState } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSignIn = event => {
    try {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setEmail('');
          setPassword('');
          router.push('/user-profile')
        })
    }catch(e){
        console.error(e)
    }
  };

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
    }catch(e){
        console.error(e)
    }
  };

  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-white dark:bg-dblack text-sm">
      <div className="bg-dlightgreen dark:bg-dlightblack p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-black dark:text-white text-2xl mb-5">Log In to Your Account</h1>
        <button onClick={handleGoogleSignIn} className="flex w-full items-center justify-center rounded p-3 outline-none text-white bg-dblue hover:bg-dlightblue">
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
          Sign in with Google
        </button>
        <div className="my-4 flex items-center justify-center">
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
          <p className="w-full px-5 text-center text-black dark:text-white">
            Or use your email
          </p>
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
        </div>

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-dlightestgreen dark:bg-gray-700 rounded outline-none text-black dark:text-white placeholder-dgrey"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-dlightestgreen dark:bg-gray-700 rounded outline-none text-black dark:text-white placeholder-dgrey"
        />
        <button 
          onClick={handleSignIn}
          className="w-full p-3 bg-dblue rounded text-white hover:bg-dlightblue"
        >
          Log In
        </button>
        <div className="pt-4 text-center">
          <Link href="/password-reset" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <p className="pt-4 text-center text-black dark:text-white">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;