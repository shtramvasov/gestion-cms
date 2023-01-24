import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/UI/Button/Button'
import classnames from 'classnames'
import styles from './AuthLinks.module.scss'

interface IAuthLinks {
	className?: string
}

const AuthLinks: FC<IAuthLinks> = ({ className }) => {
	return (
		<div className={classnames(styles.container, className)}>
			<Link to={'/signin'}>
				<Button secondary className='w-full'>
					Войти
				</Button>
			</Link>
			<span className={styles.break} />
			<Link to={'/signup'}>
				<Button secondary className='w-full hidden md:flex'>
					Создать аккаунт
				</Button>
			</Link>
		</div>
	)
}

export default AuthLinks
