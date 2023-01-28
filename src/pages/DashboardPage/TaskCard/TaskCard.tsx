import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ITask } from '@interfaces/ITask'
import { convertToDate } from '@utils/convertToDate'
import TeamBlock from '../TeamBlock/TeamBlock'
import AuthorBlock from '../AuthorBlock/AuthorBlock'
import TaskCardFooter from './TaskCardFooter/TaskCardFooter'
import { useAuth } from '@hooks/useAuth'
import styles from './TaskCard.module.scss'
import { Button } from '@components/UI'

interface IProps {
	data: ITask | undefined
}

const TaskCard: FC<IProps> = ({ data }) => {
	const { isAuth } = useAuth()
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.header__title}>
					<h2>{data?.title}</h2>
					<p>{convertToDate(data?.createdAt)}</p>
				</div>
				{data?.isPinned && <span>Закреплено</span>}
			</div>
			<TeamBlock data={data} />
			<p className='truncate'>{data?.description}</p>
			<AuthorBlock author={data?.author} />
			{isAuth ? (
				<TaskCardFooter data={data} />
			) : (
				<Link to='/signin'>
					<Button secondary className='w-full'>
						Войдите, чтобы управлять задачами
					</Button>
				</Link>
			)}
		</div>
	)
}

export default TaskCard
