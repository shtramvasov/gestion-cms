import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { Loader } from '@components/UI'
import styles from '../TaskItem.module.scss'
import { IAuthor } from '@interfaces/ITask'

interface IProps {
	author: IAuthor | undefined
}

const AuthorBlock: FC<IProps> = ({ author }) => {
	return (
		<div className={styles.author}>
			<p>
				Добавлено: <span>{author?.name}</span>
			</p>
			{author ? <Avatar uid={author.uid} size='sm' /> : <Loader />}
		</div>
	)
}

export default AuthorBlock
