import React from "react";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-white dark:bg-dblack text-sm font-regular">
      <div className="bg-dlightgreen dark:bg-dlightblack p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-black dark:text-white text-2xl mb-2">Contact Us</h1>
        <h4 className="text-ddarkgrey dark:text-dgrey mb-5">For questions, comments, and inquiries</h4>
        <input 
          type="text" 
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-dlightestgreen dark:bg-gray-700 rounded outline-none text-[16px] text-black dark:text-white placeholder-dgrey"
        />
        <input 
          type="text" 
          placeholder="Subject"
          className="w-full p-3 mb-4 bg-dlightestgreen dark:bg-gray-700 rounded outline-none text-[16px] text-black dark:text-white placeholder-dgrey"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full p-3 mb-4 bg-dlightestgreen dark:bg-gray-700 rounded outline-none text-[16px] text-black dark:text-white placeholder-dgrey"
        ></textarea>
        <button 
          className="w-full p-3 bg-dblue rounded text-white hover:bg-dlightblue"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
