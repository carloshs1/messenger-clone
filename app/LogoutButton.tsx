'use client'
import React from 'react'

const LogoutButton: React.FC = () => {
 return (
  <button
   className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
   onClick={() => console.log('sign out')}
  >
   Sign out
  </button>
 )
}

export default LogoutButton
