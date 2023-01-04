import { FC } from 'react'
import styles from './Avatar.module.scss'
import classnames from 'classnames'
import avatar from '@assets/images/avatar.jpg'

interface IAvatarVariants {
	size: 'sm' | 'md' | 'lg'
	sidebar?: boolean
}

const Avatar: FC<IAvatarVariants> = ({ size, sidebar }) => {
	return (
		<div className={styles.container}>
			<img
				className={classnames(styles.avatar, {
					[styles.md]: size == 'md',
					[styles.lg]: size == 'lg',
				})}
				src={avatar}
				alt='Jonathan Name'
				draggable={false}
			/>
			{sidebar ? (
				<div className={styles.text}>
					<h3>Jonathan Name</h3>
					<span>Менеджер</span>
				</div>
			) : null}
		</div>
	)
}

export default Avatar
