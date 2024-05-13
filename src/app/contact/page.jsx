import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-sm font-regular">
      <div data-aos="fade-up" className="bg-white dark:bg-dblack p-10 rounded-2xl shadow-xl w-96">
        <h1 className="text-black dark:text-white text-2xl mb-2">Contact Us</h1>
        <h4 className="text-ddarkgrey dark:text-dgrey mb-5">Got Questions? Let&apos;s give you the answers you need.</h4>
        <input 
          type="text" 
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
        />
        <input 
          type="text" 
          placeholder="Email"
          className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
        />
        <input 
          type="text" 
          placeholder="Phone Number"
          className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey resize-none"
        ></textarea>
        <button 
          className="w-full p-3 bg-dgreen/10 dark:bg-dgreen/20 rounded-2xl text-dgreen text-[16px] font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
