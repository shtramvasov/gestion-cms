import Avatar from '@components/Avatar/Avatar'
import { FC } from 'react'
import styles from './Task.module.scss'

const Task: FC = () => {
	return (
		<div className={styles.container}>
			<h2>Заголовок поставленной задачи</h2>
			<div className={styles.team}>
				<div className='flex gap-1'>
					<Avatar size='sm' />
					<Avatar size='sm' />
					<Avatar size='sm' />
				</div>
				<p>Короткое описание</p>
			</div>
			<p>
				Описание и подробные детали поставленной задачи, которые описаны в этом
				блоке. Возможно с вариантом показа в укороченной версии.
			</p>
		</div>
	)
}

export default Task
