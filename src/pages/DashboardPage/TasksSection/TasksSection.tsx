import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import Button from '@components/UI/Button/Button'
import styles from './TasksSection.module.scss'
import { HiPlus } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import { useAuth } from '@hooks/useAuth'

const TasksSection: FC = () => {
	const { isAuth } = useAuth()
	const { data } = useFetchTasksQuery()
	const rescentTask = data?.[0]

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Heading text='Последняя задача' date={rescentTask?.createdAt} />
				{isAuth ? (
					<Button secondary rounded large>
						<HiPlus />
					</Button>
				) : (
					<Button secondary rounded large>
						<BiLockAlt />
					</Button>
				)}
			</div>
			<TaskItem data={rescentTask} />
		</section>
	)
}

export default TasksSection
