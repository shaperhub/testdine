'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="">

      {/* Hero */}
      <div data-aos="fade-in" className="w-full flex flex-col text-center items-center justify-center px-4 md:px-36 py-24 md:py-40 bg-dlightgreen dark:bg-dblue">
        <h1 className="text-4xl md:text-8xl text-dblue dark:text-dlightgreen font-heading">
          Experience the essence of innovation with <span className="text-dgreen">DineIntel</span>
        </h1>
        <p className="font-regular text-black dark:text-white md:px-16 pt-8">
          Where every meal is a journey of discovery. Connect with the heart of culinary creativity, share genuine moments, and savor the satisfaction of unparalleled dining experiences.
        </p>
      </div>

      {/* Transforming Tradition */}
      <div className="flex flex-col md:flex-row py-24 px-8 md:px-16 bg-white dark:bg-dlightblue w-full">
        <div data-aos="fade-right" className="font-regular text-black dark:text-dlightgreen pb-8 md:w-1/2 lg:mr-20">
          <h4 className="text-3xl font-heading mb-4">Transforming Tradition into Innovation</h4>
          <p className="font-regular md:text-sm lg:text-base">Welcome to DineIntel, where culinary tradition meets innovation. Our culinary hub seamlessly blends global flavors with cutting-edge technology, offering personalized dining experiences tailored to your tastes. Join our vibrant community at Dine Group to share culinary adventures and inspire each other. Let's redefine dining together. Explore the DineIntel experience—a seamless blend of pleasure, health, and discovery.</p>
        </div>
        <div className="md:w-1/2">
          <Image data-aos="fade-left" className="" src="https://images.unsplash.com/photo-1547478267-54ce493dd7d6" width={400} height={250} alt="Dining Photo" />
        </div>
      </div>

      {/* FAQS */}
      <div className="w-full flex flex-col bg-dlightgreen dark:bg-dblue text-black dark:text-white px-8 md:px-16 py-12">
        <h1 className="font-heading text-3xl mb-4 text-black dark:text-white">Frequently Asked Questions</h1>
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
              It uses features like For You to offer tailored restaurant recommendations and Modify Dish to customize meals according to individual preferences. 
              Users can also engage with the culinary community through the Dine Group, where they can share experiences and discover new dining spots.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
