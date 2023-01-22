import { FC } from 'react'
import Logo from '@components/Logo/Logo'
import SignFooter from './SignFooter'
import UIInput from '@components/UI/UIInput/UIInput'
import UIButton from '@components/UI/UIButton/UIButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { validateEmail } from '@utils/validateEmail'
import { uploadImage } from '@services/uploadImage'
import { IUserData } from '@interfaces/IUserData'
import { useAddUserMutation } from '@store/slices/usersSlice'
import styles from '@pages/SignInPage/SignInPage.module.scss'

const SignUpPage: FC = () => {
	const [addUser] = useAddUserMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>()

	const onSubmit: SubmitHandler<IUserData> = async data => {
		const auth = getAuth()

		await uploadImage(data.file).then(url => (data.photoUrl = url))

		await createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(({ user }) => (data.uid = user.uid))
			.then(() => addUser(data))

		reset()
	}

	// const dispatch = useAppDispatch()
	// import { useAppDispatch } from '@hooks/useTypedReduxHooks'
	// import { useAuth } from '@hooks/useAuth'
	// import { setAuthUser } from '@store/slices/authUserSlice'
	// 		// dispatch(
	// 		// 	setAuthUser({
	// 		// 		email: user.email,
	// 		// 		id: user.uid,
	// 		// 		token: user.refreshToken,
	// 		// 	}),
	// 		// )
	// 	})

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
				<div className='flex justify-center gap-5 '>
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
				<UIInput
					type='file'
					accept='.png, .jpg, .jpeg'
					required
					{...register('file')}
				/>
				<UIButton large secondary>
					Зарегистрироваться
				</UIButton>
			</form>
			<SignFooter className={styles.footer} isSigningUp />
		</section>
	)
}
export default SignUpPage
