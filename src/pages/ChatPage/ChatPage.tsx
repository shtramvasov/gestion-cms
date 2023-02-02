import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import Heading from '@components/Heading/Heading'
import Chat from './Chat/Chat'
import styles from './ChatPage.module.scss'

const ChatPage: FC = () => {
	return (
		<Layout>
			<section className={styles.container}>
				<Heading text='Внутренний чат наших сотрудников' />
				<Chat />
			</section>
		</Layout>
	)
}

export default ChatPage
