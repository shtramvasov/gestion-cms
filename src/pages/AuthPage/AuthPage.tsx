import { FC } from 'react'
import styles from './AuthPage.module.scss'
import UIInput from '@components/UI/UIInput/UIInput'
import UIButton from '@components/UI/UIButton/UIButton'

const AuthPage: FC = () => {
	return (
		<section className={styles.wrapper}>
			<h1>Регистрация</h1>
			<UIInput placeholder='Имя' />
			<UIButton>Кнопка</UIButton>
			<UIButton secondary>Кнопка</UIButton>
			<UIButton success>Кнопка</UIButton>
			<UIButton warning>Кнопка</UIButton>
			<UIButton danger>Кнопка</UIButton>
			<UIButton accent>Кнопка</UIButton>
			<UIButton large>Кнопка</UIButton>
		</section>
	)
}

export default AuthPage
