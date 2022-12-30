import { FC } from 'react'
import SidebarAvatar from '@components/SidebarAvatar/SidebarAvatar'
import SidebarLogo from '@components/SidebarLogo/SidebarLogo'
import SidebarNavigation from '@components/SidebarNavigation/SidebarNavigation'
import { NavigationData } from '@components/SidebarNavigation/Navigation.data'

const Sidebar: FC = () => {
	return (
		<aside>
			<SidebarLogo />
			<SidebarAvatar />
			<SidebarNavigation links={NavigationData} />
		</aside>
	)
}

export default Sidebar
