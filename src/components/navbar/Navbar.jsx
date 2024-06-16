'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
import Navlog from '../../../public/DineIntelLogoLight.png'
import NavlogDark from '../../../public/DineIntelLogoDark.png'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "@/app/firebase/config"
import ComingSoon from '../ComingSoon/ComingSoon'
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

function useUserSession(initialUser) {
	// The initialUser comes from the server via a server component
	const [user, setUser] = useState(initialUser)
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
				// router.push('/')
			}
		})
	}, [user])

	return user;
}

export default function Navbar({initialUser}) {
  const user = useUserSession(initialUser);
  const routernew = useRouter();
  const segment = useSelectedLayoutSegment();

  // Sign Out function
  const handleSignOut = event => {
	  event.preventDefault();
	  auth.signOut().then(() => {
      routernew.push('/');
    })
  };

  const [nav, setNav] = useState(false);

  // Hamburger Menu Toggle setState
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='fixed w-full h-28 bg-dlightgreen dark:bg-dblue shadow-xl z-[100] font-regular'>
        <div className=''><ComingSoon /></div>
        <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16 mb-40 -mt-6'>
            <Link className='dark:hidden' href='/'>
                <Image className="" src={Navlog} alt="DineIntel Logo" width='150' height='70' priority />
            </Link>
            <Link className='hidden dark:flex' href='/'>
                <Image className="" src={NavlogDark} alt="DineIntel Logo Darkmode" width='150' height='70' priority />
            </Link>
            <div>
              <ul className='hidden min-[950px]:flex text-black dark:text-dlightgreen'>
                <li id='about' 
                className={segment == 'about' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/about' aria-labelledby='DineIntel About Page Link'>About</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li>

                <li id='features' 
                className={segment == 'features' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/features' aria-labelledby='DineIntel Features Page Link'>Features</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li>

                <li id='pricing' 
                className={segment == 'pricing' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/pricing' aria-labelledby='DineIntel Tiers and Pricing Link'>Pricing</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li>

                <li id='faqs' 
                className={segment == 'faqs' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/faqs' aria-labelledby='DineIntel Frequently Asked Questions Page Link'>FAQs</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li>

              {/* <li id='blog' 
                className={segment == 'blog' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/blog' aria-labelledby='DineIntel Blog Page Link'>Blog</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li> */}

                <li id='contact' 
                className={segment == 'contact' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/contact' aria-labelledby='DineIntel Contact Page Link'>Contact</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li>
              
                 {user ? (
                    <>
                      <li id='signout' onClick={handleSignOut}
                      className='ml-10 p-0.5 text-sm group transition duration-300'
                      ><Link href='' aria-labelledby='DineIntel Sign Out Button'>Sign Out</Link>
                      <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                      </li>
                      
                      <li id='profile' 
                      className={segment == 'user-profile' 
                      ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                      : 'ml-10 p-0.5 text-sm group transition duration-300'}
                      ><Link href='/user-profile' aria-label='DineIntel User Profile Page Link'>Profile</Link>
                      <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                      </li>
                    </>
                    ) : (
                    <>
                      <li id='signup' 
                      className={segment == 'sign-up' 
                      ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                      : 'ml-10 p-0.5 text-sm group transition duration-300'}
                      ><Link href='/sign-up' aria-labelledby='DineIntel Sign Up Page Link'>Sign Up</Link>
                      <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                      </li>

                      <li id='login' 
                      className={segment == 'log-in' 
                      ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                      : 'ml-10 p-0.5 text-sm group transition duration-300'}
                      ><Link href='/log-in' aria-labelledby='DineIntel Login Page Link'>Login</Link>
                      <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                      </li>
                    </>
                )}
                <div className='ml-4'><DarkModeToggle /></div>
              </ul>

              {/* Mobile Icons */}
              <div className='flex flex-row min-[950px]:hidden'>
                <div className='mr-4'><DarkModeToggle /></div>
                {/* Hamburger Icon */}
                <div onClick={handleNav} className='text-black dark:text-dlightgreen'>
                  <AiOutlineMenu size={25} />
                </div>
              </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={nav ? 'fixed left-[] top-0 w-full h-screen bg-black/70 dark:bg-dlightgreen/70' : ''}>

          {/* Side Drawer Menu */}
          <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-dlightgreen dark:bg-dblue text-black dark:text-dlightgreen p-10 ease-in duration-500' : 'fixed left-[-105%] top-0 p-10 ease-in duration-500'}>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link onClick={() => setNav(false)} href='/' className='pt-4 dark:hidden'>
                  <Image src={Navlog} width='100' height='40' alt='DineIntel Logo' priority />
                </Link>
                <Link onClick={() => setNav(false)} href='/' className='pt-4 hidden dark:flex'>
                  <Image src={NavlogDark} width='100' height='40' alt='DineIntel Logo Darkmode' priority />
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-ddarkgrey dark:border-dgrey my-4'>
                <p className='w-[85%] md:w-[90%] py-2 text-sm'>Revolutionizing the dining experience</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <ul className=''>
                <li onClick={() => setNav(false)} id='about' className='py-4 text-sm'>
                  <Link href='/about' aria-labelledby='DineIntel About Page Link'>About</Link>
                </li>
                <li onClick={() => setNav(false)} id='features' className='py-4 text-sm'>
                  <Link href='/features' aria-labelledby='DineIntel Features Page Link'>Features</Link>
                </li>
                <li onClick={() => setNav(false)} id='pricing' className='py-4 text-sm'>
                  <Link href='/pricing' aria-labelledby='DineIntel Tiers and Pricing Link'>Pricing</Link>
                </li>
                <li onClick={() => setNav(false)} id='faqs' className='py-4 text-sm'>
                  <Link href='/faqs' aria-labelledby='DineIntel Frequently Asked Questions Page Link'>FAQs</Link>
                </li>
                {/* <li onClick={() => setNav(false)} id='blog' className='py-4 text-sm'>
                  <Link href='/blog' aria-labelledby='DineIntel Blog Page Link'>Blog</Link>
                </li> */}
                <li onClick={() => setNav(false)} id='contact' className='py-4 text-sm'>
                  <Link href='/contact' aria-labelledby='DineIntel Contact Page Link'>Contact</Link>
                </li>

                {user ? (
                    <>
                      <li onClick={handleSignOut} id='signout' className='py-4 text-sm'>
                        <Link href='' aria-labelledby='DineIntel Sign Out Button'>Sign Out</Link>
                      </li>
                      <li onClick={() => setNav(false)} id='profile' className='py-4 text-sm'>
                        <Link href='/user-profile' aria-label='DineIntel User Profile Page Link'>Profile</Link>
                      </li>
                    </>
                    ) : (
                    <>
                      <li onClick={() => setNav(false)} id='signup' className='py-4 text-sm'>
                        <Link href='/sign-up' aria-labelledby='DineIntel Sign Up Page Link'>Sign Up</Link>
                      </li>
                      <li onClick={() => setNav(false)} id='login' className='py-4 text-sm'>
                        <Link href='/log-in' aria-labelledby='DineIntel Login Page Link'>Login</Link>
                      </li>
                    </>
                )}
              </ul>
            </div>
          </div>
        </div>
    </nav>
  )
}