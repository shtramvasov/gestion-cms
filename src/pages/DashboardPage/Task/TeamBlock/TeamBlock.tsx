import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import { ITask } from '@interfaces/ITask'
import classnames from 'classnames'
import styles from '../Task.module.scss'

interface IProps {
	data: ITask | undefined
	pinned?: boolean
}

const TeamBlock: FC<IProps> = ({ data, pinned }) => {
	return (
		<div className={classnames(styles.team, { [styles.pinned]: pinned })}>
			<div className='flex gap-1 -space-x-4'>
				{data?.taggedUsers.map(uid => (
					<Avatar key={uid} uid={uid} className={styles.overlap} size='sm' />
				))}
			</div>
			<p>{data?.tag}</p>
		</div>
	)
}

export default TeamBlock
