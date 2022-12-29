import { FC } from 'react'
import SidebarAvatar from '@components/SidebarAvatar/SidebarAvatar'
import SidebarLogo from '@components/SidebarLogo/SidebarLogo'
import SidebarNavigation from '@components/SidebarNavigation/SidebarNavigation'

const Sidebar: FC = () => {
	return (
		<section>
			<SidebarLogo />
			<SidebarAvatar />
			<SidebarNavigation />
		</section>
	)
}

export default Sidebar
