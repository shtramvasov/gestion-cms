import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import UIButton from '@components/UI/UIButton/UIButton'
import styles from './TasksSection.module.scss'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { HiPlus } from 'react-icons/hi'
import { useFetchTasksQuery } from '@store/tasksSlice'

const TasksSection: FC = () => {
	const { data } = useFetchTasksQuery()
	const rescentTask = data?.[0]
	const date = dayjs(rescentTask?.createdAt).locale('ru').format('D MMMM YYYY')

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Heading text='Последняя задача' date={date} />
				<UIButton secondary rounded large>
					<HiPlus />
				</UIButton>
			</div>
			<TaskItem data={rescentTask} />
		</section>
	)
}

export default TasksSection
