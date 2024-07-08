'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {collection, doc, addDoc, updateDoc, getDoc, getDocs, query, setDoc, serverTimestamp, where} from "firebase/firestore"
import {db} from '@/app/firebase/config'
import parse from "html-react-parser";
import { usePathname, useRouter } from 'next/navigation';
import styles from "./page.module.css";

export async function getStaticPaths() {
  const response = await getDocs(collection(db, "blogposts"))
  console.log(response)
  const blogs = response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.blogSlug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log("Parameter: " + params.slug)
  var respost = ''
  // const oneblog = await getDoc(doc(db, "blogposts", params.slug))
  await getDoc(doc(db, "blogposts", params.slug)).then((docSnap) => {
    if (docSnap.exists()) {
      respost = docSnap.data()
    }
  })
  return {
    props: {
      post: respost,
    },
  }
}

export default function BlogPost ({post}) {
  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')
  // const [content, setContent] = useState('')
  // const [loading, setLoading] = useState(false)
  // const pathname = usePathname()
  const router = useRouter()
  // const newpathname = pathname.split("/")[2]

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     await getDoc(doc(db, "blogposts", newpathname)).then(docSnap => {
  //       if (docSnap.exists()) {
  //         const postdata = docSnap.data()
  //         setTitle(postdata.blogTitle)
  //         setDate(postdata.createdAt)
  //         setContent(postdata.blogContent)
  //       }
  //       else {
  //         router.push('/blog')
  //       }
  //     })
  //   }
  //   fetchPost()
  // }, [])

  // if (router.isFallback) {
  //   return <div>loading...</div>
  // }
    
  return (
    <div className='bg-white dark:bg-dblack px-8 md:px-16 text-black dark:text-dgrey font-regular'>
        
      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">{post}</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center py-8'>
        <h3 className='font-heading text-3xl mb-6 text-dbluew dark:text-dgreen'>{post}</h3>
        {/* <div className={styles.blogcontent}>{parse(post.blogContent)}</div> */}
      </div>
    </div>
  )
}
