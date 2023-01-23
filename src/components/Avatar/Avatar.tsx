import { FC } from 'react'
import { useFetchUserQuery } from '@store/slices/usersSlice'
import UILoader from '@components/UI/UILoader/UILoader'
import styles from './Avatar.module.scss'
import classnames from 'classnames'

interface IAvatarVariants {
	uid: string | undefined | null
	size: 'sm' | 'md' | 'lg'
	className?: string | undefined
	sidebar?: boolean
}

const Avatar: FC<IAvatarVariants> = ({ uid, size, className, sidebar }) => {
	const { data, isFetching } = useFetchUserQuery(uid)

	return (
		<div
			className={classnames(styles.container, className, {
				[styles.sidebar]: sidebar,
			})}
		>
			{isFetching ? (
				<UILoader />
			) : (
				<img
					className={classnames(styles.avatar, {
						[styles.md]: size == 'md',
						[styles.lg]: size == 'lg',
					})}
					src={data?.photoUrl}
					alt={data?.name}
					draggable={false}
				/>
			)}

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
