import { FC } from 'react'
import { useFetchUserQuery } from '@store/slices/usersSlice'
import styles from './Avatar.module.scss'
import classnames from 'classnames'
import avatar from '@assets/images/avatar.jpg' //#TODO remove later

interface IAvatarVariants {
	uid: string | null
	size: 'sm' | 'md' | 'lg'
	className?: string | undefined
	sidebar?: boolean
}

const Avatar: FC<IAvatarVariants> = ({ uid, size, className, sidebar }) => {
	const { data } = useFetchUserQuery(uid)

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
				src={data ? data?.photoUrl : avatar} //#TODO change later
				alt={data?.name}
				draggable={false}
			/>
			{sidebar ? (
				<div className={styles.text}>
					<h3>{data?.name}</h3>
					<span>{data?.position}</span>
				</div>
			) : null}
		</div>
	)
}

export default Avatar
