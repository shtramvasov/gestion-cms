import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import UIInput from '@components/UI/UIInput/UIInput'
import UIButton from '@components/UI/UIButton/UIButton'
import Logo from '@components/Logo/Logo'
import styles from './AuthPage.module.scss'
import { validateEmail } from '@utils/validateEmail'

const AuthPage: FC = () => {
	interface IUserData {
		email: string
		password: string | number
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserData>()

	const [isReg, setIdReg] = useState(false)

	const onSubmit: SubmitHandler<IUserData> = data => {
		console.log(data.email, data.password)
	}

	return (
		<section className={styles.wrapper}>
			<Logo />
			<h1>{isReg ? 'Войдите в систему' : 'Добро пожаловать!'}</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<UIInput
					placeholder='Почта'
					error={errors.email}
					{...register('email', {
						required: 'Введите почту',
						pattern: {
							value: validateEmail,
							message: 'Некорректная почта',
						},
					})}
				/>
				<UIInput
					placeholder='Пароль'
					error={errors.password}
					{...register('password', {
						required: 'Введите пароль',
						minLength: { value: 4, message: 'Пароль не менее 4 символов' },
					})}
				/>
				<UIButton large secondary className='justify-center'>
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
