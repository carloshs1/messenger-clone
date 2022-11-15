import Image from 'next/image'
import React from 'react'
import { MessageType } from '../typings'
import { META_LOGO } from '../utils/constants'
import { useSession } from 'next-auth/react'

const MessageComponent: React.FC<{ messageObject: MessageType }> = ({
 messageObject,
}) => {
 const { data: session } = useSession()
 const isUser = session?.user?.email === messageObject.email
 return (
  <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
   <div className={`flex-shrink-0 ${isUser && 'order-2'}`}>
    <Image
     src={messageObject.profilePic || META_LOGO}
     alt="Profile Picture"
     height={10}
     width={50}
     className="rounded-full mx-2"
    />
   </div>
   <div>
    <p
     className={`text-[0.65rem] px-[2px] pb-[2px] ${
      isUser ? 'text-blue-400 text-right' : 'text-red-400 text-left'
     }`}
    >
     {messageObject.username}
    </p>
    <div className="flex items-end">
     <div
      className={`px-3 py-2 rounded-lg w-fit text-white ${
       isUser ? 'bg-blue-400 ml-auto order-2' : 'bg-red-400'
      }`}
     >
      <p>{messageObject.message}</p>
     </div>
     <p
      className={`text-[0.65rem] italic px-2 text-gray-300 ${
       isUser && 'text-right'
      }`}
     >
      {new Date(messageObject.created_at).toString()}
     </p>
    </div>
   </div>
  </div>
 )
}

export default MessageComponent
