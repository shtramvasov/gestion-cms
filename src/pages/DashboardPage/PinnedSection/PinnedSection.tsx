import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import styles from './PinnedSection.module.scss'
import TasksManager from '@pages/DashboardPage/TasksManager/TasksManager'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import UILoader from '@components/UI/UILoader/UILoader'

const PinnedSection: FC = () => {
	const { data, isFetching } = useFetchTasksQuery()

	return (
		<section className={styles.container}>
			<Heading text='Прикрепленные задачи' />
			{isFetching && <UILoader />}
			{data?.map(
				task => task.isPinned && <TaskItem data={task} key={task.id} pinned />,
			)}
			<TasksManager />
		</section>
	)
}

export default PinnedSection
