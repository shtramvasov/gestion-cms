import { FC, useState } from 'react'
import Heading from '@components/Heading/Heading'
import Task from '@pages/DashboardPage/Task/Task'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import { Button, Modal } from '@components/UI'
import { HiPlus } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { useFetchTasksQuery } from '@store/slices/tasksSlice'
import { convertToDate } from '@utils/convertToDate'
import { useAuth } from '@hooks/useAuth'
import styles from './RescentTask.module.scss'

const RescentTask: FC = () => {
	const { isAuth } = useAuth()
	const { data } = useFetchTasksQuery()
	const rescent = data?.[0]
	const [openAddTask, setOpenAddTask] = useState(false)

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Heading
					text='Последняя задача'
					date={convertToDate(rescent?.createdAt)}
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
			<Task data={rescent} />
			<Modal isOpen={openAddTask} onClose={() => setOpenAddTask(false)}>
				<AddTaskForm close={() => setOpenAddTask(false)} />
			</Modal>
		</section>
	)
}

export default RescentTask
