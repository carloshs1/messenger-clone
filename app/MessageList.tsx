'use client'

import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../utils/functions'

const MessageList: React.FC = () => {
 const { data: messages, error, mutate } = useSWR('/api/get-messages', fetcher)
 return (
  <div>
   {messages?.map((messageObject) => (
    <div key={messageObject.id}>
     <p>{messageObject.message}</p>
    </div>
   ))}
  </div>
 )
}

export default MessageList
