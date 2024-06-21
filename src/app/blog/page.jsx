import Image from "next/image";

const Blog = () => {
  return (
    <div className='text-ddarkgrey dark:text-dgrey font-regular'>
        
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
    </div>
  )
}

export default Blog