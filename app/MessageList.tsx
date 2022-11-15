'use client'

import React, { useEffect } from 'react'
import useSWR from 'swr'
import { clientPusher } from '../pusher'
import { MessageType } from '../typings'
import { fetcher } from '../utils/functions'
import MessageComponent from './MessageComponent'

const MessageList: React.FC<{ initialMessages: MessageType[] }> = ({
 initialMessages,
}) => {
 const { data: messages, error, mutate } = useSWR('/api/get-messages', fetcher)
 useEffect(() => {
  const channel = clientPusher.subscribe('messages')
  channel.bind('new-message', async (data: MessageType) => {
   if (messages?.find((message) => message.id === data.id)) return
   !messages
    ? mutate(fetcher)
    : mutate(fetcher, {
       optimisticData: [...messages!, data],
       rollbackOnError: true,
      })
  })
  return () => {
   channel.unbind_all()
   channel.unsubscribe()
  }
 }, [messages, mutate, clientPusher])

 return (
  <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
   {(messages || initialMessages).map((messageObject) => (
    <MessageComponent key={messageObject.id} messageObject={messageObject} />
   ))}
  </div>
 )
}

export default MessageList
