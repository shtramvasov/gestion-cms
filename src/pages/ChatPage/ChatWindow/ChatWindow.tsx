import { FC } from 'react'
import ChatFooter from '../ChatFooter/ChatFooter'
import Message from '@components/Message/Message'
import { useFetchMessagesQuery } from '@store/slices/messagesSlice'
import styles from './ChatWindow.module.scss'

const ChatWindow: FC = () => {
	const { data: messages } = useFetchMessagesQuery()
	return (
		<div className={styles.chat}>
			{messages?.map(message => (
				<Message key={message.uid} message={message} />
			))}
			<ChatFooter />
		</div>
	)
}

export default ChatWindow
