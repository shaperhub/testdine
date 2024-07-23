'use client'
import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { auth, db, storage } from '@/app/firebase/config'
import { Plus } from "lucide-react";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";

const CreateBlog = () => {
    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), {ssr: false}),[],);
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    const [image, setImage] = useState("");
    const [imageerror, setImageerror] = useState("");
    const [titleerror, setTitleerror] = useState("");
    const [contenterror, setContenterror] = useState("");
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if(user) {
            setUser(user)
            setLoading(false)
          }
          else {
            router.push('/log-in')
          }
        });    
        return () => unsubscribe();
    }, [])
    
    // useEffect(() => {
    //   if (user) {
    //     const checkexist = async() => {
    //       await getDoc(doc(db, "users", user.uid)).then(docSnap => {
    //         if (docSnap.exists()) {
    //           const userdata = docSnap.data()
    //           if (userdata.blogEditor == true) {
    //             setLoading(false)
    //           }
    //           else {
    //             router.push('/log-in')
    //           }
    //         }
    //       })
    //     }   
    //     checkexist();
    //   }
    // }, [user])

    const generateSlug = (title) => {
        const slug = title
          .toLowerCase() // Convert the title to lowercase
          .replace(/\s+/g, "-") // Replace spaces with dashes
          .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
          .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
          .replace(/^\-+/, "") // Remove dashes from the beginning
          .replace(/\-+$/, ""); // Remove dashes from the end
        return slug;
    }

    const handleTitle = (e) => {
      const newTitle = e.target.value;
      const finalTitle = newTitle.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      setTitle(finalTitle);
      const autoSlug = generateSlug(newTitle);
      setSlug(autoSlug);
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
    
    const upload = () => {
        if (image && title && content) {
          const storageRef = ref(storage, `blogImages/${image.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image)
          uploadTask.on('state_changed', 
            (snapshot) => {
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
              console.log(error)
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                handleSubmit(downloadURL);
              });
            }
          )
        }
        else {
          if (!image){setImageerror("Upload a picture")}
          if (!title){setTitleerror("Add a Title")}
          if (!content){setContenterror("Add Blog Content")}
        }
    }    

    const handleSubmit = async(imageurl) => {
      try {
        setLoading2(true)
        await setDoc(doc(db, "blogposts", slug), {
            createdAt: serverTimestamp(),
            title: title,
            slug: slug,
            image: imageurl,
            content: content,
        }).then(() => {
          // console.log("Blog Data: " + slug, title, imageurl)
            setTimeout(() => {
                router.push(`/blog/?post=${slug}`)
            }, 2000)
        })
      } catch(error) {
        setLoading2(false)
      }
    }
  
    //Custom Tool Bar
    const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "color", "image"],
        [{ "code-block": true }],
        ["clean"],
      ],
    };

    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "indent",
      "image",
      "code-block",
      "color",
    ];

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
      <div className="bg-white/50 dark:bg-black text-black dark:text-white flex items-center justify-center pt-36 pb-8">
        <div className="">
            <h1 className="text-4xl text-center font-heading py-4">
                Create Blog Post
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-4">
                {/* Blog Editor */}
                <div className="w-full max-w-3xl p-5 my-6 bg-white dark:bg-dblack border border-gray-200 rounded-lg shadow mx-auto">
                    <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
                        Blog Editor
                    </h2>
                    <>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            {/* Title */}
                            <div className="sm:col-span-2">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 mb-2 ">
                                    Blog Title
                                </label>
                                <div className="mt-2">
                                    <input
                                    onChange={handleTitle}
                                    type="text"
                                    value={title}
                                    name="title"
                                    id="title"
                                    className="block w-full dark:bg-dblack rounded-md border-0 py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbluew sm:text-sm sm:leading-6"
                                    placeholder="Enter Blog Title"
                                    />
                                </div>
                                {titleerror && <span className='text-red-600 text-sm mb-6'>{titleerror}</span>}
                            </div>
                            {/* Slug */}
                            <div className="sm:col-span-2">
                                <label htmlFor="slug" className="block text-sm font-medium leading-6 mb-2">
                                    Blog Slug
                                </label>
                                <div className="mt-2">
                                    <input
                                    onChange={(e) => setSlug(e.target.value)}
                                    type="text"
                                    value={slug}
                                    name="slug"
                                    id="slug"
                                    autoComplete="slug"
                                    className="block w-full dark:bg-dblack rounded-md border-0 py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbluew sm:text-sm sm:leading-6"
                                    placeholder="Blog Slug"
                                    />
                                </div>
                            </div>
                            {/* Blog Image */}
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium">
                                    Blog Image
                                </label>
                                <input
                                    type="file"
                                    id="blogimage"
                                    name="blogimage"
                                    aria-label='Upload Blog Image'
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={(e) => {handleSelectedFile(e.target.files[0])}} 
                                    className="w-full p-3 rounded-xl outline outline-dlightblue/20 dark:outline-dlightblack outline-1 text-[16px] text-black dark:text-white placeholder-dgrey dark:placeholder-ddarkgrey"
                                />
                                {imageerror && <span className='text-red-600 text-sm mb-6'>{imageerror}</span>}
                            </div>
                            {/* ReactQuill Editor */}
                            <div className="sm:col-span-2">
                                <label htmlFor="content" className="block mb-2 text-sm font-medium">
                                    Blog Content
                                </label>
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                    modules={modules}
                                    formats={formats}
                                />
                                {contenterror && <span className='text-red-600 text-sm mb-6'>{contenterror}</span>}
                            </div>
                        </div>
                        <button
                            onClick={upload}
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-dbluew dark:bg-dblue rounded-lg hover:bg-dgreenw dark:hover:bg-dgreen"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            <span>Create Blog Post</span>
                            {loading2 && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                        </button>
                    </>
                </div>
        
                {/* Blog Preview */}
                <div className=" blog-view w-full max-w-3xl p-8 my-6 bg-white dark:bg-dblack border border-gray-200 rounded-lg shadow mx-auto">
                    <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
                        Blog Preview
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <div className="mt-2">
                                <p className="text-2xl font-bold">{title}</p>
                            </div>
                        </div>
                        <div className="sm:col-span-full">
                            <div className={styles.blogcontent}>
                                {parse(content)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  
}

export default CreateBlog