import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { IMessage } from '@interfaces/IMessage'
import styles from './Message.module.scss'

interface IProps {
	message: IMessage
}

const Message: FC<IProps> = ({ message }) => {
	return (
		<div className={styles.container}>
			<Avatar uid={message.author.uid} size='sm' />
			<div className={styles.text}>
				<span>{message.author.name}</span>
				<p>{message.text}</p>
			</div>
		</div>
	)
}

export default Message
