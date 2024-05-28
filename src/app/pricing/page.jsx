"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import Foryou from "../../../public/foryou.png"
import Epic from "../../../public/epicconc.png"
import Modify from "../../../public/modifydish.png"
import Dinegroup from "../../../public/dinegroup.png"
import IosApp from "../../../public/appstore.png"
import AndroidApp from "../../../public/googleplay.png"
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Pricing = () => {
  const [tier, setTier] = useState('')

  return (
    <div className='text-ddarkgrey dark:text-dgrey font-regular'>

      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">Choose Your Ideal Dining Companion</h1>
        </div>
      </div>


      {/* Pricing Cards */}
      <div className="px-8 md:px-24 py-12 md:py-16 bg-dlightestgreen dark:bg-dlightblack/90" id="tastestarter">
        <div className="flex flex-col lgmd:flex-row justify-center items-center gap-4">

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
            <div className="flex justify-center text-center py-12 gap-2">
              <Link href="">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Get Started</button>
              </Link>
              <button onClick={(e) => setTier('taste')} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Learn More</button>
            </div>
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
            <div className="flex gap-2 my-4 items-center text-sm justify-center">
              <p className="font-bold text-base">VIP Support: Priority customer service</p>
            </div>
            <div className="flex justify-center text-center py-12 gap-2">
              <Link href="">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Get Started</button>
              </Link>
              <button onClick={(e) => setTier('epicurean')} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Learn More</button>
            </div>
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
            <div className="flex justify-center text-center py-12 gap-2">
              <Link href="">
                <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Get Started</button>
              </Link>
              <button onClick={(e) => setTier('cuisine')} className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-1 text-dbluew dark:text-white inline-flex items-center font-regular'>Learn More</button>
            </div>
          </div>
        </div>
      </div>


      {/* Cards For Each Section */}

      {/* Taste Starter */}
      {tier == 'taste' && (
      <div className='px-8 md:px-24 py-16 bg-white dark:bg-black'>
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
      {tier == 'cuisine' && (
      <div className='px-8 md:px-24 py-16 bg-white dark:bg-black'>
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
      {tier == 'epicurean' && (
      <div className='px-8 md:px-24 py-16 bg-white dark:bg-black'>
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
          <p className='text-dbluew dark:text-white text-lg text-center font-bold'>Connect with fellow enthusiasts, share experiences, and explore innovative dining together by creating memorable dining events within our culinary community at DineIntel.</p>
        </div>
        <div className='flex flex-col md:flex-row'>
          <Link href="" className='mb-4 mr-4'>
            <Image className='' src={IosApp} width={120} height={30} alt='IOS App Download Icon' quality={100} />
          </Link>
          <Link href="" className='mb-4'>
            <Image className='' src={AndroidApp} width={135} height={40} alt='Android App Download Icon' quality={100} />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Pricing