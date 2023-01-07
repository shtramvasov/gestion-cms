import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import Task from '@components/Task/Task'
import UIButton from '@components/UI/UIButton/UIButton'
import styles from './TasksSection.module.scss'
import { HiPlus } from 'react-icons/hi'

const TasksSection: FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<Heading text='Последняя задача' date='12 января, 2023' />
				<UIButton secondary rounded large>
					<HiPlus />
				</UIButton>
			</div>
			<Task />
		</section>
	)
}

export default TasksSection
