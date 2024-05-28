"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import Foryou from "../../../public/foryou.png"
import Epic from "../../../public/epicconc.png"
import Modify from "../../../public/modifydish.png"
import Dinegroup from "../../../public/dinegroup.png"
import Button from "@/components/Button/Button";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Pricing = () => {
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
              <p>Culinary Tracker: Track up to <span className="font-bold">5</span> meals</p>
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
              <Button text="Get Started Now" url="/" />
              <br></br>
              <br></br>
              <Button text="Learn More" url="/" />
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
            <div className="flex gap-2 my-4 pb-4 items-center text-sm justify-center">
              {/* <div className=""><FaCheck className="text-dgreenw" /></div> */}
              <p className="font-bold text-base">VIP Support: Priority customer service</p>
            </div>
            <div className="text-center">
              <Button text="Get Started Now" url="/" />
              <br></br>
              <br></br>
              <Button text="Learn More" url="/" />
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
            <div className="text-center mt-14">
              <Button text="Get Started Now" url="/" />
              <br></br>
              <br></br>
              <Button text="Learn More" url="/" />
            </div>
          </div>
        </div>
      </div>




      {/* Taste Starter */}
      <div className='px-8 md:px-24 py-24 bg-dgreen dark:bg-dblack/90'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Tailored Recommendations</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Delve into a world where every dining recommendation aligns perfectly with your palate. 
              Our tailored suggestions serve as a preview of the personalized dining narrative you can further develop with our premium tiers.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>My Dish Insight</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Enjoy a taste of the detailed, personalized dish insights that come standard with Taste Starter. 
              As you savor each meal, imagine the possibilities with even more comprehensive data and customization options available when you step up to Cuisine Crafter or Epicurean Elite.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Community Connect</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Become a part of the vibrant <span className='font-bold text-dgreenw dark:text-dgreen'><a href='/features#dinegroup'>Dine Group</a></span>, where food enthusiasts gather to exchange culinary experiences, discover hidden gems, and forge new favorites. 
              Immerse yourself in our lively public and private group, where food lovers from all walks of life come together to share their passion for gastronomy.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Culinary Tracker</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Begin tracking your dietary habits with up to 5 meals with comprehensive nutritional insights to enhance your commitment to mindful eating 
              and consider the benefits of unlimited tracking and deeper dietary analysis that come with an upgrade to our enhanced tiers.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Enhanced Discovery</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Discover a world of relevance and sophistication as you engage with selected ads that resonate with the refined palate of your next gastronomic adventure. 
              Immerse yourself in a realm where each ad mirrors the delectable allure of your impending dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Cuisine Crafter */}
      <div className='px-8 md:px-24 py-24 bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Expanded Choices</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Indulge in the pleasure of exploring up to 2 enticing meal recommendations from our <span className='font-bold text-dgreenw dark:text-dgreen'><a href="/features#modifydish">Modify Dish</a></span> feature to enhance and personalize your dining experience at every meal. 
              These curated modifications ensure that your culinary journey is a delightful fusion of class and taste.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Dish Customization</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              With our cutting-edge tools like the Ingredient Swap and Flavor Compatibility Analyzer you can experiment with diverse elements, tailor dishes to your taste, and achieve harmonious flavor blends.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Exclusive Groups</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Elevate your connections within the vibrant Dine Group community, where members can forge even deeper bonds. 
              With the ability to create private groups, organize meal events, or effortlessly join existing ones, the platform fosters a more personalized and engaging social experience.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Dining Diary</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Embark on a gastronomic journey through a meticulously curated collection of up to 30 meal records, each accompanied by a wealth of nutritional insights. 
              Delve into the intricacies of diverse meals, where flavor unites with health in a delectable culinary excellence.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>No More Guesswork</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Each culinary creation is accompanied by a comprehensible and user-friendly nutritional profile, 
              providing you with the knowledge and empowerment to make informed choices aligning with your health objectives and culinary preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Epicurean Elite */}
      <div className='px-8 md:px-24 py-24 bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Unlimited Personalization</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Experience the limitless possibilities of DineIntel as you explore the unrestricted <span className='font-bold text-dgreenw dark:text-dgreen'><a href="/features#modifydish">Modify Dish</a></span> recommendations, 
              allowing you to customize your dining experience to your heart's content with the freedom to mix and match.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Epicurean Concierge</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              At your service is the Epicurean Concierge, your all-encompassing culinary guide within the DineIntel ecosystem. 
              This sophisticated agent is meticulously crafted to deliver a comprehensive array of food-related insights.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>In-Depth Health Insights</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Enhance your health consciousness through our Health-Focused Ingredient Analysis, elevating your culinary journey with each delectable dish.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Comprehensive Meal Chronicles</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Revel in the assurance and joy that comes with dining confidently, armed with a wealth of information to enhance your epicurean experiences with an unlimited archive of culinary discoveries.
            </p>
          </div>
          <div className='rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen hover:shadow-price'>
            <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>First-Class Support</h4>
            <p className='text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
              Receive unparalleled customer service with priority response times and personalized attention from our dedicated support team.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing