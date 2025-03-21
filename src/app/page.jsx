import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Epic from "../../public/epicconc.png"
import TransformPic from "../../public/transform.jpg"
import DownloadApp from "@/components/DownloadApp/DownloadApp"
import Button from "@/components/Button/Button"
import { FaCheck } from "react-icons/fa6"
import { FaXmark } from "react-icons/fa6"
import { BsArrowRight } from "react-icons/bs"

export default function Home() {
  return (
    <div className="font-regular">

      {/* Hero */}
      <div className="bg-white/80 dark:bg-dblack/90 flex flex-col lg:flex-row gap-8 px-8 md:px-24 pt-24 lg:pt-40 pb-28">
        <div className="lg:w-1/2 lgxl:pl-64 flex flex-col place-content-center">
          <h1 className="text-4xl xl:text-6xl text-dbluew dark:text-dlightblue font-heading">
            Experience the essence of dining innovation with <span className="text-dgreenw dark:text-dgreen">Dine</span><span className="font-dine text-dgreenw dark:text-dgreen">I</span><span className="text-dgreenw dark:text-dgreen">ntel</span>
          </h1>
          <p className="font-regular xl:text-xl text-dbluew  dark:text-dgrey pb-6 pt-2 xl:pt-8">
            Welcome to DineIntel, where every meal is a journey of discovery. Immerse yourself in culinary creativity, share genuine moments, and savor the satisfaction of unparalleled dining experiences.
          </p>
          <Button text="Explore Features" url="/features"/>
        </div>
        <div className="lg:w-1/2 flex items-center">
        <iframe
          className="w-full aspect-video border-0"
          src="https://www.youtube.com/embed/r0eIxwbybv8"
          frameBorder="0"
          title="DineIntel Explainer Video"
          aria-hidden="true"
        />
        </div>
      </div>


      {/* Transforming Tradition */}
      <div className="flex flex-col lg:flex-row-reverse text-dbluew  dark:text-dgrey gap-8 py-16 px-8 md:px-24 bg-dlightestgreen dark:bg-dlightblack">
        <div className="lg:w-1/2 lgxl:pr-64 flex flex-col justify-center">
          <h1 className="text-3xl font-heading mb-4 text-dbluew dark:text-dlightblue text-center lg:text-left">Transforming <span className="text-dgreenw dark:text-dgreen">Tradition</span> into <span className="text-dgreenw dark:text-dgreen">Innovation</span></h1>
          <p className="font-regular mb-4 text-dbluew dark:text-dgrey">
            At DineIntel, culinary tradition meets innovation. Our culinary hub seamlessly blends global flavors with cutting-edge technology, offering personalized dining experiences tailored to your tastes.
          </p>
          <p className="font-regular mb-6 text-dbluew dark:text-dgrey">
            Join our vibrant community at <span className="font-bold text-dblue dark:text-dyellow"><Link href="/features#dinegroup">Dine Group</Link></span> to share culinary adventures and inspire each other. Let's redefine dining together. Discover the DineIntel experience: a seamless blend of pleasure, health, and discovery.
          </p>
          <Button text="More About DineIntel" url="/about" />
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={TransformPic} width={440} height={220} alt="Dining Photo" priority />
        </div>
      </div>


      {/* Igniting Joy */}
      <div className="px-8 md:px-24 py-12 md:py-24 bg-white dark:bg-dblack/90">
        <h1 className="text-dbluew dark:text-dlightblue mb-16 font-heading text-3xl text-center">Discover Our Innovative Features for a <span className="text-dgreenw dark:text-dgreen">Modern Dining Experience</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg1440:grid-cols-4 place-items-center place-content-center gap-4 lg2100:px-72">
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <span className='flex justify-center mb-2'>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3757 20.4059L13.9648 10.995L2.96984 0H2.11057L1.93512 0.445828C1.47204 1.62258 1.27418 2.82614 1.36301 3.92625C1.46426 5.18025 1.94065 6.26592 2.74076 7.06603L11.324 15.6493L12.4562 14.5172L20.3914 23.3903C21.1808 24.1797 22.5394 24.2265 23.3757 23.3903C24.1985 22.5675 24.1985 21.2287 23.3757 20.4059Z" fill="#2E8540"/>
                <path d="M7.34678 13.6613L0.624387 20.3837C-0.198363 21.2065 -0.198363 22.5453 0.624387 23.368C1.40598 24.1496 2.75809 24.2186 3.60868 23.368L10.3311 16.6456L7.34678 13.6613Z" fill="#2E8540"/>
                <path d="M22.9806 3.99603L19.1673 7.80931L18.1725 6.81453L21.9858 3.0012L20.991 2.00642L17.1777 5.8197L16.1829 4.82492L19.9963 1.01164L19.0015 0.0169067L14.0276 4.99081C13.4191 5.5993 13.0558 6.40724 13.0044 7.26589C12.9915 7.48344 12.9421 7.69742 12.8604 7.90095L16.0914 11.132C16.2949 11.0501 16.509 11.0008 16.7265 10.9879C17.5851 10.9366 18.3931 10.5732 19.0015 9.96472L23.9754 4.99086L22.9806 3.99603Z" fill="#2E8540"/> 
              </svg>
            </span>
            <p className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">For You</p>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              Unlock personalized restaurant recommendations, stay updated with real-time trending spots, and customize your search options to enhance your culinary journey.
            </p>
            <div className="flex justify-center mt-16">
              <Link href="/features#foryou" aria-labelledby="Learn More About For You">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <span className='flex justify-center mb-2'>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9259 16.737C23.8339 16.59 23.6729 16.5 23.4999 16.5H0.499909C0.326893 16.5 0.165925 16.59 0.0748935 16.737C-0.0160909 16.884 -0.0250909 17.068 0.0529091 17.223C0.754909 18.628 2.16589 19.5 3.73588 19.5H20.2639C21.8329 19.5 23.2438 18.628 23.9479 17.224C24.0239 17.068 24.0169 16.885 23.9259 16.737Z" fill="#2E8540"/>
                <path d="M13.371 6.60398C13.453 6.41897 13.5 6.21497 13.5 6C13.5 5.17298 12.8271 4.5 12 4.5C11.173 4.5 10.5 5.17298 10.5 6C10.5 6.21502 10.5471 6.41902 10.629 6.60398C6.09805 7.227 2.52004 10.875 2.06104 15.5H21.9381C21.4791 10.877 17.9001 7.227 13.371 6.60398ZM11.533 9.49898C8.73604 9.684 6.32703 11.51 5.39802 14.151C5.32602 14.356 5.132 14.485 4.92604 14.485C4.87105 14.485 4.81504 14.476 4.76005 14.457C4.50004 14.365 4.36307 14.08 4.45405 13.819C5.51605 10.799 8.26907 8.712 11.4671 8.50097C11.7321 8.48395 11.9801 8.69095 11.9991 8.96695C12.0171 9.243 11.809 9.48098 11.533 9.49898Z" fill="#2E8540"/>
              </svg>
            </span>
            <p className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Modify Dish</p>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              A game-changer in personalized dining. Say goodbye to one-size-fits-all meals and hello to a world of culinary customization at your fingertips. 
              Explore personalized ingredient analysis, seamless swaps, and expert flavor pairings tailored to your taste buds.
            </p>
            <div className="flex justify-center">
              <Link href="/features#modifydish" aria-labelledby="Learn More About Modify Dish">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <span className='flex justify-center mb-2'>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z" fill="#2E8540"/>
                <path d="M20.7901 14.7C19.6701 15.45 18.1001 15.73 16.6501 15.54C17.0301 14.72 17.2301 13.81 17.2401 12.85C17.2401 11.85 17.0201 10.9 16.6001 10.07C18.0801 9.86998 19.6501 10.15 20.7801 10.9C22.3601 11.94 22.3601 13.65 20.7901 14.7Z" fill="#2E8540"/>
                <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#2E8540"/>
                <path d="M6.55012 12.85C6.55012 13.82 6.76012 14.74 7.14012 15.57C5.73012 15.72 4.26012 15.42 3.18012 14.71C1.60012 13.66 1.60012 11.95 3.18012 10.9C4.25012 10.18 5.76012 9.88998 7.18012 10.05C6.77012 10.89 6.55012 11.84 6.55012 12.85Z" fill="#2E8540"/>
                <path d="M12.1198 15.87C12.0398 15.86 11.9498 15.86 11.8598 15.87C10.0198 15.81 8.5498 14.3 8.5498 12.44C8.5598 10.54 10.0898 9 11.9998 9C13.8998 9 15.4398 10.54 15.4398 12.44C15.4298 14.3 13.9698 15.81 12.1198 15.87Z" fill="#2E8540"/>
                <path d="M8.8698 17.94C7.3598 18.95 7.3598 20.61 8.8698 21.61C10.5898 22.76 13.4098 22.76 15.1298 21.61C16.6398 20.6 16.6398 18.94 15.1298 17.94C13.4198 16.79 10.5998 16.79 8.8698 17.94Z" fill="#2E8540"/>
              </svg>
            </span>
            <p className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Dine Group</p>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              Your culinary community hub within the DineIntel universe, where members share dining narratives, insights, and favorite dining experiences. 
              Engage in lively forums, showcase your dining adventures, and discover hidden gems.
            </p>
            <div className="flex justify-center">
              <Link href="/features#dinegroup" aria-labelledby="Learn More About Dine Group">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <div className="flex justify-center mb-4">
              <Image className="" src={Epic} width={35} height={35} alt="Epicurean Concierge Icon" quality={100} />
            </div>
            <p className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Epicurean Concierge</p>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              Step into a world of tailored culinary assistance with our Epicurean Concierge, the epitome of personalized service at DineIntel. 
              This feature is designed to offer customized meal experiences and deep insights into the culinary arts.
            </p>
            <div className="flex justify-center">
              <Link href="/features#epicureanconcierge" aria-labelledby="Learn More About Epicurean Concierge">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Pricing Cards */}
      <div className="px-8 md:px-24 py-12 md:py-16 bg-dlightestgreen dark:bg-dlightblack/90">
        <h1 className="text-dbluew dark:text-dlightblue mb-16 font-heading text-3xl text-center">Choose Your <span className="text-dgreenw dark:text-dgreen">Perfect Plan</span></h1>
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
            <div className="text-center mt-12">
              <Button text="Get Started Now" url="/pricing" />
            </div>
          </div>

          {/* Cuisine Crafter Card */}
          <div className="rounded-[24px] lgmd:max-w-[410px] lgmd:flex-1 p-8 mb-8 bg-white dark:bg-dblack font-regular text-dbluew  dark:text-dgrey">
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
            <div className="text-center mt-14">
              <Button text="Get Started Now" url="/pricing" />
            </div>
          </div>

          {/* Epicurean Elite Card */}
          <div className="rounded-[24px] lgmd:max-w-[420px] lgmd:flex-1 p-8 mb-8 bg-white dark:bg-dblack font-regular text-dbluew  dark:text-dgrey">
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
            <div className="flex gap-2 my-4 pb-4 items-center text-sm justify-center">
              <p className="font-bold text-base">VIP Support: Priority customer service</p>
            </div>
            <div className="text-center">
              <Button text="Get Started Now" url="/pricing" />
            </div>
          </div>
        </div>
      </div>

      {/* Download App */}
      <div className="px-8 md:px-36 lg:px-48 bg-white/80 dark:bg-black/90">
        <DownloadApp />
      </div>

      {/* FAQS */}
      <div className="bg-dlightestgreen dark:bg-dblack text-black dark:text-white px-8 md:px-36 py-16">
        <h2 className="font-heading text-3xl mb-4 text-dbluew dark:text-dgrey text-center md:text-left">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="font-regular">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-sm md:text-base font-bold">What is DineIntel?</AccordionTrigger>
            <AccordionContent className="pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel is a personalized dining platform blending culinary art with digital innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-sm md:text-base font-bold">Is DineIntel a Food Delivery App?</AccordionTrigger>
            <AccordionContent className="pt-2 text-ddarkgrey dark:text-dgrey">
              No, DineIntel is not a food delivery app. 
              It&apos;s a personalized dining platform that offers recommendations, culinary exploration, and community engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-sm md:text-base font-bold">How Does DineIntel Work?</AccordionTrigger>
            <AccordionContent className="pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel works by leveraging advanced technology to provide personalized dining experiences. 
              It uses features like <span className='font-bold text-dblue dark:text-dyellow'><Link href="/features#foryou">For You</Link></span> to offer tailored restaurant recommendations and <span className='font-bold text-dblue dark:text-dyellow'><Link href="/features#modifydish">Modify Dish</Link></span> to customize meals according to individual preferences. 
              Users can also engage with the culinary community through the <span className='font-bold text-dblue dark:text-dyellow'><Link href='/features#dinegroup'>Dine Group</Link></span>, where they can share experiences and discover new dining spots.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-sm md:text-base font-bold">How Do I Sign Up for an Account?</AccordionTrigger>
            <AccordionContent className="pt-2 text-ddarkgrey dark:text-dgrey">
              You can sign up using your <span className='font-bold text-dblue dark:text-dyellow'>Email and Password</span> or <span className='font-bold text-dblue dark:text-dyellow'>Google</span> account. 
              If you sign up on the website, you will be prompted to choose a subscription plan. 
              If you sign up using the iOS or Android app, you will receive an email with a link to complete your registration on our website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-sm md:text-base font-bold">What Subscription Plans and Trials Do You Offer?</AccordionTrigger>
            <AccordionContent className="pt-2 text-ddarkgrey dark:text-dgrey">
              We offer 3 subscription tiers: <span className='font-bold text-dblue dark:text-dyellow'>Taste Starter</span>, <span className='font-bold text-dblue dark:text-dyellow'>Cuisine Crafter</span>, and <span className='font-bold text-dblue dark:text-dyellow'>Epicurean Elite</span>. 
              We provide a 7-day free trial for both the Cuisine Crafter and Epicurean Elite plans. During the trial, you get full access to the selected plan&apos;s features. 
              If you do not cancel before the trial ends, your subscription will automatically roll over to a paid monthly subscription.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br></br>
        <Button text="See More" url="/faqs" />
      </div>
    </div>
  );
}
