'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {collection, doc, addDoc, updateDoc, getDocs, query, setDoc, serverTimestamp, where} from "firebase/firestore"
import {auth, db, storage} from '@/app/firebase/config'
import parse from "html-react-parser";


const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const allposts = await getPosts()
      setPosts(allposts)
    }
    fetchBlogs()
  }, [])

  const getPosts = async () => {
    const blogCollection = collection(db, 'blogposts')
    const blogposts = await getDocs(blogCollection)
    const blogs = blogposts.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return blogs
  }

  return (
    <div className='bg-white dark:bg-dblack px-8 md:px-16 text-black dark:text-dgrey font-regular'>
        
      {/* Hero */}
      <div className="bg-aboutbg bg-cover bg-center">
        <div className="flex flex-col text-center items-center px-4 md:px-36 xl:px-48 pt-40 pb-16 md:pt-60 md:pb-40 backdrop-brightness-50 backdrop-blur-sm">
          <h1 className="font-heading text-2xl md:text-4xl text-center text-white">Blog</h1>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-36 px-8 md:px-24 bg-white/80 dark:bg-black/90">
        <div className="">
          <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 font-heading text-center text-dblue dark:text-dgrey">No blog posts yet</h2>
        </div>
      </div>

      {posts.map(post => (
        <div key={post.id} className='grid grid-cols-1 md:grid-cols-2 lgxl:grid-cols-3 gap-4'>
          <h3>{post.blogTitle}</h3>
          <div>{parse(post.blogContent)}</div>
        </div>
      ))}

    </div>
  )
}

export default Blog