import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import Task from '@pages/DashboardPage/Task/Task'
import TasksManager from '@pages/DashboardPage/TasksManager/TasksManager'
import { Loader } from '@components/UI'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import styles from './PinnedSection.module.scss'

const PinnedSection: FC = () => {
	const { data, isFetching } = useFetchTasksQuery()

	return (
		<section className={styles.container}>
			<Heading text='Прикрепленные задачи' />
			{isFetching && <Loader />}
			<div className={styles.tasks}>
				{data?.map(
					task =>
						task.isPinned && <Task key={task.id} data={task} pinned />,
				)}
			</div>
			<TasksManager />
		</section>
	)
}

export default PinnedSection
