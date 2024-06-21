'use client'
import { useState, useEffect } from "react"
import Link from 'next/link';
import Image from 'next/image';
import {collection, doc, getDocs, onSnapshot, query, setDoc, updateDoc, serverTimestamp, where} from "firebase/firestore"
import {auth, db} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import LoginPic from '../../../public/LoginGraphic.png'

const Googleusername = () => {
    const user = auth.currentUser
    const [useruname, setUseruname] = useState('')
    const [unameerror, setUnameError] = useState('')
    const [unamegood, setUnameGood] = useState('')
    const [unameexists, setUnameexists] = useState(null)
    const router = useRouter()

    useEffect(() => {
        // Check if the Username Already Exists
        const checkUsername = async () => {
            const userlower = useruname.toLowerCase()
          const usersCollection = collection(db, 'usernames');
          const queryun = query(usersCollection, where('usernames', '==', userlower));
          
          // If the username input length is within range
          if (useruname.length > 3 && useruname.length < 17){
            const snap = await getDocs(usersCollection)
            snap.forEach((doc) => {
                const data = doc.data().usernames
                console.log(data)
                if (data && data[useruname]) {
                    setUnameError("Username Already Exists");
                    setUnameGood("")
                }
                else{
                    setUnameError("")
                    setUnameGood("Username is Available")
                }
            });
            // if the username exists
            // if(unameexists == true){
            //   setUnameError("Username Already Exists")
            //   setUnameGood("")
            // }
            // else {
            //   setUnameError('')
            //   setUnameGood("Username is available")
            // }
          }
          // if the username field is empty
          else if (useruname.length == 0){
            setUnameError('')
            setUnameGood('')
          }
          // if the username length is our of range
          else {
            setUnameError("Username must be between 4 to 16 characters long")
            setUnameGood('')
          }
        }
        checkUsername()
    }, [useruname])


  // Create User in the Firestore Users Collection
  const handleCreate = async() => {

    try {
        if (useruname.length > 3) {
          updateDoc(doc(db, "users", user.uid), {
            userName: useruname
          })
        }
        setUseruname('')
        router.push('/purchaseplan')
        return true
    } catch(e){
        console.error(e)
        return false
    }
  };


  return (
    <div className="bg-white/50 dark:bg-black/80 flex items-center justify-center pt-36 text-sm pb-8 font-regular">
        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-xl w-96">
            <div className='mb-8 flex justify-center'>
            <Image className='' src={LoginPic} width={300} height={250} alt='Login Graphic' />
            </div>
            <h1 className="font-bold text-black dark:text-white text-xl my-2">Create a Username</h1>

            <>
              <div className='flex mb-2'>
                  <span className='mr-2'>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.75 15.75H5.25C2.25 15.75 1.5 15 1.5 12V6C1.5 3 2.25 2.25 5.25 2.25H12.75C15.75 2.25 16.5 3 16.5 6V12C16.5 15 15.75 15.75 12.75 15.75Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.5 6H14.25" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.25 9H14.25" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.75 12H14.25" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.37312 8.46744C7.12285 8.46744 7.73063 7.85967 7.73063 7.10994C7.73063 6.36021 7.12285 5.75244 6.37312 5.75244C5.6234 5.75244 5.01562 6.36021 5.01562 7.10994C5.01562 7.85967 5.6234 8.46744 6.37312 8.46744Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12.2473C8.895 11.1598 8.0325 10.3048 6.945 10.2073C6.57 10.1698 6.1875 10.1698 5.805 10.2073C4.7175 10.3123 3.855 11.1598 3.75 12.2473" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </span>
                  <label htmlFor="username" className='text-sm text-black dark:text-white'>Username</label>
              </div>
              <input 
                  type="text" 
                  id="username"
                  name="username"
                  placeholder="Enter username" 
                  value={useruname} 
                  required
                  onChange={(e) => setUseruname(e.target.value)} 
                  className="w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
              />
              {unameerror && <span className='text-red-600 text-xs mb-4'>{unameerror}</span>}
              {unamegood && <span className='text-dgreen text-xs mb-4'>{unamegood}</span>}
              
              <button 
                  onClick={handleCreate}
                  className="w-full text-center bg-transparent mt-12 p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white font-bold"
              >
                  Sign Up
              </button>
            </>
        </div>
    </div>
  )
}

export default Googleusername