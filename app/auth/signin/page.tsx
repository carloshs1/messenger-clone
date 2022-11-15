import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

const SignInPage = async () => {
 const providers = await getProviders()
 return (
  <div className="flex flex-col justify-center items-center space-y-10 min-h-[600px]">
   <div>
    <Image
     src="https://seeklogo.com/images/F/facebook-messenger-new-2020-logo-30E9B0E51B-seeklogo.com.png"
     alt="Profile Picture"
     width={250}
     height={250}
     className="mx-2 object-covers"
    />
   </div>
   <SignInComponent providers={providers} />
  </div>
 )
}

export default SignInPage
