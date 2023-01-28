import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskCard from '../TaskCard/TaskCard'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import styles from './TasksList.module.scss'

const TasksList: FC = () => {
	const { data } = useFetchTasksQuery()
	return (
		<div className={styles.container}>
			<Heading text='Список всех задач нашей команды' />
			<div className={styles.list}>
				{data?.map(task => (
					<TaskCard key={task.id} data={task} />
				))}
			</div>
		</div>
	)
}

export default TasksList
