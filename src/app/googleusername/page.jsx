'use client'
import { useState, useEffect } from "react"
import Image from 'next/image'
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { auth, db } from '@/app/firebase/config'
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from 'next/navigation'
import LoginPic from '../../../public/LoginGraphic.png'
import { Loader2 } from "lucide-react"
import { Button } from '@/components/ui/button'

const Googleusername = () => {
    // const user = auth.currentUser
    const [user, setUser] = useState('')
    const [useruname, setUseruname] = useState('')
    const [unameerror, setUnameError] = useState('')
    const [unamegood, setUnameGood] = useState('')
    const [loading, setLoading] = useState(true)
    const router = useRouter()

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
              if (userdata.userName.length > 3) {
                router.push('/')
              }
              else {
                setLoading(false)
              }
            }
          })
        }   
        checkexist()
      }
    }, [user])

    useEffect(() => {
      const checkUsername = async () => {
        const userlower = useruname.toLowerCase()
        const usersCollection = collection(db, 'usernames')
        const queryun = query(usersCollection, where('currentUsername', '==', userlower))
            
        if (useruname.length > 3 && useruname.length < 21){
          const usernameRegex = /^[a-zA-Z0-9]*$/
          if (!usernameRegex.test(useruname)) {
            setUnameError("Use only alphabet and numbers")
            setUnameGood("")
          }
          else {
            const snap = await getDocs(queryun)
            if(snap.size > 0){
              setUnameError("Username Already Exists")
              setUnameGood("")
            }
            else {
              setUnameError('')
              setUnameGood("Username is available")
            }
          }
        }
        else if (useruname.length == 0){
          setUnameError('')
          setUnameGood('')
        }
        else {
          setUnameError("Username must be between 4 to 20 characters long")
          setUnameGood('')
        }
      }
      checkUsername()
    }, [useruname])

  // Create User
  const handleCreate = async() => {
    if (useruname.length>3 && useruname.length<21) {
      try {
        updateDoc(doc(db, "users", user.uid), {
          userName: useruname
        })
        setUseruname('')
        router.push('/purchaseplan')
        return true
      } catch(e){
        // console.error(e)
        return false
      }
    }
    else {
      setUnameError("Username must be between 4 to 20 characters long")
    }
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
                  aria-label="Username"
                  placeholder="Enter username" 
                  value={useruname} 
                  required
                  onChange={(e) => setUseruname(e.target.value)} 
                  className={unameerror ? "w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
              />
              {unameerror && <span className='text-red-600 text-xs mb-4'>{unameerror}<br></br></span>}
              {unamegood && <span className='text-dgreen text-xs mb-4'>{unamegood}<br></br></span>}
              
              <button 
                  id="signup"
                  aria-label="Sign Up Button"
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