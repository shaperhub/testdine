import Image from "next/image"
import Vision from "../../../public/cheers.jpg"
import Mission from "../../../public/mission.jpg"
import Topimage from "../../../public/aboutus.jpg"
import Dimage from "../../../public/foodbasket.jpg"
import Rimage from "../../../public/response.jpg"
import Inimage from "../../../public/innotech.jpg"
import Vimage from "../../../public/vibrant.jpg"
import Eimage from "../../../public/excellence.jpg"

const About = () => {
  return (
    <div className="text-black dark:text-white font-regular">

      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 lgmd:px-36 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-lg md:text-2xl lgmd:text-4xl text-center text-white mb-2">Transform your Dining Experience</h1>
          <h1 className="font-heading text-lg md:text-2xl lgmd:text-4xl text-center text-white">Join us at DineIntel for a journey of culinary discovery</h1>
        </div>
      </div>

      {/* Our Passion */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-16 px-8 md:px-24 bg-white/80 dark:bg-black/90">
        <div className="lgmd:pl-36 lgxl:pl-64 md:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 font-heading text-center md:text-left text-dblue dark:text-dlightblue lgmd:max-w-xl">
            At DineIntel, we revolutionize dining. Founded by culinary enthusiasts and tech innovators, we merge gastronomy with cutting-edge digital innovation.
          </h2>
        </div>
        <div className="md:w-1/2 mb-4">
          <Image className="rounded-[20px]" src={Topimage} width={400} height={220} alt="About Us Image" />
        </div>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 py-16 px-8 md:px-24 bg-dlightestgreen dark:bg-dblack/90">
        <div className="md:w-1/2 lgxl:pr-72">
          <h2 className="text-4xl mb-4 font-heading text-center md:text-left text-dgreenw dark:text-dgreen">Our Vision</h2>
          <p className="mb-4 text-dbluew dark:text-dgrey">
            DineIntel envisions a world where every dining decision is informed, every palate is satisfied, and every meal is an expression of personal taste and health consciousness. 
            We aim to be the global leader in personalized dining intelligence, fostering a community where food becomes a bridge between cultures, health, and joyous experiences.
          </p>
        </div>
        <div className="flex lg:justify-center md:w-1/2 mb-4">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Vision} width={400} height={220} alt="Our Vision Image" />
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-16 px-8 md:px-24 bg-white/80 dark:bg-black/90">
        <div className="lgmd:pl-36 lgxl:pl-64 md:w-1/2">
          <h2 className="text-4xl mb-4 font-heading text-center md:text-left text-dblue dark:text-dlightblue">Our Mission</h2>
          <p className="mb-4 text-dbluew dark:text-dgrey lgmd:max-w-xl">
            Our mission is to empower diners with tailored recommendations that align with their unique preferences and nutritional goals, 
            turning each meal into an adventure and every adventure into a celebration of taste.
          </p>
        </div>
        <div className="md:w-1/2 mb-4">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Mission} width={400} height={220} alt="Our Mission Image" />
        </div>
      </div>

      {/* Our Core Values */}
      <div className="py-16 px-8 md:px-32 lgmd:px-64 bg-dlightestgreen dark:bg-dblack/90">
        <div className="mb-6 px-8 flex flex-col justify-center items-center">
          <h2 className="font-heading text-4xl text-dblue dark:text-dlightblue mb-8 text-center">Our Core <span className="text-dgreenw dark:text-dgreen">Values</span></h2>
          <p className="text-dbluew dark:text-dgrey lgxl:max-w-[1280px] lg:text-2xl">
            At DineIntel, our values are the heartbeat of our mission and identity. 
            Expressed through the acronym <span className="font-bold">DRIVE</span>, they symbolize our dedication to diversity, inclusivity, and crafting unforgettable dining experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lgxl:grid-cols-3 gap-8 place-content-center">
          <div className="relative max-w-[400px] mx-auto mt-8">
            <Image className="w-[400px] object-cover h-[350px] rounded-md" src={Dimage} width={400} height={350} alt="Diversity in Dining Image" />
            <div className="absolute inset-0 bg-dblack opacity-70 rounded-md"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <h2 className="text-white text-2xl font-bold text-center mb-2">Diversity in Dining</h2>
                <p className="text-center text-sm text-white">Celebrating the rich tapestry of global cuisines. Personalized offerings for everyone to discover and savor.</p>
            </div>
          </div>
          <div className="relative max-w-[400px] mx-auto mt-8">
            <Image className="w-[400px] object-cover h-[350px] rounded-md" src={Rimage} width={400} height={350} alt="Responsiveness to Needs Image" />
            <div className="absolute inset-0 bg-dblack opacity-70 rounded-md"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <h2 className="text-white text-2xl font-bold text-center mb-2">Responsiveness to Needs</h2>
                <p className="text-center text-sm text-white">Your culinary preferences shape our service. We listen carefully and adapt swiftly to your dietary needs.</p>
            </div>
          </div>
          <div className="relative max-w-[400px] mx-auto mt-8">
            <Image className="w-[400px] object-cover h-[350px] rounded-md" src={Inimage} width={400} height={350} alt="Innovation in Technology Image" />
            <div className="absolute inset-0 bg-dblack opacity-70 rounded-md"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <h2 className="text-white text-2xl font-bold text-center mb-2">Innovation in Technology</h2>
                <p className="text-center text-sm text-white">Harnessing state-of-the-art technology for a seamless, contemporary dining experience.</p>
            </div>
          </div>
          <div className="relative max-w-[400px] mx-auto mt-8">
            <Image className="w-[400px] object-cover h-[350px] rounded-md" src={Vimage} width={400} height={350} alt="Vibrant Community Engagement Image" />
            <div className="absolute inset-0 bg-dblack opacity-70 rounded-md"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <h2 className="text-white text-2xl font-bold text-center mb-2">Vibrant Community Engagement</h2>
                <p className="text-center text-sm text-white">Nurturing a lively community where food enthusiasts&apos; bond and celebrate the joy of food.</p>
            </div>
          </div>
          <div className="relative max-w-[400px] mx-auto mt-8">
            <Image className="w-[400px] object-cover h-[350px] rounded-md" src={Eimage} width={400} height={350} alt="Excellence in Experience Image" />
            <div className="absolute inset-0 bg-dblack opacity-70 rounded-md"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <h2 className="text-white text-2xl font-bold text-center mb-2">Excellence in Experience</h2>
                <p className="text-center text-sm text-white">Crafting every feature to the highest standard for an unparalleled user experience.</p>
            </div>
          </div>
        </div>
        <div className="pt-12 md:pt-24 pb-8 px-8 md:px-12">
          <p className="text-dbluew dark:text-dgrey font-heading text-center text-lg md:text-2xl lg:text-3xl">Join us to redefine dining, one delightful moment at a time.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
