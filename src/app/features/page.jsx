import DownloadApp from "@/components/DownloadApp/DownloadApp";
import Image from "next/image";
import Foryou from "../../../public/AppForYouPage.png"
import Modify from "../../../public/AppNutritionalInsight.png"
import Dine from "../../../public/AppGroupPage.png"

const Features = () => {
  return (
    <div className='text-ddarkgrey dark:text-dgrey'>
      
      {/* Hero */}
      <div className="bg-featbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 py-32 md:py-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-4xl text-center text-white">Embark on a Culinary Adventure with DineIntel</h1>
        </div>
      </div>

      {/* For You */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-24 py-24 bg-dlightgreen/90 dark:bg-dblack/90' id="foryou">
        <div className='mb-4'>
          <h2 className='font-bold text-3xl mb-6 text-black dark:text-white'>For You: Tailored Culinary Discovery</h2>
          <p className='mb-4'>
            At DineIntel, the <span className='font-bold'>For You</span> feature is a testament to our dedication to personalized dining experiences. 
            It's where culinary precision and individual preferences unite to chart your journey through the world's flavors. Delve into what <span className='font-bold italic'>For You</span> brings to the table:
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Personalized Restaurant Recommendations:</span> We delve into the nuances of your palate, curating restaurant selections that resonate with your specific dietary preferences. 
            It&apos;s about delivering a selection of eateries that align seamlessly with your culinary desires.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Location-Based Trending Options:</span> Immerse yourself in the local dining scene with real-time updates on trending eateries. 
            DineIntel brings the culinary pulse of your locale to your fingertips, ensuring you&apos;re always connected to the best dining experiences around you.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Customizable Search Dynamics:</span> With DineIntel, you command the search. Our platform molds to your needs, 
            offering flexible search options that adapt whether you're seeking a local bite or an exotic feast far from home.
          </p>
        </div>
        <div className='mb-4'>
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Foryou} width={400} height={220} alt="For You Image" />
        </div>
      </div>

      {/* Modify Dish */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-24 py-24 bg-white/80 dark:bg-black/90' id="modifydish">
        <div className='mb-4'>
          <h2 className='font-bold text-3xl mb-6 text-black dark:text-white'>Modify Dish: Sophisticated Culinary Customization</h2>
          <p className='mb-4'>
            DineIntel&apos;s Modify Dish is a suite of bespoke features that redefine culinary customization, offering an unparalleled experience in personalized dining. 
            With innovative tools at your disposal, Modify Dish transforms meal preparation into a refined art form. Included in this suite are:
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Ingredient Analysis: </span>Delve into the health profile of any ingredient or its alternatives with our comprehensive analysis tool. 
            It's designed to enlighten and guide you towards making healthier, informed food choices.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Ingredient Swap Suggester: </span>Adapt your meal effortlessly with a tool that thoughtfully suggests ingredient substitutions that align with your dietary needs, allergies, and nutritional preferences. 
            It's a seamless way to tailor any dish to meet your specific dietary requirements without compromising on taste.
          </p>
          <p className='mb-4' id="epicurean">
            <span className='font-bold text-black dark:text-white'>Flavor Compatibility Analyzer: </span>This sophisticated feature analyzes and suggests flavor pairings that enhance your meal, 
            considering your personal taste, dietary restrictions, and nutritional profile. It's the science of taste, simplified for your culinary pleasure.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Epicurean Concierge: </span>Experience the luxury of a virtual dietician with our Epicurean Concierge. This interactive guide is personalized to understand your dietary preferences and restrictions, 
            offering expert advice to help you craft a menu that&apos;s as unique as your palate. It provides an unmatched level of customized dish experience, making every meal an adventure tailored specifically for you.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Nutritional Insights: </span>With Modify Dish, you're equipped with real-time nutritional insights, offering a clear view of calorie counts and nutritional information. 
            This feature ensures that every meal choice is an informed one, helping you maintain a balanced diet with ease.
          </p>
          <p className='italic font-bold text-black dark:text-white'>
            DineIntel encapsulates the essence of modern dining—where technology, health, and taste converge to create an exclusive experience for the discerning diner.
          </p>
        </div>
        <div className='mb-4'>
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Modify} width={400} height={220} alt="Modify Dish Image" />
        </div>
      </div>

      {/* Dine Group */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-24 py-24 bg-dlightgreen/90 dark:bg-dblack/90' id="dinegroup">
        <div className='mb-4'>
          <h2 className='font-bold text-3xl mb-6 text-black dark:text-white'>Dine Group: Your Culinary Community Platform</h2>
          <p className='mb-4'>
            At the heart of DineIntel lies the Dine Group, a dedicated platform celebrating culinary diversity. Here, members exchange rich dining narratives, share gastronomic insights, and spotlight their preferred eateries and dishes. 
            It&apos;s where the pleasures of the table are celebrated, exchanged, and amplified within a community of shared culinary passion. 
            The Dine Group is the quintessential space for food enthusiasts to connect, offering:
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Community Engagement: </span>Immerse yourself in a spirited community where you can share and relive your culinary journeys. 
            Showcase your dining experiences, share snapshots of your delectable meals, and highlight your culinary exploits, shining a spotlight on your top picks for cuisine and dining venues.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Celebration of Favorites: </span>Empowering you to share your most cherished dining experiences, from memorable meals to the thrill of discovering new restaurants. 
            Your contributions enrich our tapestry of collective food appreciation and discovery.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Dialogue and Discovery: </span>Engage in lively forums where culinary opinions, reviews, and recommendations are exchanged. 
            Enter discussions that spark curiosity, share knowledge of hidden gems, and inspire with tales from your dining experiences. It&apos;s a platform designed to broaden horizons and deepen appreciation for the culinary arts.
          </p>
          <p className='mb-4'>
            <span className='font-bold text-black dark:text-white'>Meal Planning Events: </span>Elevate your culinary journey with our Meal Planning Events feature, available exclusively to members of the Dine Group private group. 
            Collaborate with fellow food enthusiasts to create and vote on upcoming dining experiences, ensuring memorable gatherings centered around exceptional cuisine.
          </p>
          <p className='font-bold italic text-black dark:text-white'>
            Dine Group is where culinary culture thrives, connecting gourmets and gourmands in a shared quest for exceptional dining experiences.
          </p>
        </div>
        <div className='mb-4'>
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Dine} width={400} height={220} alt="Dine Group Image" />
        </div>
      </div>

      {/* Download the App  */}
      <div className="py-8 md:py-16 lg:py-24 px-8 md:px-16 lg:px-48 bg-white/80 dark:bg-black/90">
        <DownloadApp />
      </div>

    </div>
  )
}

export default Features