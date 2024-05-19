import React from 'react'
import Link from 'next/link'

const Tiers = () => {
  return (
    <div className='text-black dark:text-white'>

      {/* Taste Starter */}
      <div className='px-8 md:px-24 py-32 md:py-40'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className=''>
            <h2 className='font-bold'>Taste Starter – Complimentary Access</h2>
            <p className=''>Embark on your culinary journey with Taste Starter's Complimentary Access, the perfect introduction to the DineIntel universe.</p>
            <h2 className='font-bold'>As You Enjoy Taste Starter, Imagine More:</h2>
            <p className=''>
              With every feature in the Taste Starter tier, envision the expanded choices and exclusive benefits that await with Cuisine Crafter and Epicurean Elite. 
              Picture unlimited customization, comprehensive meal chronicles, and personalized guidance from the Epicurean Concierge—all designed to transform your dining from routine to remarkable.
            </p>
            <h2 className='font-bold'>A Seamless Upgrade Path Awaits:</h2>
            <p className=''>
              Ready for more? Taste Starter is just the beginning. When you're ready to take the next step in your culinary adventure, upgrading is seamless. 
              With just a few taps, unlock the full potential of the DineIntel platform and experience the art of dining at its finest.
            </p>
          </div>
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className=''>
            <h4 className='font-bold'>Tailored Recommendations</h4>
            <p className=''>
              Delve into a world where every dining recommendation aligns perfectly with your palate. 
              Our tailored suggestions serve as a preview of the personalized dining narrative you can further develop with our premium tiers.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>My Dish Insight</h4>
            <p className=''>
              Enjoy a taste of the detailed, personalized dish insights that come standard with Taste Starter. 
              As you savor each meal, imagine the possibilities with even more comprehensive data and customization options available when you step up to Cuisine Crafter or Epicurean Elite.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Community Connect</h4>
            <p className=''>
              Become a part of the vibrant <span className='font-bold'>Dine Group</span>, where food enthusiasts gather to exchange culinary experiences, discover hidden gems, and forge new favorites. 
              Immerse yourself in our lively public and private group, where food lovers from all walks of life come together to share their passion for gastronomy.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Culinary Tracker</h4>
            <p className=''>
              Begin tracking your dietary habits with up to 5 meals with comprehensive nutritional insights to enhance your commitment to mindful eating 
              and consider the benefits of unlimited tracking and deeper dietary analysis that come with an upgrade to our enhanced tiers.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Enhanced Discovery</h4>
            <p className=''>
              Discover a world of relevance and sophistication as you engage with selected ads that resonate with the refined palate of your next gastronomic adventure. 
              Immerse yourself in a realm where each ad mirrors the delectable allure of your impending dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Cuisine Crafter */}
      <div className='px-8 md:px-24 py-12'>
        <div className=''>
          <div className=''>
            <h2 className='font-bold'>Cuisine Crafter – Enhanced Experience</h2>
            <p className=''>
              Cuisine Crafter is a distinguished tier within the DineIntel universe, providing connoisseurs of fine food with a personalized dining experience. 
              It offers enhanced access and innovative tools for dish customization and culinary exploration.
            </p>
          </div>
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className=''>
            <h4 className='font-bold'>Expanded Choices</h4>
            <p className=''>
              Indulge in the pleasure of exploring up to 2 enticing meal recommendations from our <span className='font-bold'>Modify Dish</span> feature to enhance and personalize your dining experience at every meal. 
              These curated modifications ensure that your culinary journey is a delightful fusion of class and taste.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Dish Customization</h4>
            <p className=''>
              With our cutting-edge tools like the Ingredient Swap and Flavor Compatibility Analyzer you can experiment with diverse elements, tailor dishes to your taste, and achieve harmonious flavor blends.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Exclusive Groups</h4>
            <p className=''>
              Elevate your connections within the vibrant Dine Group community, where members can forge even deeper bonds. 
              With the ability to create private groups, organize meal events, or effortlessly join existing ones, the platform fosters a more personalized and engaging social experience.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Dining Diary</h4>
            <p className=''>
              Embark on a gastronomic journey through a meticulously curated collection of up to 30 meal records, each accompanied by a wealth of nutritional insights. 
              Delve into the intricacies of diverse meals, where flavor unites with health in a delectable culinary excellence.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>No More Guesswork</h4>
            <p className=''>
              Each culinary creation is accompanied by a comprehensible and user-friendly nutritional profile, 
              providing you with the knowledge and empowerment to make informed choices aligning with your health objectives and culinary preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Epicurean Concierge */}
      <div className='px-8 md:px-24 py-12'>
        <div className=''>
          <div className=''>
            <h2 className='font-bold'>Epicurean Elite – Premium All-Access</h2>
            <p className=''>
              Epicurean Elite – Premium All-Access is the pinnacle of culinary indulgence tailored to elevate your dining experience with bespoke features and exclusive premium access.
            </p>
          </div>
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          <div className=''>
            <h4 className='font-bold'>Unlimited Personalization</h4>
            <p className=''>
              Experience the limitless possibilities of DineIntel as you explore the unrestricted Modify Dish recommendations, 
              allowing you to customize your dining experience to your heart's content with the freedom to mix and match.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Epicurean Concierge</h4>
            <p className=''>
              At your service is the Epicurean Concierge, your all-encompassing culinary guide within the DineIntel ecosystem. 
              This sophisticated agent is meticulously crafted to deliver a comprehensive array of food-related insights.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>In-Depth Health Insights</h4>
            <p className=''>
              Enhance your health consciousness through our Health-Focused Ingredient Analysis, elevating your culinary journey with each delectable dish.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>Comprehensive Meal Chronicles</h4>
            <p className=''>
              Revel in the assurance and joy that comes with dining confidently, armed with a wealth of information to enhance your epicurean experiences with an unlimited archive of culinary discoveries.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold'>First-Class Support</h4>
            <p className=''>
              Receive unparalleled customer service with priority response times and personalized attention from our dedicated support team.
            </p>
          </div>
        </div>
      </div>

      {/* Download the App  */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-24 py-12">
        <div className="">
          <h2 className="">Download the App Today!</h2>
          <h2 className="">Discover a world of personalized dining experiences at your command.</h2>
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.7 40" width="200" height="50">
              <title>Download_on_the_App_Store_Badge_US-UK_RGB_blk_4SVG_092917</title>
              <path d="M110.1 0H7.5c-.7 0-1.3.1-2 .2-.6.1-1.3.3-1.9.6C3 1.1 2.5 1.5 2 2S1.1 3 .8 3.6C.5 4.2.3 4.9.2 5.5c-.1.7-.2 1.4-.2 2v24.9c0 .7.1 1.3.2 2s.3 1.3.6 1.9c.3.7.7 1.2 1.2 1.7s1 .9 1.6 1.2c.6.3 1.2.5 1.9.6.7.1 1.3.2 2 .2h104.6c.7 0 1.3-.1 2-.2s1.3-.3 1.9-.6c.6-.3 1.1-.7 1.6-1.2s.9-1 1.2-1.6c.3-.6.5-1.2.6-1.9.1-.7.2-1.3.2-2v-.9V9.5 8.4v-.9c0-.7-.1-1.3-.2-2s-.3-1.3-.6-1.9c-.6-1.2-1.6-2.2-2.8-2.8-.6-.3-1.2-.5-1.9-.6-.7-.1-1.3-.2-2-.2h-2z" 
                fill="#a6a6a6">
              </path>
              <path d="M8.4 39.1h-.9c-.6 0-1.3-.1-1.9-.2-.6-.1-1.1-.3-1.7-.5-.5-.3-1-.6-1.4-1-.4-.4-.8-.9-1-1.4-.3-.5-.4-1.1-.5-1.7-.1-.6-.2-1.2-.2-1.9v-24-.9c0-.6.1-1.3.2-1.9.1-.5.3-1.1.6-1.6s.6-1 1-1.4c.4-.4.9-.7 1.4-1 .5-.3 1.1-.4 1.7-.5C6.3 1 6.9.9 7.6.9H112.2c.6 0 1.2.1 1.9.2.6.1 1.1.3 1.7.5 1 .5 1.9 1.4 2.4 2.4.3.5.4 1.1.5 1.6.1.6.2 1.3.2 1.9v24.9c0 .6-.1 1.2-.2 1.9-.1.6-.3 1.1-.5 1.7-.3.5-.6 1-1 1.4-.4.4-.9.8-1.4 1-.5.3-1.1.5-1.7.5-.6.1-1.2.2-1.9.2H8.4z">
              </path>
              <path d="M24.8 20.3c0-1.7.9-3.3 2.4-4.2-.9-1.3-2.4-2.1-4-2.2-1.7-.2-3.3 1-4.2 1-.9 0-2.2-1-3.6-1-1.9.1-3.6 1.1-4.5 2.7-1.9 3.3-.5 8.3 1.4 11 .9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.1.9 3.6.9s2.4-1.3 3.3-2.7c.7-.9 1.2-2 1.5-3.1-1.8-.6-2.9-2.4-2.9-4.3zM22 12.2c.8-1 1.2-2.2 1.1-3.5-1.2.1-2.4.7-3.2 1.7-.8.9-1.2 2.1-1.1 3.4 1.3 0 2.4-.6 3.2-1.6zM42.3 27.1h-4.7l-1.1 3.4h-2L39 18.1h2l4.5 12.4h-2l-1.2-3.4zm-4.2-1.5h3.8L40 20.1h-.1l-1.8 5.5zm17.1.4c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8V23c.6-1 1.7-1.6 2.9-1.6 2.2-.1 3.8 1.8 3.8 4.6zm-2 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zm11.9 0c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8V23c.6-1 1.7-1.6 2.9-1.6 2.3-.1 3.8 1.8 3.8 4.6zm-1.9 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zm8.5 1c.1 1.2 1.3 2 3 2 1.6 0 2.7-.8 2.7-1.9 0-1-.7-1.5-2.3-1.9l-1.6-.4c-2.3-.5-3.3-1.6-3.3-3.3 0-2.1 1.9-3.6 4.5-3.6s4.4 1.5 4.5 3.6h-1.9c-.1-1.2-1.1-2-2.6-2s-2.5.8-2.5 1.9c0 .9.7 1.4 2.3 1.8l1.4.3c2.5.6 3.6 1.6 3.6 3.4 0 2.3-1.8 3.8-4.8 3.8-2.8 0-4.6-1.4-4.7-3.7h1.7zm11.6-7.7v2.1H85v1.5h-1.7v5c0 .8.3 1.1 1.1 1.1h.6v1.5c-.3.1-.7.1-1 .1-1.8 0-2.5-.7-2.5-2.4V23h-1.3v-1.5h1.3v-2.1h1.8zm2.8 6.7c0-2.8 1.7-4.6 4.3-4.6 2.6 0 4.3 1.8 4.3 4.6 0 2.9-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6zm6.7 0c0-2-.9-3.1-2.4-3.1S88 24 88 26s.9 3.1 2.4 3.1 2.4-1.2 2.4-3.1zm3.4-4.6H98V23c.2-1 1.2-1.7 2.2-1.6.2 0 .4 0 .6.1v1.7c-.3-.1-.6-.1-.8-.1-1 0-1.9.8-1.9 1.8v5.7h-1.9v-9.2zm13.2 6.4c-.2 1.6-1.8 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.6s1.6-4.7 4.2-4.7c2.5 0 4.1 1.7 4.1 4.5v.6h-6.4v.1c-.1 1.3.8 2.4 2.1 2.6h.3c.9.1 1.8-.4 2.1-1.3h1.8zm-6.3-2.7h4.5c.1-1.2-.9-2.2-2.1-2.3h-.2c-1.2 0-2.2 1-2.2 2.3z" 
                fill="#fff">
              </path>
              <g>
                <path d="M37.8 8.7c1.5-.1 2.7 1 2.8 2.4v.5c0 1.9-1 3-2.8 3h-2.2v-6l2.2.1zm-1.2 5.2h1.1c1 .1 1.9-.7 2-1.8v-.4c.1-1-.6-2-1.6-2.1h-1.5v4.3zm5.1-1.5c-.1-1.2.8-2.2 1.9-2.3 1.2-.1 2.2.8 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.3 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.8 0 1.2-.6 1.2-1.6zm6.6 2.3h-.9l-.9-3.3h-.1l-.9 3.3h-.9l-1.2-4.5h.9l.8 3.4h.1l.9-3.4h.9l.9 3.4h.1l.8-3.4h.9l-1.4 4.5zm2.3-4.5h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9v-4.5zm5.2-1.8h.9v6.3h-.9V8.4zm2.1 4c-.1-1.2.7-2.2 1.9-2.3 1.2-.1 2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zm1.8 1c0-.8.6-1.3 1.7-1.3l1.2-.1v-.4c0-.5-.3-.7-.9-.7-.5 0-.8.2-.9.5h-.9c.1-.8.8-1.3 1.8-1.3 1.1 0 1.8.6 1.8 1.5v3.1h-.9v-.6h-.1c-.3.5-.8.7-1.4.7-.7.1-1.4-.5-1.5-1.2.1-.1.1-.1.1-.2zm2.9-.4v-.4l-1.1.1c-.6 0-.9.3-.9.6 0 .4.4.6.8.6.6.2 1.1-.2 1.2-.9 0 .1 0 .1 0 0zm2-.6c0-1.4.7-2.3 1.9-2.3.6 0 1.1.3 1.4.8h.1V8.4h.9v6.3h-.9V14h-.1c-.3.5-.8.8-1.4.8-1.1 0-1.9-.9-1.9-2.4zm1 0c0 1 .4 1.5 1.2 1.5.8 0 1.2-.6 1.2-1.5s-.5-1.5-1.2-1.5c-.8 0-1.2.6-1.2 1.5zm6.9 0c-.1-1.2.7-2.2 1.9-2.3 1.2-.1 2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zm2.1-2.2h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9v-4.5zm8.8-1.1v1.1h1v.8h-1v2.3c0 .5.2.7.6.7h.3v.7h-.5c-1 0-1.4-.3-1.4-1.2V11h-.7v-.7h.7V9.1h1zm2.2-.7h.9v2.5h.1c.2-.5.8-.9 1.4-.8.8 0 1.5.6 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9V8.4zm9.1 5.1c-.2.8-1.1 1.4-1.9 1.3-1.1 0-2.1-.9-2.1-2v-.3c-.2-1.1.6-2.2 1.8-2.3h.3c1.3 0 2 .9 2 2.3v.3h-3.2v.1c-.1.7.4 1.2 1.1 1.3h.1c.4.1.9-.2 1.1-.5h.8zm-3.2-1.5h2.3c0-.6-.4-1.1-1-1.2h-.1c-.6.1-1.2.6-1.2 1.2z" 
                  fill="#fff">
                </path>
              </g>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40" width="190" height="45">
              <path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z">
              </path>
              <path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z" 
                fill="#a6a6a6">
              </path>
              <path d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7 1 .7 1.6.7c.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64l.1 5.3zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2 1.3-.9 2.2-.9c.9 0 1.6.3 2.2.9s.9 1.3.9 2.2-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z" 
                fill="#fff" stroke="#fff" stroke-width=".2" stroke-miterlimit="10">
              </path>
              <path d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.3 1.1 2.3 2.6-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" 
                fill="#fff">
              </path>
              <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="21.795" y1="-152.295" x2="5.012" y2="-135.513" gradientTransform="translate(0 161)">
                <stop offset="0" stop-color="#00a0ff"></stop><stop offset=".007" stop-color="#00a1ff"></stop>
                <stop offset=".26" stop-color="#00beff"></stop><stop offset=".512" stop-color="#00d2ff"></stop>
                <stop offset=".76" stop-color="#00dfff"></stop><stop offset="1" stop-color="#00e3ff"></stop>
              </linearGradient>
              <path d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z" fill="url(#a)"></path>
              <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="33.834" y1="-140.95" x2="9.637" y2="-140.95" gradientTransform="translate(0 161)">
                <stop offset="0" stop-color="#ffe000"></stop><stop offset=".409" stop-color="#ffbd00"></stop>
                <stop offset=".775" stop-color="orange"></stop><stop offset="1" stop-color="#ff9c00"></stop>
              </linearGradient>
              <path d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="url(#b)"></path>
              <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="24.816" y1="-138.715" x2="2.058" y2="-115.957" gradientTransform="translate(0 161)">
                <stop offset="0" stop-color="#ff3a44"></stop><stop offset="1" stop-color="#c31162"></stop>
              </linearGradient>
              <path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="url(#c)"></path>
              <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="7.261" y1="-160.788" x2="17.424" y2="-150.625" gradientTransform="translate(0 161)">
                <stop offset="0" stop-color="#32a071"></stop><stop offset=".069" stop-color="#2da771"></stop>
                <stop offset=".476" stop-color="#15cf74"></stop><stop offset=".801" stop-color="#06e775"></stop>
                <stop offset="1" stop-color="#00f076"></stop>
              </linearGradient>
              <path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="url(#d)"></path>
              <path d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z" opacity=".2"></path>
              <path d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z" opacity=".12"></path>
              <path d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4l-19.5-11c-1.4-.9-2.5-.3-2.5 1.3V9c0-1.5 1.1-2.2 2.5-1.4z" opacity=".25" fill="#fff"></path>
            </svg>
          </div>
        </div>
        <div className=""></div>
      </div>

    </div>
  )
}

export default Tiers