import Image from "next/image";
import Link from "next/link";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import Foryou from "../../public/foryou.png"
import Epic from "../../public/epicconc.png"
import Modify from "../../public/modifydish.png"
import Dinegroup from "../../public/dinegroup.png"
import HeroPic from "../../public/restaurant.jpg"
import TransformPic from "../../public/trad2inno.png"
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import Button from "@/components/Button/Button";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     easing: "ease-out-cubic",
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);

  return (
    <div className="font-regular">

      {/* Hero */}
      <div className="bg-white/80 dark:bg-dblack/90 flex flex-col lg:flex-row gap-8 px-8 md:px-24 pt-40 pb-28">
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
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" width={600} height={320} alt="Hero Image" src={HeroPic} priority />
        </div>
      </div>


      {/* Transforming Tradition */}
      <div className="flex flex-col lg:flex-row-reverse text-dbluew  dark:text-dgrey gap-8 py-16 px-8 md:px-24 bg-dlightestgreen dark:bg-dlightblack">
        <div className="lg:w-1/2 lgxl:pr-64 flex flex-col justify-center">
          <h2 className="text-3xl font-heading mb-4 text-dbluew dark:text-dlightblue text-center lg:text-left">Transforming <span className="text-dgreenw dark:text-dgreen">Tradition</span> into <span className="text-dgreenw dark:text-dgreen">Innovation</span></h2>
          <p className="font-regular mb-4 text-dbluew dark:text-dgrey">
            At DineIntel, culinary tradition meets innovation. Our culinary hub seamlessly blends global flavors with cutting-edge technology, offering personalized dining experiences tailored to your tastes.
          </p>
          <p className="font-regular mb-6 text-dbluew dark:text-dgrey">
            Join our vibrant community at <span className="font-bold text-dgreenw dark:text-dgreen"><a href="/features#dinegroup">Dine Group</a></span> to share culinary adventures and inspire each other. Let's redefine dining together. Discover the DineIntel experience: a seamless blend of pleasure, health, and discovery.
          </p>
          <Button text="More About DineIntel" url="/about" />
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={TransformPic} width={440} height={320} alt="Dining Photo" priority />
        </div>
      </div>


      {/* Igniting Joy */}
      <div className="px-8 md:px-24 py-12 md:py-24 bg-white dark:bg-dblack/90">
        <h2 className="text-dbluew dark:text-dlightblue mb-16 font-heading text-3xl text-center">Discover Our Innovative Features for a <span className="text-dgreenw dark:text-dgreen">Modern Dining Experience</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg1440:grid-cols-4 place-items-center place-content-center gap-4 lg2100:px-72">
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <div className="flex justify-center mb-4">
              <Image className="" src={Foryou} width={35} height={35} alt="For You Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">For You</h3>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              Unlock personalized restaurant recommendations, stay updated with real-time trending spots, and customize your search options to enhance your culinary journey.
            </p>
            <div className="flex justify-center mt-16">
              <Link href="/features#foryou">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <div className="flex justify-center mb-4">
              <Image className="" src={Modify} width={35} height={35} alt="Modify Dish Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Modify Dish</h3>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              A game-changer in personalized dining. Say goodbye to one-size-fits-all meals and hello to a world of culinary customization at your fingertips. 
              Explore personalized ingredient analysis, seamless swaps, and expert flavor pairings tailored to your taste buds.
            </p>
            <div className="flex justify-center">
              <Link href="/features#modifydish">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <div className="flex justify-center mb-4">
              <Image className="" src={Dinegroup} width={35} height={35} alt="Dine Group Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Dine Group</h3>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              Your culinary community hub within the DineIntel universe, where members share dining narratives, insights, and favorite dining experiences. 
              Engage in lively forums, showcase your dining adventures, and discover hidden gems.
            </p>
            <div className="flex justify-center">
              <Link href="/features#dinegroup">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] lg1440:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
            <div className="flex justify-center mb-4">
              <Image className="" src={Epic} width={35} height={35} alt="Epicurean Concierge Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Epicurean Concierge</h3>
            <p className="text-sm text-dbluew dark:text-dgrey font-regular mb-6">
              Step into a world of tailored culinary assistance with our Epicurean Concierge, the epitome of personalized service at DineIntel. 
              This feature is designed to offer customized meal experiences and deep insights into the culinary arts.
            </p>
            <div className="flex justify-center">
              <Link href="/features#epicureanconcierge">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>Learn More <span className="pl-2"><BsArrowRight /></span></button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Pricing Cards */}
      <div className="px-8 md:px-24 py-12 md:py-16 bg-dlightestgreen dark:bg-dlightblack/90">
        <h2 className="text-dbluew dark:text-dlightblue mb-16 font-heading text-3xl text-center">Choose Your <span className="text-dgreenw dark:text-dgreen">Perfect Plan</span></h2>
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
              <Image className="" src={Foryou} width={30} height={30} alt="For You" />
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
              <Image className="" src={Dinegroup} width={30} height={30} alt="Dine Group" />
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
              <Image className="" src={Modify} width={30} height={30} alt="Modify Dish" />
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
              <Image className="" src={Foryou} width={30} height={30} alt="For You" />
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
              <Image className="" src={Dinegroup} width={30} height={30} alt="Dine Group" />
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
              <Image className="" src={Modify} width={30} height={30} alt="Modify Dish" />
              <p className="font-heading mb-2">Modify Dish:</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: Up to <span className="font-bold">2</span> meal recommendations</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Culinary Tracker: Unlimited meal tracking</p>
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

          {/* Cuisine Crafter Card */}
          <div className="rounded-[24px] lgmd:max-w-[410px] lgmd:flex-1 p-8 mb-8 bg-white dark:bg-dblack font-regular text-dbluew  dark:text-dgrey">
            <div className="bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] rounded-xl text-white p-4 mb-4">
              <p className="py-2 font-heading text-2xl text-white text-center">Cuisine Crafter</p>
              <p className="my-2 text-sm">
                Discover Cuisine Crafter, the distinguished tier for food connoisseurs. Enjoy personalized dining experiences with enhanced access and innovative tools for 
                dish customization. Elevate your journey and prepare for the ultimate indulgence with Epicurean Elite.
              </p>
            </div>
            <p className="text-xl mb-4">Price: $15<span className="text-xs">/Month</span></p>
            <div className="flex gap-4 text-dgreenw dark:text-dgreen">
              <Image className="" src={Foryou} width={30} height={30} alt="For You" />
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
              <Image className="" src={Dinegroup} width={30} height={30} alt="Dine Group" />
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
              <Image className="" src={Modify} width={30} height={30} alt="Modify Dish" />
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
        </div>
      </div>

      {/* Download App */}
      <div className="px-8 md:px-36 lg:px-48 bg-white/80 dark:bg-black/90">
        <DownloadApp />
      </div>

      {/* FAQS */}
      <div className="bg-dlightestgreen dark:bg-dblack text-black dark:text-white px-8 md:px-36 py-16">
        <h1 className="font-heading text-3xl mb-4 text-dbluew dark:text-dgrey text-center md:text-left">Frequently Asked Questions</h1>
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
              It uses features like <span className='font-bold text-dgreenw dark:text-dgreen'><a href="/features#foryou">For You</a></span> to offer tailored restaurant recommendations and <span className='font-bold text-dgreenw dark:text-dgreen'><a href="/features#modifydish">Modify Dish</a></span> to customize meals according to individual preferences. 
              Users can also engage with the culinary community through the <span className='font-bold text-dgreenw dark:text-dgreen'><a href='/features#dinegroup'>Dine Group</a></span>, where they can share experiences and discover new dining spots.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br></br>
        <Button text="See More" url="/faqs" />
      </div>
    </div>
  );
}
