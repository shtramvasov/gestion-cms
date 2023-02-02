import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { IMessage } from '@interfaces/IMessage'
import { useAuth } from '@hooks/useAuth'
import classnames from 'classnames'
import styles from './Message.module.scss'
import { convertToDate } from '@utils/convertToDate'

interface IProps {
	message: IMessage
}

const Message: FC<IProps> = ({ message }) => {
	const { id } = useAuth()
	return (
		<div
			className={classnames(styles.container, {
				[styles.mymessage]: id === message.userid,
			})}
		>
			<Avatar uid={message.userid} size='sm' />
			<div className={styles.text}>
				<div className={styles.details}>
					<span>{message.author}</span>
					<p className={styles.date}>{convertToDate(message.createdAt)}</p>
				</div>
				<p>{message.text}</p>
			</div>
		</div>
	)
}

export default Message
