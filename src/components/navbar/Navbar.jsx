'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Navlog from '../../../public/DineIntelLogoLight.png'
import NavlogDark from '../../../public/DineIntelLogoDark.png'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/app/firebase/config";

function useUserSession(initialUser) {
	// The initialUser comes from the server via a server component
	const [user, setUser] = useState(initialUser);
  const [currentpage, setcurrentpage] = useState('')
	const router = useRouter()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (authUser) => {
			setUser(authUser)
		})
		return () => unsubscribe()
	}, [])

	useEffect(() => {
        // only when the auth state changes
		onAuthStateChanged(auth, (authUser) => {
			if (user === undefined) return

			// if user is not logged in, execute functions here like redirecting to homepage for protected routes
			if (user?.email !== authUser?.email) {
				router.push('/')
			}
		})
	}, [user, currentpage])

	return user;
}

export default function Navbar({initialUser}) {
  const user = useUserSession(initialUser);
  const routernew = useRouter();
  const segment = useSelectedLayoutSegment();

  const handleSignOut = event => {
	  event.preventDefault();
	  auth.signOut().then(() => {
      // sessionStorage.removeItem('user')
      // routernew.push('/');
    })
  };

  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-16 bg-dlightgreen dark:bg-dblue shadow-xl z-[100] font-regular'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 mb-40'>
            <Link className='dark:hidden' href='/'>
                <Image className="" src={Navlog} alt="DineIntel Logo Lightmode" width='150' height='70' priority={true} />
            </Link>
            <Link className='hidden dark:flex' href='/'>
                <Image className="" src={NavlogDark} alt="DineIntel Logo Darkmode" width='150' height='70' priority={true} />
            </Link>
            <div>
              <ul className='hidden md:flex pr-4 dark:text-dlightgreen'>
                <Link href='/about'>
                  <li id='about' 
                  className={segment == 'about' 
                  ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                  : 'ml-10 p-0.5 text-sm group transition duration-300'}
                  >About
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                  </li>
                </Link>
                <Link href='/features'>
                  <li id='features' 
                  className={segment == 'features' 
                  ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                  : 'ml-10 p-0.5 text-sm group transition duration-300'}
                  >Features
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                  </li>
                </Link>
                <Link href='/dineintel-tiers'>
                  <li id='tiers' 
                  className={segment == 'dineintel-tiers' 
                  ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                  : 'ml-10 p-0.5 text-sm group transition duration-300'}
                  >Tiers
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                  </li>
                </Link>
                <Link href='/faqs'>
                  <li id='faqs' 
                  className={segment == 'faqs' 
                  ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                  : 'ml-10 p-0.5 text-sm group transition duration-300'}
                  >FAQs
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                  </li>
                </Link>
                {/* <Link href='/blog'>
                  <li id='blog' 
                  className={segment == 'blog' 
                  ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                  : 'ml-10 p-0.5 text-sm group transition duration-300'}
                  >Blog
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                  </li>
                </Link> */}
                <Link href='/contact'>
                  <li id='contact' 
                  className={segment == 'contact' 
                  ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                  : 'ml-10 p-0.5 text-sm group transition duration-300'}
                  >Contact
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                  </li>
                </Link>
                
                {user ? (
                    <>
                        <Link href='' onClick={handleSignOut}>
                        <li id='signout' 
                        className='ml-10 p-0.5 text-sm'
                        >Sign Out</li>
                        </Link>
                        <Link href='/user-profile'>
                        <li id='profile' 
                        className={segment == 'user-profile' 
                        ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                        : 'ml-10 p-0.5 text-sm group transition duration-300'}
                        >My Profile
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                        </li>
                        </Link>
                    </>
                    ) : (
                    <>
                        <Link href='/sign-up'>
                        <li id='signup' 
                        className={segment == 'sign-up' 
                        ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                        : 'ml-10 p-0.5 text-sm group transition duration-300'}
                        >Sign Up
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                        </li>
                        </Link>
                        <Link href='/log-in'>
                        <li id='login' 
                        className={segment == 'log-in' 
                        ? 'border-b-dgreen border-b-2 ml-10 p-0.5 text-sm' 
                        : 'ml-10 p-0.5 text-sm group transition duration-300'}
                        >Log In
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreen'></span>
                        </li>
                        </Link>
                    </>
                )}
                <div className='ml-4'><DarkModeToggle /></div>
              </ul>

              {/* Mobile Icons */}
              <div className='flex flex-row md:hidden'>
                <div className='mr-4'><DarkModeToggle /></div>
                {/* Hamburger Icon */}
                <div onClick={handleNav} className=' dark:text-dlightgreen'>
                  <AiOutlineMenu size={25} />
                </div>
              </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={nav ? 'fixed left-[] top-0 w-full h-screen bg-black/70 dark:bg-dlightgreen/70' : ''}>

          {/* Side Drawer Menu */}
          <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-dblue dark:text-dlightgreen p-10 ease-in duration-500' : 'fixed left-[-105%] top-0 p-10 ease-in duration-500'}>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link onClick={() => setNav(false)} href='/' className='pt-4 dark:hidden'>
                  <Image src={Navlog} width='100' height='40' alt='DineIntel Logo Lightmode' priority={true} />
                </Link>
                <Link onClick={() => setNav(false)} href='/' className='pt-4 invisible dark:visible'>
                  <Image src={NavlogDark} width='100' height='40' alt='DineIntel Logo Darkmode' priority={true}/>
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-2 text-sm'>Revolutionizing the dining experience</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <ul className=''>
                <Link href='/about'>
                  <li onClick={() => setNav(false)} id='about' className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/features'>
                  <li onClick={() => setNav(false)} id='features' className='py-4 text-sm'>Features</li>
                </Link>
                <Link href='/dineintel-tiers'>
                  <li onClick={() => setNav(false)} id='tiers' className='py-4 text-sm'>Tiers</li>
                </Link>
                <Link href='/faqs'>
                  <li onClick={() => setNav(false)} id='faqs' className='py-4 text-sm'>FAQs</li>
                </Link>
                <Link href='/blog'>
                  <li onClick={() => setNav(false)} id='blog' className='py-4 text-sm'>Blog</li>
                </Link>
                <Link href='/contact'>
                  <li onClick={() => setNav(false)} id='contact' className='py-4 text-sm'>Contact</li>
                </Link>

                {user ? (
                    <>
                        <Link href='' onClick={handleSignOut}>
                        <li onClick={() => setNav(false)} id='signout' className='py-4 text-sm'>Sign Out</li>
                        </Link>
                        <Link href='/user-profile'>
                        <li onClick={() => setNav(false)} id='profile' className='py-4 text-sm'>My Profile</li>
                        </Link>
                    </>
                    ) : (
                    <>
                        <Link href='/sign-up'>
                        <li onClick={() => setNav(false)} id='signup' className='py-4 text-sm'>Sign Up</li>
                        </Link>
                        <Link href='/log-in'>
                        <li onClick={() => setNav(false)} id='login' className='py-4 text-sm'>Log In</li>
                        </Link>
                    </>
                )}
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}