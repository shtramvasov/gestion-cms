import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { Loader } from '@components/UI'
import { IAuthor } from '@interfaces/ITask'
import styles from './AuthorBlock.module.scss'

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
