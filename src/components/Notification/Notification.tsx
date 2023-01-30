import { useFetchRandomNotificationQuery } from '@store/slices/notificationsSlice'
import { FC } from 'react'
import styles from './Notification.module.scss'

const Notification: FC = () => {
	const { data } = useFetchRandomNotificationQuery()
	console.log(data)
	return <div className={styles.container}></div>
}

export default Notification
