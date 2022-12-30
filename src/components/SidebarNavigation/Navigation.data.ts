import { ISidebarNavigation } from './SidebarNavigation.interface'
import { HiChartBar, HiUsers } from 'react-icons/hi'
import { RiSettings4Fill } from 'react-icons/ri'
import { IoChatboxEllipses } from 'react-icons/io5'

export const NavigationData: ISidebarNavigation[] = [
	{
		title: 'Главная',
		link: '/',
		icon: HiChartBar,
	},
	{
		title: 'Сотрудники',
		link: '/employees',
		icon: HiUsers,
	},
	{
		title: 'Сообщения',
		link: '/chat',
		icon: IoChatboxEllipses,
	},
	{
		title: 'Настройки',
		link: '/settings',
		icon: RiSettings4Fill,
	},
]
