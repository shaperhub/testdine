import Link from 'next/link'
import Image from 'next/image'
import IosApp from "../../../public/appstore.png"
import AndroidApp from "../../../public/googleplay.png"
import DownPic from "../../../public/DownloadPic.png"

const DownloadApp = () => {
  return (
    <div className='flex flex-col md:flex-row gap-16 p-16 lg:p-20 2xl:justify-center bg-dgreenw dark:bg-dlightblack text-white dark:text-dgrey rounded-[32px]'>
        <div className='flex flex-col'>
            <h6 className='font-heading text-2xl mb-2 dark:text-white'>Download the App Today!</h6>
            <p className='font-regular mb-4'>Explore beautiful and delectable restaurants like never before</p>
            <div className='flex'>
                <Link href="" className='mb-4 mr-4'>
                    <Image className='' src={IosApp} width={120} height={30} alt='' quality={100} />
                </Link>
                <Link href="" className='mb-4'>
                    <Image className='' src={AndroidApp} width={135} height={40} alt='' quality={100} />
                </Link>
            </div>
        </div>
        <div className='hidden lg:flex justify-end -mt-32'>
            <Image className='' src={DownPic} width={450} height={500} alt='Download the app today' />
        </div>
    </div>
  )
}

export default DownloadApp