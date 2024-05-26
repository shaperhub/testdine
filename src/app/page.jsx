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
import TransformPic from "../../public/breakfast.jpg"
import IngSwap from "../../public/ingredientswap.png"
import NutIns from "../../public/nutritionalinsights.png"
import IngAna from "../../public/ingredientanalysis.png"
import FlavAna from "../../public/flavoranalyzer.png"
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import Button from "@/components/Button/Button";
import { FaCheck } from "react-icons/fa6";

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
      <div className="bg-white/80 dark:bg-dblack/90 flex flex-col lg:flex-row gap-8 px-8 md:px-24 py-32 md:py-40">
        <div className="lg:w-1/2 lgxl:pl-64 flex flex-col place-content-center">
          <h1 className="text-4xl xl:text-6xl text-dbluew dark:text-dlightblue font-heading">
            Experience the essence of dining innovation with <span className="text-dgreenw dark:text-dgreen">Dine</span><span className="font-dine text-dgreenw dark:text-dgreen">I</span><span className="text-dgreenw dark:text-dgreen">ntel</span>
          </h1>
          <p className="font-regular xl:text-xl text-black dark:text-dgrey pb-6 pt-2 xl:pt-8">
            Welcome to DineIntel, where every meal is a journey of discovery. Immerse yourself in culinary creativity, share genuine moments, and savor the satisfaction of unparalleled dining experiences.
          </p>
          <Button text="Explore Features" url="/features"/>
        </div>
        <div className="lg:w-1/2 flex items-center">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" width={600} height={320} alt="Hero Image" src={HeroPic} priority />
        </div>
      </div>


      {/* Transforming Tradition */}
      <div className="flex flex-col lg:flex-row-reverse text-black dark:text-dgrey gap-8 py-16 px-8 md:px-24 bg-dlightgreen/90 dark:bg-dlightblack/90">
        <div className="lg:w-1/2 lgxl:pr-64 flex flex-col justify-center">
          <h2 className="text-3xl font-heading mb-4 text-dbluew dark:text-dlightblue">Transforming <span className="text-dgreenw dark:text-dgreen">Tradition</span> into <span className="text-dgreenw dark:text-dgreen">Innovation</span></h2>
          <p className="font-regular mb-4">
            At DineIntel, culinary tradition meets innovation. Our culinary hub seamlessly blends global flavors with cutting-edge technology, offering personalized dining experiences tailored to your tastes.
          </p>
          <p className="font-regular mb-6">
            Join our vibrant community at <span className="font-bold text-dgreenw dark:text-dgreen"><a href="/features#dinegroup">Dine Group</a></span> to share culinary adventures and inspire each other. Let's redefine dining together. Discover the DineIntel experience: a seamless blend of pleasure, health, and discovery.
          </p>
          <Button text="More About DineIntel" url="/about" />
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={TransformPic} width={600} height={320} alt="Dining Photo" priority />
        </div>
      </div>


      {/* Igniting Joy */}
      <div className="px-8 md:px-24 py-12 md:py-24 bg-dlightestgreen/90 dark:bg-dblack/90">
        <h2 className="text-dbluew dark:text-dlightblue mb-16 font-heading text-3xl text-center">Discover Our Innovative Features for a <span className="text-dgreenw dark:text-dgreen">Modern Dining Experience</span></h2>
        <div className="flex flex-col lgbox:flex-row justify-center items-center gap-4">
          <div className="rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={Foryou} width={35} height={35} alt="For You Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">For You</h3>
            <p className="text-sm text-dgrey dark:text-dgrey font-regular mb-6">
              Unlock personalized restaurant recommendations, stay updated with real-time trending spots, and customize your search options to enhance your culinary journey.
            </p>
            <div className="flex justify-center">
              <Button text="Learn More" url="/features#foryou" />
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={Modify} width={35} height={35} alt="Modify Dish Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Modify Dish</h3>
            <p className="text-sm text-dgrey dark:text-dgrey font-regular mb-6">
              A game-changer in personalized dining. Say goodbye to one-size-fits-all meals and hello to a world of culinary customization at your fingertips. 
              Explore personalized ingredient analysis, seamless swaps, and expert flavor pairings tailored to your taste buds.
            </p>
            <div className="flex justify-center">
              <Button text="Learn More" url="/features#modifydish" />
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50" id="dinegrouphome">
            <div className="flex justify-center mb-4">
              <Image className="" src={Dinegroup} width={35} height={35} alt="Dine Group Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Dine Group</h3>
            <p className="text-sm text-dgrey dark:text-dgrey font-regular mb-6">
              Your culinary community hub within the DineIntel universe, where members share dining narratives, insights, and favorite dining experiences. 
              Engage in lively forums, showcase your dining adventures, and discover hidden gems.
            </p>
            <div className="flex justify-center">
              <Button text="Learn More" url="/features#dinegroup" />
            </div>
          </div>
          <div className="rounded-[24px] h-[420px] md:max-w-[300px] p-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={Epic} width={35} height={35} alt="Epicurean Concierge Icon" quality={100} />
            </div>
            <h3 className="font-heading text-dbluew dark:text-dlightblue mb-6 text-center">Epicurean Concierge</h3>
            <p className="text-sm text-dgrey dark:text-dgrey font-regular mb-6">
              Step into a world of tailored culinary assistance with our Epicurean Concierge, the epitome of personalized service at DineIntel. 
              This feature is designed to offer customized meal experiences and deep insights into the culinary arts.
            </p>
            <div className="flex justify-center">
              <Button text="Learn More" url="/features#epicureanconcierge" />
            </div>
          </div>
        </div>
      </div>


      {/* Pricing Cards */}
      <div className="px-8 md:px-24 py-12 md:py-24 bg-dlightgreen/90 dark:bg-dlightblack/90">
        <h2 className="text-dbluew dark:text-dlightblue mb-16 font-heading text-3xl text-center">Choose Your <span className="text-dgreenw dark:text-dgreen">Perfect Plan</span></h2>
        <div className="flex flex-col lgmd:flex-row justify-center items-center">

          {/* Taste Starter Card */}
          <div className="rounded-[24px] lgmd:max-w-[380px] lgmd:h-[1500px] p-8 mb-8 bg-white dark:bg-dblack font-regular text-black dark:text-dgrey">
            <p className="py-4 font-heading text-2xl text-white text-center bg-dgreenw rounded-full">Taste Starter</p>
            <p className="my-4 text-sm">
              Embark on your culinary journey with Taste Starter&apos;s Complimentary Access. Perfect for enthusiasts from all walks of life, this tier connects you with local 
              dining gems, setting the stage for deeper culinary exploration.
            </p>
            <p className="text-xl mb-4">Price: <span className="text-lg">Free</span></p>
            <p className="font-heading mb-2">For You:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Tailored Recommendations: Personalized dining suggestions</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>My Dish Insight: Detailed, personalized meal insights</p>
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
            <p className="font-heading mb-2">Dine Group:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Public Groups: Create up to 3, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Private Groups: Not included, can&apos;t join</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Community Connect: Engage with food enthusiasts</p>
            </div>
            <p className="font-heading mb-2">Modify Dish:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: 1 meal recommendation</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Culinary Tracker: Track up to 5 meals</p>
            </div>
            <div className="text-center">
              <Button text="Get Started Now" url="/" />
            </div>
          </div>

          {/* Epicurean Elite Card */}
          <div className="rounded-[24px] lgmd:max-w-[400px] lgmd:h-[1500px] p-8 mb-8 bg-white dark:bg-dblack font-regular text-black dark:text-dgrey">
            <p className="py-4 font-heading text-2xl text-white text-center bg-[#B08C36] rounded-full">Epicurean Elite</p>
            <p className="my-4 text-sm">
              Welcome to Epicurean Elite, Premium All-Access. Experience the pinnacle of culinary indulgence with unlimited meal tracking, personalized guidance from our 
              Epicurean Concierge, and VIP support. Elevate your dining to new heights with the finest in gastronomic excellence.
            </p>
            <p className="text-xl mb-4">Price: $50<span className="text-xs">/Month</span></p>
            <p className="font-heading mb-2">For You:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Tailored Recommendations: Personalized dining suggestions</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>My Dish Insight: Detailed, personalized meal insights</p>
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
            <p className="font-heading mb-2">Dine Group:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Public Groups: Create up to 50, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Private Groups: Create up to 50, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Community Connect: Engage with food enthusiasts</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Create Meal Dining Events: Host and join events</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>VIP Support: Priority customer service</p>
            </div>
            <p className="font-heading mb-2">Modify Dish:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: Up to 2 meal recommendations</p>
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
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Ingredient Health Analysis: Analyze the health benefits</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Epicurean Concierge: Personalized culinary guidance</p>
            </div>
            <div className="text-center">
              <Button text="Get Started Now" url="/" />
            </div>
          </div>

          {/* Cuisine Crafter Card */}
          <div className="rounded-[24px] lgmd:max-w-[380px] lgmd:h-[1500px] p-8 mb-8 bg-white dark:bg-dblack font-regular text-black dark:text-dgrey">
            <p className="py-4 font-heading text-2xl text-white text-center bg-[#6C6C6C] rounded-full">Cuisine Crafter</p>
            <p className="my-4 text-sm">
              Discover Cuisine Crafter, the distinguished tier for food connoisseurs. Enjoy personalized dining experiences with enhanced access and innovative tools for 
              dish customization. Elevate your journey and prepare for the ultimate indulgence with Epicurean Elite.
            </p>
            <p className="text-xl mb-4">Price: $15<span className="text-xs">/Month</span></p>
            <p className="font-heading mb-2">For You:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Tailored Recommendations: Personalized dining suggestions</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>My Dish Insight: Detailed, personalized meal insights</p>
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
            <p className="font-heading mb-2">Dine Group:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Public Groups: Create up to 10, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Private Groups: Create up to 10, join any number</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Community Connect: Engage with food enthusiasts</p>
            </div>
            <div className="flex gap-2 my-4 pb-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Create Meal Dining Events: Host and join events</p>
            </div>
            <p className="font-heading mb-2">Modify Dish:</p>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Meal Recommendations: Up to 2 meal recommendations</p>
            </div>
            <div className="flex gap-2 my-4 items-center text-sm">
              <div className=""><FaCheck className="text-dgreenw" /></div>
              <p>Culinary Tracker: Track up to 30 meals</p>
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
            <div className="text-center">
              <Button text="Get Started Now" url="/" />
            </div>
          </div>
        </div>
      </div>

      {/* Download App */}
      <div className="py-8 md:py-16 lg:py-24 px-8 md:px-16 lg:px-48 bg-white/80 dark:bg-black/90">
        <DownloadApp />
      </div>

      {/* FAQS */}
      <div className="w-full bg-dlightgreen/90 dark:bg-dblack/90 text-black dark:text-white px-8 md:px-24 py-24">
        <h1 className="font-heading text-3xl mb-4 text-black dark:text-white">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="font-regular">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-2 text-left text-sm md:text-base font-bold">What is DineIntel?</AccordionTrigger>
            <AccordionContent className="px-2 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel is a personalized dining platform blending culinary art with digital innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-2 text-left text-sm md:text-base font-bold">Is DineIntel a Food Delivery App?</AccordionTrigger>
            <AccordionContent className="px-2 pt-2 text-ddarkgrey dark:text-dgrey">
              No, DineIntel is not a food delivery app. 
              It&apos;s a personalized dining platform that offers recommendations, culinary exploration, and community engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-2 text-left text-sm md:text-base font-bold">How Does DineIntel Work?</AccordionTrigger>
            <AccordionContent className="px-2 pt-2 text-ddarkgrey dark:text-dgrey">
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
