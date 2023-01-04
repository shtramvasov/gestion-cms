import { FC } from 'react'
import Avatar from '@components/Avatar/Avatar'
import Logo from '@components/Logo/Logo'
import Navigation from '@components/Layout/Navigation/Navigation'
import { NavigationData as data } from '@components/Layout/Navigation/Navigation.data'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Logo />
			<Avatar size='md' sidebar />
			<Navigation links={data} />
		</aside>
	)
}

export default Sidebar
