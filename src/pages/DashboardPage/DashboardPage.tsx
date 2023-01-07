import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import TasksSection from '@pages/DashboardPage/TasksSection/TasksSection'
import styles from './DashboardPage.module.scss'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<TasksSection />
				<div className={styles.second}>Второй блок</div>
			</div>
		</Layout>
	)
}

export default DashboardPage
