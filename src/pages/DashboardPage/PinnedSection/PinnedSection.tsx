import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import styles from './PinnedSection.module.scss'
import TasksManager from '@pages/DashboardPage/TasksManager/TasksManager'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import Loader from '@components/UI/Loader/Loader'

const PinnedSection: FC = () => {
	const { data, isFetching } = useFetchTasksQuery()
	// console.log(data)

	return (
		<section className={styles.container}>
			<Heading text='Прикрепленные задачи' />
			{isFetching && <Loader />}
			{data?.map(
				task =>
					task.isPinned && <TaskItem data={task} key={task.createdAt} pinned />,
			)}
			<TasksManager />
		</section>
	)
}

export default PinnedSection
