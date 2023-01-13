import { FC, useState } from 'react'
import styles from './AuthPage.module.scss'
import UIInput from '@components/UI/UIInput/UIInput'
import Logo from '@components/Logo/Logo'
import { Link } from 'react-router-dom'
import UIButton from '@components/UI/UIButton/UIButton'

const AuthPage: FC = () => {
	const [isReg, setIdReg] = useState(false)
	return (
		<section className={styles.wrapper}>
			<Logo />
			<h1>{isReg ? 'Войдите в систему' : 'Добро пожаловать!'}</h1>
			<form className={styles.form}>
				<UIInput placeholder='Почта' />
				<UIInput placeholder='Пароль' />
				<UIButton large className={styles.submit}>
					{isReg ? 'Войти' : 'Зарегистрироваться'}
				</UIButton>
			</form>
			<footer className={styles.footer}>
				<p onClick={() => setIdReg(!isReg)}>
					{isReg ? 'Нет аккаунта?' : 'Я зарегестрирован'}
				</p>
				<Link to={'/'}>
					<p>Вернуться на главную</p>
				</Link>
			</footer>
		</section>
	)
}

export default AuthPage
