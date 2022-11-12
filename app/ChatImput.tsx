'use client'

import React, { FormEvent, useState } from 'react'

const ChatImput: React.FC = () => {
 const [input, setInput] = useState('')
 const addMessage = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (!input) return
  const messageToSend = input
  setInput('')
 }
 return (
  <form
   onSubmit={addMessage}
   className="w-full fixed bottom-0 z-50 flex space-x-2 px-10 py-5 border-t border-gray-100"
  >
   <input
    type="text"
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
