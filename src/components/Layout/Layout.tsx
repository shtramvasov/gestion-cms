import { FC, PropsWithChildren } from 'react'
import Sidebar from '@components/Sidebar/Sidebar'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<section className={styles.wrapper}>{children}</section>
		</main>
	)
}
export default Layout
