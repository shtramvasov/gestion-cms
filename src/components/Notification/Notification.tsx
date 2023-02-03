import { FC, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { Loader } from '@components/UI'
import { useFetchRandomNotificationQuery } from '@store/slices/notificationsSlice'
import { useNotifications } from '@hooks/useNotifications'
import classnames from 'classnames'
import styles from './Notification.module.scss'

const Notification: FC = () => {
	const { notifications } = useNotifications()
	const { data, isFetching } = useFetchRandomNotificationQuery()
	const [hide, setHide] = useState(false)

	return (
		<>
			{isFetching ? (
				<Loader />
			) : (
				<div className={classnames(styles.container, { hidden: hide || !notifications })}>
					<h4>{data?.title}</h4>
					<p>{data?.description}</p>
					<RiCloseCircleLine
						className={styles.close}
						onClick={() => setHide(true)}
					/>
				</div>
			)}
		</>
	)
}

export default Notification
