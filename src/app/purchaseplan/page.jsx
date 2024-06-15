'use client'
import { useEffect, useState } from 'react';
import {auth, db} from '@/app/firebase/config'
import {onAuthStateChanged} from "firebase/auth"
import {doc, getDoc, addDoc, setDoc, updateDoc, getDocs, collection, onSnapshot, query,} from "firebase/firestore"
import { useRouter } from 'next/navigation';
import { getCheckoutUrl, getPortalUrl } from "../user-profile/payment";
import { Loader2 } from "lucide-react"

export default function PurchasePlan() {
    const [user, setUser] = useState('')
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [btnloading1, setBtnloading1] = useState(false)
    const [btnloading2, setBtnloading2] = useState(false)
    const [btnloading3, setBtnloading3] = useState(false)
    const [btnloading4, setBtnloading4] = useState(false)
    const [btnloading5, setBtnloading5] = useState(false)
    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if(user) {
            setUser(user)
              // getDoc(doc(db, "users", user.uid)).then(docSnap => {
              //   if (docSnap.exists()) {
              //     const userdata = docSnap.data()
              //     if (!userdata.paymenturls) {
              //       getAll()
              //     }
              //     else{
              //       console.log("Urls already exist")
              //     }
              //   }
              // })
            setLoading(false)
          }
          else {
            router.push('/log-in')
          }
        });
        
        return () => unsubscribe();
    }, [])

  // Set urls for users
  const getAll = async () => {
    const turl = await getCheckoutUrl("price_1PQCBsRtFO8HcW8tVbDSPgLG")
    setTimeout(() => {
      updateDoc(doc(db, "users", user.uid), {
        "paymenturls.tastestarterurl": turl
      })
      console.log("Taste: " + turl)
    }, 10000)

    const curl = await getCheckoutUrl("price_1PQCCLRtFO8HcW8tNreLswEh")
    setTimeout(() => {
      updateDoc(doc(db, "users", user.uid), {
        "paymenturls.cuisineurl": curl
      })
      console.log("Cuisine: " + curl)
    }, 10000)

    const cpurl = await getCheckoutUrl("price_1PQCCLRtFO8HcW8tNreLswEh", 7)
    setTimeout(() => {
      updateDoc(doc(db, "users", user.uid), {
        "paymenturls.cuisinetrialurl": cpurl
      })
      console.log("Cuisine Trial: " + cpurl)
    }, 10000)

    const eurl = await getCheckoutUrl("price_1PQCCfRtFO8HcW8tFSOZtvIJ")
    setTimeout(() => {
      updateDoc(doc(db, "users", user.uid), {
        "paymenturls.epicureanurl": eurl
      })
      console.log("Epic: " + eurl)
    }, 10000)

    const epurl = await getCheckoutUrl("price_1PQCCfRtFO8HcW8tFSOZtvIJ", 7)
    setTimeout(() => {
      updateDoc(doc(db, "users", user.uid), {
        "paymenturls.epicureantrialurl": epurl
      })
      console.log("Epic Trial: " + epurl)
    }, 10000)

    const portal = await getPortalUrl()
    setTimeout(() => {
      updateDoc(doc(db, "users", user.uid), {
        "paymenturls.portalurl": portal
      })
      console.log("Portal Url: " + portal)
    }, 10000)

  };


  // Pay for Taste Starter Subscription
  const upgradeToTasteStarter = async () => {
    setBtnloading1(true)
    const priceId = "price_1PQCBsRtFO8HcW8tVbDSPgLG";
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Get Taste Starter");
  };
  // Pay for Cuisine Crafter Subscription
  const upgradeToCuisineCrafter = async () => {
    setBtnloading2(true)
    const priceId = "price_1PQCCLRtFO8HcW8tNreLswEh";
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Cuisine Crafter");
  };

  const tryCuisineCrafter = async () => {
    setBtnloading3(true)
    const priceId = "price_1PQCCLRtFO8HcW8tNreLswEh";
    const checkoutUrl = await getCheckoutUrl(priceId, 7);
    router.push(checkoutUrl);
    console.log("Trying Cuisine Crafter");
  };

  // Pay for Epicurean Elite Subscription
  const upgradeToEpicurean = async () => {
    setBtnloading4(true)
    const priceId = "price_1PQCCfRtFO8HcW8tFSOZtvIJ";
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Epicurean Elite");
  };  

  const tryEpicurean = async () => {
    setBtnloading5(true)
    const priceId = "price_1PQCCfRtFO8HcW8tFSOZtvIJ";
    const checkoutUrl = await getCheckoutUrl(priceId, 7);
    router.push(checkoutUrl);
    console.log("Trying Epicurean Elite");
  };  
  
  // if (loading) {
  //   return (<div className="h-screen flex flex-wrap items-center justify-center">
  //           <Button disabled>
  //             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  //             Loading....
  //           </Button>
  //         </div>)
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dblack text-black dark:text-dgrey">
      <div className='pt-32 lg:pt-8'>
        <h1 className="text-4xl font-bold mb-8 text-center">Purchase a Plan</h1>
        <div className='flex flex-col md:flex-row gap-4 my-4'>
            <div className='flex flex-col items-center bg-dgreenw rounded-xl text-white p-8 shadow-epc mb-4'>
              <h2 className="text-2xl font-bold">Taste Starter</h2>
              <p className="text-lg">$0 per month</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-dblue text-white rounded inline-flex items-center"
                onClick={upgradeToTasteStarter}
              >
                Get Started
                {btnloading1 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
            </div>
            <div className='flex flex-col items-center bg-gradient-to-r from-[#6C6C6C] via-[#AAABAB] to-[#6C6C6C] rounded-xl text-white p-8 shadow-epc mb-4'>
              <h2 className="text-2xl font-bold">Cuisine Crafter</h2>
              <p className="text-lg">$15 per month</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-dblue text-white rounded inline-flex items-center"
                onClick={upgradeToCuisineCrafter}
              >
                Purchase
                {btnloading2 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-dblue text-white rounded inline-flex items-center"
                onClick={tryCuisineCrafter}
              >
                Try for 7 days
                {btnloading3 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
            </div>
            <div className='flex flex-col items-center bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] rounded-xl text-white p-8 shadow-epc mb-4'>
              <h2 className="text-2xl font-bold">Epicurean Elite</h2>
              <p className="text-lg">$50 per month</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-dblue text-white rounded inline-flex items-center"
                onClick={upgradeToEpicurean}
              >
                Purchase
                {btnloading4 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </button>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-dblue text-white rounded inline-flex items-center"
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
