import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import UIButton from '@components/UI/UIButton/UIButton'
import styles from './TasksManager.module.scss'
import { HiOutlineDotsHorizontal, HiOutlineViewGridAdd } from 'react-icons/hi'


const TasksManager: FC = () => {
	return (
		<div className={styles.container}>
			<Heading text='Остальные задачи' />
			<UIButton className='bg-slate-300'>
				<HiOutlineDotsHorizontal /> Посмотреть все задачи
			</UIButton>
			<UIButton className='bg-slate-300'>
				<HiOutlineViewGridAdd /> Добавить новую задачу
			</UIButton>

		</div>
	)
}

export default TasksManager
