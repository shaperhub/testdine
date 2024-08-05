'use client'
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import { getCheckoutUrl, getPortalUrl } from "../user-profile/payment"
import { auth } from '@/app/firebase/config'
import { signInWithCustomToken } from "firebase/auth"

export default function Sendtoweb() {
  const [user, setUser] = useState('')
  const [newerror, setNewerror] = useState('')
  const [loading, setLoading] = useState(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const applink = searchParams.get("request")

  useEffect(() => {
    const getsignin = async() => {
      if (!token || !applink) {
        setNewerror("Missing Token or Request")
      }
        
      else if (token && applink) {
        try {
          await signInWithCustomToken(auth, token).then((userCredential) => {
            setUser(userCredential.user)
            console.log("Sign in with custom token...")
            setTimeout(() => {
              if (applink == "tastestarter"){
                setLoading(true)
                upgradeToTasteStarter()
              }
              else if (applink == "cuisinecrafter"){
                setLoading(true)
                upgradeToCuisineCrafter()
              }
              else if (applink == "cuisinecraftertrial"){
                setLoading(true)
                tryCuisineCrafter()
              }
              else if (applink == "epicureanelite"){
                setLoading(true)
                upgradeToEpicurean()
              }
              else if (applink == "epicureanelitetrial"){
                setLoading(true)
                tryEpicurean()
              }
              else if (applink == "portal"){
                setLoading(true)
                manageSubscription()
              }
              else if (applink == "purchaseplan"){
                setLoading(true)
                router.push('/purchaseplan')
              }
              else {
                setLoading(false)
                setNewerror("Invalid Request")
              }
            }, 1000)
          })
        } catch(error) {
          setLoading(false)
          setNewerror(error.message)
          console.error(error.message)
        }
      }
    }
    
    getsignin()
  }, [])

  const manageSubscription = async () => {
    const portalUrl = await getPortalUrl()
    router.push(portalUrl)
  }

  const upgradeToTasteStarter = async () => {
    const priceId = process.env.NEXT_PUBLIC_TASTE
    const checkoutUrl = await getCheckoutUrl(priceId)
    router.push(checkoutUrl)
  }
  
  const upgradeToCuisineCrafter = async () => {
    const priceId = process.env.NEXT_PUBLIC_CUISINE
    const checkoutUrl = await getCheckoutUrl(priceId)
    router.push(checkoutUrl)
  }

  const tryCuisineCrafter = async () => {
    const priceId = process.env.NEXT_PUBLIC_CUISINE
    const checkoutUrl = await getCheckoutUrl(priceId, 7)
    router.push(checkoutUrl)
  }

  const upgradeToEpicurean = async () => {
    const priceId = process.env.NEXT_PUBLIC_EPICUREAN
    const checkoutUrl = await getCheckoutUrl(priceId)
    router.push(checkoutUrl)
  }

  const tryEpicurean = async () => {
    const priceId = process.env.NEXT_PUBLIC_EPICUREAN
    const checkoutUrl = await getCheckoutUrl(priceId, 7)
    router.push(checkoutUrl)
  }

  return (
    <div className="bg-white/50 dark:bg-black/80 min-h-screen pt-24 flex items-center justify-center text-sm font-regular">
      <div className="flex flex-col items-center">
        <button className="mt-2 px-4 py-2 bg-dbluew hover:bg-blue-500 text-white rounded inline-flex items-center">
          {loading==true ? 
            <div className="inline-flex items-center"><span>Processing Request...</span><Loader2 className="ml-2 h-4 w-4 animate-spin" /></div>
            : loading==false ?
            <span>Request Failed</span>
            :
            <span>Welcome</span>
          }
        </button>
        <div>
          {newerror=='Firebase: Error (auth/invalid-custom-token).' && <p className="text-dred text-sm my-2 text-center">Invalid Credentials</p>}
          {newerror=='Firebase: Invalid assertion format. 3 dot separated segments required. (auth/invalid-custom-token).' && <p className="text-dred text-sm my-2 text-center">Invalid Credentials</p>}
        </div>
      </div>
    </div>
  )
}
