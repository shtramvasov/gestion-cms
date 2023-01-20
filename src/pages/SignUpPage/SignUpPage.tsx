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
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const SignUpPage: FC = () => {
	interface IUserData extends IUser {
		password: string
		file: FileList
	}
	// const dispatch = useAppDispatch()
	const usersdb = collection(database, 'users')
	const storage = getStorage()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>()

	// const { isAuth } = useAuth()

	const onSubmit: SubmitHandler<IUserData> = async data => {
		const auth = getAuth()
		const imageName = data.file[0].name
		const imageRef = ref(storage, imageName)

		await uploadBytes(imageRef, data.file[0])
		await getDownloadURL(imageRef).then(url => (data.photoUrl = url))
		// console.log(data.photoUrl)
		// console.log(data)

		createUserWithEmailAndPassword(auth, data.email, data.password).then(
			({ user }) => {
				addDoc(usersdb, {
					email: user.email,
					name: data.name,
					uid: user.uid,
					position: data.position,
					photoUrl: data.photoUrl,
				})
			},
		)

		// 		// dispatch(
		// 		// 	setAuthUser({
		// 		// 		email: user.email,
		// 		// 		id: user.uid,
		// 		// 		token: user.refreshToken,
		// 		// 	}),
		// 		// )
		// 	})

		reset()
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
