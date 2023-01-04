import { ISidebarNavigation } from './Navigation.interface'
import { HiUsers, HiHome, HiCog } from 'react-icons/hi'
import { HiChatBubbleOvalLeft } from 'react-icons/hi2'

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
		icon: HiCog,
	},
]
