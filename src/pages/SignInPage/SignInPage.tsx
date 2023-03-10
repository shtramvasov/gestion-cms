import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '@components/Logo/Logo'
import SignFooter from '@pages/SignUpPage/SignFooter'
import { Input, Button } from '@components/UI'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { validateEmail } from '@utils/validateEmail'
import { setAuthUser } from '@store/slices/authUserSlice'
import { useAppDispatch } from '@hooks/useTypedReduxHooks'
import { useDarkMode } from '@hooks/useDarkMode'
import { toast } from 'react-toastify'
import styles from './SignInPage.module.scss'

const SignInPage: FC = () => {
	useDarkMode()
	interface IUserData {
		email: string
		password: string
	}
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>()

	const onSubmit: SubmitHandler<IUserData> = data => {
		const auth = getAuth()

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => {
				dispatch(
					setAuthUser({
						email: user.email,
						id: user.uid,
					}),
				)
			})
			.then(() => toast.success('Добро пожаловать!'))
			.then(() => navigate('/'))
			.catch(() => toast.error('Такого пользователя не существует'))
		reset()
	}

	return (
		<section className={styles.wrapper}>
			<Logo />
			<h1>Добро пожаловать!</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					placeholder='Почта'
					type='email'
					error={errors.email}
					{...register('email', {
						required: 'Введите почту',
						pattern: {
							value: validateEmail,
							message: 'Некорректная почта',
						},
					})}
				/>
				<Input
					placeholder='Пароль'
					error={errors.password}
					{...register('password', {
						required: 'Введите пароль',
						minLength: { value: 6, message: 'Пароль не менее 6 символов' },
					})}
				/>
				<Button large secondary>
					Войти
				</Button>
			</form>
			<SignFooter className={styles.footer} isSigningUp={false} />
		</section>
	)
}

export default SignInPage
