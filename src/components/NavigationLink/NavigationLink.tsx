import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ISidebarNavigation } from '@components/SidebarNavigation/SidebarNavigation.interface'
import styles from './NavigationLink.module.scss'
import classnames from 'classnames'

const NavigationLink: FC<{ item: ISidebarNavigation }> = ({ item }) => {
	//TODO: Private routes and useAuth
	//TODO: active class styling

	return (
		<NavLink
			to={item.link}
			className={({ isActive }) => classnames({ active: isActive })}
		>
			<li className={styles.link}>
				{<item.icon className={styles.icon} />}
				<span className={styles.title}>{item.title}</span>
			</li>
		</NavLink>
	)
}

export default NavigationLink