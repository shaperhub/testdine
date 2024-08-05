'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { collection, doc, getDoc, getDocs, deleteDoc } from "firebase/firestore"
import { auth, db } from '@/app/firebase/config'
import parse from "html-react-parser"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import styles from "./page.module.css"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

const Blog = () => {
  const [user, setUser] = useState("")
  const [blogeditor, setBlogeditor] = useState(false)
  const [blogfullaccess, setBlogfullaccess] = useState(false)
  const [posts, setPosts] = useState([])
  const [onepost, setOnepost] = useState('')
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [postexists, setPostexists] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const postid = searchParams.get("post")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user) {
        setUser(user)
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
            if (userdata.blogEditor == true) {
              setBlogeditor(true)
              if (userdata.blogFullAccess == true) {
                setBlogfullaccess(true)
              }
            }
          }
        })
      }   
      checkexist()
    }
  }, [user])

  useEffect(() => {
    if(postid) {
      const fetchPost = async () => {
        await getOnePost(postid)
        const allposts = await getPosts()
        setRelatedPosts(getRandomPosts(allposts, 2, postid))
        setLoading(false)
      }
      fetchPost()
    } else {
      const fetchBlogs = async () => {
        const allposts = await getPosts()
        setPosts(allposts)
        setLoading(false)
      }
      fetchBlogs()
    }
  }, [postid])

  const getPosts = async () => {
    const blogCollection = collection(db, 'blogposts')
    const blogposts = await getDocs(blogCollection)
    const blogs = blogposts.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    if(blogs.length === 0) {
      return []
    } else {
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
      } else {
        setPostexists(false)
        router.push('/errorpage')
      }
    })
  }

  const getRandomPosts = (allPosts, numberOfPosts, slug) => {
    const filteredPosts = allPosts.filter(post => post.id !== slug)
    let shuffled = filteredPosts.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, numberOfPosts)
  }

  const extractExcerpt = (htmlString) => {
    const text = htmlString.replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    const words = text.split(/\s+/) // Split the text into words
    const first30Words = words.slice(0, 30).join(" ") // Get the first 30 words
    return first30Words
  }

  const deletePost = async (postId) => {
    await deleteDoc(doc(db, "blogposts", postId)).then(() => {
      window.location.reload()
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

      {loading && 
        <div className="pt-24 flex flex-wrap items-center justify-center bg-white dark:bg-black">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
        </div>
      }
      
      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-16 px-8 md:px-24 lg:px-36 bg-white/80 dark:bg-black/90">
        <div className="">
          <h2 className="mb-8 text-xl md:text-2xl lg:text-4xl mt-20 font-heading text-center text-dblue dark:text-dgrey">{loading==false && posts.length===0 && !postid && "No blog posts yet"}</h2>
          {blogeditor && !postid && <Link href="/create-blog" alt="Create Blog Link" className="py-8 text-center underline text-dbluew dark:text-dyellow">Create Blog Post</Link>}

          {posts && 
            <div className='grid grid-cols-1 md:grid-cols-2 lgbox:grid-cols-3 gap-4 lg2100:gap-12 pb-8 place-content-center'>
              {posts.map(post => (
                <div key={post.id}>
                  <div className='pt-8 pb-4 max-w-[400px]'>
                    {blogfullaccess && 
                      <div className='mb-4'>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive">Delete</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the blog post.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => {deletePost(post.id)}}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    }
                    <Image className='h-60 w-96 rounded-xl' src={post.image} width={400} height={300} alt={post.title} />
                    <h3 className='font-heading text-2xl text-dbluew dark:text-dgreen my-2'>{post.title}</h3>
                    <div>{extractExcerpt(post.content)}</div>
                    <a href={`/blog/?post=${post.slug}`} className=''>
                      <button className='bg-transparent mt-4 p-3 hover:bg-dblue hover:text-white rounded-xl outline outline-2 text-dbluew dark:text-white'>Read More</button>
                    </a>
                  </div>
                </div>
              ))}
            </div> 
          }

          {onepost && 
            <div className='text-black dark:text-dgrey text-sm lg:text-base max-w-[800px]'>
              <div className='mb-8 flex justify-center'>
                <Image src={onepost.image} width={500} height={300} alt={onepost.title} />
              </div>
              <div className={styles.blogcontent}>
                {parse(onepost.content)}
              </div>
              <hr className='h-1 bg-ddarkgrey dark:bg-dgrey my-8'></hr>
              <div>
                <p className='font-heading text-dblack dark:text-white text-2xl mt-8'>Related Posts</p>
                <div className='related flex flex-col md:flex-row gap-8'>
                  {relatedPosts?.map(post => (
                    <div key={post.id} className='pt-8 pb-4 max-w-[320px]'>
                      <a href={`/blog/?post=${post.slug}`} className=''>
                        <Image className='h-48 w-96 rounded-xl' src={post.image} width={400} height={200} alt={post.title} />
                        <h3 className='font-heading text-xl text-dbluew dark:text-dgreen my-2'>{post.title}</h3>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Blog
