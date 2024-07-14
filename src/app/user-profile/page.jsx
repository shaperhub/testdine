'use client'
import { useState, useEffect } from 'react'
import { auth, db } from '@/app/firebase/config'
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, getDocs, collection, onSnapshot, query, where } from "firebase/firestore"
import { useRouter } from 'next/navigation'
import { getPortalUrl } from "./payment"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

const UserProfile = () => {
  // const userv = auth.currentUser;
  const [user, setUser] = useState('')
  const [useremail, setUseremail] = useState('')
  const [profilepic, setProfilepic] = useState('')
  const [username, setUsername] = useState('')
  const router = useRouter()
  const [isPremium, setIsPremium] = useState(false);
  const [isPublic, setPublic] = useState(true);
  const [currentsub, setCurrentsub] = useState('')
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const [btnloading4, setBtnloading4] = useState(false)
  // console.log({userv})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userobj) => {
      if(userobj) {
        setUser(userobj)
        setLoading2(false)
      }
      else {
        router.push('/log-in')
      }
    });    
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    if (user) {
      // Get user details
      const getUserData = async() => { 
        await getDoc(doc(db, "users", user.uid)).then(docSnap => {
          if (docSnap.exists()) {
            const userdata = docSnap.data()
            if (userdata.userName.length < 4) {
              router.push('/googleusername')
            }
            else {
              setProfilepic(userdata.userImage)
              setUseremail(userdata.userEmail)
              setUsername(userdata.userName)
              setPublic(userdata.isProfilePublic)

              // Check if user has a subscription
              const subscriptionsRef = collection(db, "customers", user.uid, "subscriptions");
              const q = query(
                subscriptionsRef,
                where("status", "in", ["trialing", "active"])
              );
              const unsubscribe = onSnapshot(q, (snapshot) => {
                  // In this implementation we only expect one active or trial subscription to exist.
                  if (snapshot.docs.length === 0) {
                    // console.log("No active or trial subscriptions found");
                    setIsPremium(false);
                    router.push('/purchaseplan')
                  } else {
                    // console.log("Active or trial subscription found");
                    setIsPremium(true);
                    getSubscription();
                    setLoading(false)
                  }
                  unsubscribe();
              });
              // console.log("Document data:", docSnap.data())
            }
          } else {
            // console.log("No such document!");
          } 
        })
      }
      getUserData();
    }
  }, [user])

  // console.log("Subscription Status: " + isPremium)

  // Get Subscription Tier
  const getSubscription = async() => {
    const subRef = collection(db, `customers/${user.uid}/subscriptions`);
    const q = query(subRef);
    const qsnap = await getDocs(q)
    const arr = []
    qsnap.docs.map((d) => {
      arr.push(d.data())
    });
    const subproduct = arr[0].items[0].plan.product;
    if(subproduct == "prod_QNwb1P3N64DMeR"){
      setCurrentsub("cuisine")
    }
    else if(subproduct == "prod_QNwcTkKjpozLxA"){
      setCurrentsub("epicurean")
    }
    else if(subproduct == "prod_QNwaLfuulh5xqC"){
      setCurrentsub("taste")
    }
  }

  // Manage Subscription
  const manageSubscription = async () => {
    setBtnloading4(true)
    const portalUrl = await getPortalUrl();
    router.push(portalUrl);
  };

  if (loading2) {
    return (
      <div className="h-screen flex flex-wrap items-center justify-center bg-white dark:bg-dblack">
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Wait....
        </Button>
      </div>
    )
  }

  return (
    <div className='bg-white/50 dark:bg-black/80 font-regular'>
      { loading ? (
        <div className="h-screen flex flex-wrap items-center justify-center">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading....
          </Button>
        </div>
      ) : (
        <>
      <div className="h-screen flex flex-wrap items-center justify-center font-regular">
          <div className="p-2 lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 border-2 border-dgreenw rounded-3xl bg-white dark:bg-black shadow-lg transform duration-200 ease-in-out">
            <div className={currentsub == "taste" ? "bg-dgreenw dark:bg-dgreen h-32 rounded-3xl" : currentsub == "cuisine" ? "bg-gradient-to-r from-[#C0C0C0] via-[#AAABAB] to-[#6C6C6C] h-32 rounded-3xl" : currentsub == "epicurean" ? "bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] h-32 rounded-3xl" : ""}>
              <div className='flex justify-between'>
                <div className=''>
                {isPremium && <Badge className="text-black bg-white hover:bg-white ml-4 mt-2">{currentsub == "taste" ? "Taste Starter" : currentsub == "cuisine" ? "Cuisine Crafter" : currentsub == "epicurean" ? "Epicurean Elite" : ""}</Badge>}
                </div>
                <div className="flex items-center justify-center mt-4 mr-4">
                  <Image className="h-24 w-24 bg-white p-1 rounded-full" src={profilepic} width={100} height={100} alt="Profile Picture" />
                </div>
                <div className=''>
                  {isPremium && <Badge className="text-black bg-white hover:bg-white mr-4 mt-2">{isPublic ? "Public" : "Private"}</Badge>}
                </div>
              </div>
            </div>
            <div className=''>
              <div className="text-center px-14 font-regular">
                <p className="text-black dark:text-white mt-2 font-bold">@{username}</p>
                <p className="mt-2 text-ddarkgrey dark:text-dgrey text-sm">{useremail}</p>

                {/* Manage Subscription Based on Premium Status */}
                {isPremium && <button onClick={manageSubscription} className='mt-2 text-dgreenw dark:text-dgreen underline inline-flex items-center mb-4'>Manage Subscription{btnloading4 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}</button>}
              </div>
            </div>
          </div>
      </div>
      
      </>
      )}
    </div>
  )
}

export default UserProfile;