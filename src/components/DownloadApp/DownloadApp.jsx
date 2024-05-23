import Link from 'next/link'
import Image from 'next/image'
import IosApp from "../../../public/appstore.png"
import AndroidApp from "../../../public/googleplay.png"
import DownPic from "../../../public/DownloadPic.png"

const DownloadApp = () => {
  return (
    <div className='flex flex-col md:flex-row gap-16 p-8 md:p-16 lg:p-20 2xl:justify-center bg-dlightgreen dark:bg-dlightblack text-black dark:text-dgrey'>
        <div className='flex flex-col justify-center'>
            <div className=''>
                <h6 className='font-heading text-2xl md:text-3xl mb-6'>Discover a world of personalized dining experiences at your command.</h6>
            </div>
            <div className='flex'>
                <Link href="" className='mb-4 mr-4'>
                    <Image className='' src={IosApp} width={120} height={30} alt='IOS App Download Icon' quality={100} />
                </Link>
                <Link href="" className='mb-4'>
                    <Image className='' src={AndroidApp} width={135} height={40} alt='Android App Download Icon' quality={100} />
                </Link>
            </div>
        </div>
        <div className='hidden lg:flex justify-end'>
            <Image className='' src={DownPic} width={450} height={500} alt='Download the app today' />
        </div>
    </div>
  )
}

export default DownloadApp