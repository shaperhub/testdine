'use client'
import {useState, useEffect} from 'react'
import {auth, db} from '@/app/firebase/config'
import {doc, updateDoc, getDoc, getDocs, collection, onSnapshot, query, where, serverTimestamp} from "firebase/firestore"
import { useRouter } from 'next/navigation';
import { deleteUser } from 'firebase/auth';
import { getCheckoutUrl, getPortalUrl } from "./payment";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

const UserProfile = () => {
  const user = auth.currentUser;
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [useremail, setUseremail] = useState('')
  const [profilepic, setProfilepic] = useState('')
  const [username, setUsername] = useState('')
  const router = useRouter()
  const [isPremium, setIsPremium] = useState(false);
  const [isPublic, setPublic] = useState(true);
  const [currentsub, setCurrentsub] = useState('')
  const [loading, setLoading] = useState(true)
  const [btnloading1, setBtnloading1] = useState(false)
  const [btnloading2, setBtnloading2] = useState(false)
  const [btnloading3, setBtnloading3] = useState(false)
  const [btnloading4, setBtnloading4] = useState(false)
  
  console.log({user})

	useEffect(() => {
    // Get user details
		const getUserData = async() => { 
      await getDoc(doc(db, "users", user.uid)).then(docSnap => {
        if (docSnap.exists()) {
          const userdata = docSnap.data()
          setFirstname(userdata.firstName)
          setLastname(userdata.lastName)
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
                console.log("No active or trial subscriptions found");
                setIsPremium(false);
                router.push('/purchaseplan')
              } else {
                console.log("Active or trial subscription found");
                setIsPremium(true);
                getSubscription();
              }
              unsubscribe();
          });
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        } 
        setLoading(false)
      })
    }
    getUserData();

	}, [])

  console.log("Subscription Status: " + isPremium)

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

  // Pay for Taste Starter Subscription
  const upgradeToTaste = async () => {
    setBtnloading1(true)
    const priceId = "price_1PXAhgC5ZTGkUkqROPV27nVF"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Taste Starter");
  };

  // Pay for Cuisine Crafter Subscription
  const upgradeToCuisineCrafter = async () => {
    setBtnloading2(true)
    const priceId = "price_1PXAiaC5ZTGkUkqR6bNvM3Vt"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Cuisine Crafter");
  };

  // Pay for Epicurean Elite Subscription
  const upgradeToEpicurean = async () => {
    setBtnloading3(true)
    const priceId = "price_1PXAj1C5ZTGkUkqRYQ8NoqbP"
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Epicurean Elite");
  };

  // Manage Subscription and Payments
  const manageSubscription = async () => {
    setBtnloading4(true)
    const portalUrl = await getPortalUrl();
    router.push(portalUrl);
    console.log("Manage Subscription");
  };

  // Update Profile
  const updateProfile = async () => {
    const newupdate = doc(db, "users", user.uid);
  
    await updateDoc(newupdate, {
      firstName: firstname,
      lastName: lastname
    });
  }
  
  // Delete Profile
  const deleteProfile = async () => {
    setFirstname('')
    setLastname('')
    setUseremail('')
    setProfilepic('')
    setUsername('')

    deleteUser(user).then(() => {
      auth.signOut()
    })
  }

  // if(!user){
  //   redirect("/sign-up")
  // }

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