import Image from "next/image";
import Foryou from "../../../public/forYouLightMode.png"
import ForyouDark from "../../../public/forYouDark.png"
import Modify from "../../../public/mm2.png"
import ModifyDark from "../../../public/sc3.png"
import Dine from "../../../public/groups.png"
import DineDark from "../../../public/groupsdark.png"

const Features = () => {
  return (
    <div className='text-ddarkgrey dark:text-dgrey font-regular'>
      
      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">Embark on a Culinary Adventure with DineIntel</h1>
        </div>
      </div>

      {/* For You */}
      <div className="h-16 bg-white dark:bg-dblack/90" id="foryou"></div>
      <div className='px-8 md:px-24 py-24 bg-white dark:bg-dblack/90'>
        <div className="mb-8">
          <h2 className='font-heading text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>For You: Tailored Culinary Discovery</h2>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72'>
            At DineIntel, the <span className='font-bold'>For You</span> feature is a testament to our dedication to personalized dining experiences. 
            It's where culinary precision and individual preferences unite to chart your journey through the world's flavors. Delve into what <span className='font-bold'>For You</span> brings to the table:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className='flex flex-col justify-center items-center gap-4 lg:w-1/2 my-4 lgmd:pl-36 lgxl:pl-64'>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Personalized Restaurant Recommendations</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                We delve into the nuances of your palate, curating restaurant selections that resonate with your specific dietary preferences. 
                It&apos;s about delivering a selection of eateries that align seamlessly with your culinary desires.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Location-Based Trending Options</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Immerse yourself in the local dining scene with real-time updates on trending eateries. 
                DineIntel brings the culinary pulse of your locale to your fingertips, ensuring you&apos;re always connected to the best dining experiences around you.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Customizable Search Dynamics</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                With DineIntel, you command the search. Our platform molds to your needs, 
                offering flexible search options that adapt whether you're seeking a local bite or an exotic feast far from home.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            <Image className="dark:hidden" src={Foryou} width={320} height={400} alt="For You Image" />
            <Image className="hidden dark:flex" src={ForyouDark} width={320} height={400} alt="For You Image Darkmode" />
          </div>
        </div>
      </div>

      {/* Modify Dish */}
      <div className="h-16 bg-white dark:bg-dblack/90" id="modifydish"></div>
      <div className='px-8 md:px-24 py-24 bg-white dark:bg-dblack/90'>
        <div className='mb-8'>
          <h2 className='font-heading text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>Modify Dish: Sophisticated Culinary Customization</h2>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72'>
            DineIntel&apos;s Modify Dish is a suite of bespoke features that redefine culinary customization, offering an unparalleled experience in personalized dining. 
            With innovative tools at your disposal, Modify Dish transforms meal preparation into a refined art form. Included in this suite are:
          </p>
        </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2 my-4 lgmd:pl-36 lgxl:pl-64">
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Ingredient Analysis</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  Delve into the health profile of any ingredient or its alternatives with our comprehensive analysis tool. 
                  It's designed to enlighten and guide you towards making healthier, informed food choices.
                </p>
              </div>
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Ingredient Swap Suggester</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  Adapt your meal effortlessly with a tool that thoughtfully suggests ingredient substitutions that align with your dietary needs, allergies, and nutritional preferences. 
                  It's a seamless way to tailor any dish to meet your specific dietary requirements without compromising on taste.
                </p>
              </div>
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Flavor Compatibility Analyzer</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  This sophisticated feature analyzes and suggests flavor pairings that enhance your meal, 
                  considering your personal taste, dietary restrictions, and nutritional profile. It's the science of taste, simplified for your culinary pleasure.
                </p>
              </div>
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Nutritional Insights</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  With Modify Dish, you're equipped with real-time nutritional insights, offering a clear view of calorie counts and nutritional information. 
                  This feature ensures that every meal choice is an informed one, helping you maintain a balanced diet with ease.
                </p>
              </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            <Image className="dark:hidden" src={Modify} width={420} height={400} alt="Modify Dish Image" />
            <Image className="hidden dark:flex" src={ModifyDark} width={420} height={400} alt="Modify Dish Image Darkmode" />
          </div>
        </div>
        <p className='italic font-bold text-dbluew dark:text-white lg:px-36 lgxl:px-72 mt-12 text-center'>
          DineIntel encapsulates the essence of modern dining—where technology, health, and taste converge to create an exclusive experience for the discerning diner.
        </p>
      </div>

      {/* Dine Group */}
      <div className="h-16 bg-dlightestgreen dark:bg-dblack/90" id="dinegroup"></div>
      <div className='px-8 md:px-24 py-24 bg-dlightestgreen dark:bg-dblack/90'>
        <div className='mb-8'>
          <h2 className='font-heading text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>Dine Group: Your Culinary Community Platform</h2>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72'>
            At the heart of DineIntel lies the Dine Group, a dedicated platform celebrating culinary diversity. Here, members exchange rich dining narratives, share gastronomic insights, and spotlight their preferred eateries and dishes. 
            It&apos;s where the pleasures of the table are celebrated, exchanged, and amplified within a community of shared culinary passion. 
            The Dine Group is the quintessential space for food enthusiasts to connect, offering:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2 my-4 lgmd:pl-36 lgxl:pl-64">
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Community Engagement</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Immerse yourself in a spirited community where you can share and relive your culinary journeys. 
                Showcase your dining experiences, share snapshots of your delectable meals, and highlight your culinary exploits, shining a spotlight on your top picks for cuisine and dining venues.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Celebration of Favorites</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Empowering you to share your most cherished dining experiences, from memorable meals to the thrill of discovering new restaurants. 
                Your contributions enrich our tapestry of collective food appreciation and discovery.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Dialogue and Discovery</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Engage in lively forums where culinary opinions, reviews, and recommendations are exchanged. 
                Enter discussions that spark curiosity, share knowledge of hidden gems, and inspire with tales from your dining experiences. It&apos;s a platform designed to broaden horizons and deepen appreciation for the culinary arts.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Meal Planning Events</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Elevate your culinary journey with our Meal Planning Events feature, available exclusively to members of the Dine Group private group. 
                Collaborate with fellow food enthusiasts to create and vote on upcoming dining experiences, ensuring memorable gatherings centered around exceptional cuisine.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            <Image className="dark:hidden" src={Dine} width={420} height={400} alt="Dine Group Image" />
            <Image className="hidden dark:flex" src={DineDark} width={420} height={400} alt="Dine Group Image Darkmode" />
          </div>
        </div>
        <p className='font-bold italic text-dbluew dark:text-white lg:px-36 lgxl:px-72 mt-12 text-center'>
          Dine Group is where culinary culture thrives, connecting gourmets and gourmands in a shared quest for exceptional dining experiences.
        </p>
      </div>

    </div>
  )
}

export default Features