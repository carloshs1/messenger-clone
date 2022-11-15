import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

const SignInPage = async () => {
 const providers = await getProviders()
 return (
  <div>
   <div>
    <Image
     src="https://seeklogo.com/images/F/facebook-messenger-new-2020-logo-30E9B0E51B-seeklogo.com.png"
     alt="Profile Picture"
     width={400}
     height={400}
     className="mx-2 object-covers"
    />
   </div>
   <SignInComponent providers={providers} />
  </div>
 )
}

export default SignInPage
