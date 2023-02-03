import { FC } from 'react'
import SettingsWrapper from '../SettingsWrapper/SettingsWrapper'
import Setting from '../Setting/Setting'
import dark from '@assets/images/notifications-dark.png'
import light from '@assets/images/notifications-light.png'
import { useDarkMode } from '@hooks/useDarkMode'
import { useNotifications } from '@hooks/useNotifications'

const Notifications: FC = () => {
	const { theme } = useDarkMode()
	const { notifications, toggle } = useNotifications()
	return (
		<SettingsWrapper heading='Оповещения'>
			<Setting
				onClick={toggle}
				image={theme == 'light' ? light : dark}
				text={notifications ? 'Включены' : 'Отключены'}
				isActive={notifications}
			/>
		</SettingsWrapper>
	)
}

export default Notifications
