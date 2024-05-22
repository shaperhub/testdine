import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <div className="text-xs md:text-sm font-regular">
      <div className="footer bg-dblue px-8 2xl:px-16 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <h2 className="mb-4 text-xl font-bold text-white">About Us</h2>
              <p className="mb-4 text-dgrey">
                At DineIntel, our passion lies in revolutionizing the dining experience. 
                Founded by a team of culinary enthusiasts and tech innovators, our mission is to seamlessly merge the art of gastronomy with cutting-edge digital innovation.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-6 lg:mb-16">
              <h2 className="mb-4 text-xl font-bold text-white">
                Quick Links
              </h2>
              <ul>
                <li>
                  <a
                    href="/blog"
                    className="text-dgrey hover:text-dgreen mb-4 inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-dgrey hover:text-dgreen mb-4 inline-block"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="text-dgrey hover:text-dgreen mb-4 inline-block"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-6 lg:mb-16">
              <h2 className="mb-4 text-xl font-bold text-white">
                Terms
              </h2>
              <ul>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-dgrey hover:text-dgreen mb-4 inline-block"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.termsfeed.com/live/e70a25c5-a4d9-4666-9106-06971a074ffc"
                    className="text-dgrey hover:text-dgreen mb-4 inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-dgrey hover:text-dgreen mb-4 inline-block"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-6 lg:mb-16">
              <h2 className="mb-4 text-xl font-bold text-white">
                Follow Us
              </h2>
              {/* Social Media Icons */}
              <div className="flex gap-3 text-xl mb-6">
                <Link className="text-dgrey hover:text-dgreen" href="https://www.facebook.com/profile.php?id=61559683601626"><FaFacebookF/></Link>
                <Link className="text-dgrey hover:text-dgreen" href="https://www.instagram.com/dineintel/"><FaInstagram/></Link>
                <Link className="text-dgrey hover:text-dgreen" href="https://x.com/dineintel"><FaXTwitter/></Link>
                <Link className="text-dgrey hover:text-dgreen" href="https://www.youtube.com/@dineintel"><FaYoutube/></Link>
                <Link className="text-dgrey hover:text-dgreen" href="https://www.linkedin.com/in/dine-intel-51216430b/"><FaLinkedin/></Link>
              </div>
              <div className="text-white">
                <div className="mb-4">
                  <p className="mb-2">To Contact Us:</p>
                  <Link className="text-dgrey hover:text-dgreen" href="mailto:info@dineintel.io">info@dineintel.io</Link>
                </div>
                <div className="mb-4">
                  <p className="mb-2">For Payment Related Issues:</p>
                  <Link className="text-dgrey hover:text-dgreen" href="mailto:support@dineintel.io">support@dineintel.io</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-white">
            &copy; {currentyear}. DineIntel. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
