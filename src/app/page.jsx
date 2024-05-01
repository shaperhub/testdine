'use client'
import { useEffect } from "react";
import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="flex flex-col pt-20 bg-dlightgreen dark:bg-dblue px-4 md:px-16 font-regular">
      <div data-aos="fade-in" className="flex flex-col text-center items-center justify-center md:px-20 pt-8 md:pt-16">
        <h1 className="text-4xl md:text-8xl text-dblue dark:text-dlightgreen font-heading">
          Experience the essence of innovation with <span className="text-dgreen">DineIntel</span>
        </h1>
        <p className="text-black dark:text-white md:px-16 pt-8">
          Where every meal is a journey of discovery. Connect with the heart of culinary creativity, share genuine moments, and savor the satisfaction of unparalleled dining experiences.
        </p>
      </div>
      {/* <div className="flex flex-row pt-24">
        <div data-aos="fade-right" className="font-regular text-black dark:text-dlightgreen w-[1/2]">
          <h4 className="text-2xl font-heading">Transforming Tradition into Innovation</h4>
          <p>Welcome to DineIntel, where culinary tradition meets innovation. Our culinary hub seamlessly blends global flavors with cutting-edge technology, offering personalized dining experiences tailored to your tastes. Join our vibrant community at Dine Group to share culinary adventures and inspire each other. Let's redefine dining together. Explore the DineIntel experience—a seamless blend of pleasure, health, and discovery.</p>
        </div>
        <Image data-aos="fade-left" src="https://images.unsplash.com/photo-1547478267-54ce493dd7d6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={250} height={100} alt="Dining Photo" className="w-[1/2]" />
      </div> */}
    </div>
  );
}
