import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Third Attempt Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="">
      <h1 className="">Let&apos;s Keep in Touch</h1>
      <div className="">
        <div className="">
        </div>
        <form className="">
          <input type="text" placeholder="name" className="" />
          <input type="text" placeholder="email" className="" />
          <textarea
            className=""
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
