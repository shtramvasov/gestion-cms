import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import styles from './PinnedSection.module.scss'
import TasksManager from '@pages/DashboardPage/TasksManager/TasksManager'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import { Loader } from '@components/UI'

const PinnedSection: FC = () => {
	const { data, isFetching } = useFetchTasksQuery()

	return (
		<section className={styles.container}>
			<Heading text='Прикрепленные задачи' />
			{isFetching && <Loader />}
			<div className={styles.tasks}>
				{data?.map(
					task =>
						task.isPinned && <TaskItem key={task.id} data={task} pinned />,
				)}
			</div>
			<TasksManager />
		</section>
	)
}

export default PinnedSection
