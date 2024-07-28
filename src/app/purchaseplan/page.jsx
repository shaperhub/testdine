'use client'
import { useEffect, useState } from 'react'
import { auth, db } from '@/app/firebase/config'
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from 'next/navigation'
import { getCheckoutUrl } from "../user-profile/payment"
import { Loader2 } from "lucide-react"
import { Button } from '@/components/ui/button'

export default function PurchasePlan() {
  const [user, setUser] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [btnloading1, setBtnloading1] = useState(false)
  const [btnloading2, setBtnloading2] = useState(false)
  const [btnloading3, setBtnloading3] = useState(false)
  const [btnloading4, setBtnloading4] = useState(false)
  const [btnloading5, setBtnloading5] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user) {
        setUser(user)
      } else {
        router.push('/log-in')
      }
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      const checkexist = async() => {
        await getDoc(doc(db, "users", user.uid)).then(docSnap => {
          if (docSnap.exists()) {
            const userdata = docSnap.data()
            if (userdata.subscriptionPlan) {
              router.push('/')
            }
            else if (userdata.userName.length < 4) {
              router.push('/googleusername')
            }
            else {
              setLoading(false)
            }
          }
        })
      }   
      checkexist();
    }
  }, [user])

  // Pay for Taste Starter Subscription
  const upgradeToTasteStarter = async () => {
    setBtnloading1(true)
    const priceId = "price_1PeqkCC5ZTGkUkqR6nAP3vAl"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    // console.log("Get Taste Starter");
  };

  // Pay for Cuisine Crafter Subscription
  const upgradeToCuisineCrafter = async () => {
    setBtnloading2(true)
    const priceId = "price_1Peqn9C5ZTGkUkqRue67jjeL"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    // console.log("Upgrade to Cuisine Crafter");
  };

  const tryCuisineCrafter = async () => {
    setBtnloading3(true)
    const priceId = "price_1Peqn9C5ZTGkUkqRue67jjeL"
    const checkoutUrl = await getCheckoutUrl(priceId, 7);
    router.push(checkoutUrl);
    // console.log("Trying Cuisine Crafter");
  };

  // Pay for Epicurean Elite Subscription
  const upgradeToEpicurean = async () => {
    setBtnloading4(true)
    const priceId = "price_1Peqk6C5ZTGkUkqRNCPznEQc"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    // console.log("Upgrade to Epicurean Elite");
  };  

  const tryEpicurean = async () => {
    setBtnloading5(true)
    const priceId = "price_1Peqk6C5ZTGkUkqRNCPznEQc"
    const checkoutUrl = await getCheckoutUrl(priceId, 7);
    router.push(checkoutUrl);
    // console.log("Trying Epicurean Elite");
  };  
  
  if (loading) {
    return (
      <div className="h-screen flex flex-wrap items-center justify-center bg-white dark:bg-dblack">
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
             Loading....
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dblack text-black dark:text-dgrey">
      <div className='pt-32 lg:pt-8'>
        <h1 className="text-4xl font-bold mb-8 text-center">Purchase a Plan</h1>
        <div className='flex flex-col md:flex-row gap-4 my-4'>
            <div className='flex flex-col items-center bg-dgreenw rounded-xl text-white p-8 shadow-epc mb-4 h-[210px] md:h-auto lg:w-[250px]'>
              <h2 className="text-2xl font-bold">Taste Starter</h2>
              <p className="text-lg">$0 per month</p>
              <button
                id='tastestarter'
                aria-label='Subscribe to Taste Starter'
                className="mt-2 px-4 py-2 bg-dblue hover:bg-blue-500 text-white rounded inline-flex items-center"
                onClick={upgradeToTasteStarter}
              >
                Get Started
                {btnloading1 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
            </div>
            <div className=' lg:w-[250px] flex flex-col items-center bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] rounded-xl text-white p-8 shadow-epc mb-4'>
              <h2 className="text-2xl font-bold">Cuisine Crafter</h2>
              <p className="text-lg">$18 per month</p>
              <button
                id='cuisinecrafter'
                aria-label='Subscribe to Cuisine Crafter'
                className="mt-2 px-4 py-2 bg-dblue hover:bg-blue-500 text-white rounded inline-flex items-center"
                onClick={upgradeToCuisineCrafter}
              >
                Purchase
                {btnloading2 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
              <button
                id='cuisinecraftertrial'
                aria-label='Try Cuisine Crafter for 7 Days'
                className="mt-2 px-4 py-2 bg-dblue hover:bg-blue-500 text-white rounded inline-flex items-center"
                onClick={tryCuisineCrafter}
              >
                Try for 7 days
                {btnloading3 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
            </div>
            <div className=' lg:w-[250px] flex flex-col items-center bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] rounded-xl text-white p-8 shadow-epc mb-4'>
              <h2 className="text-2xl font-bold">Epicurean Elite</h2>
              <p className="text-lg">$50 per month</p>
              <button
                id='epicureanelite'
                aria-label='Subscribe to Epicurean Elite'
                className="mt-2 px-4 py-2 bg-dblue hover:bg-blue-500 text-white rounded inline-flex items-center"
                onClick={upgradeToEpicurean}
              >
                Purchase
                {btnloading4 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
              <button
                id='epicureanelitetrial'
                aria-label='Try Epicurean Elite for 7 Days'
                className="mt-2 px-4 py-2 bg-dblue hover:bg-blue-500 text-white rounded inline-flex items-center"
                onClick={tryEpicurean}
              >
                Try for 7 days
                {btnloading5 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
            </div>
        </div>
        
      </div>
    </div>
  );
}
