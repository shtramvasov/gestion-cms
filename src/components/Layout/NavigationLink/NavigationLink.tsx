import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ISidebarNavigation } from '@components/Layout/Navigation/Navigation.interface'
import styles from './NavigationLink.module.scss'
import classnames from 'classnames'

const NavigationLink: FC<{ item: ISidebarNavigation }> = ({ item }) => {
	return (
		<NavLink
			to={item.link}
			className={({ isActive }) =>
				classnames(styles.link, { active: isActive })
			}
		>
			{<item.icon />}
			<span className={styles.title}>{item.title}</span>
		</NavLink>
	)
}

export default NavigationLink
