import { FC, useState } from 'react'
import Heading from '@components/Heading/Heading'
import Button from '@components/UI/Button/Button'
import styles from './TasksManager.module.scss'
import { HiOutlineDotsHorizontal, HiOutlineViewGridAdd } from 'react-icons/hi'

import Modal from '@components/UI/Modal/Modal'

const TasksManager: FC = () => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className={styles.container}>
			<Heading text='Остальные задачи' />
			<Button onClick={() => setIsOpen(true)} className='bg-slate-300'>
				<HiOutlineDotsHorizontal /> Посмотреть все задачи
			</Button>
			<Button className='bg-slate-300'>
				<HiOutlineViewGridAdd /> Добавить новую задачу
			</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<h2>Список</h2>
			</Modal>
		</div>
	)
}

export default TasksManager
