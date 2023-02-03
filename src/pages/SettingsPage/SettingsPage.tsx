import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import Heading from '@components/Heading/Heading'
import Themes from './Themes/Themes'
import Notifications from './Notifications/Notifications'
import DateFormatting from './DateFormatting/DateFormatting'
import styles from './SettingsPage.module.scss'

const SettingsPage: FC = () => {
	return (
		<Layout>
			<section className={styles.container}>
				<Heading text='Задайте ваши личные настройки приложения' />
				<Themes />
				<Notifications />
				<DateFormatting />
			</section>
		</Layout>
	)
}

export default SettingsPage
