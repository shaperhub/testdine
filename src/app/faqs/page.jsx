import Button from "@/components/Button/Button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const Faqs = () => {
  return (
    <div className='min-h-screen text-black dark:text-white bg-white/80 dark:bg-black/90 font-regular'>
            
      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">Frequently Asked Questions</h1>
        </div>
      </div>

      {/* FAQs */}
      <div className='pt-20 pb-16 px-8 md:px-36'>
        <h2 className='text-2xl lg:text-3xl mb-12 font-heading text-center text-dbluew dark:text-dgrey'>We&apos;ve got all the answers</h2>
        <Accordion type="single" collapsible className="font-regular">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">What is DineIntel?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel is a personalized dining platform blending culinary art with digital innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Is DineIntel a Food Delivery App?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              No, DineIntel is not a food delivery app. 
              It&apos;s a personalized dining platform that offers recommendations, culinary exploration, and community engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">How Does DineIntel Work?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel works by leveraging advanced technology to provide personalized dining experiences. 
              It uses features like <span className='font-bold text-dblue dark:text-dyellow'><Link href="/features#foryou">For You</Link></span> to offer tailored restaurant recommendations and <span className='font-bold text-dblue dark:text-dyellow'><Link href="/features#modifydish">Modify Dish</Link></span> to customize meals according to individual preferences. 
              Users can also engage with the culinary community through the <span className='font-bold text-dblue dark:text-dyellow'><Link href='/features#dinegroup'>Dine Group</Link></span>, where they can share experiences and discover new dining spots.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">How Do I Sign Up for an Account?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              You can sign up using your <span className='font-bold text-dblue dark:text-dyellow'>Email and Password</span> or <span className='font-bold text-dblue dark:text-dyellow'>Google</span> account. 
              If you sign up on the website, you will be prompted to choose a subscription plan. 
              If you sign up using the iOS or Android app, you will receive an email with a link to complete your registration on our website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">What Subscription Plans and Trials Do You Offer?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              We offer 3 subscription tiers: <span className='font-bold text-dblue dark:text-dyellow'>Taste Starter</span>, <span className='font-bold text-dblue dark:text-dyellow'>Cuisine Crafter</span>, and <span className='font-bold text-dblue dark:text-dyellow'>Epicurean Elite</span>. 
              We provide a 7-day free trial for both the Cuisine Crafter and Epicurean Elite plans. During the trial, you get full access to the selected plan&apos;s features. 
              If you do not cancel before the trial ends, your subscription will automatically roll over to a paid monthly subscription.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Can I Upgrade or Downgrade my Subscription?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              Yes, you can upgrade or downgrade your subscription at any time from your <span className='font-bold text-dblue dark:text-dyellow'>Profile</span>. 
              Click on <span className='font-bold text-dblue dark:text-dyellow'>Manage Subscription</span>. When the portal opens, click on <span className='font-bold text-dblue dark:text-dyellow'>Update Plan</span> and choose which plan you want to upgrade or downgrade to. 
              The changes will take effect immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">How Do I Update my Payment Information?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              All payments are managed through our website. 
              To update your payment information, log in to your account on our website and go to your <span className='font-bold text-dblue dark:text-dyellow'>Profile</span>, click on <span className='font-bold text-dblue dark:text-dyellow'>Manage Subscription</span>. 
              When the portal opens, you can edit your <span className='font-bold text-dblue dark:text-dyellow'>Payment Method</span>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">How Do I Cancel my Subscription</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              To cancel your subscription, you need to log in to your account on our website. 
              Navigate to your <span className='font-bold text-dblue dark:text-dyellow'>Profile</span> and click on <span className='font-bold text-dblue dark:text-dyellow'>Manage Subscription</span>. When the portal opens, click on <span className='font-bold text-dblue dark:text-dyellow'>Cancel Plan</span>. 
              Your subscription will be cancelled at the end of the current billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">What Types of Cuisines Do DineIntel Offer?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel offers a diverse range of cuisines from around the globe, ensuring there is something to tantalize every palate. 
              Whether you&apos;re craving Italian pasta, Japanese sushi, or Indian curry, DineIntel has you covered with its extensive selection of culinary delights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">How Can I Customize My Dining Experience on the DineIntel App?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              With DineIntel, you have the power to tailor your dining experience to your preferences like never before. 
              Use features like <span className='font-bold text-dblue dark:text-dyellow'><Link href="/features#modifydish">Modify Dish</Link></span> to customize your meal, explore personalized restaurant recommendations, and engage with our Epicurean Concierge for expert guidance on crafting the perfect culinary adventure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Can I Join a Community of Fellow Food Enthusiasts on DineIntel?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              Absolutely! DineIntel offers a vibrant culinary community through our <span className='font-bold text-dblue dark:text-dyellow'><Link href='/features#dinegroup'>Dine Group</Link></span> feature. 
              Connect with like-minded individuals, share dining experiences, discover new restaurants, and participate in engaging discussions about all things food.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">What Makes DineIntel Different From Other Dining Platforms?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel stands out with its unique blend of culinary expertise and cutting-edge technology. 
              Our platform goes beyond traditional dining apps by offering personalized recommendations, innovative dish customization tools, and a vibrant community of food enthusiasts. 
              We are committed to revolutionizing the dining experience, one personalized creation at a time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Can I Share My Dining Experiences with Friends on DineIntel?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              Absolutely! DineIntel encourages sharing and celebrating dining experiences with friends. 
              You can easily share your favorite restaurants, dishes, and culinary adventures with your friends and fellow food enthusiasts within the <span className='font-bold text-dblue dark:text-dyellow'><Link href='/features#dinegroup'>Dine Group</Link></span> community. 
              Join the conversation, exchange recommendations, and inspire each other to discover new culinary delights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Does DineIntel Offer Support for Special Dietary Needs?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              Yes, DineIntel is equipped to accommodate a wide range of dietary preferences. 
              Whether you're vegetarian, vegan, gluten-free, or have specific allergies, our platform provides personalized recommendations and customizable options to ensure a seamless dining experience. 
              Our <span className='font-bold text-dblue dark:text-dyellow'><Link href="/features#modifydish">Modify Dish</Link></span> feature allows you to adapt menu items to suit your dietary preferences, ensuring that every meal meets your unique needs and tastes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Is DineIntel Only for Food Enthusiasts?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              Not at all! While our community is centered around food, anyone can join DineIntel to explore new culinary experiences, connect with others, and discover delicious dishes. 
              Whether you are a seasoned foodie or just someone who enjoys good food, you are welcome to be a part of our community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-16">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">How Does DineIntel Help Me Discover New Restaurants?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              With DineIntel, exploring new dining experiences is effortless. 
              Our platform uses advanced algorithms to recommend restaurants tailored to your taste preferences and dietary requirements. 
              Simply input your preferences, and DineIntel will curate a list of restaurants that match your criteria, ensuring a delightful culinary adventure every time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-17">
            <AccordionTrigger className="px-2 lg:px-16 text-left text-sm md:text-base font-bold">Does DineIntel Offer Discounts or Promotions at Restaurants?</AccordionTrigger>
            <AccordionContent className="px-2 lg:px-16 pt-2 text-ddarkgrey dark:text-dgrey">
              Yes, DineIntel frequently collaborates with restaurants to offer exclusive discounts, promotions, and special offers to our users. 
              Keep an eye on the app for the latest deals available at your favorite dining spots.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='flex flex-col items-center py-4'>
          <p className='font-regular font-bold text-2xl py-8 text-dbluew dark:text-dgrey'>Got More Questions?</p>
          <Button text="Contact Us" url="/contact" />
        </div>
      </div>

    </div>
  )
}

export default Faqs