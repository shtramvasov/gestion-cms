import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import RescentTask from '@pages/DashboardPage/RescentTask/RescentTask'
import PinnedSection from './PinnedSection/PinnedSection'
import styles from './DashboardPage.module.scss'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<RescentTask />
				<PinnedSection />
			</div>
		</Layout>
	)
}

export default DashboardPage
