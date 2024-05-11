'use client'
import {useState, useEffect} from 'react'
import {auth, db, storage} from '@/app/firebase/config'
import {doc, updateDoc, deleteDoc, getDoc, arrayRemove, arrayUnion} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UserProfile = () => {
  const user = auth.currentUser;
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [useremail, setUseremail] = useState('')
  const [profilepic, setProfilepic] = useState('')
  const [username, setUsername] = useState('')
  const [usersubscription, setUsersubscription] = useState('')
  const [showpublicprofile, setShowpublicprofile] = useState(true)
  const [showdietpref, setShowdietpref] = useState(true)
  const [showmenus, setShowmenus] = useState('')
  const [groupsjoined, setGroupsjoined] = useState('')
  const router = useRouter()
  // setTimeout(() => { 
  //   console.log("Profile user ID: " + user.uid); 
  // }, 2000);
  console.log({user})

	useEffect(() => {
		getDoc(doc(db, "users", user.uid)).then(docSnap => {
      if (docSnap.exists()) {
        const userdata = docSnap.data()
        setFirstname(userdata.firstName)
        setLastname(userdata.lastName)
        setProfilepic(userdata.userImage)
        setUseremail(userdata.userEmail)
        setUsername(userdata.userName)
        setUsersubscription(userdata.subscriptionPlan)
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    // const docSnap = getDoc(docRef);

	}, [])

  const uploadpic = () => {
    const storageRef = ref(storage, `usersImages/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      }, 
      () => {
        // Handle successful uploads on complete. For instance, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          updateProfile(downloadURL);
        });
      }
    )
  }

  const updateProfile = async () => {
    const newupdate = doc(db, "users", user.uid);
  
    await updateDoc(newupdate, {
      firstName: firstname,
      lastName: lastname
    });
  }
  
  const deleteProfile = async () => {
    setFirstname('')
    setLastname('')
    setUseremail('')
    setProfilepic('')
    setUsername('')
    setUsersubscription('')
    setShowpublicprofile(true)
    setShowdietpref(true)
    setShowmenus('')
    setGroupsjoined('')

    // Delete User Data from Firestore
    await deleteDoc(doc(db, "users", user.uid)).then(() => {
      // Delete User from Firebase Authentication
      user.delete()
      // Sign Out
      auth.signOut()
      // Route to Homepage
      router.push('/')
    });
  }

  return (
    <div className=''>
      <div className='w-full flex flex-col py-32 md:py-40 px-8 md:px-24 bg-dlightgreen dark:bg-dblue'>
        <h1 className='font-heading text-3xl mb-4 text-black dark:text-white'>User Profile</h1>
        <p className='font-regular text-black dark:text-white mb-4'>Firstname: {firstname}</p>
        <p className='font-regular text-black dark:text-white mb-4'>Lastname: {lastname}</p>
        <p className='font-regular text-black dark:text-white mb-4'>Email: {useremail}</p>
        <p className='font-regular text-black dark:text-white mb-4'>Username: {username}</p>
        <p className='font-regular text-black dark:text-white mb-4'>Tier: {usersubscription}</p>
        <Avatar>
          <AvatarImage src={profilepic} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

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
                  className="col-span-3"
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
                  className="col-span-3"
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
      </div>
    </div>
  )
}

export default UserProfile;