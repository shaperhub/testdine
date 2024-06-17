'use client'

import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogClose, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import IosApp from "../../../public/appstore.png"
import AndroidApp from "../../../public/googleplay.png"
import { useEffect, useState } from "react"

const Success = () => {
    const [modalopen, setModalopen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setModalopen(true)
        }, 3000)
    }, [])

  return (
    <div className="bg-white/50 dark:bg-black/80 min-h-screen pt-24 flex items-center justify-center text-sm font-regular">
        <div>
            <p>Payment Successful</p>
            <Dialog open={modalopen}>
                {/* <DialogTrigger asChild>
                    <button className='mt-2 text-dgreenw dark:text-dgreen underline text-center'>Get Subscription</button>
                </DialogTrigger> */}
                <DialogContent className="sm:max-w-[425px] pt-12">
                    <div className='flex flex-col justify-center items-center lgxl:max-w-[500px]'>
                        <div className=''>
                            <h2 className='font-heading text-2xl md:text-3xl mb-6'>Download the App</h2>
                        </div>
                        <div className='flex'>
                            <Link href="" className='mb-4 mr-4'>
                                <Image className='' src={IosApp} width={120} height={30} alt='DineIntel IOS App Download Icon' quality={100} />
                            </Link>
                            <Link href="" className='mb-4'>
                                <Image className='' src={AndroidApp} width={135} height={40} alt='DineIntel Android App Download Icon' quality={100} />
                            </Link>
                        </div>
                    </div>
                    <DialogFooter className="justify-center">
                        <DialogClose asChild className="">
                            <Button type="button" variant="secondary" className="" onClick={() => {setModalopen(false)}}>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default Success