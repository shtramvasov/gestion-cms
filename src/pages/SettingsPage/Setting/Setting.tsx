import { FC } from 'react'
import classnames from 'classnames'
import styles from './Setting.module.scss'

interface IProps {
	image: string
	text: string
	isActive?: boolean
	onClick: () => void
}

const Setting: FC<IProps> = ({ image, text, isActive = false, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={classnames(styles.setting, {
				[styles.setting__active]: isActive,
			})}
		>
			<img src={image} className={styles.image} draggable={false} />
			<p>{text}</p>
		</div>
	)
}

export default Setting
