import Link from 'next/link'
import Image from 'next/image'
import IosApp from "../../../public/appstore.png"
import AndroidApp from "../../../public/googleplay.png"
import AppShot from "../../../public/AppShot.png"

const DownloadApp = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-16 px-8 md:px-24 lgmd:px-32 p-8 md:p-16 lg:p-20 2xl:justify-center bg-transparent text-dbluew dark:text-dlightblue font-heading'>
        <div className='flex flex-col justify-center lgxl:max-w-[500px]'>
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
        <div className='lg:flex justify-end lg:max-h-[200px] lgmd:max-h-[300px] lg1440:max-h-[500px]'>
            <Image className='' src={AppShot} width={300} height={300} alt='DineIntel Screenshot' />
        </div>
    </div>
  )
}

export default DownloadApp