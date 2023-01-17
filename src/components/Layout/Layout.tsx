import { FC, PropsWithChildren } from 'react'
import Sidebar from '@components/Layout/Sidebar/Sidebar'
import styles from './Layout.module.scss'
import { Link } from 'react-router-dom'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<section className={styles.wrapper}>
				<Link to={'/signin'} className='text-indigo-600'>Войти в аккаунт</Link>
				<Link to={'/signup'} className='text-indigo-600'>Регистрация</Link>
				{children}
			</section>
		</main>
	)
}
export default Layout
