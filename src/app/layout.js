import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Poppins, Merriweather } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import {auth} from '@/app/firebase/config'
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const merry = Merriweather({ subsets: ['latin'], weight: "900", variable: "--font-merriweather-regular"});
const poppins = Poppins({ subsets: ['latin'], weight: "400", variable: "--font-poppins-regular"});
const poppinsbig = Poppins({ subsets: ['latin'], weight: "700", variable:"--font-poppins-big"});

export const metadata = {
  title: "Home - DineIntel",
  description: "Welcome to DineIntel, where dining innovation meets personalization. Explore custom dining experiences that cater uniquely to your taste and lifestyle.",
};

export default function RootLayout({ children }) {
  const currentuser = auth.currentUser;
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="dineintel, dining, diner, food, meal, diet, cuisine, culinary creativity, dining experience, dining revolution, modify dish, epicurean concierge, gastronomy, dietary preference, ingredient analysis, nutritional insight, meal planning, culinary tracker, tailored recommendations, cuisine crafter, dining diary, digital technology, artificial intelligence, AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta charSet='utf-8' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.variable} ${poppinsbig.variable} ${merry.variable}`}>
        <ThemeProvider>
            <div className=" bg-repeat bg-center bg-lightbg dark:bg-darkbg">
              <Navbar initialUser={currentuser?.toJSON()}/>
              {children}
              <Footer />
              <ScrollToTop />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
