import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import EmployeesStat from '../EmployeesStat/EmployeesStat'
import AddNotificationStat from '../AddNotificationStat/AddNotificationStat'
import styles from './Statistics.module.scss'

const Statistics: FC = () => {
	return (
		<section className={styles.container}>
			<Heading text='Информация о сотрудниках' />
			<p>Сведения о доступных сотрудниках в нашей компании.</p>
			<div className={styles.stats}>
				<EmployeesStat />
				<AddNotificationStat />
			</div>
		</section>
	)
}

export default Statistics
