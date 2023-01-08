import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import styles from './PinnedSection.module.scss'

const PinnedSection: FC = () => {
	return (
		<section className={styles.container}>
			<Heading text='Прикрепленные задачи' />
			<TaskItem pinned/>
			<TaskItem pinned/>
			<TaskItem pinned/>
		</section>
	)
}

export default PinnedSection
