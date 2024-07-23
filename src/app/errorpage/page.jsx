import Image from "next/image"
import Notfound from "../../../public/NoSearchResults.png"

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-36 pb-16 bg-white/80 dark:bg-black/80 font-regular text-center">
        <div>
            <div className="flex justify-center">
                <Image className="mb-8" src={Notfound} width={300} height={300} alt="Page Not Found" quality={100} />
            </div>
            <p className="mb-4 font-heading text-2xl text-dgreenw dark:text-dgreen">Page Not Found</p>
            <p className="mb-4 text-ddarkgrey dark:text-dgrey">We could not locate the resource you requested</p>
        </div>
    </div>
  )
}
