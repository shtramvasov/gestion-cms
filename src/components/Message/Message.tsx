import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { IMessage } from '@interfaces/IMessage'
import { useAuth } from '@hooks/useAuth'
import classnames from 'classnames'
import styles from './Message.module.scss'

interface IProps {
	message: IMessage
}

const Message: FC<IProps> = ({ message }) => {
	const { id } = useAuth()
	return (
		<div
			className={classnames(styles.container, {
				[styles.mymessage]: id === message.author.uid,
			})}
		>
			<Avatar uid={message.author.uid} size='sm' />
			<div className={styles.text}>
				<span>{message.author.name}</span>
				<p>{message.text}</p>
			</div>
		</div>
	)
}

export default Message
