'use client'
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import {collection, doc, addDoc, updateDoc, getDocs, query, setDoc, serverTimestamp, where} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import {auth, db, storage} from '@/app/firebase/config'
import { Plus } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    
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
      setTitle(newTitle);
      const autoSlug = generateSlug(newTitle);
      setSlug(autoSlug);
    }

    // const handleSelectedFile = (files) => {
    //     if (files && files.size < 300000) {
    //       if (files.type == 'image/png' || files.type == 'image/jpg' || files.type == 'image/jpeg'){
    //         setImage(files)
    //         setImageerror('')
    //         console.log(files)
    //       }
    //       else {
    //         setImageerror("Only png, jpg, or jpeg files are accepted")
    //       }
    //     } else {
    //       setImageerror('File size must be less than 300kb')
    //     }
    // }
    
    // const upload = () => {
    //     if (image) {
    //       const storageRef = ref(storage, `usersImages/${image.name}`);
    //       const uploadTask = uploadBytesResumable(storageRef, image)
    //       uploadTask.on('state_changed', 
    //         (snapshot) => {
    //           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log('Upload is ' + progress + '% done');
    //           switch (snapshot.state) {
    //             case 'paused':
    //               console.log('Upload is paused');
    //               break;
    //             case 'running':
    //               console.log('Upload is running');
    //               break;
    //           }
    //         }, 
    //         (error) => {
    //           console.log(error)
    //         }, 
    //         () => {
    //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //             handleSubmit(downloadURL);
    //           });
    //         }
    //       )
    //     }
    //     else {
    //       setImageerror("Upload a picture")
    //     }
    // }    

    const handleSubmit = async() => {
      // e.preventDefault();
      await setDoc(doc(db, "blogposts", slug), {
        createdAt: serverTimestamp(),
        blogTitle: title,
        blogSlug: slug,
        blogDescription: description,
        blogContent: content,
      })
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

    return (
      <div className="bg-white/50 dark:bg-black/80 flex items-center justify-center pt-36 pb-8 font-regular">
        <div className="">
            <h2 className="text-4xl text-center font-semibold py-4">
            Amazing Rich Text Editor (WYSIWYG)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-4">
            {/* Blog Editor */}
            <div className="w-full max-w-3xl p-5 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
                <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
                Blog Editor
                </h2>
                <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    {/* Title */}
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                    >
                        Blog Title
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleTitle}
                        type="text"
                        value={title}
                        name="title"
                        id="title"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                        placeholder="Type the Course title"
                        />
                    </div>
                    </div>
                    {/* Slug */}
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="slug"
                        className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                    >
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
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                        placeholder="Type the Course title"
                        />
                    </div>
                    </div>
                    {/* Description */}
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog Description
                    </label>
                    <textarea
                        id="description"
                        rows="4"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
                        placeholder="Write your thoughts here..."
                    ></textarea>
                    </div>
                    {/* Content */}
                    <div className="sm:col-span-2">
                    <label
                        htmlFor="content"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog Content
                    </label>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        modules={modules}
                        formats={formats}
                    />
                    </div>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Create Blog Post</span>
                </button>
                </form>
            </div>
    
            {/* Blog View */}
            <div className=" blog-view w-full max-w-3xl p-8 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
                <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
                Blog View
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Title */}
                <div className="sm:col-span-2">
                    <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-2 ">
                    Blog Title
                    </h2>
                    <div className="mt-2">
                    <p className="text-2xl font-bold">{title}</p>
                    </div>
                </div>
                {/* Slug */}
                <div className="sm:col-span-2">
                    <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-2 ">
                    Blog Slug
                    </h2>
                    <div className="mt-2">
                    <p>{slug}</p>
                    </div>
                </div>
                {/* Description */}
                <div className="sm:col-span-2">
                    <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Blog Description
                    </h2>
                    <p>{description}</p>
                </div>
                <div className="sm:col-span-full">
                    <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Blog Content
                    </h2>
                    {parse(content)}
                    {/* {content} */}
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  
}

export default CreateBlog