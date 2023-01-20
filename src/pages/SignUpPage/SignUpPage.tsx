import { FC } from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import UIInput from '@components/UI/UIInput/UIInput'
import UIButton from '@components/UI/UIButton/UIButton'
import Logo from '@components/Logo/Logo'
import { validateEmail } from '@utils/validateEmail'
// import { useAppDispatch } from '@hooks/useTypedReduxHooks'
// import { useAuth } from '@hooks/useAuth'
// import { setAuthUser } from '@store/slices/authUserSlice'
import { IUser } from '@interfaces/IUser'
import styles from '@pages/SignInPage/SignInPage.module.scss'

// temporary
import { collection, addDoc } from 'firebase/firestore'
import { database } from '@store/api/firebase'

const SignUpPage: FC = () => {
	interface IUserData extends IUser {
		password: string
	}
	// const dispatch = useAppDispatch()
	const usersdb = collection(database, 'users')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>()

	// const { isAuth } = useAuth()

	const onSubmit: SubmitHandler<IUserData> = data => {
		console.log(data)
		// const auth = getAuth()

		// createUserWithEmailAndPassword(auth, data.email, data.password)
		// 	.then(({ user }) => {
		// 		addDoc(usersdb, {
		// 			email: user.email,
		// 			name: data.name,
		// 			uid: user.uid,
		// 		})
		// 		// dispatch(
		// 		// 	setAuthUser({
		// 		// 		email: user.email,
		// 		// 		id: user.uid,
		// 		// 		token: user.refreshToken,
		// 		// 	}),
		// 		// )
		// 	})
		// 	.catch(console.error)
		// reset()
	}

	return (
		<section className={styles.wrapper}>
			<Logo />
			<h1>Впервые с нами?</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<UIInput
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
				<UIInput
					placeholder='Пароль'
					error={errors.password}
					{...register('password', {
						required: 'Введите пароль',
						minLength: { value: 6, message: 'Пароль не менее 6 символов' },
					})}
				/>
				<UIInput
					placeholder='Имя'
					error={errors.name}
					{...register('name', {
						required: 'Введите ваше имя',
					})}
				/>
				<div className='flex justify-center gap-5'>
					<UIInput
						type='radio'
						label='Менеджер'
						value='Менеджер'
						error={errors.position}
						{...register('position', {
							required: 'Выберите должность',
						})}
					/>
					<UIInput
						type='radio'
						label='Рабочий'
						value='Рабочий'
						{...register('position')}
					/>
				</div>
				<UIInput type='file' {...register('photoUrl')} />
				<UIButton large secondary>
					Зарегистрироваться
				</UIButton>
			</form>
			<footer className={styles.footer}>
				<Link to={'/signin'}>
					<p>Я зарегестрирован</p>
				</Link>
				<Link to={'/'}>
					<p>Вернуться на главную</p>
				</Link>
			</footer>
		</section>
	)
}

export default SignUpPage
