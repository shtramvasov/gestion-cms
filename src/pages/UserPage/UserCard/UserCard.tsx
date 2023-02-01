import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { convertToDate } from '@utils/convertToDate'
import { IUser } from '@interfaces/IUser'
import styles from './UserCard.module.scss'

interface IUserProps {
	user: IUser | undefined
}

const UserCard: FC<IUserProps> = ({ user }) => {
	return (
		<div className={styles.avatar}>
			<Avatar uid={user?.uid} size='lg' />
			<div className={styles.details}>
				<h2>{user?.name}</h2>
				<p className={styles.position}>{user?.position}</p>
				<p>
					Работает у нас с <span>{convertToDate(user?.createdAt)}</span>
				</p>
				<p className={styles.email}>
					Всегда на связи <span>{user?.email}</span>
				</p>
			</div>
		</div>
	)
}

export default UserCard
