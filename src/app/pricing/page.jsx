import DownloadApp from '@/components/DownloadApp/DownloadApp'
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className='text-ddarkgrey dark:text-dgrey'>

      {/* Hero */}
      <div className="bg-pricebg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 py-32 md:py-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-4xl text-center text-white">DineIntel Tiers</h1>
        </div>
      </div>


      {/* Taste Starter */}
      <div className='px-8 md:px-24 py-24 bg-dlightgreen/90 dark:bg-dblack/90'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='mb-4'>
            <h2 className='font-bold text-3xl mb-6 text-black dark:text-white'>Taste Starter – Complimentary Access</h2>
            <p className='mb-4'>Embark on your culinary journey with Taste Starter's Complimentary Access, the perfect introduction to the DineIntel universe.</p>
            <h2 className='font-bold mb-2 text-black dark:text-white'>As You Enjoy Taste Starter, Imagine More:</h2>
            <p className='mb-4'>
              With every feature in the Taste Starter tier, envision the expanded choices and exclusive benefits that await with Cuisine Crafter and Epicurean Elite. 
              Picture unlimited customization, comprehensive meal chronicles, and personalized guidance from the Epicurean Concierge—all designed to transform your dining from routine to remarkable.
            </p>
            <h2 className='font-bold mb-2 text-black dark:text-white'>A Seamless Upgrade Path Awaits:</h2>
            <p className='mb-8'>
              Ready for more? Taste Starter is just the beginning. When you're ready to take the next step in your culinary adventure, upgrading is seamless. 
              With just a few taps, unlock the full potential of the DineIntel platform and experience the art of dining at its finest.
            </p>
          </div>
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Tailored Recommendations</h4>
            <p className='mb-4'>
              Delve into a world where every dining recommendation aligns perfectly with your palate. 
              Our tailored suggestions serve as a preview of the personalized dining narrative you can further develop with our premium tiers.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>My Dish Insight</h4>
            <p className='mb-4'>
              Enjoy a taste of the detailed, personalized dish insights that come standard with Taste Starter. 
              As you savor each meal, imagine the possibilities with even more comprehensive data and customization options available when you step up to Cuisine Crafter or Epicurean Elite.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Community Connect</h4>
            <p className='mb-4'>
              Become a part of the vibrant <span className='font-bold'><a href='/features#dinegroup'>Dine Group</a></span>, where food enthusiasts gather to exchange culinary experiences, discover hidden gems, and forge new favorites. 
              Immerse yourself in our lively public and private group, where food lovers from all walks of life come together to share their passion for gastronomy.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Culinary Tracker</h4>
            <p className='mb-4'>
              Begin tracking your dietary habits with up to 5 meals with comprehensive nutritional insights to enhance your commitment to mindful eating 
              and consider the benefits of unlimited tracking and deeper dietary analysis that come with an upgrade to our enhanced tiers.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Enhanced Discovery</h4>
            <p className='mb-4'>
              Discover a world of relevance and sophistication as you engage with selected ads that resonate with the refined palate of your next gastronomic adventure. 
              Immerse yourself in a realm where each ad mirrors the delectable allure of your impending dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Cuisine Crafter */}
      <div className='px-8 md:px-24 py-24 bg-white/80 dark:bg-black/90'>
        <div className='mb-4'>
          <div className='mb-4'>
            <h2 className='font-bold text-3xl mb-6 text-black dark:text-white'>Cuisine Crafter – Enhanced Experience</h2>
            <p className='mb-8'>
              Cuisine Crafter is a distinguished tier within the DineIntel universe, providing connoisseurs of fine food with a personalized dining experience. 
              It offers enhanced access and innovative tools for dish customization and culinary exploration.
            </p>
          </div>
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className='mb-4 p-4 rounded-[24px] bg-dlightgreen dark:bg-dlightblack'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Expanded Choices</h4>
            <p className='mb-4'>
              Indulge in the pleasure of exploring up to 2 enticing meal recommendations from our <span className='font-bold'><a href='/features#modifydish'>Modify Dish</a></span> feature to enhance and personalize your dining experience at every meal. 
              These curated modifications ensure that your culinary journey is a delightful fusion of class and taste.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-dlightgreen dark:bg-dlightblack'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Dish Customization</h4>
            <p className='mb-4'>
              With our cutting-edge tools like the Ingredient Swap and Flavor Compatibility Analyzer you can experiment with diverse elements, tailor dishes to your taste, and achieve harmonious flavor blends.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-dlightgreen dark:bg-dlightblack'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Exclusive Groups</h4>
            <p className='mb-4'>
              Elevate your connections within the vibrant Dine Group community, where members can forge even deeper bonds. 
              With the ability to create private groups, organize meal events, or effortlessly join existing ones, the platform fosters a more personalized and engaging social experience.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-dlightgreen dark:bg-dlightblack'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Dining Diary</h4>
            <p className='mb-4'>
              Embark on a gastronomic journey through a meticulously curated collection of up to 30 meal records, each accompanied by a wealth of nutritional insights. 
              Delve into the intricacies of diverse meals, where flavor unites with health in a delectable culinary excellence.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-dlightgreen dark:bg-dlightblack'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>No More Guesswork</h4>
            <p className='mb-4'>
              Each culinary creation is accompanied by a comprehensible and user-friendly nutritional profile, 
              providing you with the knowledge and empowerment to make informed choices aligning with your health objectives and culinary preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Epicurean Concierge */}
      <div className='px-8 md:px-24 py-24 bg-dlightgreen/90 dark:bg-dblack/90'>
        <div className='mb-4'>
          <div className='mb-4'>
            <h2 className='font-bold text-3xl mb-6 text-black dark:text-white'>Epicurean Elite – Premium All-Access</h2>
            <p className='mb-8'>
              Epicurean Elite – Premium All-Access is the pinnacle of culinary indulgence tailored to elevate your dining experience with bespoke features and exclusive premium access.
            </p>
          </div>
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Unlimited Personalization</h4>
            <p className='mb-4'>
              Experience the limitless possibilities of DineIntel as you explore the unrestricted Modify Dish recommendations, 
              allowing you to customize your dining experience to your heart's content with the freedom to mix and match.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Epicurean Concierge</h4>
            <p className='mb-4'>
              At your service is the Epicurean Concierge, your all-encompassing culinary guide within the DineIntel ecosystem. 
              This sophisticated agent is meticulously crafted to deliver a comprehensive array of food-related insights.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>In-Depth Health Insights</h4>
            <p className='mb-4'>
              Enhance your health consciousness through our Health-Focused Ingredient Analysis, elevating your culinary journey with each delectable dish.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>Comprehensive Meal Chronicles</h4>
            <p className='mb-4'>
              Revel in the assurance and joy that comes with dining confidently, armed with a wealth of information to enhance your epicurean experiences with an unlimited archive of culinary discoveries.
            </p>
          </div>
          <div className='mb-4 p-4 rounded-[24px] bg-white dark:bg-black'>
            <h4 className='font-bold mb-4 text-black dark:text-white'>First-Class Support</h4>
            <p className='mb-4'>
              Receive unparalleled customer service with priority response times and personalized attention from our dedicated support team.
            </p>
          </div>
        </div>
      </div>

      {/* Download the App  */}
      <div className="py-8 md:py-16 lg:py-24 px-8 md:px-16 lg:px-48 bg-white/80 dark:bg-black/90">
        <DownloadApp />
      </div>

    </div>
  )
}

export default Pricing