import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import Notification from '@components/Notification/Notification'
import Statistics from './Statistics/Statistics'
import styles from './EmployeesPage.module.scss'

const EmployeesPage: FC = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<Notification />
				<Statistics />
			</div>
		</Layout>
	)
}

export default EmployeesPage
