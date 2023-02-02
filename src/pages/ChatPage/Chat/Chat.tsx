import { FC } from 'react'
import UsersList from '../UsersList/UsersList'
import styles from './Chat.module.scss'

const Chat: FC = () => {
	return (
		<div className={styles.container}>
			<UsersList />
			<div className={styles.window}>kjl</div>
		</div>
	)
}

export default Chat
