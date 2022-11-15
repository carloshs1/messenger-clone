'use client'

import React, { FormEvent, useState } from 'react'
import useSWR from 'swr'
import { v4 as uuid } from 'uuid'
import { MessageType } from '../typings'
import { fetcher } from '../utils/functions'
import { unstable_getServerSession } from 'next-auth/next'

const ChatImput: React.FC<{
 session: Awaited<ReturnType<typeof unstable_getServerSession>>
}> = ({ session }) => {
 const [input, setInput] = useState('')
 const { data: messages, error, mutate } = useSWR('/api/get-messages', fetcher)
 const addMessage = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (!input || !session) return
  const messageToSend = input
  setInput('')
  const id = uuid()
  const message: MessageType = {
   id,
   message: messageToSend,
   created_at: Date.now(),
   username: session?.user?.name!,
   profilePic: session?.user?.image!,
   email: session?.user?.email!,
  }
  const uploadMessageToUpstash = async () => {
   const response = await fetch('/api/add-message', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
   })
   const data = await response.json()
   return [...messages!, data.message]
  }
  await mutate(uploadMessageToUpstash, {
   optimisticData: [...messages!, message],
   rollbackOnError: true,
  })
 }
 return (
  <form
   onSubmit={addMessage}
   className="w-full fixed bottom-0 z-50 flex space-x-2 px-10 py-5 border-t border-gray-100 bg-white"
  >
   <input
    type="text"
    disabled={!session}
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter message..."
    className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
   />
   <button
    type="submit"
    disabled={!input}
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
   >
    Send
   </button>
  </form>
 )
}

export default ChatImput
