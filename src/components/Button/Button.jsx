import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='px-8 py-4 bg-dbluew dark:bg-dlightblue hover:bg-dbluew/80 dark:bg-dlightblue/80 rounded-full font-bold text-white inline-flex items-center font-regular'>{text}<span className="pl-2"><BsArrowRight /></span></button>
    </Link>
  );
};

export default Button;
