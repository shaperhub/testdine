import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import Link from 'next/link'

const Faqs = () => {
  return (
    <div className='bg-dlightestgreen dark:bg-ddarkgrey text-black dark:text-white'>
      <div data-aos="fade-up" className='w-full pt-28 pb-16 px-8 md:px-24'>
        <h1 className="font-heading text-4xl mb-8">Frequently Asked Questions</h1>
        <p className='font-regular text-2xl mb-8'>These are some of the frequently asked questions and answers about DineIntel.</p>
        <Accordion type="single" collapsible className="font-regular">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is DineIntel?</AccordionTrigger>
            <AccordionContent>
              DineIntel is a personalized dining platform blending culinary art with digital innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is DineIntel a Food Delivery App?</AccordionTrigger>
            <AccordionContent>
              No, DineIntel is not a food delivery app. 
              It&apos;s a personalized dining platform that offers recommendations, culinary exploration, and community engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How Does DineIntel Work?</AccordionTrigger>
            <AccordionContent>
              DineIntel works by leveraging advanced technology to provide personalized dining experiences. 
              It uses features like <span className='font-bold'>For You</span> to offer tailored restaurant recommendations and <span className='font-bold'>Modify Dish</span> to customize meals according to individual preferences. 
              Users can also engage with the culinary community through the <span className='font-bold'>Dine Group</span>, where they can share experiences and discover new dining spots.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What Types of Cuisines Do DineIntel Offer?</AccordionTrigger>
            <AccordionContent>
              DineIntel offers a diverse range of cuisines from around the globe, ensuring there is something to tantalize every palate. 
              Whether you&apos;re craving Italian pasta, Japanese sushi, or Indian curry, DineIntel has you covered with its extensive selection of culinary delights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How Can I Customize My Dining Experience on the DineIntel App?</AccordionTrigger>
            <AccordionContent>
              With DineIntel, you have the power to tailor your dining experience to your preferences like never before. 
              Use features like <span className='font-bold'>Modify Dish</span> to customize your meal, explore personalized restaurant recommendations, and engage with our Epicurean Concierge for expert guidance on crafting the perfect culinary adventure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Can I Join a Community of Fellow Food Enthusiasts on DineIntel?</AccordionTrigger>
            <AccordionContent>
              Absolutely! DineIntel offers a vibrant culinary community through our <span className='font-bold'>Dine Group</span> feature. 
              Connect with like-minded individuals, share dining experiences, discover new restaurants, and participate in engaging discussions about all things food.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>What Makes DineIntel Different From Other Dining Platforms?</AccordionTrigger>
            <AccordionContent>
              DineIntel stands out with its unique blend of culinary expertise and cutting-edge technology. 
              Our platform goes beyond traditional dining apps by offering personalized recommendations, innovative dish customization tools, and a vibrant community of food enthusiasts. 
              We are committed to revolutionizing the dining experience, one personalized creation at a time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Can I Share My Dining Experiences with Friends on DineIntel?</AccordionTrigger>
            <AccordionContent>
              Absolutely! DineIntel encourages sharing and celebrating dining experiences with friends. 
              You can easily share your favorite restaurants, dishes, and culinary adventures with your friends and fellow food enthusiasts within the <span className='font-bold'>Dine Group</span> community. 
              Join the conversation, exchange recommendations, and inspire each other to discover new culinary delights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Does DineIntel Offer Support for Special Dietary Needs?</AccordionTrigger>
            <AccordionContent>
              Yes, DineIntel is equipped to accommodate a wide range of dietary preferences. 
              Whether you're vegetarian, vegan, gluten-free, or have specific allergies, our platform provides personalized recommendations and customizable options to ensure a seamless dining experience. 
              Our <span className='font-bold'>Modify Dish</span> feature allows you to adapt menu items to suit your dietary preferences, ensuring that every meal meets your unique needs and tastes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Is DineIntel Only for Food Enthusiasts?</AccordionTrigger>
            <AccordionContent>
              Not at all! While our community is centered around food, anyone can join DineIntel to explore new culinary experiences, connect with others, and discover delicious dishes. 
              Whether you are a seasoned foodie or just someone who enjoys good food, you are welcome to be a part of our community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>How Does DineIntel Help Me Discover New Restaurants?</AccordionTrigger>
            <AccordionContent>
              With DineIntel, exploring new dining experiences is effortless. 
              Our platform uses advanced algorithms to recommend restaurants tailored to your taste preferences and dietary requirements. 
              Simply input your preferences, and DineIntel will curate a list of restaurants that match your criteria, ensuring a delightful culinary adventure every time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Does DineIntel Offer Discounts or Promotions at Restaurants?</AccordionTrigger>
            <AccordionContent>
              Yes, DineIntel frequently collaborates with restaurants to offer exclusive discounts, promotions, and special offers to our users. 
              Keep an eye on the app for the latest deals available at your favorite dining spots.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p className='font-regular font-bold text-2xl py-8'>Got More Questions?</p>
        <button className='p-3 bg-dblue rounded-lg text-white hover:bg-dlightblue'>
          <Link href='/contact'>Contact Us</Link>
        </button>
      </div>
    </div>
  )
}

export default Faqs