'use client'

import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../utils/functions'
import MessageComponent from './MessageComponent'

const MessageList: React.FC = () => {
 const { data: messages, error, mutate } = useSWR('/api/get-messages', fetcher)
 return (
  <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
   {messages?.map((messageObject) => (
    <MessageComponent key={messageObject.id} messageObject={messageObject} />
   ))}
  </div>
 )
}

export default MessageList
