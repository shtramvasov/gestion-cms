import { FC } from 'react'
import SettingsWrapper from '../SettingsWrapper/SettingsWrapper'
import Setting from '../Setting/Setting'
import fullLight from '@assets/images/fulldate-light.png'
import fullDark from '@assets/images/fulldate-dark.png'
import semiLight from '@assets/images/semidate-light.png'
import semiDark from '@assets/images/semidate-dark.png'
import { useDarkMode } from '@hooks/useDarkMode'
import { useDateFormat } from '@hooks/useDateFormat'

const DateFormatting: FC = () => {
	const { dateformat, toggle } = useDateFormat()
	const { theme } = useDarkMode()
	return (
		<SettingsWrapper heading='Форматирование даты'>
			<Setting
				onClick={toggle}
				image={theme == 'dark' ? fullDark : fullLight}
				text='Полная дата'
				isActive={dateformat == 'D MMMM YYYY'}
			/>
			<Setting
				onClick={toggle}
				image={theme == 'dark' ? semiDark : semiLight}
				text='Сокращеная'
				isActive={dateformat == 'D.MM.YYYY'}
			/>
		</SettingsWrapper>
	)
}

export default DateFormatting
