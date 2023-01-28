import { FC, useState } from 'react'
import TeamBlock from '../TeamBlock/TeamBlock'
import AuthorBlock from '../AuthorBlock/AuthorBlock'
import { Modal } from '@components/UI'
import { ITask } from '@interfaces/ITask'
import { convertToDate } from '@utils/convertToDate'
import classnames from 'classnames'
import styles from './Task.module.scss'


interface IProps {
	pinned?: boolean
	data: ITask | undefined
}

const Task: FC<IProps> = ({ pinned, data }) => {
	const [openPreview, setOpenPreview] = useState(false)
	return (
		<>
			<div
				onClick={() => pinned && setOpenPreview(true)}
				className={classnames(styles.container, { [styles.pinned]: pinned })}
			>
				{pinned && (
					<p className={styles.date}>
						<span>Закреплено</span> {convertToDate(data?.createdAt)}
					</p>
				)}
				<h2>{data?.title}</h2>
				<TeamBlock data={data} pinned={pinned} />
				{!pinned && (
					<>
						<p className='whitespace-pre-line'>{data?.description}</p>
						<AuthorBlock author={data?.author} />
					</>
				)}
			</div>
			<Modal isOpen={openPreview} onClose={() => setOpenPreview(false)}>
				<div className={classnames(styles.container, styles.modal)}>
					<div>
						<h2>{data?.title}</h2>
						<p className={styles.date}>{convertToDate(data?.createdAt)}</p>
					</div>
					<TeamBlock data={data} pinned={!pinned} />
					<p className='whitespace-pre-line'>{data?.description}</p>
					<AuthorBlock author={data?.author} />
				</div>
			</Modal>
		</>
	)
}

export default Task
