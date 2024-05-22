'use client'
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import UploadIcon from "../../public/Upload.png"
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import Button from "@/components/Button/Button";

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
      <div className="bg-dlightgreen/50 dark:bg-black/70 w-full flex flex-col lg:flex-row gap-8 px-8 md:px-12 py-32 md:py-40">
        <div className="lg:w-1/2 xl:pl-32 flex flex-col">
          <h1 className="text-4xl xl:text-6xl text-dbluew dark:text-dlightgreen font-heading uppercase">
            Experience the essence of dining innovation with <span className="text-dgreenw dark:text-dgreen">Dine</span><span className="font-dine text-dgreenw dark:text-dgreen">I</span><span className="text-dgreenw dark:text-dgreen">ntel</span>
          </h1>
          <p className="font-regular xl:text-xl text-black dark:text-dgrey pb-6 pt-2 xl:pt-8">
            Welcome to DineIntel, where every meal is a journey of discovery. Connect with the heart of culinary creativity, share genuine moments, and savor the satisfaction of unparalleled dining experiences.
          </p>
          <Button text="Explore Features" url="/features"/>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" width={400} height={200} alt="Hero Image" src="https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg" />
        </div>
      </div>

      {/* Transforming Tradition */}
      <div className="flex flex-col lg:flex-row-reverse text-black dark:text-dgrey gap-8 py-16 px-8 md:px-24 bg-dlightgreen dark:bg-dlightblack/90">
        <div className="lg:w-1/2 lgxl:pr-64">
          <h4 className="text-3xl font-heading mb-4 text-dblue dark:text-dgrey">Transforming <span className="text-dgreenw dark:text-white">Tradition</span> into <span className="text-dgreenw dark:text-white">Innovation</span></h4>
          <p className="font-regular">
            At DineIntel, culinary tradition meets innovation. 
            Our culinary hub seamlessly blends global flavors with cutting-edge technology, offering personalized dining experiences tailored to your tastes.
          </p>
          <br></br>
          <p className="font-regular">
            Join our vibrant community at <span className="font-bold">Dine Group</span> to share culinary adventures and inspire each other. Let's redefine dining together. 
            Explore the DineIntel experience; a seamless blend of pleasure, health, and discovery.
          </p>
          <br></br>
          <Button text="More About DineIntel" url="/about" />
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src="https://images.unsplash.com/photo-1547478267-54ce493dd7d6" width={550} height={320} alt="Dining Photo" priority={true} />
        </div>
      </div>

      {/* Igniting Joy */}
      <div className="px-8 md:px-24 py-12 md:py-24 bg-dlightgreen/80 dark:bg-dblack/90">
        <h2 className="text-dbluew dark:text-dgrey mb-16 font-heading text-3xl text-center">Igniting Joy with Our <span className="text-dgreenw dark:text-white">Cutting-Edge Features</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="rounded-[24px] px-8 py-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={UploadIcon} width={50} height={50} alt="Cloud Icon" />
            </div>
            <h4 className="font-heading text-dbluew dark:text-white mb-6 text-center">For You</h4>
            <p className="text-sm text-ddarkgrey dark:text-dgrey">
              Our For You feature offers personalized restaurant recommendations, real-time updates on local trending eateries, and customizable search options tailored to your culinary preferences.
            </p>
          </div>
          <div className="rounded-[24px] px-8 py-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={UploadIcon} width={50} height={50} alt="Cloud Icon" />
            </div>
            <h4 className="font-heading text-dbluew dark:text-white mb-6 text-center">Modify Dish</h4>
            <p className="text-sm text-ddarkgrey dark:text-dgrey">
              Modify Dish — a game-changer in personalized dining. Say goodbye to one-size-fits-all meals and hello to a world of culinary customization at your fingertips. 
              Explore personalized ingredient analysis, seamless swaps, and expert flavor pairings tailored to your taste buds. 
              With real-time nutritional insights and the guidance of our Epicurean Concierge, every dish is a masterpiece, crafted just for you. Get ready to elevate your dining experience like never before.
            </p>
          </div>
          <div className="rounded-[24px] px-8 py-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={UploadIcon} width={50} height={50} alt="Cloud Icon" />
            </div>
            <h4 className="font-heading text-dbluew dark:text-white mb-6 text-center">Dine Group</h4>
            <p className="text-sm text-ddarkgrey dark:text-dgrey">
              Dine Group is your culinary community hub within the DineIntel universe, where members share dining narratives, insights, and favorite dining experiences. 
              Engage in lively forums, showcase your dining adventures, and discover hidden gems. 
              With features like Meal Planning events, members can create and vote on events seamlessly, ensuring memorable dining experiences for all.
            </p>
          </div>
          <div className="rounded-[24px] px-8 py-8 bg-white dark:bg-black shadow-lg shadow-dgreenw/50">
            <div className="flex justify-center mb-4">
              <Image className="" src={UploadIcon} width={50} height={50} alt="Cloud Icon" />
            </div>
            <h4 className="font-heading text-dbluew dark:text-white mb-6 text-center">Epicurean Concierge</h4>
            <p className="text-sm text-ddarkgrey dark:text-dgrey">
              Step into a world of tailored culinary assistance with our Epicurean Concierge, the epitome of personalized service at DineIntel. 
              This feature is designed to offer customized meal experiences and deep insights into the culinary arts. 
              Whether you're creating unforgettable dining moments, exploring exotic ingredients, or refining your gastronomic skills, the Epicurean Concierge is your trusted guide on this gourmet journey.
            </p>
          </div>
        </div>
      </div>

      {/* Download App */}
      <div className="py-8 md:py-16 lg:py-24 px-8 md:px-16 lg:px-48 bg-dlightgreen/80 dark:bg-black/80">
        <DownloadApp />
      </div>

      {/* FAQS */}
      <div className="w-full bg-white/60 dark:bg-dlightblack text-black dark:text-white px-8 md:px-24 py-12">
        <h1 className="font-heading text-3xl mb-4 text-black dark:text-white">Frequently Asked Questions</h1>
        <Accordion data-aos="fade-up" type="single" collapsible className="font-regular">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-2 text-left text-sm md:text-base font-bold focus:bg-dgreenw focus:text-white dark:focus:bg-dblack">What is DineIntel?</AccordionTrigger>
            <AccordionContent className="px-2 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel is a personalized dining platform blending culinary art with digital innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-2 text-left text-sm md:text-base font-bold focus:bg-dgreenw focus:text-white dark:focus:bg-dblack">Is DineIntel a Food Delivery App?</AccordionTrigger>
            <AccordionContent className="px-2 pt-2 text-ddarkgrey dark:text-dgrey">
              No, DineIntel is not a food delivery app. 
              It&apos;s a personalized dining platform that offers recommendations, culinary exploration, and community engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-2 text-left text-sm md:text-base font-bold focus:bg-dgreenw focus:text-white dark:focus:bg-dblack">How Does DineIntel Work?</AccordionTrigger>
            <AccordionContent className="px-2 pt-2 text-ddarkgrey dark:text-dgrey">
              DineIntel works by leveraging advanced technology to provide personalized dining experiences. 
              It uses features like For You to offer tailored restaurant recommendations and Modify Dish to customize meals according to individual preferences. 
              Users can also engage with the culinary community through the Dine Group, where they can share experiences and discover new dining spots.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br></br>
        <Button text="See More" url="/faqs" />
      </div>
    </div>
  );
}
