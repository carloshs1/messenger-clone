import { MessageType } from '../typings'

export const fetcher = async () => {
 const res = await fetch('/api/get-messages')
 const data = await res.json()
 const messages: MessageType[] = data.messages
 return messages
}
