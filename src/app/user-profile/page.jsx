'use client'
import {useState, useEffect} from 'react'
import {auth, db, storage} from '@/app/firebase/config'
import {doc, updateDoc, deleteDoc, getDoc, getDocs, collection, onSnapshot, query, where, arrayRemove, arrayUnion} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getCheckoutUrl, getPortalUrl } from "./payment";
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

const UserProfile = () => {
  const user = auth.currentUser;
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [useremail, setUseremail] = useState('')
  const [profilepic, setProfilepic] = useState('')
  const [username, setUsername] = useState('')
  const [usersubscription, setUsersubscription] = useState('')
  const router = useRouter()
  const [isPremium, setIsPremium] = useState(false);
  const [isPublic, setPublic] = useState(true);
  const [currentsub, setCurrentsub] = useState('')
  const [loading, setLoading] = useState(true)
  
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
          setUsersubscription(userdata.subscriptionPlan)
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
                setCurrentsub("taste");
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
    if(subproduct == "prod_Q5cPjYWep1T9zX"){
      setCurrentsub("cuisine")
    }
    else if(subproduct == "prod_Q5cQYrIMnnHdyE"){
      setCurrentsub("epicurean")
    }
  }

  // Pay for Cuisine Crafter Subscription
  const upgradeToCuisineCrafter = async () => {
    const priceId = "price_1PFRAvRtFO8HcW8t7eXG3scB";
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Premium");
  };

  // Pay for Epicurean Elite Subscription
  const upgradeToEpicurean = async () => {
    const priceId = "price_1PFRBSRtFO8HcW8tlndiFEvN";
    const checkoutUrl = await getCheckoutUrl(priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Premium");
  };

  // Manage Subscription and Payments
  const manageSubscription = async () => {
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
    setUsersubscription('')

    // Delete User Data from Firestore
    await deleteDoc(doc(db, "users", user.uid)).then(() => {
      // Delete User from Firebase Authentication
      user.delete()
      // Delete Customer Data from Firestore
      deleteDoc(doc(db, "customers", user.uid)).then(() => {
      // Route to Homepage
      router.push('/')
    })
      // Sign Out
      auth.signOut()
    });

  }

  // const imageLoader = ({ src, width, quality }) => {
  //   return `https://firebasestorage.googleapis.com/${src}?w=${width}&q=${quality || 100}`
  // }

  if(!user){
    redirect("/sign-up")
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
            <div className={currentsub == "taste" ? "bg-dgreenw dark:bg-dgreen h-32 rounded-3xl" : currentsub == "cuisine" ? "bg-gradient-to-r from-[#C0C0C0] via-[#AAABAB] to-[#6C6C6C] h-32 rounded-3xl" : currentsub == "epicurean" ? "bg-gradient-to-r from-[#B08C36] via-[#D9BD5B] to-[#9B7424] h-32 rounded-3xl" : "h-32 rounded-3xl"}>
              <div className='flex justify-between'>
                <div className=''>
                  <Badge className="text-black bg-white ml-4 mt-2">{currentsub == "taste" ? "Taste Starter" : currentsub == "cuisine" ? "Cuisine Crafter" : currentsub == "epicurean" ? "Epicurean Concierge" : ""}</Badge>
                </div>
                <div className="flex items-center justify-center mt-4 mr-4">
                  <Image className="h-24 w-24 bg-white p-1 rounded-full" src={profilepic} width={100} height={100} alt="Profile Picture" />
                </div>
                <div className=''>
                  <Badge className="text-black bg-white mr-4 mt-2">{isPublic ? "Public" : "Private"}</Badge>
                </div>
              </div>
            </div>
            <div className=''>
              <div className="text-center px-14 font-regular">
                <p className="text-black dark:text-white mt-2 font-bold">@{username}</p>
                <p className="mt-2 text-ddarkgrey dark:text-dgrey text-sm">{useremail}</p>
                {isPremium && <button onClick={manageSubscription} className='mt-2 text-dgreenw dark:text-dgreen underline'>Manage Subscription</button>}
              </div>
              <hr className="mt-6" />
              <div className="">
                <Tabs defaultValue="account" className="">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="editprofile">Edit Profile</TabsTrigger>
                    <TabsTrigger value="subscription">Subscription</TabsTrigger>
                  </TabsList>
                  <TabsContent value="editprofile">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Edit your profile here. Click save when you are done.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="firstname">First Name</Label>
                          <Input id="firstname" className="text-[16px]" defaultValue={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="lastname">Last Name</Label>
                          <Input id="lastname" className="text-[16px]" defaultValue={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={updateProfile}>Save Changes</Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="w-full p-3 bg-dred rounded-lg text-black hover:bg-dyellow">Delete Account</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={deleteProfile}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="subscription">
                    <Card>
                      <CardHeader>
                        <CardTitle>Subscription</CardTitle>
                        <CardDescription>
                          Manage your subscription.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {isPremium ? (
                        <div className="space-y-1">
                          <Button onClick={manageSubscription}>Manage Subscription</Button>
                        </div>
                        ) : (
                        <>
                          <div className="space-y-1">
                            <Button onClick={upgradeToCuisineCrafter}>Subscribe to Cuisine Crafter</Button>
                          </div>
                          <div className="space-y-1">
                            <Button onClick={upgradeToEpicurean}>Subscribe to Epicurean Elite</Button>
                          </div>
                        </>
                        )}
                      </CardContent>
                      <CardFooter>
          
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
      </div>



        <Dialog>
          <DialogTrigger asChild>
            <Button className="p-3 bg-dblue rounded-lg text-white hover:bg-dlightblue">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstname" className="text-right">
                  First Name
                </Label>
                <Input
                  id="firstname"
                  defaultValue={firstname}
                  className="col-span-3 text-[16px]"
                  onChange={(e) => setFirstname(e.target.value)} 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastname" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="lastname"
                  defaultValue={lastname}
                  className="col-span-3 text-[16px]"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={updateProfile}>Save Changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      
      </>
      )}
    </div>
  )
}

export default UserProfile;