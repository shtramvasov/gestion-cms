import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import styles from './PinnedSection.module.scss'
import TasksManager from '@pages/TasksManager/TasksManager'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'

const PinnedSection: FC = () => {
	const { data } = useFetchTasksQuery()

	return (
		<section className={styles.container}>
			<Heading text='Прикрепленные задачи' />
			{data?.map(task =>
				task.isPinned ? <TaskItem data={task} key={task.id} pinned /> : null,
			)}
			<TasksManager />
		</section>
	)
}

export default PinnedSection
