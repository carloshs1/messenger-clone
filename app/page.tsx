import React from 'react'
import { MessageType } from '../typings'
import ChatImput from './ChatImput'
import MessageList from './MessageList'
import { unstable_getServerSession } from 'next-auth/next'
import Providers from './Providers'

const HomePage = async () => {
 const { messages }: { messages: MessageType[] } = await fetch(
  `${process.env.VERCEL_URL || 'http://localhost:3000/'}/api/get-messages`
 ).then((res) => res.json())
 const session = await unstable_getServerSession()
 return (
  <Providers session={session}>
   <main>
    <MessageList initialMessages={messages} />
    <ChatImput session={session} />
   </main>
  </Providers>
 )
}

export default HomePage
