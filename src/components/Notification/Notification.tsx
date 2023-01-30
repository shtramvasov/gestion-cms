import { FC, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { Loader } from '@components/UI'
import { useFetchRandomNotificationQuery } from '@store/slices/notificationsSlice'
import classnames from 'classnames'
import styles from './Notification.module.scss'

const Notification: FC = () => {
	const { data, isFetching } = useFetchRandomNotificationQuery()
	const [hide, setHide] = useState(false)

	return (
		<>
			{isFetching ? (
				<Loader />
			) : (
				<div className={classnames(styles.container, { hidden: hide })}>
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
