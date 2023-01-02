import { FC } from 'react'
import LogoIcon from '@assets/images/logo.svg'
import styles from './SidebarLogo.module.scss'

const SidebarLogo: FC = () => {
	return (
		<img
			className={styles.logo}
			src={LogoIcon}
			alt='Gestion'
			draggable={false}
		/>
	)
}

export default SidebarLogo
