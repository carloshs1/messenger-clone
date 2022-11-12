import { NextPage } from 'next'
import React from 'react'
import ChatImput from './ChatImput'
import MessageList from './MessageList'

const HomePage: NextPage = () => {
 return (
  <main>
   {/* Message List */}
   <MessageList />
   {/* Chat Input */}
   <ChatImput />
  </main>
 )
}

export default HomePage
