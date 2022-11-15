'use client'

import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

const SignInComponent: React.FC<{
 providers: Awaited<ReturnType<typeof getProviders>>
}> = ({ providers }) => {
 providers?.facebook
 return (
  <div>
   {Object.values(providers!).map((provider) => (
    <div key={provider.name}>
     <button
      onClick={() =>
       signIn(provider.id, {
        callbackUrl: process.env.VERCEL_URL || 'http://localhost:3000',
       })
      }
     >
      Sign in with {provider.name}
     </button>
    </div>
   ))}
  </div>
 )
}

export default SignInComponent
