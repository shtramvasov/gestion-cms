import { FC } from 'react'
import UsersList from '../UsersList/UsersList'
import ChatWindow from '../ChatWindow/ChatWindow'
import styles from './Chat.module.scss'

const Chat: FC = () => {
	return (
		<div className={styles.wrapper}>
			<UsersList />
			<ChatWindow />
		</div>
	)
}

export default Chat
