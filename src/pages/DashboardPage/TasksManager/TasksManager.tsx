import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import Button from '@components/UI/Button/Button'
import styles from './TasksManager.module.scss'
import { HiOutlineDotsHorizontal, HiOutlineViewGridAdd } from 'react-icons/hi'

const TasksManager: FC = () => {
	return (
		<div className={styles.container}>
			<Heading text='Остальные задачи' />
			<Button className='bg-slate-300'>
				<HiOutlineDotsHorizontal /> Посмотреть все задачи
			</Button>
			<Button className='bg-slate-300'>
				<HiOutlineViewGridAdd /> Добавить новую задачу
			</Button>
		</div>
	)
}

export default TasksManager
