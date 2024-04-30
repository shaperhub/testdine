import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="">{text}</button>
    </Link>
  );
};

export default Button;
