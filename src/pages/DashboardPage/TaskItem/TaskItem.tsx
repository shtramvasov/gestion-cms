import Avatar from '@components/Avatar/Avatar'
import { FC } from 'react'
import styles from './TaskItem.module.scss'
import classnames from 'classnames'

interface ITask {
	pinned?: boolean
}

const TaskItem: FC<ITask> = ({ pinned }) => {
	return (
		<div className={classnames(styles.container, { [styles.pinned]: pinned })}>
			{pinned ? <p className={styles.date}>12 января, 2023</p> : null}
			<h2>Заголовок поставленной задачи</h2>
			<div className={classnames(styles.team, { [styles.pinned]: pinned })}>
				<div className='flex gap-1 -space-x-4'>
					<Avatar className={styles.overlap} size='sm' />
					<Avatar className={styles.overlap} size='sm' />
					<Avatar className={styles.overlap} size='sm' />
				</div>
				<p>Короткое описание</p>
			</div>
			{!pinned ? (
				<>
					<p>
						Описание и подробные детали поставленной задачи, которые описаны в
						этом блоке. Возможно с вариантом показа в укороченной версии.
					</p>
					<p>
						Описание и подробные детали поставленной задачи, которые описаны в
						этом блоке. Возможно с вариантом показа в укороченной версии.
						Описание и подробные детали поставленной задачи, которые описаны в
						этом блоке. Возможно с вариантом показа в укороченной версии.
					</p>
					<p>
						Описание и подробные детали поставленной задачи, которые описаны в
						этом блоке. Возможно с вариантом показа в укороченной версии.
					</p>
					<div className={styles.author}>
						<p>
							Добавлено менеджером <span>Jonathan Name</span>
						</p>
						<Avatar size='sm' />
					</div>
				</>
			) : null}
		</div>
	)
}

export default TaskItem
