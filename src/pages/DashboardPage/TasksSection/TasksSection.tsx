import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import styles from './TasksSection.module.scss'

const TasksSection: FC = () => {
	return (
		<div className={styles.container}>
			<Heading text='Последня задача'/>
		</div>
	)
}

export default TasksSection
