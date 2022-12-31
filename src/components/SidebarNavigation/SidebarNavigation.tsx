import NavigationLink from '@components/NavigationLink/NavigationLink'
import { FC } from 'react'
import { ISidebarNavigation } from './SidebarNavigation.interface'
import styles from './SidebarNavigation.module.scss'

interface INavigationMenu {
	links: ISidebarNavigation[]
}

const SidebarNavigation: FC<INavigationMenu> = ({ links }) => {
	return (
		<nav className={styles.nav}>
			{links.map(link => (
				<NavigationLink item={link} key={link.link} />
			))}
		</nav>
	)
}

export default SidebarNavigation
