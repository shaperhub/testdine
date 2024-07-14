'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification} from "firebase/auth";
import {collection, doc, getDocs, query, setDoc, serverTimestamp, where} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import {auth, db, storage} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import DefaultPic from '../../../public/nopic.png'
import { Loader2 } from "lucide-react"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const router = useRouter();
  const [image, setImage] = useState('');
  const [useruname, setUseruname] = useState('')
  const [fnameerror, setFnameError] = useState('')
  const [lnameerror, setLnameError] = useState('')
  const [emailerror, setEmailError] = useState('')
  const [perror, setPerror] = useState('')
  const [p1error, setP1error] = useState('')
  const [p2error, setP2error] = useState('')
  const [signuperror, setSignuperror] = useState('')
  const [unameempty, setUnameEmpty] = useState(false)
  const [unameerror, setUnameError] = useState('')
  const [unamegood, setUnameGood] = useState('')
  const [imageerror, setImageerror] = useState('')
  const [passwordvisible, setPasswordvisible] = useState(false)
  const [passwordvisible2, setPasswordvisible2] = useState(false)
  const [isChecked, setIschecked] = useState(true)
  const [checkerror, setCheckerror] = useState('')
  const [validateerror, setValidateerror] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if the Username Already Exists
    const checkUsername = async () => {
      const usersCollection = collection(db, 'usernames');
      const queryun = query(usersCollection, where('currentUsername', '==', useruname.toLowerCase()));
      // If the username input length is within range
      if (useruname.length > 3 && useruname.length < 21){
        const snap = await getDocs(queryun)
        // if the username exists
        if(snap.size > 0){
          setUnameError("Username Already Exists")
          setUnameGood("")
        }
        else {
          setUnameError('')
          setUnameGood("Username is available")
        }
      }
      // if the username field is empty
      else if (useruname.length == 0){
        setUnameError('')
        setUnameGood('')
      }
      // if the username length is our of range
      else {
        setUnameError("Username must be between 4 to 20 characters long")
        setUnameGood('')
      }
    }
    checkUsername()
  }, [useruname])

  const checkHandler = (event) => {
    const checked = event.target.checked
    setIschecked(checked)
    if (!checked) {
      setCheckerror("You must check the box to sign up")
    } else {
      setCheckerror('')
    }
  }

  const fnamecheck = () => {
    if (firstname.length < 1) {
      setFnameError("First name cannot be empty")
    } else {
      setFnameError('')
    }
  }

  const lnamecheck = () => {
    if (lastname.length < 1) {
      setLnameError("First name cannot be empty")
    } else {
      setLnameError('')
    }
  }

  const emailcheck = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (!emailRegex.test(email)) {
      setEmailError("Error! you have entered invalid email.");
    } else {
      setEmailError("");
    }
  }

  const usernamecheck = () => {
    if (useruname.length < 4 || useruname.length > 20) {
      setUnameEmpty(true)
    } else {
      setUnameEmpty(false)
    }
  }

  const passcheck = () => {
    if(password.length < 6) {
      setP1error("Password must be at least 6 characters long")
    } else {
      setP1error('')
    }
    passcomp()
  }

  const pass2check = () => {
    if(confirmpassword.length < 6) {
      setP2error("Password must be at least 6 characters long")
    } else {
      setP2error('')
    }
    passcomp()
  }

  const passcomp = () => {
    if (password == confirmpassword) {
      setPerror('')
    } else {
      setPerror("Passwords do not match")
    }
  }

  const validateform = () => {
    setLoading(true)
    fnamecheck()
    lnamecheck()
    emailcheck()
    usernamecheck()
    passcheck()
    pass2check()
    passcomp()
    setTimeout(() => {
      if (fnameerror.length==0 && firstname.length>0 && lnameerror.length==0 && lastname.length>0 && emailerror.length==0 && email.length>4 && p1error.length==0 && password.length>5 && p2error.length==0 && confirmpassword.length>5 && perror.length==0 && checkerror.length==0 && imageerror.length==0 && useruname.length>3 && unameempty==false && isChecked==true) {
        setValidateerror('')
        handleSignUp()
      }
      else {
        setLoading(false)
        setValidateerror("Complete the form")
      }
    }, 2000)
  }
  
  const handleSelectedFile = (files) => {
    if (files && files.size < 300000) {
      if (files.type == 'image/png' || files.type == 'image/jpg' || files.type == 'image/jpeg'){
        setImage(files)
        setImageerror('')
        // console.log(files)
      }
      else {
        setImageerror("Only png, jpg, or jpeg files are accepted")
      }
    } else {
      setImageerror('File size must be less than 300kb')
    }
  }

  // Upload selected profile picture to storage before calling handleSignup with the download URL
  const upload = (fname, lname, email, uname, uid) => {
    if (image) {
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
          // console.log(error)
        }, 
        () => {
          // Handle successful uploads on complete. For instance, get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
            handleCreate(fname, lname, email, uname, uid, downloadURL);
          });
        }
      )
    }
    else {
      setImageerror("Upload a picture")
    }
  }

  // Prepare data from Email SignUp to pass to handleCreate
  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const userobj = res.user
      await sendEmailVerification(userobj)
      const userid = res.user.uid
      const userunamelower = useruname.toLowerCase()

      if(image) {
        upload(firstname, lastname, email, userunamelower, userid)
      }
      else {
        handleCreate(firstname, lastname, email, userunamelower, userid, '')
      }
    } catch(e){
        setSignuperror(e.message)
        // console.error(e)
        setLoading(false)
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
      const gpicture = res.user.photoURL
      handleCreate(gfirstname, glastname, gemail, '', guserid, gpicture)
    } catch(e){
      setSignuperror(e.message)
      // console.error(e)
      setLoading(false)
    }
  };

  // Create User in the Firestore Users Collection
  const handleCreate = async(userfname, userlname, useremail, username, uid, upic) => {
    try {
      const defaultpic = "https://firebasestorage.googleapis.com/v0/b/dineintl.appspot.com/o/usersImages%2Fnopic.png?alt=media&token=4cb028c2-d7f0-4b57-89d5-cf7c34d94120"
      if(upic.length < 3) {
        upic = defaultpic
      }
      const docRef = await setDoc(doc(db, "users", uid), {
        createdAt: serverTimestamp(),
        fcmToken: '',
        firstName: userfname,
        lastName: userlname,
        userName: username,
        userEmail: useremail,
        userId: uid,
        userImage: upic,
        isProfilePublic: true,
        showMenus: true,
        showAllergies: true,
        showCuisines: true,
        showNutritionalBlocks: true,
        showDietPref: true,
        showFavRestaurants: true,
        groupsJoined: [],
        groupsPending: [],
        preferences: {cuisines: [], dietaryPreferences: [], foodAllergies: [], nutritionalBlocks: []},
      })

      // console.log("User Data: " + userfname, userlname, useremail, username, uid, upic)
      setEmail('');
      setPassword('');
      setConfirmpassword('');
      setFirstname('');
      setLastname('');
      setUseruname('')
      setImage('');
      if(upic.startsWith("https://lh3.googleusercontent.com")){router.push('/googleusername')}
      else{router.push('/purchaseplan')}
      return true
    } catch(e){
        // console.error(e)
        return false
    }
  };

  return (
    <div className="bg-white/50 dark:bg-black/80 flex items-center justify-center pt-36 text-sm pb-8 font-regular">
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-xl w-96">
        <div className="flex justify-between">
          <div></div>
          <div className='flex items-center justify-center h-28 w-28 mt-4 mb-8 rounded-full'>
            <Image className="" src={DefaultPic} width={80} height={80} alt="Profile Picture" />
          </div>
          <div></div>
        </div>
        <h1 className="font-bold text-black dark:text-white text-xl mb-2">Create an Account</h1>
        <p className="text-ddarkgrey dark:text-dgrey mb-5 text-xs">Sign up now to explore the app</p>
        
        <>
          <div className='flex flex-row gap-4'>
            <div>
              <div className='flex mb-2'>
                <span className='mr-2'>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.12187 8.1525C9.04687 8.145 8.95687 8.145 8.87437 8.1525C7.08937 8.0925 5.67188 6.63 5.67188 4.83C5.67187 2.9925 7.15688 1.5 9.00188 1.5C10.8394 1.5 12.3319 2.9925 12.3319 4.83C12.3244 6.63 10.9069 8.0925 9.12187 8.1525Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.36906 10.92C3.55406 12.135 3.55406 14.115 5.36906 15.3225C7.43156 16.7025 10.8141 16.7025 12.8766 15.3225C14.6916 14.1075 14.6916 12.1275 12.8766 10.92C10.8216 9.5475 7.43906 9.5475 5.36906 10.92Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <label htmlFor="firstname" className='text-sm text-black dark:text-white'>First Name</label>
              </div>
              <input 
                type="text" 
                id="firstname"
                name="firstname"
                aria-label='First Name'
                placeholder="First name" 
                value={firstname} 
                required
                onChange={(e) => setFirstname(e.target.value)} 
                onBlur={fnamecheck}
                className={fnameerror ? "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
              />
            </div>

            <div>
              <div className='flex mb-2'>
                <span className='mr-2'>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.12187 8.1525C9.04687 8.145 8.95687 8.145 8.87437 8.1525C7.08937 8.0925 5.67188 6.63 5.67188 4.83C5.67187 2.9925 7.15688 1.5 9.00188 1.5C10.8394 1.5 12.3319 2.9925 12.3319 4.83C12.3244 6.63 10.9069 8.0925 9.12187 8.1525Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.36906 10.92C3.55406 12.135 3.55406 14.115 5.36906 15.3225C7.43156 16.7025 10.8141 16.7025 12.8766 15.3225C14.6916 14.1075 14.6916 12.1275 12.8766 10.92C10.8216 9.5475 7.43906 9.5475 5.36906 10.92Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <label htmlFor="lastname" className='text-sm text-black dark:text-white'>Last Name</label>
              </div>
              <input 
                type="text" 
                id="lastname"
                name="lastname"
                aria-label='Last Name'
                placeholder="Last name" 
                value={lastname} 
                required
                onChange={(e) => setLastname(e.target.value)} 
                onBlur={lnamecheck}
                className={lnameerror ? "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
              />
            </div>
          </div>

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
            aria-label='Username'
            placeholder="Enter username" 
            value={useruname} 
            required
            onChange={(e) => setUseruname(e.target.value)} 
            onBlur={usernamecheck}
            className={unameempty==true ? "w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
          />
          {unameerror && <span className='text-red-600 text-xs mb-4'>{unameerror}</span>}
          {unamegood && <span className='text-dgreen text-xs mb-4'>{unamegood}</span>}

          <div className='flex mt-4 mb-2'>
            <span className='mr-2'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 15.3745H5.25C3 15.3745 1.5 14.2495 1.5 11.6245V6.37451C1.5 3.74951 3 2.62451 5.25 2.62451H12.75C15 2.62451 16.5 3.74951 16.5 6.37451V11.6245C16.5 14.2495 15 15.3745 12.75 15.3745Z" stroke="#A0A8B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.75 6.74951L10.4025 8.62451C9.63 9.23951 8.3625 9.23951 7.59 8.62451L5.25 6.74951" stroke="#A0A8B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <label htmlFor="email" className='text-sm text-black dark:text-white'>Email Address</label>
          </div>
          <input 
            type="email" 
            id="email"
            name="email"
            aria-label='Email Address'
            placeholder="Enter email" 
            value={email} 
            required
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={emailcheck}
            className={emailerror ? "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
          />

          <div className='flex mb-2'>
            <span className='mr-2'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.75 1.5 13.5 3.5175 13.5 6V7.5" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <label htmlFor="password" className='text-sm text-black dark:text-white'>Password</label>
          </div>
          <input 
            type={passwordvisible ? "text" : "password"}
            id="password"
            name="password"
            aria-label='Password'
            placeholder="Enter password" 
            value={password} 
            required
            onChange={(e) => setPassword(e.target.value)} 
            onBlur={passcheck}
            className={p1error ? "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
          />
          {passwordvisible==false && <span className='relative float-right -mt-11 mr-4' onClick={() => setPasswordvisible(true)}><FaEye/></span>}
          {passwordvisible==true && <span className='relative float-right -mt-11 mr-4' onClick={() => setPasswordvisible(false)}><FaEyeSlash/></span>}
          {p1error && <span className='text-red-600 text-xs mb-4 -mt-4'>{p1error}<br></br></span>}

          <div className='flex mb-2'>
            <span className='mr-2'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.75 1.5 13.5 3.5175 13.5 6V7.5" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <label htmlFor="confirmpassword" className='text-sm text-black dark:text-white'>Repeat Password</label>
          </div>
          <input 
            type={passwordvisible2==true ? "text" : "password"} 
            id="confirmpassword"
            name="confirmpassword"
            aria-label='Confirm Password'
            placeholder="Enter password" 
            value={confirmpassword} 
            required
            onChange={(e) => setConfirmpassword(e.target.value)} 
            onBlur={pass2check}
            className={p2error ? "w-full p-3 mb-4 bg-transparent rounded-xl outline outline-dred outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey" : "w-full p-3 mb-4 bg-transparent rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] lg:text-sm text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"}
          />
          {passwordvisible2==false && <span className='relative float-right -mt-11 mr-4' onClick={() => setPasswordvisible2(true)}><FaEye/></span>}
          {passwordvisible2==true && <span className='relative float-right -mt-11 mr-4' onClick={() => setPasswordvisible2(false)}><FaEyeSlash/></span>}
          {p2error && <span className='text-red-600 text-xs mb-4 -mt-4'>{p2error}<br></br></span>}
          {perror && <span className='text-red-600 text-xs mb-4 -mt-4'>{perror}<br></br></span>}

          <div className='flex mb-2 mt-2'>
            <span className='mr-2'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.12187 8.1525C9.04687 8.145 8.95687 8.145 8.87437 8.1525C7.08937 8.0925 5.67188 6.63 5.67188 4.83C5.67187 2.9925 7.15688 1.5 9.00188 1.5C10.8394 1.5 12.3319 2.9925 12.3319 4.83C12.3244 6.63 10.9069 8.0925 9.12187 8.1525Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.36906 10.92C3.55406 12.135 3.55406 14.115 5.36906 15.3225C7.43156 16.7025 10.8141 16.7025 12.8766 15.3225C14.6916 14.1075 14.6916 12.1275 12.8766 10.92C10.8216 9.5475 7.43906 9.5475 5.36906 10.92Z" stroke="#A0A8B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <label htmlFor="profilepicture" className='text-sm text-black dark:text-white'>Profile Picture</label>
          </div>
          <input 
            type="file"
            id="profilepicture"
            name="profilepicture"
            aria-label='Upload Profile Picture'
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => {handleSelectedFile(e.target.files[0])}} 
            className="w-full p-3 bg-white dark:bg-black rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
          />
          {imageerror && <span className='text-red-600 text-xs mb-6'>{imageerror}</span>}

          <div className="flex text-xs mt-4">
            <label htmlFor="checkboxLabel" className="flex cursor-pointer select-none text-black dark:text-white">
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkboxLabel"
                  name="checkboxLabel"
                  aria-label='Accept Terms and Conditions'
                  className="w-[16px] h-[16px] mr-4 mt-2"
                  checked={isChecked}
                  onChange={checkHandler}
                />
              </div>
              <span>
                By creating an account you agree to our
                <a href="/terms-and-conditions" className="text-dblue dark:text-dyellow underline">
                  {" "}
                  Terms and Conditions{" "}
                </a>
                and
                <a href="https://www.termsfeed.com/live/e70a25c5-a4d9-4666-9106-06971a074ffc" className="text-dblue dark:text-dyellow underline">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </span>
            </label>
          </div>
          {checkerror && <span className='text-red-600 text-xs mb-4'>{checkerror}</span>}

          <div className='flex items-center'>
            <button 
              id="signupButton"
              aria-label='Sign Up Button'
              onClick={validateform}
              className="w-full bg-transparent mt-8 p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white font-bold inline-flex justify-center items-center"
            >
              Sign Up
              {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </button>
          </div>
        </>
        {validateerror && <div className='w-full bg-dred/20 text-red-600 text-xs text-center p-4 my-4'><span>{validateerror}</span></div>}
        {signuperror=='Firebase: Error (auth/email-already-in-use).' && <div className='w-full bg-dred/20 text-red-600 text-xs text-center p-4 my-4'><span>Email already exists</span></div>}

        <div className="my-6 flex items-center justify-center">
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
          <p className="w-full px-5 text-center text-black dark:text-white">
            Or Sign Up With
          </p>
          <span className="hidden h-[1px] w-full max-w-[60px] bg-dblack dark:bg-dlightgreen sm:block"></span>
        </div>
        <div className='flex justify-center'>
          <button onClick={handleGoogleSignUp} className="" id="googleSignup" aria-label='Google Sign Up Button'>
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
          </button>
        </div>
        <p className="pt-6 text-center text-black dark:text-white">
          Already have an account?{" "}
          <Link href="/log-in" className="text-dblue dark:text-dyellow font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;