'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {collection, doc, getDocs, onSnapshot, query, setDoc, serverTimestamp, where} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import {auth, db, storage} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const router = useRouter();
  const [image, setImage] = useState('');
  const [useruname, setUseruname] = useState('')
  const [unameerror, setUnameError] = useState('')

  useEffect(() => {
    // Check if the Username Already Exists
    const checkUsername = async () => {
      const usersCollection = collection(db, 'uniqueusernames');
      const queryun = query(usersCollection, where('username', '==', useruname));
      const snap = await getDocs(queryun)
      if(snap.size > 0){
        setUnameError("Username Already Exists")
      }
      else {
        setUnameError('')
      }
    }
    checkUsername()
  }, [useruname])
  

  // Upload selected profile picture to storage before calling handleSignup with the download URL
  const upload = () => {
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
          handleSignUp(downloadURL);
        });
      }
    )
  }

  // Prepare data from Email SignUp to pass to handleCreate
  const handleSignUp = async (pic) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const userid = res.user.uid
        handleCreate(firstname, lastname, email, useruname, userid, pic)
    } catch(e){
        console.error(e)
    }
  };

  // Prepare data from Google SignUp to pass to handleCreate
  const handleGoogleSignUp = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider)
        const guserid = res.user.uid
        const gdisplayname = res.user.displayName
        const gfirstname = gdisplayname.split(" ")[0]
        const glastname = gdisplayname.split(" ")[1]
        const gemail = res.user.email
        const gusername = gemail.split("@")[0]
        const gpicture = res.user.photoURL
        handleCreate(gfirstname, glastname, gemail, gusername, guserid, gpicture)
    } catch(e){
        console.error(e)
    }
  };

  // Create User in the Firestore Users Collection
  const handleCreate = async(userfname, userlname, useremail, username, uid, upic) => {
    try {
        const docRef = await setDoc(doc(db, "users", uid), {
          createdAt: serverTimestamp(),
          fcmToken: '',
          firstName: userfname,
          lastName: userlname,
          userName: username,
          userEmail: useremail,
          userId: uid,
          userImage: upic,
          subscriptionPlan: '',
          isProfilePublic: true,
          showMenus: true,
          showDietPref: true,
          showFavRestaurants: true,
          groupsJoined: [],
          groupsPending: [],
          preferences: {cuisines: [], dietaryPreferences: [], foodAllergies: [], nutritionalBlocks: []},
          accountDeleted: false,
          accountDeletedAt: '',
        })
        // Store New Unique Username in the Firestore Unique Usernames Collection
        setDoc(doc(db, "uniqueusernames", uid), {
          username: username,
        })
        console.log("User Data: " + userfname, userlname, useremail, username, uid, upic)
        setEmail('');
        setPassword('');
        setFirstname('');
        setLastname('');
        setUseruname('')
        setImage('');
        router.push('/user-profile')
        return true
    } catch(e){
        console.error(e)
        return false
    }
  };

  return (
    <div className="bg-white/50 dark:bg-black/80 flex items-center justify-center pt-20 text-sm pb-8 font-regular">
      <div data-aos="fade-up" className="bg-white dark:bg-black p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-black dark:text-white text-2xl mb-4">Create An Account</h1>
        <p className="text-ddarkgrey dark:text-dgrey mb-5">Sign up now to explore the app</p>
        <button onClick={handleGoogleSignUp} className="flex w-full items-center justify-center rounded-xl p-3 outline-none text-dgreen bg-dgreen/10 dark:bg-dgreen/20 font-bold">
          <span className="mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_95:967)">
                <path
                  d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                  fill="#4285F4"
                />
                <path
                  d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                  fill="#34A853"
                />
                <path
                  d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_95:967">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Sign in with Google
        </button>
        <div className="my-4 flex items-center justify-center">
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
          <p className="w-full px-5 text-center text-black dark:text-white">
            Or use your email
          </p>
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
        </div>

        <>
          <input 
            type="text" 
            placeholder="First Name" 
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)} 
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)} 
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <input 
            type="text" 
            placeholder="Username" 
            value={useruname} 
            onChange={(e) => setUseruname(e.target.value)} 
            className="w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          {unameerror && <span className='text-red-600'>{unameerror}</span>}
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 my-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <input 
            type="file"
            onChange={(e) => {setImage(e.target.files[0])}} 
            className="w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          <div className="mb-8 flex text-xs">
            <label
              htmlFor="checkboxLabel"
              className="flex cursor-pointer select-none text-black dark:text-white"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkboxLabel"
                  className="sr-only"
                />
                <div className="mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-dblue dark:border-white">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <span>
                By creating an account you agree to our
                <a href="/terms-of-service" className="text-dgreen hover:underline">
                  {" "}
                  Terms and Conditions{" "}
                </a>
                and
                <a href="/privacy-policy" className="text-dgreen hover:underline">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </span>
            </label>
          </div>
          <button 
            onClick={upload}
            className="w-full p-3 bg-dgreen/10 dark:bg-dgreen/20 rounded-xl text-dgreen font-bold"
          >
            Sign Up
          </button>
        </>
        <p className="pt-4 text-center text-black dark:text-white">
          Already have an account?{" "}
          <Link href="/log-in" className="text-dgreen hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;