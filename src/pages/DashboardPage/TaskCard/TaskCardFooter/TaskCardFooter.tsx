import { FC } from 'react'
import { Button } from '@components/UI'
import { MdOutlineBookmarkAdded, MdOutlineBookmarkRemove } from 'react-icons/md'
import { CgFileRemove } from 'react-icons/cg'
import { ITask } from '@interfaces/ITask'
import {
	useDeleteTaskMutation,
	useTogglePinnedMutation,
} from '@store/slices/tasksSlice'
import styles from './TaskCardFooter.module.scss'

interface IProps {
	data: ITask | undefined
}

const TaskCardFooter: FC<IProps> = ({ data }) => {
	const [togglePinned] = useTogglePinnedMutation()
	const [deleteTask] = useDeleteTaskMutation()

	return (
		<div className={styles.footer}>
			<Button secondary onClick={() => togglePinned(data as ITask)}>
				{data?.isPinned ? (
					<>
						<MdOutlineBookmarkRemove /> Открепить
					</>
				) : (
					<>
						<MdOutlineBookmarkAdded /> Закрепить
					</>
				)}
			</Button>
			<Button danger onClick={() => deleteTask(data?.id as string)}>
				<CgFileRemove /> Удалить
			</Button>
		</div>
	)
}

export default TaskCardFooter
