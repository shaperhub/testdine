'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams, redirect } from "next/navigation"
import { collection, doc, addDoc, updateDoc, getDoc, getDocs, query, setDoc, serverTimestamp, where } from "firebase/firestore"
import { db } from '@/app/firebase/config'
import parse from "html-react-parser"
import { Loader2 } from "lucide-react"
import styles from "./page.module.css"

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [onepost, setOnepost] = useState('')
  const [loading, setLoading] = useState(null)
  const [postexists, setPostexists] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const postid = searchParams.get("post")

  useEffect(() => {
    if(postid) {
      const fetchPost = async () => {
        await getOnePost(postid)
      }
      fetchPost()
    }
    else {
      const fetchBlogs = async () => {
        const allposts = await getPosts()
        setPosts(allposts)
      }
      fetchBlogs()
    }
  }, [])

  const getPosts = async () => {
    const blogCollection = collection(db, 'blogposts')
    const blogposts = await getDocs(blogCollection)
    const blogs = blogposts.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    if(blogs.length === 0) {
      return
    }
    else {
      return blogs
    }
  }

  const getOnePost = async (url) => {
    const blogPostCollection = doc(db, 'blogposts', url)
    await getDoc(blogPostCollection).then(docSnap => {
      if (docSnap.exists()) {
        const blog = docSnap.data()
        setOnepost(blog)
        setPostexists(true)
        // console.log("Post Details: " + onepost)
      }
      else {
        setPostexists(false)
        router.push('/errorpage')
      }
    })
  }

  return (
    <div className='bg-white dark:bg-dblack text-black dark:text-dgrey font-regular'>
        
      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">{postexists ? onepost.title : "Blog"}</h1>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-36 px-8 md:px-24 bg-white/80 dark:bg-black/90">
        <div className="">
          <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 font-heading text-center text-dblue dark:text-dgrey">{!posts && "No blog posts yet"}</h2>

          {posts && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8'>
              {posts.map(post => (
                <div key={post.id}>
                  <div>
                    <h3>{post.title}</h3>
                    <div>{parse(post.content)}</div>
                    <a href={`/blog/?post=${post.slug}`} className='text-dred'>
                      <button className=''>Read More</button>
                    </a>
                  </div>
                </div>
              ))}
            </div> 
          }

          {onepost && 
            <div className=''>
              <div className='mb-8'><img src={onepost.image} alt={onepost.title} /></div>
              <div className='blogcontent'>{parse(onepost.content)}</div>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Blog