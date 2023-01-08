import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import TasksSection from '@pages/DashboardPage/TasksSection/TasksSection'
import PinnedSection from './PinnedSection/PinnedSection'
import styles from './DashboardPage.module.scss'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<TasksSection />
				<PinnedSection />
			</div>
		</Layout>
	)
}

export default DashboardPage
