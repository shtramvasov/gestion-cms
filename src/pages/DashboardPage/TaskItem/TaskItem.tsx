import Avatar from '@components/Avatar/Avatar'
import { FC } from 'react'
import styles from './TaskItem.module.scss'
import classnames from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { ITask } from '@interfaces/ITask'

interface IProps {
	pinned?: boolean
	data: ITask | undefined
}

const TaskItem: FC<IProps> = ({ pinned, data }) => {
	const description = data?.description.replaceAll('\\n', '\n\n')
	const createdAt = dayjs(data?.createdAt).locale('ru').format('D MMMM YYYY')

	return (
		<div className={classnames(styles.container, { [styles.pinned]: pinned })}>
			{pinned ? (
				<p className={styles.date}>
					<span>Закреплено</span> {createdAt}
				</p>
			) : null}
			<h2>{data?.title}</h2>
			<div className={classnames(styles.team, { [styles.pinned]: pinned })}>
				<div className='flex gap-1 -space-x-4'>
					{/* #TODO: map real users */}
					<Avatar className={styles.overlap} size='sm' />
					<Avatar className={styles.overlap} size='sm' />
					<Avatar className={styles.overlap} size='sm' />
				</div>
				<p>{data?.tag}</p>
			</div>
			{!pinned ? (
				<>
					<p className='whitespace-pre-line'>{description}</p>
					<div className={styles.author}>
						<p>
							Добавлено: <span>{data?.author}</span>
						</p>
						{/* #TODO: map real users */}
						<Avatar size='sm' />
					</div>
				</>
			) : null}
		</div>
	)
}

export default TaskItem
