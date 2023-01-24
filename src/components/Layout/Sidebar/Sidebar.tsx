import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import Logo from '@components/Logo/Logo'
import Navigation from '@components/Layout/Navigation/Navigation'
import DarkModeToggle from '@components/Layout/DarkModeToggle/DarkModeToggle'
import LogoutButton from '@components/Layout/LogoutButton/LogoutButton'
import { NavigationData as data } from '@components/Layout/Navigation/Navigation.data'
import { useAuth } from '@hooks/useAuth'
import styles from './Sidebar.module.scss'
import AuthLinks from '@components/AuthLinks/AuthLinks'

const Sidebar: FC = () => {
	const { isAuth, id } = useAuth()

	return (
		<aside className={styles.sidebar}>
			<Logo />
			{!isAuth ? (
				<Avatar uid={id} size='md' sidebar />
			) : (
				<AuthLinks className='order-3 md:order-2' />
			)}
			<Navigation links={data} />
			<DarkModeToggle />
			<LogoutButton />
		</aside>
	)
}

export default Sidebar
