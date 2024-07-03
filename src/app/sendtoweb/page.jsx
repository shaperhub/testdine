'use client'
import { useState, useEffect } from "react"
import { usePathname, useRouter, redirect, useSearchParams } from "next/navigation"
import Link from 'next/link'
import { Loader2 } from "lucide-react"
import { getCheckoutUrl, getPortalUrl } from "../user-profile/payment";
import {app, auth, db} from '@/app/firebase/config'
import {signInWithCustomToken, onAuthStateChanged} from "firebase/auth"
import {collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc, onSnapshot, query, serverTimestamp, where} from "firebase/firestore"

export default function Sendtoweb() {
  const [user, setUser] = useState('')
  const [newerror, setNewerror] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const applink = searchParams.get("request")
  // console.log(token)
  // console.log(applink)

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, async (authuser) => {
    //   setUser(authuser)
    //   console.log("Already user: " + user)
    // }); 
    const getsignin = async() => {
      if (!token || !applink) {
        console.log("Nothing to process")
        setNewerror("Missing Token or Request")
      }
        
      else if (token && applink) {
        try {
          await signInWithCustomToken(auth, token).then((userCredential) => {
            setUser(userCredential.user)
            console.log("Sign in with custom token...")
            setTimeout(() => {
              if (applink == "tastestarter"){
                setLoading(true)
                upgradeToTasteStarter()
              }
              else if (applink == "cuisinecrafter"){
                setLoading(true)
                upgradeToCuisineCrafter()
              }
              else if (applink == "cuisinecraftertrial"){
                setLoading(true)
                tryCuisineCrafter()
              }
              else if (applink == "epicureanelite"){
                setLoading(true)
                upgradeToEpicurean()
              }
              else if (applink == "epicureanelitetrial"){
                setLoading(true)
                tryEpicurean()
              }
              else if (applink == "portal"){
                setLoading(true)
                manageSubscription()
              }
              else {
                setLoading(false)
                setNewerror("Invalid Request")
              }
            }, 1000)
          })
        } catch(error) {
          setLoading(false)
          setNewerror(error.message)
          console.error(error.message);
        }
      }
    }
    
    getsignin();
    // return () => unsubscribe();
  }, []);

  const manageSubscription = async () => {
    const portalUrl = await getPortalUrl();
    router.push(portalUrl);
    console.log("Get Portal: " + portalUrl);
  };

  const upgradeToTasteStarter = async () => {
    const priceId = "price_1PXAhgC5ZTGkUkqROPV27nVF"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Taste: " + checkoutUrl);
  };
  
  const upgradeToCuisineCrafter = async () => {
    const priceId = "price_1PXAiaC5ZTGkUkqR6bNvM3Vt"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Cuisine: " + checkoutUrl);
  };

  const tryCuisineCrafter = async () => {
    const priceId = "price_1PXAiaC5ZTGkUkqR6bNvM3Vt"
    const checkoutUrl = await getCheckoutUrl(priceId, 7);
    router.push(checkoutUrl);
    console.log("Cuisine Trial: " + checkoutUrl);
  };

  const upgradeToEpicurean = async () => {
    const priceId = "price_1PXAj1C5ZTGkUkqRYQ8NoqbP"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Epicurean: " + checkoutUrl);
  };  

  const tryEpicurean = async () => {
    const priceId = "price_1PXAj1C5ZTGkUkqRYQ8NoqbP"
    const checkoutUrl = await getCheckoutUrl(priceId, 7);
    router.push(checkoutUrl);
    console.log("Epicurean Trial: " + checkoutUrl);
  };  

  return (
    <div className="bg-white/50 dark:bg-black/80 min-h-screen pt-24 flex items-center justify-center text-sm font-regular">
      <div className="flex flex-col items-center">
        {/* <h1 className="font-heading text-3xl text-center text-dbluew dark:text-dgrey my-4">DineIntel</h1> */}
        <button className="mt-2 px-4 py-2 bg-dbluew hover:bg-blue-500 text-white rounded inline-flex items-center">
          Processing Request...
          {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </button>
        <div>
          {newerror=='Firebase: Error (auth/invalid-custom-token).' && <p className="text-dred text-sm my-2 text-center">Invalid Token</p>}
        </div>
      </div>
    </div>
  )
}
