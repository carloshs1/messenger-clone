import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../../redis'
import { MessageType } from '../../../typings'

type Data = {
 message: MessageType
}

type ErrorData = {
 body: string
}

const handler = async (
 req: NextApiRequest,
 res: NextApiResponse<Data | ErrorData>
) => {
 if (req.method !== 'POST') {
  res.status(405).json({ body: 'Method Not Allowed' })
  return
 }
 const { message } = req.body
 const newMessage = {
  ...message,
  created_at: Date.now(),
 }
 await redis.hset('messages', message.id, JSON.stringify(newMessage))
 res.status(200).json({ message: newMessage })
}

export default handler
