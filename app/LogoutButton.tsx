'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

const LogoutButton: React.FC = () => {
 return (
  <button
   className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
   onClick={() => signOut()}
  >
   Sign out
  </button>
 )
}

export default LogoutButton
