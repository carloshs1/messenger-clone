'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { unstable_getServerSession } from 'next-auth/next'

const Providers: React.FC<{
 children: React.ReactNode
 session: Awaited<ReturnType<typeof unstable_getServerSession>>
}> = ({ children, session }) => {
 return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Providers
