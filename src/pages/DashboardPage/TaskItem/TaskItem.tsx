import Avatar from '@components/Avatar/Avatar'
import { FC } from 'react'
import Loader from '@components/UI/Loader/Loader'
import { ITask } from '@interfaces/ITask'
import styles from './TaskItem.module.scss'
import classnames from 'classnames'

interface IProps {
	pinned?: boolean
	data: ITask | undefined
}

const TaskItem: FC<IProps> = ({ pinned, data }) => {
	const description = data?.description.replaceAll('\\n', '\n\n')

	return (
		<div className={classnames(styles.container, { [styles.pinned]: pinned })}>
			{pinned && (
				<p className={styles.date}>
					<span>Закреплено</span> {data?.createdAt}
				</p>
			)}
			<h2>{data?.title}</h2>
			<div className={classnames(styles.team, { [styles.pinned]: pinned })}>
				<div className='flex gap-1 -space-x-4'>
					{data?.taggedUsers.map(uid => (
						<Avatar key={uid} uid={uid} className={styles.overlap} size='sm' />
					))}
				</div>
				<p>{data?.tag}</p>
			</div>
			{!pinned && (
				<>
					<p className='whitespace-pre-line'>{description}</p>
					<div className={styles.author}>
						<p>
							Добавлено: <span>{data?.author.name}</span>
						</p>
						{data ? <Avatar uid={data?.author.uid} size='sm' /> : <Loader />}
					</div>
				</>
			)}
		</div>
	)
}

export default TaskItem
