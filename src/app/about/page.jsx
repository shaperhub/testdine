import Image from "next/image";
import Break from "../../../public/breakfast.jpg"
import Vision from "../../../public/cheers.jpg"
import Mission from "../../../public/oldpeople.jpg"

const About = () => {
  return (
    <div className="text-black dark:text-white">

      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">Transform your Dining Experience with our Epicurean Concierge</h1>
        </div>
      </div>

      {/* Our Passion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center py-16 px-8 md:px-24 bg-white/80 dark:bg-black/90">
        <div className="">
          <p className="mb-4">
            At DineIntel, our passion lies in revolutionizing the dining experience. 
            Founded by a team of culinary enthusiasts and tech innovators, our mission is to seamlessly merge the art of gastronomy with cutting-edge digital innovation.
          </p>
          <p className="mb-4">
            Our platform serves as a gateway to extraordinary culinary adventures, connecting diners with exceptional experiences. 
            From personalized recommendations tailored to your dietary preferences and allergies to ground-breaking features like 
            <span className="font-bold text-dgreenw dark:text-dgreen"><a href="/features#modifydish">Modify Dish</a></span> and the <span className="font-bold text-dgreenw dark:text-dgreen"><a href="/features#epicurean">Epicurean Concierge</a></span>, we are committed to empowering you with the ultimate freedom of choice and discovery.
          </p>
          <p className="italic mb-4">
            Join us as we embark on this journey to redefine the essence of dining, one delightful moment at a time.
          </p>
        </div>
        <div className="">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Break} width={400} height={220} alt="Dining Image" />
        </div>
      </div>

      {/* Our Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center py-16 px-8 md:px-24 bg-dlightgreen/80 dark:bg-dblack/90">
        <div className="">
          <h2 className="text-4xl mb-4 font-bold text-center md:text-left">Our Vision</h2>
          <p className="mb-4 text-ddarkgrey dark:text-dgrey">
            DineIntel envisions a world where every dining decision is informed, every palate is satisfied, and every meal is an expression of personal taste and health consciousness. 
            We aim to be the global leader in personalized dining intelligence, fostering a community where food becomes a bridge between cultures, health, and joyous experiences.
          </p>
        </div>
        <div className="mb-4">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Vision} width={400} height={220} alt="Dining Image 2" />
        </div>
      </div>

      {/* Our Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center py-16 px-8 md:px-24 bg-white/80 dark:bg-black/90">
        <div className="">
          <h2 className="text-4xl mb-4 font-bold text-center md:text-left">Our Mission</h2>
          <p className="mb-4 text-ddarkgrey dark:text-dgrey">
            Our mission is to empower diners with tailored recommendations that align with their unique preferences and nutritional goals, 
            turning each meal into an adventure and every adventure into a celebration of taste.
          </p>
        </div>
        <div className="mb-4">
          <Image className="rounded-tr-[50px] rounded-bl-[50px]" src={Mission} width={400} height={220} alt="Dining Image 3" />
        </div>
      </div>

      {/* Our Core Values */}
      <div className="py-16 px-8 md:px-24 bg-dlightgreen/80 dark:bg-dblack/90">
        <div className="mb-6">
          <h2 className="font-heading text-4xl mb-8 text-center">Our Core Values</h2>
          <p className="mb-8 text-ddarkgrey dark:text-dgrey">
            At DineIntel, our values are the heartbeat of our mission and identity. 
            Expressed through the acronym <span className="font-bold">DRIVE</span>, they symbolize our dedication to diversity, inclusivity, and crafting unforgettable dining experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <div className="p-4 rounded-[24px] bg-white dark:bg-black mb-4">
            <p className="font-bold mb-4">Diversity in Dining</p>
            <p className="mb-4 text-ddarkgrey dark:text-dgrey text-justify">
              We celebrate the rich tapestry of global cuisines. 
              At DineIntel, our personalized offerings are open for everyone to discover and savour the vast universe of flavours and dishes the world has to offer. 
              DineIntel is dedicated to offering an exceptional, personalized dining experience that honours every culture's culinary tradition.
            </p>
          </div>
          <div className="p-4 rounded-[24px] bg-white dark:bg-black mb-4">
            <p className="font-bold mb-4">Responsiveness to Needs</p>
            <p className="mb-4 text-ddarkgrey dark:text-dgrey text-justify">
              Your culinary preferences shape our service. At DineIntel, we are attuned to the unique tastes and health considerations of our diverse user base. 
              We listen carefully and adapt swiftly, ensuring that our recommendations resonate with your individual dietary needs.
            </p>
          </div>
          <div className="p-4 rounded-[24px] bg-white dark:bg-black mb-4">
            <p className="font-bold mb-4">Innovation in Technology</p>
            <p className="mb-4 text-ddarkgrey dark:text-dgrey text-justify">
              Innovation is the lifeblood of DineIntel, propelling us to harness state-of-the-art technology to enhance the journey of dining discovery and personalization, delivering a seamless, contemporary experience that sets new industry standards. 
              We are redefining culinary experiences with cutting-edge technology solutions.
            </p>
          </div>
          <div className="p-4 rounded-[24px] bg-white dark:bg-black mb-4">
            <p className="font-bold mb-4">Vibrant Community Engagement</p>
            <p className="mb-4 text-ddarkgrey dark:text-dgrey text-justify">
              DineIntel is dedicated to nurturing a lively and engaging community where food enthusiasts can bond over shared passions, exchange culinary insights, and celebrate the joy of food together. 
              Our focus is to create a global table for food lovers to express their dietary experiences and preferences.
            </p>
          </div>
          <div className="p-4 rounded-[24px] bg-white dark:bg-black mb-4">
            <p className="font-bold mb-4">Excellence in Experience</p>
            <p className="mb-4 text-ddarkgrey dark:text-dgrey text-justify">
              Excellence is the cornerstone upon which DineIntel is built. Every feature, from tailored recommendations to our interactive Modify Dish feature, 
              is crafted to the highest standard, ensuring an unparalleled user experience. With DineIntel, every meal is an experience.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
