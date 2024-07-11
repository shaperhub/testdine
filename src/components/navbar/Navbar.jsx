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
import Epic from "../../../public/epicconc.png"

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
              <ul className='hidden lg:flex text-black dark:text-dlightgreen'>
                <li id='about' 
                className={segment == 'about' 
                ? 'border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm' 
                : 'ml-10 p-0.5 text-sm group transition duration-300'}
                ><Link href='/about' aria-labelledby='DineIntel About Page Link'>About</Link>
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-dgreenw'></span>
                </li>

                <li id='features'
                className={segment == 'features'
                ? "relative group border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm"
                : "relative group ml-10 p-0.5 text-sm"}>
                  <Link href="/features" aria-labelledby='DineIntel Features Page Link'>Features</Link>
                  <div className="absolute top-0 -left-60 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                    <div className="relative top-6 p-6 bg-white dark:bg-dblack rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white dark:bg-dblack transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[14.5rem] duration-500 ease-in-out rounded-sm">
                      </div>
                      <div className="relative z-10">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <Link href="/features#foryou"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-dlightgreen dark:hover:bg-dlightblack transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                  <span className='flex justify-center mb-2'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g clipPath="url(#clip0_4962_8251)">
                                      <path d="M23.3757 20.4059L13.9648 10.995L2.96984 0H2.11057L1.93512 0.445828C1.47204 1.62258 1.27418 2.82614 1.36301 3.92625C1.46426 5.18025 1.94065 6.26592 2.74076 7.06603L11.324 15.6493L12.4562 14.5172L20.3914 23.3903C21.1808 24.1797 22.5394 24.2265 23.3757 23.3903C24.1985 22.5675 24.1985 21.2287 23.3757 20.4059Z" fill="#2E8540"/>
                                      <path d="M7.34678 13.6613L0.624387 20.3837C-0.198363 21.2065 -0.198363 22.5453 0.624387 23.368C1.40598 24.1496 2.75809 24.2186 3.60868 23.368L10.3311 16.6456L7.34678 13.6613Z" fill="#2E8540"/>
                                      <path d="M22.9806 3.99603L19.1673 7.80931L18.1725 6.81453L21.9858 3.0012L20.991 2.00642L17.1777 5.8197L16.1829 4.82492L19.9963 1.01164L19.0015 0.0169067L14.0276 4.99081C13.4191 5.5993 13.0558 6.40724 13.0044 7.26589C12.9915 7.48344 12.9421 7.69742 12.8604 7.90095L16.0914 11.132C16.2949 11.0501 16.509 11.0008 16.7265 10.9879C17.5851 10.9366 18.3931 10.5732 19.0015 9.96472L23.9754 4.99086L22.9806 3.99603Z" fill="#2E8540"/>
                                      </g>
                                      <defs>
                                      <clipPath id="clip0_4962_8251">
                                      <rect width="24" height="24" fill="white"/>
                                      </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                  <p className="text-dbluew dark:text-dlightgreen font-heading mt-2 text-center">For You</p>
                                </Link>
                              </li>
                              <li>
                                <Link href="/features#modifydish"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-dlightgreen dark:hover:bg-dlightblack transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                  <span className='flex justify-center mb-2'>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4989_8156)">
                                    <path d="M23.9259 16.737C23.8339 16.59 23.6729 16.5 23.4999 16.5H0.499909C0.326893 16.5 0.165925 16.59 0.0748935 16.737C-0.0160909 16.884 -0.0250909 17.068 0.0529091 17.223C0.754909 18.628 2.16589 19.5 3.73588 19.5H20.2639C21.8329 19.5 23.2438 18.628 23.9479 17.224C24.0239 17.068 24.0169 16.885 23.9259 16.737Z" fill="#2E8540"/>
                                    <path d="M13.371 6.60398C13.453 6.41897 13.5 6.21497 13.5 6C13.5 5.17298 12.8271 4.5 12 4.5C11.173 4.5 10.5 5.17298 10.5 6C10.5 6.21502 10.5471 6.41902 10.629 6.60398C6.09805 7.227 2.52004 10.875 2.06104 15.5H21.9381C21.4791 10.877 17.9001 7.227 13.371 6.60398ZM11.533 9.49898C8.73604 9.684 6.32703 11.51 5.39802 14.151C5.32602 14.356 5.132 14.485 4.92604 14.485C4.87105 14.485 4.81504 14.476 4.76005 14.457C4.50004 14.365 4.36307 14.08 4.45405 13.819C5.51605 10.799 8.26907 8.712 11.4671 8.50097C11.7321 8.48395 11.9801 8.69095 11.9991 8.96695C12.0171 9.243 11.809 9.48098 11.533 9.49898Z" fill="#2E8540"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4989_8156">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                  </svg>
                                  </span>
                                  <p className="text-dbluew dark:text-dlightgreen font-heading mt-2 text-center">Modify Dish</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <Link href="/features#dinegroup"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-dlightgreen dark:hover:bg-dlightblack transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                  <span className='flex justify-center mb-2'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z" fill="#2E8540"/>
                                      <path d="M20.7901 14.7C19.6701 15.45 18.1001 15.73 16.6501 15.54C17.0301 14.72 17.2301 13.81 17.2401 12.85C17.2401 11.85 17.0201 10.9 16.6001 10.07C18.0801 9.86998 19.6501 10.15 20.7801 10.9C22.3601 11.94 22.3601 13.65 20.7901 14.7Z" fill="#2E8540"/>
                                      <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#2E8540"/>
                                      <path d="M6.55012 12.85C6.55012 13.82 6.76012 14.74 7.14012 15.57C5.73012 15.72 4.26012 15.42 3.18012 14.71C1.60012 13.66 1.60012 11.95 3.18012 10.9C4.25012 10.18 5.76012 9.88998 7.18012 10.05C6.77012 10.89 6.55012 11.84 6.55012 12.85Z" fill="#2E8540"/>
                                      <path d="M12.1198 15.87C12.0398 15.86 11.9498 15.86 11.8598 15.87C10.0198 15.81 8.5498 14.3 8.5498 12.44C8.5598 10.54 10.0898 9 11.9998 9C13.8998 9 15.4398 10.54 15.4398 12.44C15.4298 14.3 13.9698 15.81 12.1198 15.87Z" fill="#2E8540"/>
                                      <path d="M8.8698 17.94C7.3598 18.95 7.3598 20.61 8.8698 21.61C10.5898 22.76 13.4098 22.76 15.1298 21.61C16.6398 20.6 16.6398 18.94 15.1298 17.94C13.4198 16.79 10.5998 16.79 8.8698 17.94Z" fill="#2E8540"/>
                                    </svg>
                                  </span>
                                  <p className="text-dbluew dark:text-dlightgreen font-heading mt-2 text-center">Dine Group</p>
                                </Link>
                              </li>
                              <li>
                                <Link href="/features#epicureanconcierge"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-dlightgreen dark:hover:bg-dlightblack transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                  <span className='flex justify-center mb-2'>
                                    <Image src={Epic} width={24} height={24} alt='Epicurean Concierge' />
                                  </span>
                                  <p className="text-dbluew dark:text-dlightgreen font-heading mt-2 text-center">Epicurean Concierge</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li id='pricing'
                className={segment == 'pricing'
                ? "relative group border-b-dgreenw border-b-2 ml-10 p-0.5 text-sm"
                : "relative group ml-10 p-0.5 text-sm"}>
                  <Link href="/pricing" aria-labelledby='DineIntel Tiers and Pricing Link'>Pricing</Link>
                  <div className="absolute top-0 -left-72 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[600px] transform">
                    <div className="relative top-6 p-6 bg-white dark:bg-dblack rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white dark:bg-dblack transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[17rem] duration-500 ease-in-out rounded-sm">
                      </div>
                      <div className="relative z-10">
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <ul className="mt-3">
                              <li className='w-[180px]'>
                                <Link href="/pricing"
                                  className="block p-2 -mx-2 rounded-lg transition ease-in-out duration-300">
                                  <div className="bg-dgreenw rounded-xl text-white p-4 mb-4">
                                    <p className="py-2 font-heading text-lg text-center">Taste Starter</p>
                                    <p className="text-sm text-center">
                                      $0/month
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="mt-3">
                              <li className='w-[180px]'>
                                <Link href="/pricing"
                                  className="block p-2 -mx-2 rounded-lg transition ease-in-out duration-300">
                                  <div className="bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] rounded-xl text-white p-4 mb-4">
                                    <p className="py-2 font-heading text-lg text-white text-center">Cuisine Crafter</p>
                                    <p className="text-sm text-center">
                                      $18/month
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="mt-3">
                              <li className='w-[180px]'>
                                <Link href="/pricing"
                                  className="block p-2 -mx-2 rounded-lg transition ease-in-out duration-300">
                                  <div className="bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] rounded-xl text-white p-4 mb-4">
                                    <p className="py-2 font-heading text-lg text-white text-center">Epicurean Elite</p>
                                    <p className="text-sm text-center">
                                      $50/month
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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