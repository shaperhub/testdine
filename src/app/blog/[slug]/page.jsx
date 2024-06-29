'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {collection, doc, addDoc, updateDoc, getDoc, getDocs, query, setDoc, serverTimestamp, where} from "firebase/firestore"
import {db} from '@/app/firebase/config'
import parse from "html-react-parser";
import { notFound, usePathname } from 'next/navigation';

const BlogPost = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    // const [image, setImage] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()
    const newpathname = pathname.split("/")[2]

    useEffect(() => {
        console.log("Pathname slug: " + newpathname)
        const fetchPost = async () => {
            await getDoc(doc(db, "blogposts", newpathname)).then(docSnap => {
                if (docSnap.exists()) {
                  const postdata = docSnap.data()
                  setTitle(postdata.blogTitle)
                  setDate(postdata.createdAt)
                //   setImage(postdata.blogImage)
                  setContent(postdata.blogContent)
                }
                else {
                    notFound()
                }
            })
        }
        fetchPost()
    }, [])
    
  return (
    <div className='bg-white dark:bg-dblack px-8 md:px-16 text-black dark:text-dgrey font-regular'>
        
        {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">{title}</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center py-8'>
        <h3 className='font-heading text-3xl mb-6 text-dbluew dark:text-dgreen'>{title}</h3>
        <div className='font-regular text-black dark:text-dgrey mb-8'>{parse(content)}</div>
      </div>
    </div>
  )
}

export default BlogPost