import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import UIInput from '@components/UI/UIInput/UIInput'
import UIButton from '@components/UI/UIButton/UIButton'
import Logo from '@components/Logo/Logo'
import { validateEmail } from '@utils/validateEmail'
import { useAppDispatch } from '@hooks/useTypedReduxHooks'

import { setAuthUser } from '@store/slices/authUserSlice'
import styles from './SignInPage.module.scss'
import SignFooter from '@pages/SignUpPage/SignFooter'

const SignInPage: FC = () => {
	interface IUserData {
		email: string
		password: string
	}
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>()

	// import { useAuth } from '@hooks/useAuth'
	// const { isAuth } = useAuth()

	const onSubmit: SubmitHandler<IUserData> = data => {
		const auth = getAuth()

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				dispatch(
					setAuthUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken,
					}),
				)
			})
			.catch(console.error)
		reset()
	}

	return (
		<section className={styles.wrapper}>
			<Logo />
			<h1>Добро пожаловать!</h1>
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
						minLength: { value: 6, message: 'Пароль не менее 6 символов' },
					})}
				/>
				<UIButton large secondary>
					Войти
				</UIButton>
			</form>
			<SignFooter className={styles.footer} isSigningUp={false} />
		</section>
	)
}

export default SignInPage
