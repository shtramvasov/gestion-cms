import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import Button from '@components/UI/Button/Button'
import styles from './TasksSection.module.scss'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { HiPlus } from 'react-icons/hi'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'

const TasksSection: FC = () => {
	const { data } = useFetchTasksQuery()
	const rescentTask = data?.[0]
	const date = dayjs(rescentTask?.createdAt).locale('ru').format('D MMMM YYYY')

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Heading text='Последняя задача' date={date} />
				<Button secondary rounded large>
					<HiPlus />
				</Button>
			</div>
			<TaskItem data={rescentTask} />
		</section>
	)
}

export default TasksSection
