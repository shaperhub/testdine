import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

const Button = ({ text, url }) => {
  return (
    <Link href={url} aria-labelledby={text}>
      <button className='bg-transparent p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white inline-flex items-center font-bold'>{text}<span className="pl-2"><BsArrowRight /></span></button>
    </Link>
  );
};

export default Button
