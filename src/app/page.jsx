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
    <div className="flex flex-col pt-20">
      <div className="">
        <h1 className="">
          Better design for your digital products.
        </h1>
        <p className="">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/contact" text="Contact Us"/>
      </div>
      <div className="">
        <Image data-aos="fade-right" src={Hero} alt="" className="" />
      </div>
      <div className="">
        <Image src={Hero} alt="" className="" />
      </div>
    </div>
  );
}
