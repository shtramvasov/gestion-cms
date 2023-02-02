import { FC } from 'react'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import styles from './UsersList.module.scss'
import Avatar from '@components/Avatar/Avatar'

const UsersList: FC = () => {
	const { data: users } = useFetchUsersQuery()
	return (
		<ul className={styles.container}>
			{users?.map(user => (
				<li key={user.uid}>
					<Avatar className={styles.avatar} uid={user.uid} size='sm' />
					<div className={styles.details}>
						<p>{user.name}</p>
						<span>{user.position}</span>
					</div>
				</li>
			))}
		</ul>
	)
}

export default UsersList
