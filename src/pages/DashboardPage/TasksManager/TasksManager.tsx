import { FC, useState } from 'react'
import Heading from '@components/Heading/Heading'
import Button from '@components/UI/Button/Button'
import Modal from '@components/UI/Modal/Modal'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import { HiOutlineDotsHorizontal, HiOutlineViewGridAdd } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { useAuth } from '@hooks/useAuth'
import styles from './TasksManager.module.scss'

const TasksManager: FC = () => {
	const { isAuth } = useAuth()
	const [openAddTask, setOpenAddTask] = useState(true)
	const [openTaskList, setOpenTaskList] = useState(false)

	return (
		<div className={styles.container}>
			<Heading text='Остальные задачи' />
			<Button className='bg-slate-300' onClick={() => setOpenTaskList(true)}>
				<HiOutlineDotsHorizontal /> Посмотреть все задачи
			</Button>
			{isAuth ? (
				<Button className='bg-slate-300' onClick={() => setOpenAddTask(true)}>
					<HiOutlineViewGridAdd /> Добавить новую задачу
				</Button>
			) : (
				<Button className='bg-slate-300 cursor-default'>
					<BiLockAlt /> Войдите, чтобы добавить задачу
				</Button>
			)}

			<Modal isOpen={openTaskList} onClose={() => setOpenTaskList(false)}>
				<h2>Список задач</h2>
			</Modal>
			<Modal isOpen={openAddTask} onClose={() => setOpenAddTask(false)}>
				<AddTaskForm />
			</Modal>
		</div>
	)
}

export default TasksManager
