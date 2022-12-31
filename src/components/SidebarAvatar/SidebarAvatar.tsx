import { FC } from 'react'
import styles from './SidebarAvatar.module.scss'
import avatar from '@assets/images/avatar.jpg'

const SidebarAvatar: FC = () => {
	return (
		<div className={styles.container}>
			<img className={styles.avatar} src={avatar} alt='Jonathan Name' />
			<h3>Jonathan Name</h3>
			<span>Менеджер</span>
		</div>
	)
}

export default SidebarAvatar
