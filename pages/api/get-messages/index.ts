import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../../redis'
import { MessageType } from '../../../typings'

type Data = {
 messages: MessageType[]
}

type ErrorData = {
 body: string
}

const handler = async (
 req: NextApiRequest,
 res: NextApiResponse<Data | ErrorData>
) => {
 if (req.method !== 'GET') {
  res.status(405).json({ body: 'Method Not Allowed' })
  return
 }

 const messagesRes = await redis.hvals('messages')
 const messages: MessageType[] = messagesRes
  .map((message) => JSON.parse(message))
  .sort((a, b) => a.created_at - b.created_at)

 res.status(200).json({ messages })
}

export default handler
