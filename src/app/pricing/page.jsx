"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import Epic from "../../../public/epicconc.png"
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Pricing = () => {
  const [ttier, setTtier] = useState(false)
  const [etier, setEtier] = useState(false)
  const [ctier, setCtier] = useState(false)

  const tastefunc = () => {
    setTtier(true)
    setEtier(false)
    setCtier(false)
  }
  const cuisinefunc = () => {
    setTtier(false)
    setEtier(false)
    setCtier(true)
  }
  const epicfunc = () => {
    setTtier(false)
    setEtier(true)
    setCtier(false)
  }

  return (
    <div className='text-ddarkgrey dark:text-dgrey font-regular'>

      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">Choose Your Ideal Dining Companion</h1>
        </div>
      </div>


      {/* Pricing Cards */}
      <div className="px-8 md:px-24 py-4 md:py-8 bg-dlightestgreen dark:bg-dlightblack/90" id="tastestarter">
        <div className="flex flex-col lgmd:flex-row justify-center gap-4">

          {/* Taste Starter Card */}
          <div className="rounded-[24px] lgmd:max-w-[380px] lgmd:flex-1 p-8 mb-8 bg-white dark:bg-dblack font-regular text-dbluew  dark:text-dgrey">
            <div className="bg-dgreenw rounded-xl text-white p-4 mb-4">
              <p className="py-2 font-heading text-2xl text-center">Taste Starter</p>
              <p className="my-2 text-sm">
                Embark on your culinary journey with Taste Starter&apos;s Complimentary Access. Perfect for enthusiasts from all walks of life, this tier connects you with local 
                dining gems, setting the stage for deeper culinary exploration.
              </p>
            </div>
            <p className="text-xl mb-4">Price: $0<span className="text-xs">/Month</span></p>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3757 20.4059L13.9648 10.995L2.96984 0H2.11057L1.93512 0.445828C1.47204 1.62258 1.27418 2.82614 1.36301 3.92625C1.46426 5.18025 1.94065 6.26592 2.74076 7.06603L11.324 15.6493L12.4562 14.5172L20.3914 23.3903C21.1808 24.1797 22.5394 24.2265 23.3757 23.3903C24.1985 22.5675 24.1985 21.2287 23.3757 20.4059Z" fill="#2E8540"/>
                <path d="M7.34678 13.6613L0.624387 20.3837C-0.198363 21.2065 -0.198363 22.5453 0.624387 23.368C1.40598 24.1496 2.75809 24.2186 3.60868 23.368L10.3311 16.6456L7.34678 13.6613Z" fill="#2E8540"/>
                <path d="M22.9806 3.99603L19.1673 7.80931L18.1725 6.81453L21.9858 3.0012L20.991 2.00642L17.1777 5.8197L16.1829 4.82492L19.9963 1.01164L19.0015 0.0169067L14.0276 4.99081C13.4191 5.5993 13.0558 6.40724 13.0044 7.26589C12.9915 7.48344 12.9421 7.69742 12.8604 7.90095L16.0914 11.132C16.2949 11.0501 16.509 11.0008 16.7265 10.9879C17.5851 10.9366 18.3931 10.5732 19.0015 9.96472L23.9754 4.99086L22.9806 3.99603Z" fill="#2E8540"/> 
              </svg>
              <p className="font-heading mb-2">For You:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Tailored Recommendations: Personalized dining suggestions</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Enhanced Discovery: Engage with relevant and sophisticated ads</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Personalized Restaurant Recommendations: Discover top dining spots</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Trending Near You: Find popular local restaurants</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Dynamic Search: Easily find the perfect restaurant</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z" fill="#2E8540"/>
                <path d="M20.7901 14.7C19.6701 15.45 18.1001 15.73 16.6501 15.54C17.0301 14.72 17.2301 13.81 17.2401 12.85C17.2401 11.85 17.0201 10.9 16.6001 10.07C18.0801 9.86998 19.6501 10.15 20.7801 10.9C22.3601 11.94 22.3601 13.65 20.7901 14.7Z" fill="#2E8540"/>
                <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#2E8540"/>
                <path d="M6.55012 12.85C6.55012 13.82 6.76012 14.74 7.14012 15.57C5.73012 15.72 4.26012 15.42 3.18012 14.71C1.60012 13.66 1.60012 11.95 3.18012 10.9C4.25012 10.18 5.76012 9.88998 7.18012 10.05C6.77012 10.89 6.55012 11.84 6.55012 12.85Z" fill="#2E8540"/>
                <path d="M12.1198 15.87C12.0398 15.86 11.9498 15.86 11.8598 15.87C10.0198 15.81 8.5498 14.3 8.5498 12.44C8.5598 10.54 10.0898 9 11.9998 9C13.8998 9 15.4398 10.54 15.4398 12.44C15.4298 14.3 13.9698 15.81 12.1198 15.87Z" fill="#2E8540"/>
                <path d="M8.8698 17.94C7.3598 18.95 7.3598 20.61 8.8698 21.61C10.5898 22.76 13.4098 22.76 15.1298 21.61C16.6398 20.6 16.6398 18.94 15.1298 17.94C13.4198 16.79 10.5998 16.79 8.8698 17.94Z" fill="#2E8540"/>
              </svg>
              <p className="font-heading mb-2">Dine Group:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Public Groups: Create up to <span className="font-bold">3</span>, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Community Connect: Engage with food enthusiasts</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Private Groups: Not included, can&apos;t join</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Create Meal Dining Events: Host and join events</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9259 16.737C23.8339 16.59 23.6729 16.5 23.4999 16.5H0.499909C0.326893 16.5 0.165925 16.59 0.0748935 16.737C-0.0160909 16.884 -0.0250909 17.068 0.0529091 17.223C0.754909 18.628 2.16589 19.5 3.73588 19.5H20.2639C21.8329 19.5 23.2438 18.628 23.9479 17.224C24.0239 17.068 24.0169 16.885 23.9259 16.737Z" fill="#2E8540"/>
                <path d="M13.371 6.60398C13.453 6.41897 13.5 6.21497 13.5 6C13.5 5.17298 12.8271 4.5 12 4.5C11.173 4.5 10.5 5.17298 10.5 6C10.5 6.21502 10.5471 6.41902 10.629 6.60398C6.09805 7.227 2.52004 10.875 2.06104 15.5H21.9381C21.4791 10.877 17.9001 7.227 13.371 6.60398ZM11.533 9.49898C8.73604 9.684 6.32703 11.51 5.39802 14.151C5.32602 14.356 5.132 14.485 4.92604 14.485C4.87105 14.485 4.81504 14.476 4.76005 14.457C4.50004 14.365 4.36307 14.08 4.45405 13.819C5.51605 10.799 8.26907 8.712 11.4671 8.50097C11.7321 8.48395 11.9801 8.69095 11.9991 8.96695C12.0171 9.243 11.809 9.48098 11.533 9.49898Z" fill="#2E8540"/>
              </svg>
              <p className="font-heading mb-2">Modify Dish:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: <span className="font-bold">1</span> meal recommendation</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Culinary Tracker: Track up to <span className="font-bold">3</span> meals</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Ingredient Swap: Customize your dishes</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Flavor Compatibility Analyzer: Find perfect flavor pairings</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Ingredient Health Analysis: Analyze the health benefits</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <Image className="" src={Epic} width={30} height={30} alt="Epicurean Concierge" />
              <p className="font-heading mb-2">Epicurean Concierge:</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Epicurean Concierge: Personalized culinary guidance</p>
            </div>
            <div className="flex justify-center text-center py-12 gap-2">
              <Link href="">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Get Started</button>
              </Link>
              {!ttier && (<button onClick={tastefunc} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Learn More</button>)}
              {ttier && (<button onClick={(e) => setTtier(false)} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dred inline-flex items-center font-regular'>Show Less</button>)}
            </div>

            {/* Mobile Taste Starter */}
            {ttier && (
            <div className='lgmd:hidden px-8 md:px-24 pt-8 pb-16 bg-white dark:bg-black'>
              <h2 className='font-heading text-dbluew dark:text-dlightblue text-2xl lg:text-3xl text-center mb-12'>Taste Starter</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 lgmd:grid-cols-3 lgxl:grid-cols-5 gap-8 place-items-center'>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Tailored Recommendations</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Delve into a world where every dining recommendation aligns perfectly with your palate. 
                    Our tailored suggestions serve as a preview of the personalized dining narrative you can further develop with our premium tiers.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>My Dish Insight</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Enjoy a taste of the detailed, personalized dish insights that come standard with Taste Starter. 
                    As you savor each meal, imagine the possibilities with even more comprehensive data and customization options available when you step up to Cuisine Crafter or Epicurean Elite.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Community Connect</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Become a part of the vibrant <span className='font-bold text-white'><a href='/features#dinegroup'>Dine Group</a></span>, where food enthusiasts gather to exchange culinary experiences, discover hidden gems, and forge new favorites. 
                    Immerse yourself in our lively public, where food lovers from all walks of life come together to share their passion for gastronomy.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Culinary Tracker</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Begin tracking your dietary habits with up to 3 meals with comprehensive nutritional insights to enhance your commitment to mindful eating 
                    and consider the benefits of unlimited tracking and deeper dietary analysis that come with an upgrade to our enhanced tiers.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Enhanced Discovery</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Discover a world of relevance and sophistication as you engage with selected ads that resonate with the refined palate of your next gastronomic adventure. 
                    Immerse yourself in a realm where each ad mirrors the delectable allure of your impending dining experiences.
                  </p>
                </div>
              </div>
              <div className='pt-16 px-8 lg:px-16 lgxl:px-64 flex flex-col justify-center items-center'>
                <p className='font-bold text-dbluew dark:text-dlightblue text-center text-xl mb-2'>As You Enjoy Taste Starter, Imagine More:</p>
                <p className='text-dbluew dark:text-dgrey text-center font-bold text-lg'>
                  With every feature in the Taste Starter tier, envision the expanded choices and exclusive benefits that await with Cuisine Crafter and Epicurean Elite. 
                  Picture unlimited customization, comprehensive meal chronicles, and personalized guidance from the Epicurean Concierge; all designed to transform your dining from routine to remarkable.
              </p>
              </div>
            </div>
            )}
          </div>

      
          {/* Cuisine Crafter Card */}
          <div className="rounded-[24px] lgmd:max-w-[410px] lgmd:flex-1 p-8 mb-8 bg-white dark:bg-dblack font-regular text-dbluew  dark:text-dgrey" id="cuisinecrafter">
            <div className="bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] rounded-xl text-white p-4 mb-4">
              <p className="py-2 font-heading text-2xl text-white text-center">Cuisine Crafter</p>
              <p className="my-2 text-sm">
                Discover Cuisine Crafter, the distinguished tier for food connoisseurs. Enjoy personalized dining experiences with enhanced access and innovative tools for 
                dish customization. Elevate your journey and prepare for the ultimate indulgence with Epicurean Elite.
              </p>
            </div>
            <p className="text-xl mb-4">Price: $18<span className="text-xs">/Month</span></p>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3757 20.4059L13.9648 10.995L2.96984 0H2.11057L1.93512 0.445828C1.47204 1.62258 1.27418 2.82614 1.36301 3.92625C1.46426 5.18025 1.94065 6.26592 2.74076 7.06603L11.324 15.6493L12.4562 14.5172L20.3914 23.3903C21.1808 24.1797 22.5394 24.2265 23.3757 23.3903C24.1985 22.5675 24.1985 21.2287 23.3757 20.4059Z" fill="#2E8540"/>
                <path d="M7.34678 13.6613L0.624387 20.3837C-0.198363 21.2065 -0.198363 22.5453 0.624387 23.368C1.40598 24.1496 2.75809 24.2186 3.60868 23.368L10.3311 16.6456L7.34678 13.6613Z" fill="#2E8540"/>
                <path d="M22.9806 3.99603L19.1673 7.80931L18.1725 6.81453L21.9858 3.0012L20.991 2.00642L17.1777 5.8197L16.1829 4.82492L19.9963 1.01164L19.0015 0.0169067L14.0276 4.99081C13.4191 5.5993 13.0558 6.40724 13.0044 7.26589C12.9915 7.48344 12.9421 7.69742 12.8604 7.90095L16.0914 11.132C16.2949 11.0501 16.509 11.0008 16.7265 10.9879C17.5851 10.9366 18.3931 10.5732 19.0015 9.96472L23.9754 4.99086L22.9806 3.99603Z" fill="#2E8540"/> 
              </svg>
              <p className="font-heading mb-2">For You:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Tailored Recommendations: Personalized dining suggestions</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Enhanced Discovery: Engage with relevant and sophisticated ads</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Personalized Restaurant Recommendations: Discover top dining spots</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Trending Near You: Find popular local restaurants</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Dynamic Search: Easily find the perfect restaurant</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z" fill="#2E8540"/>
                <path d="M20.7901 14.7C19.6701 15.45 18.1001 15.73 16.6501 15.54C17.0301 14.72 17.2301 13.81 17.2401 12.85C17.2401 11.85 17.0201 10.9 16.6001 10.07C18.0801 9.86998 19.6501 10.15 20.7801 10.9C22.3601 11.94 22.3601 13.65 20.7901 14.7Z" fill="#2E8540"/>
                <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#2E8540"/>
                <path d="M6.55012 12.85C6.55012 13.82 6.76012 14.74 7.14012 15.57C5.73012 15.72 4.26012 15.42 3.18012 14.71C1.60012 13.66 1.60012 11.95 3.18012 10.9C4.25012 10.18 5.76012 9.88998 7.18012 10.05C6.77012 10.89 6.55012 11.84 6.55012 12.85Z" fill="#2E8540"/>
                <path d="M12.1198 15.87C12.0398 15.86 11.9498 15.86 11.8598 15.87C10.0198 15.81 8.5498 14.3 8.5498 12.44C8.5598 10.54 10.0898 9 11.9998 9C13.8998 9 15.4398 10.54 15.4398 12.44C15.4298 14.3 13.9698 15.81 12.1198 15.87Z" fill="#2E8540"/>
                <path d="M8.8698 17.94C7.3598 18.95 7.3598 20.61 8.8698 21.61C10.5898 22.76 13.4098 22.76 15.1298 21.61C16.6398 20.6 16.6398 18.94 15.1298 17.94C13.4198 16.79 10.5998 16.79 8.8698 17.94Z" fill="#2E8540"/>
              </svg>
              <p className="font-heading mb-2">Dine Group:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Public Groups: Create up to <span className="font-bold">10</span>, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Community Connect: Engage with food enthusiasts</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Private Groups: Create up to <span className="font-bold">10</span>, join any number</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Create Meal Dining Events: Host and join events</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9259 16.737C23.8339 16.59 23.6729 16.5 23.4999 16.5H0.499909C0.326893 16.5 0.165925 16.59 0.0748935 16.737C-0.0160909 16.884 -0.0250909 17.068 0.0529091 17.223C0.754909 18.628 2.16589 19.5 3.73588 19.5H20.2639C21.8329 19.5 23.2438 18.628 23.9479 17.224C24.0239 17.068 24.0169 16.885 23.9259 16.737Z" fill="#2E8540"/>
                <path d="M13.371 6.60398C13.453 6.41897 13.5 6.21497 13.5 6C13.5 5.17298 12.8271 4.5 12 4.5C11.173 4.5 10.5 5.17298 10.5 6C10.5 6.21502 10.5471 6.41902 10.629 6.60398C6.09805 7.227 2.52004 10.875 2.06104 15.5H21.9381C21.4791 10.877 17.9001 7.227 13.371 6.60398ZM11.533 9.49898C8.73604 9.684 6.32703 11.51 5.39802 14.151C5.32602 14.356 5.132 14.485 4.92604 14.485C4.87105 14.485 4.81504 14.476 4.76005 14.457C4.50004 14.365 4.36307 14.08 4.45405 13.819C5.51605 10.799 8.26907 8.712 11.4671 8.50097C11.7321 8.48395 11.9801 8.69095 11.9991 8.96695C12.0171 9.243 11.809 9.48098 11.533 9.49898Z" fill="#2E8540"/>
              </svg>
              <p className="font-heading mb-2">Modify Dish:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: Up to <span className="font-bold">2</span> meal recommendations</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Culinary Tracker: Track up to <span className="font-bold">30</span> meals</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Ingredient Swap: Customize your dishes</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Flavor Compatibility Analyzer: Find perfect flavor pairings</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Ingredient Health Analysis: Analyze the health benefits</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <Image className="" src={Epic} width={30} height={30} alt="Epicurean Concierge" />
              <p className="font-heading mb-2">Epicurean Concierge:</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaXmark className="text-dred" /></div>
              <p>Epicurean Concierge: Personalized culinary guidance</p>
            </div>
            <div className="flex justify-center text-center py-12 gap-2">
              <Link href="">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Get Started</button>
              </Link>
              {!ctier && (<button onClick={cuisinefunc} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Learn More</button>)}
              {ctier && (<button onClick={(e) => setCtier(false)} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dred inline-flex items-center font-regular'>Show Less</button>)}
            </div>

            {/* Mobile Cuisine Crafter */}
            {ctier && (
            <div className='lgmd:hidden px-8 md:px-24 pb-16 pt-8 bg-white dark:bg-black'>
              <h2 className='font-heading text-dbluew dark:text-dlightblue text-2xl lg:text-3xl text-center mb-12'>Cuisine Crafter</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 lgmd:grid-cols-3 lgxl:grid-cols-5 gap-8 place-items-center'>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Expanded Choices</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Indulge in the pleasure of exploring up to 2 enticing meal recommendations from our <span className='font-bold text-white'><a href="/features#modifydish">Modify Dish</a></span> feature to enhance and personalize your dining experience at every meal. 
                    These curated modifications ensure that your culinary journey is a delightful fusion of class and taste.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Dish Customization</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Enhance your culinary creations with our Ingredient Swap and Flavor Compatibility Analyzer, offering detailed meal insights and nutritional information. Tailor dishes to your taste while achieving your health goals with our advanced tools.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Exclusive Groups</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Elevate your connections with Dine Group's Exclusive Groups feature. Create private groups or join existing ones to plan meals, organize events, and connect with like-minded food enthusiasts, fostering a personalized and engaging social experience.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Dining Diary</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Transform your meals with 30 dining records, offering precise insights into calories, macronutrients, and micronutrients. DineIntel empowers you to make informed, delightful choices, blending culinary enjoyment with health. Elevate your epicurean journey with every bite.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>No More Guesswork</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Each culinary creation is accompanied by a comprehensible and user-friendly nutritional profile, 
                    providing you with the knowledge and empowerment to make informed choices aligning with your health objectives and culinary preferences.
                  </p>
                </div>
              </div>
              <div className='pt-16 px-8 lg:px-16 lgxl:px-64 flex flex-col justify-center items-center'>
                <p className='text-dbluew dark:text-dgrey text-center font-bold text-lg'>
                  While Cuisine Crafter provides an exceptional foray into the art of personalized dining, it serves as the gateway to the ultimate dining echelon: Epicurean Elite – Premium All-Access. 
                  This prestigious tier awaits those who seek the zenith of culinary privilege, extending beyond Cuisine Crafter&apos;s offerings to an all-encompassing realm of gastronomic indulgence.
              </p>
              </div>
            </div>
            )}
          </div>


          {/* Epicurean Elite Card */}
          <div className="rounded-[24px] lgmd:max-w-[420px] lgmd:flex-1 p-8 mb-8 bg-white dark:bg-dblack font-regular text-dbluew  dark:text-dgrey" id="epicureanelite">
            <div className="bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] rounded-xl text-white p-4 mb-4">
              <p className="py-2 font-heading text-2xl text-white text-center">Epicurean Elite</p>
              <p className="my-2 text-sm">
                Welcome to Epicurean Elite, Premium All-Access. Experience the pinnacle of culinary indulgence with unlimited meal tracking, personalized guidance from our 
                Epicurean Concierge, and VIP support. Elevate your dining to new heights with the finest in gastronomic excellence.
              </p>
            </div>
            <p className="text-xl mb-4">Price: $50<span className="text-xs">/Month</span></p>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3757 20.4059L13.9648 10.995L2.96984 0H2.11057L1.93512 0.445828C1.47204 1.62258 1.27418 2.82614 1.36301 3.92625C1.46426 5.18025 1.94065 6.26592 2.74076 7.06603L11.324 15.6493L12.4562 14.5172L20.3914 23.3903C21.1808 24.1797 22.5394 24.2265 23.3757 23.3903C24.1985 22.5675 24.1985 21.2287 23.3757 20.4059Z" fill="#2E8540"/>
                <path d="M7.34678 13.6613L0.624387 20.3837C-0.198363 21.2065 -0.198363 22.5453 0.624387 23.368C1.40598 24.1496 2.75809 24.2186 3.60868 23.368L10.3311 16.6456L7.34678 13.6613Z" fill="#2E8540"/>
                <path d="M22.9806 3.99603L19.1673 7.80931L18.1725 6.81453L21.9858 3.0012L20.991 2.00642L17.1777 5.8197L16.1829 4.82492L19.9963 1.01164L19.0015 0.0169067L14.0276 4.99081C13.4191 5.5993 13.0558 6.40724 13.0044 7.26589C12.9915 7.48344 12.9421 7.69742 12.8604 7.90095L16.0914 11.132C16.2949 11.0501 16.509 11.0008 16.7265 10.9879C17.5851 10.9366 18.3931 10.5732 19.0015 9.96472L23.9754 4.99086L22.9806 3.99603Z" fill="#2E8540"/> 
              </svg>
              <p className="font-heading mb-2">For You:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Tailored Recommendations: Personalized dining suggestions</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Enhanced Discovery: Engage with relevant and sophisticated ads</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Personalized Restaurant Recommendations: Discover top dining spots</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Trending Near You: Find popular local restaurants</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Dynamic Search: Easily find the perfect restaurant</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z" fill="#2E8540"/>
                <path d="M20.7901 14.7C19.6701 15.45 18.1001 15.73 16.6501 15.54C17.0301 14.72 17.2301 13.81 17.2401 12.85C17.2401 11.85 17.0201 10.9 16.6001 10.07C18.0801 9.86998 19.6501 10.15 20.7801 10.9C22.3601 11.94 22.3601 13.65 20.7901 14.7Z" fill="#2E8540"/>
                <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#2E8540"/>
                <path d="M6.55012 12.85C6.55012 13.82 6.76012 14.74 7.14012 15.57C5.73012 15.72 4.26012 15.42 3.18012 14.71C1.60012 13.66 1.60012 11.95 3.18012 10.9C4.25012 10.18 5.76012 9.88998 7.18012 10.05C6.77012 10.89 6.55012 11.84 6.55012 12.85Z" fill="#2E8540"/>
                <path d="M12.1198 15.87C12.0398 15.86 11.9498 15.86 11.8598 15.87C10.0198 15.81 8.5498 14.3 8.5498 12.44C8.5598 10.54 10.0898 9 11.9998 9C13.8998 9 15.4398 10.54 15.4398 12.44C15.4298 14.3 13.9698 15.81 12.1198 15.87Z" fill="#2E8540"/>
                <path d="M8.8698 17.94C7.3598 18.95 7.3598 20.61 8.8698 21.61C10.5898 22.76 13.4098 22.76 15.1298 21.61C16.6398 20.6 16.6398 18.94 15.1298 17.94C13.4198 16.79 10.5998 16.79 8.8698 17.94Z" fill="#2E8540"/>
              </svg>
              <p className="font-heading mb-2">Dine Group:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Public Groups: Create up to <span className="font-bold">50</span>, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Community Connect: Engage with food enthusiasts</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Private Groups: Create up to <span className="font-bold">50</span>, join any number</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Create Meal Dining Events: Host and join events</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9259 16.737C23.8339 16.59 23.6729 16.5 23.4999 16.5H0.499909C0.326893 16.5 0.165925 16.59 0.0748935 16.737C-0.0160909 16.884 -0.0250909 17.068 0.0529091 17.223C0.754909 18.628 2.16589 19.5 3.73588 19.5H20.2639C21.8329 19.5 23.2438 18.628 23.9479 17.224C24.0239 17.068 24.0169 16.885 23.9259 16.737Z" fill="#2E8540"/>
                <path d="M13.371 6.60398C13.453 6.41897 13.5 6.21497 13.5 6C13.5 5.17298 12.8271 4.5 12 4.5C11.173 4.5 10.5 5.17298 10.5 6C10.5 6.21502 10.5471 6.41902 10.629 6.60398C6.09805 7.227 2.52004 10.875 2.06104 15.5H21.9381C21.4791 10.877 17.9001 7.227 13.371 6.60398ZM11.533 9.49898C8.73604 9.684 6.32703 11.51 5.39802 14.151C5.32602 14.356 5.132 14.485 4.92604 14.485C4.87105 14.485 4.81504 14.476 4.76005 14.457C4.50004 14.365 4.36307 14.08 4.45405 13.819C5.51605 10.799 8.26907 8.712 11.4671 8.50097C11.7321 8.48395 11.9801 8.69095 11.9991 8.96695C12.0171 9.243 11.809 9.48098 11.533 9.49898Z" fill="#2E8540"/>
              </svg>
              <p className="font-heading mb-2">Modify Dish:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: Up to <span className="font-bold">2</span> meal recommendations</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Culinary Tracker: Track up to <span className="font-bold">1000</span> meals</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Ingredient Swap: Customize your dishes</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Flavor Compatibility Analyzer: Find perfect flavor pairings</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Ingredient Health Analysis: Analyze the health benefits</p>
            </div>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <Image className="" src={Epic} width={30} height={30} alt="Epicurean Concierge" />
              <p className="font-heading mb-2">Epicurean Concierge:</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Epicurean Concierge: Personalized culinary guidance</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm justify-center">
              <p className="font-bold text-base">VIP Support: Priority customer service</p>
            </div>
            <div className="flex justify-center text-center py-12 gap-2">
              <Link href="">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Get Started</button>
              </Link>
              {!etier && (<button onClick={epicfunc} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Learn More</button>)}
              {etier && (<button onClick={(e) => setEtier(false)} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dred inline-flex items-center font-regular'>Show Less</button>)}
            </div>

            {/* Mobile Epicurean Elite */}
            {etier && (
            <div className='lgmd:hidden px-8 md:px-24 pb-16 pt-8 bg-white dark:bg-black'>
              <h2 className='font-heading text-dbluew dark:text-dlightblue text-2xl lg:text-3xl text-center mb-12'>Epicurean Elite</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 lgmd:grid-cols-3 lgxl:grid-cols-5 gap-8 place-items-center'>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Unlimited Personalization</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Experience the limitless possibilities of DineIntel as you explore the unrestricted <span className='font-bold text-white'><a href="/features#modifydish">Modify Dish</a></span> recommendations, 
                    allowing you to customize your dining experience to your heart's content with the freedom to mix and match.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Epicurean Concierge</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    At your service is the Epicurean Concierge, your ultimate culinary guide within the DineIntel ecosystem, offering personalized meal recommendations, creating exclusive dining events, 
                    suggesting private groups tailored to your preferences, analyzing your dining history for insightful advice, and providing unmatched customization for an unforgettable gourmet journey.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>In-Depth Health Insights</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Enhance your health consciousness through our Health-Focused Ingredient Analysis, elevating your culinary journey with each delectable dish.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>Comprehensive Meal Chronicles</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                  Transform your meals with unlimited dining records, offering precise insights into calories, macronutrients, and micronutrients. DineIntel empowers you to make informed, delightful choices, blending culinary enjoyment with health. Elevate your epicurean journey with every bite.
                  </p>
                </div>
                <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
                  <h4 className='font-heading text-white mb-6 text-center'>First-Class Support</h4>
                  <p className='text-sm text-white font-regular mb-6'>
                    Receive unparalleled customer service with priority response times and personalized attention from our dedicated support team.
                  </p>
                </div>
              </div>
              <div className='pt-16 px-8 lg:px-16 lgxl:px-64 flex flex-col justify-center items-center'>
                <p className='text-dbluew dark:text-dgrey text-center font-bold text-lg'>
                  The Epicurean Elite tier is a testament to the art of fine dining, offering a service that is as discerning and selective as you are. 
                  With these enhanced features and our commitment to excellence, every meal becomes a curated event, a narrative in your journey of culinary exploration and indulgence.
              </p>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>


      {/* Cards For Each Section */}

      {/* Taste Starter */}
      {ttier && (
      <div className='hidden lgmd:block px-8 md:px-24 pt-8 pb-16 bg-white dark:bg-black'>
        <h2 className='font-heading text-dbluew dark:text-dlightblue text-2xl lg:text-3xl text-center mb-12'>Taste Starter</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lgmd:grid-cols-3 lgxl:grid-cols-5 gap-8 place-items-center'>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Tailored Recommendations</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Delve into a world where every dining recommendation aligns perfectly with your palate. 
              Our tailored suggestions serve as a preview of the personalized dining narrative you can further develop with our premium tiers.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>My Dish Insight</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Enjoy a taste of the detailed, personalized dish insights that come standard with Taste Starter. 
              As you savor each meal, imagine the possibilities with even more comprehensive data and customization options available when you step up to Cuisine Crafter or Epicurean Elite.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Community Connect</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Become a part of the vibrant <span className='font-bold text-white'><a href='/features#dinegroup'>Dine Group</a></span>, where food enthusiasts gather to exchange culinary experiences, discover hidden gems, and forge new favorites. 
              Immerse yourself in our lively public, where food lovers from all walks of life come together to share their passion for gastronomy.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Culinary Tracker</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Begin tracking your dietary habits with up to 3 meals with comprehensive nutritional insights to enhance your commitment to mindful eating 
              and consider the benefits of unlimited tracking and deeper dietary analysis that come with an upgrade to our enhanced tiers.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-dgreen border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Enhanced Discovery</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Discover a world of relevance and sophistication as you engage with selected ads that resonate with the refined palate of your next gastronomic adventure. 
              Immerse yourself in a realm where each ad mirrors the delectable allure of your impending dining experiences.
            </p>
          </div>
        </div>
        <div className='pt-16 px-8 md:px-16 lg:px-32 lgxl:px-64 flex flex-col justify-center items-center'>
          <p className='font-bold text-dbluew dark:text-dlightblue text-center text-xl mb-2'>As You Enjoy Taste Starter, Imagine More:</p>
          <p className='text-dbluew dark:text-dgrey text-center font-bold text-lg'>
            With every feature in the Taste Starter tier, envision the expanded choices and exclusive benefits that await with Cuisine Crafter and Epicurean Elite. 
            Picture unlimited customization, comprehensive meal chronicles, and personalized guidance from the Epicurean Concierge; all designed to transform your dining from routine to remarkable.
        </p>
        </div>
      </div>
      )}

      {/* Cuisine Crafter */}
      {ctier && (
      <div className='hidden lgmd:block px-8 md:px-24 pb-16 pt-8 bg-white dark:bg-black'>
        <h2 className='font-heading text-dbluew dark:text-dlightblue text-2xl lg:text-3xl text-center mb-12'>Cuisine Crafter</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lgmd:grid-cols-3 lgxl:grid-cols-5 gap-8 place-items-center'>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Expanded Choices</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Indulge in the pleasure of exploring up to 2 enticing meal recommendations from our <span className='font-bold text-white'><a href="/features#modifydish">Modify Dish</a></span> feature to enhance and personalize your dining experience at every meal. 
              These curated modifications ensure that your culinary journey is a delightful fusion of class and taste.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Dish Customization</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Enhance your culinary creations with our Ingredient Swap and Flavor Compatibility Analyzer, offering detailed meal insights and nutritional information. Tailor dishes to your taste while achieving your health goals with our advanced tools.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Exclusive Groups</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Elevate your connections with Dine Group's Exclusive Groups feature. Create private groups or join existing ones to plan meals, organize events, and connect with like-minded food enthusiasts, fostering a personalized and engaging social experience.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Dining Diary</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Transform your meals with 30 dining records, offering precise insights into calories, macronutrients, and micronutrients. DineIntel empowers you to make informed, delightful choices, blending culinary enjoyment with health. Elevate your epicurean journey with every bite.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>No More Guesswork</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Each culinary creation is accompanied by a comprehensible and user-friendly nutritional profile, 
              providing you with the knowledge and empowerment to make informed choices aligning with your health objectives and culinary preferences.
            </p>
          </div>
        </div>
        <div className='pt-16 px-8 md:px-16 lg:px-32 lgxl:px-64 flex flex-col justify-center items-center'>
          <p className='text-dbluew dark:text-dgrey text-center font-bold text-lg'>
            While Cuisine Crafter provides an exceptional foray into the art of personalized dining, it serves as the gateway to the ultimate dining echelon: Epicurean Elite – Premium All-Access. 
            This prestigious tier awaits those who seek the zenith of culinary privilege, extending beyond Cuisine Crafter&apos;s offerings to an all-encompassing realm of gastronomic indulgence.
        </p>
        </div>
      </div>
      )}

      {/* Epicurean Elite */}
      {etier && (
      <div className='hidden lgmd:block px-8 md:px-24 pb-16 pt-8 bg-white dark:bg-black'>
        <h2 className='font-heading text-dbluew dark:text-dlightblue text-2xl lg:text-3xl text-center mb-12'>Epicurean Elite</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lgmd:grid-cols-3 lgxl:grid-cols-5 gap-8 place-items-center'>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Unlimited Personalization</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Experience the limitless possibilities of DineIntel as you explore the unrestricted <span className='font-bold text-white'><a href="/features#modifydish">Modify Dish</a></span> recommendations, 
              allowing you to customize your dining experience to your heart's content with the freedom to mix and match.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Epicurean Concierge</h4>
            <p className='text-sm text-white font-regular mb-6'>
              At your service is the Epicurean Concierge, your ultimate culinary guide within the DineIntel ecosystem, offering personalized meal recommendations, creating exclusive dining events, 
              suggesting private groups tailored to your preferences, analyzing your dining history for insightful advice, and providing unmatched customization for an unforgettable gourmet journey.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>In-Depth Health Insights</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Enhance your health consciousness through our Health-Focused Ingredient Analysis, elevating your culinary journey with each delectable dish.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>Comprehensive Meal Chronicles</h4>
            <p className='text-sm text-white font-regular mb-6'>
            Transform your meals with unlimited dining records, offering precise insights into calories, macronutrients, and micronutrients. DineIntel empowers you to make informed, delightful choices, blending culinary enjoyment with health. Elevate your epicurean journey with every bite.
            </p>
          </div>
          <div className='rounded-[24px] md:h-[420px] lgxl:h-[340px] md:max-w-[300px] p-8 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-white mb-6 text-center'>First-Class Support</h4>
            <p className='text-sm text-white font-regular mb-6'>
              Receive unparalleled customer service with priority response times and personalized attention from our dedicated support team.
            </p>
          </div>
        </div>
        <div className='pt-16 px-8 md:px-16 lg:px-32 lgxl:px-64 flex flex-col justify-center items-center'>
          <p className='text-dbluew dark:text-dgrey text-center font-bold text-lg'>
            The Epicurean Elite tier is a testament to the art of fine dining, offering a service that is as discerning and selective as you are. 
            With these enhanced features and our commitment to excellence, every meal becomes a curated event, a narrative in your journey of culinary exploration and indulgence.
        </p>
        </div>
      </div>
      )}

      <div className='flex flex-col justify-center items-center gap-8 px-8 md:px-16 lg:px-32 lgxl:px-64 py-12 bg-white dark:bg-black'>
        <div className='mb-2'>
          <p className='text-dbluew dark:text-dgrey font-heading text-center text-lg md:text-2xl lg:text-3xl'>
            Connect with fellow enthusiasts, share experiences, and explore innovative dining together by creating memorable dining events within our culinary community at DineIntel.
          </p>
        </div>
        <div className='flex flex-col md:flex-row'>
          <Link href="" className='mb-4 mr-4'>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" fill="black"/>
              <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" stroke="#A6A6A6"/>
              <path d="M24.7045 20.7631C24.7166 19.8432 24.9669 18.9413 25.4321 18.1412C25.8972 17.3411 26.5621 16.6688 27.3648 16.187C26.8548 15.476 26.1821 14.8908 25.4 14.478C24.6178 14.0652 23.7479 13.8361 22.8592 13.809C20.9635 13.6147 19.1258 14.9164 18.1598 14.9164C17.1751 14.9164 15.6878 13.8283 14.0862 13.8604C13.0502 13.8931 12.0406 14.1872 11.1557 14.7141C10.2708 15.241 9.54075 15.9827 9.03674 16.8669C6.85352 20.5573 8.48201 25.9809 10.5734 28.964C11.6197 30.4247 12.8426 32.0564 14.4428 31.9985C16.0086 31.9351 16.5934 31.0237 18.4835 31.0237C20.3561 31.0237 20.9048 31.9985 22.5374 31.9617C24.2176 31.9351 25.2762 30.4945 26.2859 29.02C27.0377 27.9792 27.6162 26.8288 28 25.6116C27.0238 25.2085 26.1908 24.5338 25.6048 23.6716C25.0187 22.8094 24.7056 21.7979 24.7045 20.7631Z" fill="white"/>
              <path d="M21.6208 11.8471C22.5369 10.7734 22.9883 9.39335 22.879 8C21.4794 8.14352 20.1865 8.7966 19.258 9.82911C18.804 10.3335 18.4563 10.9203 18.2348 11.556C18.0132 12.1917 17.9222 12.8638 17.9669 13.5338C18.6669 13.5408 19.3595 13.3927 19.9924 13.1005C20.6254 12.8084 21.1821 12.3798 21.6208 11.8471Z" fill="white"/>
              <path d="M36.791 8.50146H38.8608C40.6494 8.50146 41.5195 9.56494 41.5195 11.4941C41.5195 13.4233 40.6406 14.5 38.8608 14.5H36.791V8.50146ZM37.7886 9.34082V13.6606H38.751C39.9375 13.6606 40.4956 12.9443 40.4956 11.5073C40.4956 10.0615 39.9331 9.34082 38.751 9.34082H37.7886ZM44.6748 9.77588C45.8877 9.77588 46.7358 10.5625 46.7358 11.8677V12.4697C46.7358 13.8188 45.8877 14.5791 44.6748 14.5791C43.4443 14.5791 42.605 13.8276 42.605 12.4741V11.8721C42.605 10.6021 43.4575 9.77588 44.6748 9.77588ZM44.6792 10.5625C43.9849 10.5625 43.5894 11.1426 43.5894 11.9204V12.439C43.5894 13.2168 43.9585 13.7925 44.6792 13.7925C45.3911 13.7925 45.7559 13.2212 45.7559 12.439V11.9204C45.7559 11.1426 45.3735 10.5625 44.6792 10.5625ZM53.8989 9.85498L52.6772 14.5H51.6841L50.7129 11.0723H50.6865L49.7329 14.5H48.7354L47.4609 9.85498H48.5112L49.2583 13.397H49.3022L50.2383 9.85498H51.1567L52.1191 13.397H52.1631L52.9233 9.85498H53.8989ZM54.8657 14.5V9.85498H55.8237V10.6899H55.8721C55.9907 10.3252 56.3291 9.78467 57.2695 9.78467C58.2056 9.78467 58.834 10.3032 58.834 11.3623V14.5H57.8584V11.6479C57.8584 10.9404 57.4893 10.6152 56.9399 10.6152C56.2192 10.6152 55.8413 11.1689 55.8413 11.9204V14.5H54.8657ZM60.3105 14.5V8.18506H61.2861V14.5H60.3105ZM64.6348 9.77588C65.8477 9.77588 66.6958 10.5625 66.6958 11.8677V12.4697C66.6958 13.8188 65.8477 14.5791 64.6348 14.5791C63.4043 14.5791 62.5649 13.8276 62.5649 12.4741V11.8721C62.5649 10.6021 63.4175 9.77588 64.6348 9.77588ZM64.6392 10.5625C63.9448 10.5625 63.5493 11.1426 63.5493 11.9204V12.439C63.5493 13.2168 63.9185 13.7925 64.6392 13.7925C65.3511 13.7925 65.7158 13.2212 65.7158 12.439V11.9204C65.7158 11.1426 65.3335 10.5625 64.6392 10.5625ZM69.2227 14.5703C68.3218 14.5703 67.7021 14.0166 67.7021 13.1509C67.7021 12.3291 68.2734 11.7754 69.3457 11.7754H70.519V11.3403C70.519 10.8086 70.1807 10.5581 69.6445 10.5581C69.1172 10.5581 68.8799 10.7778 68.8052 11.0854H67.8779C67.9351 10.3076 68.5195 9.78467 69.6753 9.78467C70.6685 9.78467 71.4902 10.1978 71.4902 11.3535V14.5H70.563V13.8979H70.519C70.3125 14.2539 69.9082 14.5703 69.2227 14.5703ZM69.5259 13.8145C70.0796 13.8145 70.519 13.4365 70.519 12.9312V12.4302H69.4995C68.9326 12.4302 68.6821 12.7158 68.6821 13.1025C68.6821 13.5859 69.0864 13.8145 69.5259 13.8145ZM74.4961 9.79346C75.1509 9.79346 75.6519 10.0835 75.832 10.5537H75.8804V8.18506H76.856V14.5H75.9067V13.7573H75.8584C75.7178 14.2275 75.1597 14.5615 74.4829 14.5615C73.415 14.5615 72.7207 13.8013 72.7207 12.5752V11.7798C72.7207 10.5537 73.4282 9.79346 74.4961 9.79346ZM74.7686 10.5933C74.1182 10.5933 73.7139 11.0767 73.7139 11.9204V12.4302C73.7139 13.2783 74.1226 13.7617 74.7905 13.7617C75.4497 13.7617 75.8804 13.2827 75.8804 12.4917V11.7886C75.8804 11.0723 75.4102 10.5933 74.7686 10.5933ZM82.2129 9.77588C83.4258 9.77588 84.2739 10.5625 84.2739 11.8677V12.4697C84.2739 13.8188 83.4258 14.5791 82.2129 14.5791C80.9824 14.5791 80.1431 13.8276 80.1431 12.4741V11.8721C80.1431 10.6021 80.9956 9.77588 82.2129 9.77588ZM82.2173 10.5625C81.5229 10.5625 81.1274 11.1426 81.1274 11.9204V12.439C81.1274 13.2168 81.4966 13.7925 82.2173 13.7925C82.9292 13.7925 83.2939 13.2212 83.2939 12.439V11.9204C83.2939 11.1426 82.9116 10.5625 82.2173 10.5625ZM85.5308 14.5V9.85498H86.4888V10.6899H86.5371C86.6558 10.3252 86.9941 9.78467 87.9346 9.78467C88.8706 9.78467 89.499 10.3032 89.499 11.3623V14.5H88.5234V11.6479C88.5234 10.9404 88.1543 10.6152 87.605 10.6152C86.8843 10.6152 86.5063 11.1689 86.5063 11.9204V14.5H85.5308ZM93.2739 9.88574V8.72559H94.2275V9.88574H95.269V10.6504H94.2275V13.1157C94.2275 13.6211 94.4165 13.7617 94.9395 13.7617C95.0713 13.7617 95.2471 13.7529 95.3218 13.7441V14.4912C95.2427 14.5044 94.9175 14.5308 94.6978 14.5308C93.5684 14.5308 93.2607 14.1265 93.2607 13.1948V10.6504H92.5532V9.88574H93.2739ZM96.4995 14.5V8.18506H97.4707V10.6899H97.519C97.6201 10.3604 97.998 9.78467 98.9297 9.78467C99.835 9.78467 100.481 10.3076 100.481 11.3667V14.5H99.5098V11.6523C99.5098 10.9448 99.1187 10.6152 98.5649 10.6152C97.8662 10.6152 97.4707 11.1646 97.4707 11.9204V14.5H96.4995ZM103.755 14.5791C102.489 14.5791 101.703 13.8013 101.703 12.4917V11.8633C101.703 10.5449 102.564 9.77588 103.698 9.77588C104.862 9.77588 105.684 10.5845 105.684 11.8633V12.4082H102.669V12.6367C102.669 13.3047 103.065 13.7969 103.75 13.7969C104.26 13.7969 104.612 13.5552 104.678 13.2651H105.631C105.574 13.8013 105.007 14.5791 103.755 14.5791ZM102.669 11.771H104.73V11.7095C104.73 11.0107 104.322 10.5449 103.702 10.5449C103.083 10.5449 102.669 11.0107 102.669 11.7095V11.771Z" fill="white"/>
              <path d="M38.2061 30.5H36.1758L40.3066 18.5029H42.5391L46.6611 30.5H44.5518L43.4883 27.1777H39.2783L38.2061 30.5ZM41.4316 20.5771H41.3525L39.7266 25.6484H43.04L41.4316 20.5771ZM52.2644 30.6318C51.0603 30.6318 50.1462 30.0605 49.654 29.208H49.5837V33.585H47.6325V21.21H49.531V22.5723H49.6013C50.1111 21.6846 51.0603 21.0869 52.3083 21.0869C54.3913 21.0869 55.8767 22.6602 55.8767 25.4375V26.2637C55.8767 29.0234 54.4089 30.6318 52.2644 30.6318ZM51.8161 29.0234C53.0554 29.0234 53.8991 28.0303 53.8991 26.1582V25.5078C53.8991 23.7061 53.1081 22.6777 51.781 22.6777C50.4187 22.6777 49.5661 23.7852 49.5661 25.499V26.1582C49.5661 27.916 50.4275 29.0234 51.8161 29.0234ZM62.183 30.6318C60.9789 30.6318 60.0649 30.0605 59.5727 29.208H59.5024V33.585H57.5512V21.21H59.4496V22.5723H59.52C60.0297 21.6846 60.9789 21.0869 62.227 21.0869C64.31 21.0869 65.7954 22.6602 65.7954 25.4375V26.2637C65.7954 29.0234 64.3276 30.6318 62.183 30.6318ZM61.7348 29.0234C62.9741 29.0234 63.8178 28.0303 63.8178 26.1582V25.5078C63.8178 23.7061 63.0268 22.6777 61.6996 22.6777C60.3373 22.6777 59.4848 23.7852 59.4848 25.499V26.1582C59.4848 27.916 60.3461 29.0234 61.7348 29.0234ZM69.8387 27.1689H71.7899C71.8778 28.2061 72.7919 29.0938 74.4882 29.0938C76.0438 29.0938 76.9667 28.3643 76.9667 27.2305C76.9667 26.3164 76.3514 25.8242 75.0682 25.5166L73.0995 25.0244C71.5526 24.6641 70.1639 23.7412 70.1639 21.79C70.1639 19.4961 72.1679 18.2393 74.497 18.2393C76.8261 18.2393 78.7684 19.4961 78.8124 21.7373H76.8964C76.8085 20.7178 76.0262 19.874 74.4706 19.874C73.0995 19.874 72.1679 20.5244 72.1679 21.6406C72.1679 22.4229 72.7128 22.9854 73.829 23.2402L75.7889 23.7236C77.5907 24.1631 78.9618 25.0156 78.9618 27.0547C78.9618 29.4102 77.0546 30.7373 74.3387 30.7373C70.9989 30.7373 69.8827 28.7861 69.8387 27.1689ZM81.3395 21.21V18.9512H83.2555V21.21H85.066V22.7744H83.2555V27.7314C83.2555 28.7422 83.6334 29.0234 84.6793 29.0234C84.8463 29.0234 85.0045 29.0234 85.1188 29.0059V30.5C84.9605 30.5264 84.5914 30.5615 84.1959 30.5615C81.9371 30.5615 81.3131 29.7529 81.3131 27.8896V22.7744H80.0299V21.21H81.3395ZM90.3353 21.0518C93.0071 21.0518 94.4573 22.9326 94.4573 25.4639V26.2109C94.4573 28.8301 93.0159 30.6582 90.3353 30.6582C87.6546 30.6582 86.1956 28.8301 86.1956 26.2109V25.4639C86.1956 22.9414 87.6634 21.0518 90.3353 21.0518ZM90.3353 22.6162C88.8851 22.6162 88.1644 23.8027 88.1644 25.4902V26.2021C88.1644 27.8633 88.8763 29.085 90.3353 29.085C91.7943 29.085 92.4974 27.8721 92.4974 26.2021V25.4902C92.4974 23.7939 91.7855 22.6162 90.3353 22.6162ZM96.1055 30.5V21.21H98.0567V22.4316H98.127C98.3643 21.8516 99.0586 21.0781 100.351 21.0781C100.606 21.0781 100.825 21.0957 101.01 21.1309V22.8535C100.843 22.8096 100.5 22.7832 100.175 22.7832C98.6104 22.7832 98.083 23.75 98.083 24.998V30.5H96.1055ZM105.743 30.6582C103.256 30.6582 101.674 29.0146 101.674 26.2637V25.3232C101.674 22.7305 103.22 21.0518 105.664 21.0518C108.142 21.0518 109.636 22.792 109.636 25.4111V26.2988H103.598V26.5186C103.598 28.083 104.442 29.1201 105.769 29.1201C106.762 29.1201 107.439 28.6279 107.677 27.8281H109.531C109.25 29.3311 108.037 30.6582 105.743 30.6582ZM103.598 24.9365H107.729V24.9189C107.729 23.6006 106.912 22.5635 105.673 22.5635C104.416 22.5635 103.598 23.6006 103.598 24.9189V24.9365Z" fill="white"/>
            </svg>
          </Link>
          <Link href="" className='mb-4'>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" fill="black"/>
              <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" stroke="#A6A6A6"/>
              <path d="M17.8048 19.4617L8.0896 30.0059C8.09051 30.0078 8.09051 30.0106 8.09142 30.0125C8.38981 31.1574 9.41179 32 10.6254 32C11.1108 32 11.5662 31.8656 11.9567 31.6305L11.9877 31.6118L22.9229 25.1593L17.8048 19.4617Z" fill="#EA4335"/>
              <path d="M27.6331 17.6662L27.624 17.6597L22.9028 14.8612L17.5839 19.7013L22.9219 25.1582L27.6176 22.3878C28.4406 21.9324 29 21.045 29 20.0223C29 19.0052 28.4489 18.1225 27.6331 17.6662Z" fill="#FBBC04"/>
              <path d="M8.08942 9.99332C8.03102 10.2135 8 10.4449 8 10.6838V29.3164C8 29.5552 8.03102 29.7866 8.09034 30.0059L18.1386 19.7313L8.08942 9.99332Z" fill="#4285F4"/>
              <path d="M17.8766 19.9999L22.9044 14.8594L11.9819 8.38351C11.585 8.13997 11.1215 8 10.626 8C9.41237 8 8.38856 8.84447 8.09018 9.99034C8.09018 9.99128 8.08927 9.99221 8.08927 9.99314L17.8766 19.9999Z" fill="#34A853"/>
              <path d="M43.61 11.71C43.61 12.71 43.3133 13.5067 42.72 14.1C42.0533 14.8067 41.1767 15.16 40.09 15.16C39.05 15.16 38.17 14.8 37.45 14.08C36.73 13.36 36.37 12.4733 36.37 11.42C36.37 10.3667 36.73 9.48 37.45 8.76C38.17 8.04 39.05 7.68 40.09 7.68C40.6167 7.68 41.1133 7.77333 41.58 7.96C42.0467 8.14667 42.43 8.41 42.73 8.75L42.07 9.41C41.85 9.14333 41.5633 8.93667 41.21 8.79C40.8633 8.63667 40.49 8.56 40.09 8.56C39.31 8.56 38.65 8.83 38.11 9.37C37.5767 9.91667 37.31 10.6 37.31 11.42C37.31 12.24 37.5767 12.9233 38.11 13.47C38.65 14.01 39.31 14.28 40.09 14.28C40.8033 14.28 41.3967 14.08 41.87 13.68C42.3433 13.28 42.6167 12.73 42.69 12.03H40.09V11.17H43.56C43.5933 11.3567 43.61 11.5367 43.61 11.71ZM48.9078 7.84V8.72H45.6478V10.99H48.5878V11.85H45.6478V14.12H48.9078V15H44.7278V7.84H48.9078ZM52.5877 8.72V15H51.6677V8.72H49.6677V7.84H54.5877V8.72H52.5877ZM58.6654 15H57.7454V7.84H58.6654V15ZM62.5487 8.72V15H61.6287V8.72H59.6287V7.84H64.5487V8.72H62.5487ZM74.521 11.42C74.521 12.48 74.1677 13.3667 73.461 14.08C72.7477 14.8 71.8743 15.16 70.841 15.16C69.801 15.16 68.9277 14.8 68.221 14.08C67.5143 13.3667 67.161 12.48 67.161 11.42C67.161 10.36 67.5143 9.47333 68.221 8.76C68.9277 8.04 69.801 7.68 70.841 7.68C71.881 7.68 72.7543 8.04333 73.461 8.77C74.1677 9.48333 74.521 10.3667 74.521 11.42ZM68.101 11.42C68.101 12.2467 68.361 12.93 68.881 13.47C69.4077 14.01 70.061 14.28 70.841 14.28C71.621 14.28 72.271 14.01 72.791 13.47C73.3177 12.9367 73.581 12.2533 73.581 11.42C73.581 10.5867 73.3177 9.90333 72.791 9.37C72.271 8.83 71.621 8.56 70.841 8.56C70.061 8.56 69.4077 8.83 68.881 9.37C68.361 9.91 68.101 10.5933 68.101 11.42ZM76.5267 15H75.6067V7.84H76.7267L80.2067 13.41H80.2467L80.2067 12.03V7.84H81.1267V15H80.1667L76.5267 9.16H76.4867L76.5267 10.54V15Z" fill="white"/>
              <path d="M93.5181 31.4097H95.1469V20.3981H93.5181V31.4097ZM108.189 24.3646L106.322 29.1388H106.266L104.328 24.3646H102.573L105.479 31.0371L103.823 34.749H105.521L110 24.3646H108.189ZM98.9519 30.1588C98.4176 30.1588 97.6739 29.8902 97.6739 29.2234C97.6739 28.3742 98.6001 28.0483 99.4005 28.0483C100.116 28.0483 100.454 28.2042 100.889 28.4165C100.762 29.4365 99.892 30.1588 98.9519 30.1588ZM99.1483 24.1241C97.969 24.1241 96.7469 24.6482 96.2424 25.8101L97.6879 26.4188C97.9969 25.8101 98.5721 25.611 99.1762 25.611C100.019 25.611 100.875 26.121 100.889 27.0283V27.1411C100.594 26.971 99.9627 26.7165 99.1902 26.7165C97.632 26.7165 96.0451 27.5806 96.0451 29.1952C96.0451 30.6689 97.323 31.6184 98.7546 31.6184C99.8501 31.6184 100.454 31.1225 100.833 30.5411H100.889V31.3912H102.461V27.1692C102.461 25.2146 101.015 24.1241 99.1483 24.1241M89.0821 25.7053H86.7655V21.9308H89.0821C90.2998 21.9308 90.9911 22.9482 90.9911 23.8176C90.9911 24.6711 90.2998 25.7053 89.0821 25.7053ZM89.0402 20.3981H85.1375V31.4097H86.7655V27.2379H89.0402C90.8453 27.2379 92.6199 25.9184 92.6199 23.8176C92.6199 21.7168 90.8453 20.3981 89.0402 20.3981M67.7583 30.1606C66.6332 30.1606 65.6913 29.2102 65.6913 27.9047C65.6913 26.5852 66.6332 25.6198 67.7583 25.6198C68.8695 25.6198 69.7406 26.5852 69.7406 27.9047C69.7406 29.2102 68.8695 30.1606 67.7583 30.1606ZM69.6289 24.9812H69.5722C69.2064 24.5417 68.5038 24.1444 67.6178 24.1444C65.7611 24.1444 64.0599 25.7898 64.0599 27.9047C64.0599 30.0047 65.7611 31.6369 67.6178 31.6369C68.5038 31.6369 69.2064 31.2396 69.5722 30.7851H69.6289V31.3251C69.6289 32.7582 68.8695 33.5246 67.6457 33.5246C66.6471 33.5246 66.0282 32.8005 65.7751 32.1901L64.3549 32.7864C64.7626 33.78 65.8458 35 67.6457 35C69.5582 35 71.1757 33.8646 71.1757 31.0978V24.3708H69.6289V24.9812ZM72.3008 31.4097H73.9322V20.3973H72.3008V31.4097ZM76.3362 27.777C76.2943 26.3298 77.4474 25.5916 78.2766 25.5916C78.9243 25.5916 79.4725 25.9176 79.6549 26.3862L76.3362 27.777ZM81.3989 26.528C81.0899 25.6912 80.1472 24.1444 78.2208 24.1444C76.3083 24.1444 74.7196 25.6621 74.7196 27.8907C74.7196 29.9906 76.2943 31.6369 78.4032 31.6369C80.1053 31.6369 81.0899 30.5869 81.4976 29.9765L80.2319 29.1247C79.8103 29.7493 79.2333 30.1606 78.4032 30.1606C77.5739 30.1606 76.983 29.7774 76.6033 29.0261L81.5674 26.9534L81.3989 26.528ZM41.8501 25.2939V26.883H45.6184C45.5058 27.777 45.2107 28.4297 44.7612 28.8834C44.2121 29.4374 43.3541 30.0479 41.8501 30.0479C39.5291 30.0479 37.7152 28.1602 37.7152 25.8189C37.7152 23.4767 39.5291 21.5899 41.8501 21.5899C43.1018 21.5899 44.0157 22.0867 44.6905 22.7254L45.8017 21.604C44.8589 20.6959 43.6081 20 41.8501 20C38.6719 20 36 22.6117 36 25.8189C36 29.0261 38.6719 31.6369 41.8501 31.6369C43.5653 31.6369 44.8589 31.0688 45.8715 30.0047C46.9129 28.9547 47.2358 27.4793 47.2358 26.2866C47.2358 25.9176 47.2079 25.5775 47.1512 25.2939H41.8501ZM51.5208 30.1606C50.3957 30.1606 49.425 29.2243 49.425 27.8907C49.425 26.5421 50.3957 25.6198 51.5208 25.6198C52.6451 25.6198 53.6158 26.5421 53.6158 27.8907C53.6158 29.2243 52.6451 30.1606 51.5208 30.1606ZM51.5208 24.1444C49.4669 24.1444 47.7936 25.7194 47.7936 27.8907C47.7936 30.0479 49.4669 31.6369 51.5208 31.6369C53.5739 31.6369 55.2472 30.0479 55.2472 27.8907C55.2472 25.7194 53.5739 24.1444 51.5208 24.1444ZM59.65 30.1606C58.5249 30.1606 57.5542 29.2243 57.5542 27.8907C57.5542 26.5421 58.5249 25.6198 59.65 25.6198C60.7752 25.6198 61.745 26.5421 61.745 27.8907C61.745 29.2243 60.7752 30.1606 59.65 30.1606ZM59.65 24.1444C57.597 24.1444 55.9237 25.7194 55.9237 27.8907C55.9237 30.0479 57.597 31.6369 59.65 31.6369C61.7031 31.6369 63.3764 30.0479 63.3764 27.8907C63.3764 25.7194 61.7031 24.1444 59.65 24.1444Z" fill="white"/>
            </svg>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Pricing