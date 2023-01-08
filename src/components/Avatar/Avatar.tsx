import { FC } from 'react'
import styles from './Avatar.module.scss'
import classnames from 'classnames'
import avatar from '@assets/images/avatar.jpg'

interface IAvatarVariants {
	size: 'sm' | 'md' | 'lg'
  className?: string | undefined
	sidebar?: boolean
}

const Avatar: FC<IAvatarVariants> = ({ size, className, sidebar }) => {
	return (
		<div
			className={classnames(styles.container, className, {
				[styles.sidebar]: sidebar,
			})}
		>
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
