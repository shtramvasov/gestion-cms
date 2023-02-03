import { FC } from 'react'
import SettingsWrapper from '../SettingsWrapper/SettingsWrapper'
import Setting from '../Setting/Setting'
import themeDark from '@assets/images/theme-dark.png'
import themeLight from '@assets/images/theme-light.png'
import { useDarkMode } from '@hooks/useDarkMode'

const Themes: FC = () => {
	const {theme, toggle} = useDarkMode()
	return (
		<SettingsWrapper heading='Тема'>
			<Setting onClick={toggle} image={themeLight} text='Светлая' isActive={theme == 'light'} />
			<Setting onClick={toggle} image={themeDark} text='Темная' isActive={theme == 'dark'} />
		</SettingsWrapper>
	)
}

export default Themes
