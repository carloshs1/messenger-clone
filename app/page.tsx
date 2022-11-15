import React from 'react'
import { MessageType } from '../typings'
import ChatImput from './ChatImput'
import MessageList from './MessageList'

const HomePage = async () => {
 const { messages }: { messages: MessageType[] } = await fetch(
  `${process.env.VERCEL_URL || 'http://localhost:3000/'}/api/get-messages`
 ).then((res) => res.json())
 return (
  <main>
   <MessageList initialMessages={messages} />
   <ChatImput />
  </main>
 )
}

export default HomePage
