import Image from "next/image";
import Contactimage from "../../../public/LoginGraphic.png"

const Contact = () => {
  return (
    <div className="bg-white/50 dark:bg-black/80 min-h-screen flex flex-col md:flex-row items-center justify-center text-sm font-regular pt-8 shadow-xl">
      <div className="bg-white dark:bg-black w-96 md:w-1/2 lg:w-1/3 px-12 py-12">
        <h2 className="font-heading text-black dark:text-white text-3xl lg:text-4xl pb-8">Contact Us</h2>
        <h4 className="font-heading text-ddarkgrey dark:text-dgrey text-xl lg:text-2xl pb-16">Got Questions? Let&apos;s give you the answers you need.</h4>
        <Image className="pb-8" src={Contactimage} width="375" height="180" alt="Contact Page Image" />
      </div>
      <div data-aos="fade-up" className="bg-dlightestgreen dark:bg-dblack p-10 w-96">
        <form className="">
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <input 
            type="email" 
            placeholder="Email"
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <input 
            type="tel" 
            placeholder="Phone Number"
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey resize-none"
          ></textarea>
          <button 
            type="submit"
            className="w-full px-8 py-4 bg-dbluew dark:bg-dgreen/20 hover:bg-dbluew/80 dark:hover:bg-dgreen/30 rounded-full font-bold text-white dark:text-dgreen"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
