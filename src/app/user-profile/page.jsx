'use client'
import {auth, db, storage} from '@/app/firebase/config'
import {collection, addDoc} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

const UserProfile = () => {
  const user = auth.currentUser;
  const router = useRouter()
  // setTimeout(() => { 
  //   console.log("Profile user ID: " + user.uid); 
  // }, 2000);
  console.log({user})

  return (
    <div className='flex h-full w-full bg-slate-500 text-center text-yellow-100 pt-20 font-regular'>
        <h1>User Profile</h1>
    </div>
  )
}

export default UserProfile;