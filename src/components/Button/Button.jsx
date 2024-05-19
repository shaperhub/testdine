import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='px-8 py-4 bg-dbluew dark:bg-dgreen/20 hover:bg-dbluew/80 dark:hover:bg-dgreen/30 rounded-full font-bold text-white dark:text-dgreen inline-flex items-center'>{text}<span className="pl-2"><BsArrowRight /></span></button>
    </Link>
  );
};

export default Button;
