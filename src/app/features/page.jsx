import Image from "next/image";
import Link from "next/link";
import Foryou from "../../../public/forYouLightMode.png"
import ForyouDark from "../../../public/forYouDark.png"
import Modify from "../../../public/ni2.png"
import ModifyDark from "../../../public/ni2d.png"
import Dine from "../../../public/light1.png"
import DineDark from "../../../public/dark1.png"
import Epic from "../../../public/newchat.png"
import ForyouIcon from "../../../public/foryou.png"
import EpicIcon from "../../../public/epicconc.png"
import ModifyIcon from "../../../public/modifydish.png"
import DineIcon from "../../../public/dinegroup.png"
import IosApp from "../../../public/appstore.png"
import AndroidApp from "../../../public/googleplay.png"
import AppForYou from "../../../public/AppForYouPage.png"
import AppModify from "../../../public/AppNutritionalInsight.png"
import AppDine from "../../../public/AppGroupPage.png"
// import AppEpic from "../../../public/AppEpicureanConciergeChat.png"

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
      <div className='px-8 md:px-24 py-12 md:py-16 lg:py-24 bg-white dark:bg-dblack/90'>
        <div className="mb-8">
          <div className="flex justify-center items-center gap-4">
            <Image className="-mt-6" src={ForyouIcon} width={30} height={30} alt="For You Icon" quality={100} />
            <h2 className='font-heading text-xl md:text-2xl lg:text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>For You: Tailored Culinary Discovery</h2>
          </div>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72 lg:text-2xl text-dbluew dark:text-dgrey'>
            At DineIntel, the <span className='font-bold'>For You</span> feature is a testament to our dedication to personalized dining experiences. 
            It's where culinary precision and individual preferences unite to chart your journey through the world's flavors. Delve into what <span className='font-bold'>For You</span> brings to the table:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className='flex flex-col justify-center items-center gap-4 lg:w-1/2 my-4 lgmd:pl-36 lgxl:pl-64'>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Personalized Restaurant Recommendations</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                We delve into the nuances of your palate, curating restaurant recommendations that perfectly align with your dietary preferences. 
                Experience a selection of premier dining spots tailored to your unique culinary desires.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Location-Based Trending Options</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Immerse yourself in the local dining scene with real-time updates on trending dining spots. 
                DineIntel brings the culinary pulse of your locale to your fingertips, ensuring you're always connected to the best dining experiences around you.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Customizable Search Dynamics</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                With DineIntel, you command the search. 
                Our platform molds to your needs, offering flexible search options that adapt whether you're seeking a local bite or an exotic feast far from home.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            <Image className="dark:hidden" src={Foryou} width={420} height={400} alt="For You Image" />
            <Image className="hidden dark:flex" src={ForyouDark} width={420} height={400} alt="For You Image Dark" />
          </div>
          {/* <div className='lg:w-1/2 my-4 flex justify-center max-h-[400px] lg1440:max-h-[500px]'>
            <Image className="" src={AppForYou} width={460} height={400} alt="For You Image" />
            <Image className="dark:hidden" src={Foryou} width={420} height={400} alt="For You Image" />
            <Image className="hidden dark:flex" src={ForyouDark} width={420} height={400} alt="For You Image Dark" />
          </div> */}
        </div>
      </div>

      {/* Modify Dish */}
      <div className="h-6 md:h-16 bg-white dark:bg-dblack/90" id="modifydish"></div>
      <div className='px-8 md:px-24 py-8 md:py-16 lg:py-24 bg-white dark:bg-dblack/90'>
        <div className='mb-8'>
          <div className="flex justify-center items-center gap-4">
            <Image className="-mt-6" src={ModifyIcon} width={30} height={30} alt="Modify Dish Icon" quality={100} />
            <h2 className='font-heading text-xl md:text-2xl lg:text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>Modify Dish: Sophisticated Culinary Customization</h2>
          </div>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72 lg:text-2xl text-dbluew dark:text-dgrey'>
            DineIntel&apos;s Modify Dish is a suite of bespoke features that redefine culinary customization, offering an unparalleled experience in personalized dining. 
            With innovative tools at your disposal, Modify Dish transforms meal preparation into a refined art form. Included in this suite are:
          </p>
        </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2 my-4 lgmd:pl-36 lgxl:pl-64">
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Ingredient Analysis</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  Discover the health benefits of any ingredient or its alternatives with our detailed analysis tool. 
                  Empowering you to make informed, healthier food choices.
                </p>
              </div>
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Ingredient Swap Suggester</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  Easily adapt your meals with our smart ingredient substitution tool. 
                  Tailor dishes to your dietary needs, allergies, and nutritional preferences without compromising on flavor.
                </p>
              </div>
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Flavor Compatibility Analyzer</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  Enhance your culinary experience with our Flavor Compatibility Analyzer. 
                  It suggests harmonious flavor pairings based on your personal taste, dietary restrictions, and nutritional profile, bringing the science of taste to your kitchen.
                </p>
              </div>
              <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
                <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Nutritional Insights</h4>
                <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                  Stay informed with Modify Dish's real-time nutritional insights. 
                  Get clear views of calorie counts and nutritional information, ensuring balanced and informed meal choices with ease.
                </p>
              </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            {/* <Image className="" src={AppModify} width={520} height={400} alt="Modify Dish Image" /> */}
            <Image className="dark:hidden" src={Modify} width={420} height={400} alt="Modify Dish Image" />
            <Image className="hidden dark:flex" src={ModifyDark} width={420} height={400} alt="Modify Dish Image Dark" />
          </div>
          {/* <div className='lg:w-1/2 my-4 flex justify-center max-h-[350px] lg1440:max-h-[500px]'>
            <Image className="" src={AppModify} width={520} height={400} alt="Modify Dish Image" />
            <Image className="dark:hidden" src={Modify} width={420} height={400} alt="Modify Dish Image" />
            <Image className="hidden dark:flex" src={ModifyDark} width={420} height={400} alt="Modify Dish Image Dark" />
          </div> */}
        </div>
        <p className='italic font-bold text-dbluew dark:text-dgrey lg:px-36 lgxl:px-72 mt-12 text-center lg:text-2xl'>
          DineIntel encapsulates the essence of modern dining—where technology, health, and taste converge to create an exclusive experience for the discerning diner.
        </p>
      </div>

      {/* Dine Group */}
      <div className="h-6 md:h-16 bg-white dark:bg-dblack/90" id="dinegroup"></div>
      <div className='px-8 md:px-24 py-8 md:py-16 lg:py-24 bg-white dark:bg-dblack/90'>
        <div className='mb-8'>
          <div className="flex justify-center items-center gap-4">
            <Image className="-mt-6" src={DineIcon} width={30} height={30} alt="Dine Group Icon" quality={100} />
            <h2 className='font-heading text-xl md:text-2xl lg:text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>Dine Group: Your Culinary Community Platform</h2>
          </div>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72 lg:text-2xl text-dbluew dark:text-dgrey'>
            At the heart of DineIntel lies the Dine Group, where culinary diversity is celebrated. Members exchange dining narratives, share gastronomic insights, and spotlight favorite eateries and dishes. 
            This platform amplifies the pleasures of the table within a community of shared passion. The Dine Group is the ideal space for food enthusiasts to connect, offering:
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
                Empower yourself to share your most cherished dining experiences, from memorable meals to the thrill of discovering new restaurants. 
                Your contributions enrich our tapestry of collective food appreciation and discovery.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Dialogue and Discovery</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Engage in lively forums where culinary opinions, reviews, and recommendations are exchanged. 
                Enter discussions that spark curiosity, share knowledge of hidden gems, and inspire with tales from your dining experiences. 
                It's a platform designed to broaden horizons and deepen appreciation for the culinary arts.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Meal Planning Events</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Exclusive to Cuisine Crafter and Epicurean Elite members, our Meal Planning Events feature allows you to collaborate with fellow food enthusiasts 
                in private groups to create and vote on upcoming dining experiences, ensuring memorable gatherings centered around exceptional cuisine.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            {/* <Image className="" src={AppDine} width={520} height={400} alt="Dine Group Image" /> */}
            <Image className="dark:hidden" src={Dine} width={420} height={400} alt="Dine Group Image" />
            <Image className="hidden dark:flex" src={DineDark} width={420} height={400} alt="Dine Group Image Dark" />
          </div>
        </div>
        <p className='font-bold italic text-dbluew dark:text-dgrey lg:px-36 lgxl:px-72 mt-12 text-center lg:text-2xl'>
          Dine Group is where culinary culture thrives, connecting gourmets and gourmands in a shared quest for exceptional dining experiences.
        </p>
      </div>

      {/* Epicurean Concierge */}
      <div className="h-6 md:h-16 bg-white dark:bg-dblack/90" id="epicureanconcierge"></div>
      <div className='px-8 md:px-24 py-24 bg-white dark:bg-dblack/90'>
        <div className='mb-8'>
          <div className="flex justify-center items-center gap-4">
            <Image className="-mt-6" src={EpicIcon} width={30} height={30} alt="Epicurean Concierge Icon" quality={100} />
            <h2 className='font-heading text-xl md:text-2xl lg:text-3xl mb-6 text-dbluew dark:text-dlightblue text-center'>Epicurean Concierge: Your Ultimate Culinary Guide</h2>
          </div>
          <p className='mb-4 text-center lg:px-36 lgxl:px-72 lg:text-2xl text-dbluew dark:text-dgrey'>
            Enjoy unmatched meal customization and profound insights into the culinary arts with the Epicurean Concierge, 
            ensuring every dish meets your exact preferences and elevates your dining experiences with personalized, insightful, and sophisticated guidance:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2 my-4 lgmd:pl-36 lgxl:pl-64">
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Personalized Dining Experiences</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Receive customized dining plans that perfectly align with your taste preferences and dietary needs. 
                Each meal is crafted to ensure a delightful and satisfying experience, considering your favorite cuisines, dietary restrictions, and nutritional goals.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Event Creation</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Easily create and organize exclusive dining events with the Epicurean Concierge. Whether planning a dinner party or a grand celebration, 
                our tool helps you craft unforgettable culinary experiences, from selecting the menu to managing guest preferences.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Private Group Connection</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Discover and join private groups that resonate with your culinary interests. 
                The Epicurean Concierge connects you with like-minded food enthusiasts, allowing you to share experiences, exchange recipes, and build meaningful connections within a vibrant community.
              </p>
            </div>
            <div className="rounded-[24px] p-8 bg-dlightestgreen dark:bg-black border-1 border-dlightgreen shadow-epc">
              <h4 className='font-heading text-dbluew dark:text-dlightblue mb-6 text-center'>Historical Dining Insights</h4>
              <p className='lgmd:max-w-xl text-sm text-dbluew dark:text-dgrey font-regular mb-6'>
                Benefit from detailed insights based on your past dining history. The Epicurean Concierge analyzes your previous meals and dining experiences 
                to provide informed recommendations and advice, helping you make well-informed culinary choices that enhance your gastronomic journey.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 my-4 flex justify-center'>
            <Image className="border-2 border-dbluew rounded-3xl" src={Epic} width={420} height={400} alt="Epicurean Concierge Image" />
          </div>
        </div>

        {/* Download Our App */}
        <div className='flex flex-col justify-center items-center gap-8 px-8 md:px-16 lg:px-32 lgxl:px-64 py-12 bg-white dark:bg-black'>
          <div className='mb-2'>
            <p className='text-dbluew dark:text-dgrey font-heading text-center text-lg md:text-2xl lg:text-3xl'>
              Download Our App Today
            </p>
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

    </div>
  )
}

export default Features