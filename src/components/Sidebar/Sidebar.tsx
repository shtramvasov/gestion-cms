import { FC } from 'react'
import SidebarAvatar from '@components/SidebarAvatar/SidebarAvatar'
import SidebarLogo from '@components/SidebarLogo/SidebarLogo'
import SidebarNavigation from '@components/SidebarNavigation/SidebarNavigation'
import { NavigationData } from '@components/SidebarNavigation/Navigation.data'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<SidebarLogo />
			<SidebarAvatar />
			<SidebarNavigation links={NavigationData} />
		</aside>
	)
}

export default Sidebar
