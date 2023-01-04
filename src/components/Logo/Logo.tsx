import { FC } from 'react'
import Logo from '@assets/images/logo.svg'
import styles from './Logo.module.scss'

const SidebarLogo: FC = () => {
	return (
		<img className={styles.logo} src={Logo} alt='Gestion' draggable={false} />
	)
}

export default SidebarLogo
