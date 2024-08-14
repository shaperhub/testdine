import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Poppins, Merriweather } from "next/font/google"
import Footer from "@/components/footer/Footer"
import { ThemeProvider } from "@/context/ThemeContext"
import { auth } from '@/app/firebase/config'
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop"
import Script from "next/script"

const merry = Merriweather({ subsets: ['latin'], weight: "900", variable: "--font-merriweather-regular"})
const poppins = Poppins({ subsets: ['latin'], weight: "400", variable: "--font-poppins-regular"})
const poppinsbig = Poppins({ subsets: ['latin'], weight: "700", variable:"--font-poppins-big"})

export const metadata = {
  title: "DineIntel",
  description: "Welcome to DineIntel, where dining innovation meets personalization. Explore custom dining experiences that cater uniquely to your taste and lifestyle.",
}

export default function RootLayout({ children }) {
  const currentuser = auth.currentUser
  return (
    <html lang="en">
      <head>
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        <meta name="keywords" content="dineintel, dining, diner, food, meal, diet, cuisine, culinary creativity, dining experience, dining revolution, modify dish, epicurean concierge, epicurean elite, gastronomy, dietary preference, ingredient analysis, nutritional insight, meal planning, epicurean, culinary tracker, tailored recommendations, cuisine crafter, dining diary, digital technology, artificial intelligence, AI, meal journey of discovery, share genuine moments, unparalleled dining experiences, discover meal potential, customization, culinary art, connect with enthusiasts, innovative dining, memorable dining events, culinary community, tradition meets innovation, global flavors, cutting-edge technology, personalized dining experiences, vibrant community, Dine Group, culinary adventures, inspire each other, redefine dining, pleasure, health, discovery, igniting joy, cutting-edge delivery, meal Advisor, event planner, menu translation, restaurants, personalized restaurant, personalized restaurant recommendations, real-time updates, trending eateries, customizable dining experience, state of the art, SOTA, game-changer, meal planning event, AI dining app, real-time meal analysis, events, cuisine crafter, taste starter, calories, ingredient swap, nutritional analysis, top dining app, most innovative dining app, best dining, restaurants finder, flavor analyzer, join group, voting events, personalized dining, phytonutrient, potassium, amino acid, upload menu, menu, healthy eating, food community, meal recommendations, dining trends, restaurant reviews, food experiences, community dining, food discovery, food tech, dining technology, smart dining, gourmet dining, chef recommendations, local eateries, dining tips, food journey, healthy recipes, diet plans, nutrition tracking, culinary innovation, foodie culture, food and drink, sustainable dining, organic food, plant-based dining, meal prep, food customization, interactive dining, food pairing, global food, international cuisine, exotic flavors, ethnic food, world cuisine, culinary heritage, street food, fusion cuisine, traditional dishes, regional specialties, food diversity, travel and food, culinary travel, global dining experiences, local delicacies, food education, local ingredients, food innovation, experimental cuisine, dining enthusiasts, restaurant suggestions, food hacks, healthy choices, dining personalization, dining guides, tasting menus, epicurean delights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta charSet='utf-8' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4BVCQTESPN"></Script>
        <Script id="google-analytics">
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4BVCQTESPN');
            
            `
          }
        </Script> */}
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
  )
}
