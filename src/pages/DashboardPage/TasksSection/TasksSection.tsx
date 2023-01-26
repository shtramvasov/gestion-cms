import { FC, useState } from 'react'
import Heading from '@components/Heading/Heading'
import TaskItem from '@pages/DashboardPage/TaskItem/TaskItem'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import Button from '@components/UI/Button/Button'
import Modal from '@components/UI/Modal/Modal'
import styles from './TasksSection.module.scss'
import { HiPlus } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import { convertToDate } from '@utils/convertToDate'
import { useAuth } from '@hooks/useAuth'

const TasksSection: FC = () => {
	const { isAuth } = useAuth()
	const { data } = useFetchTasksQuery()
	const rescentTask = data?.[0]
	const [openAddTask, setOpenAddTask] = useState(false)

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Heading
					text='Последняя задача'
					date={convertToDate(rescentTask?.createdAt)}
				/>
				{isAuth ? (
					<Button secondary rounded large onClick={() => setOpenAddTask(true)}>
						<HiPlus />
					</Button>
				) : (
					<Button className='cursor-default' secondary rounded large>
						<BiLockAlt />
					</Button>
				)}
			</div>
			<TaskItem data={rescentTask} />
			<Modal isOpen={openAddTask} onClose={() => setOpenAddTask(false)}>
				<AddTaskForm close={() => setOpenAddTask(false)} />
			</Modal>
		</section>
	)
}

export default TasksSection
