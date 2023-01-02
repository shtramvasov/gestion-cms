import { ISidebarNavigation } from './SidebarNavigation.interface'
import { HiUsers, HiHome } from 'react-icons/hi'
import { HiChatBubbleOvalLeft } from 'react-icons/hi2'
import { RiSettings4Fill } from 'react-icons/ri'

export const NavigationData: ISidebarNavigation[] = [
	{
		title: 'Главная',
		link: '/',
		icon: HiHome,
	},
	{
		title: 'Сотрудники',
		link: '/employees',
		icon: HiUsers,
	},
	{
		title: 'Сообщения',
		link: '/chat',
		icon: HiChatBubbleOvalLeft,
	},
	{
		title: 'Настройки',
		link: '/settings',
		icon: RiSettings4Fill,
	},
]
