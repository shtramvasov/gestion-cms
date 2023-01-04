import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import Logo from '@components/Logo/Logo'
import Navigation from '@components/Layout/Navigation/Navigation'
import DarkModeToggle from '@components/Layout/DarkModeToggle/DarkModeToggle'
import LogoutButton from '@components/Layout/LogoutButton/LogoutButton'
import { NavigationData as data } from '@components/Layout/Navigation/Navigation.data'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Logo />
			<Avatar size='md' sidebar />
			<Navigation links={data} />
			<DarkModeToggle />
			<LogoutButton />
		</aside>
	)
}

export default Sidebar
