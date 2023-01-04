import UIButton from '@components/UI/UIButton/UIButton'
import { FC } from 'react'
import { BiLogIn } from 'react-icons/bi'
import styles from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	return (
		<UIButton className={styles.logout}>
			<BiLogIn />
			<span>Выйти из аккаунта</span>
		</UIButton>
	)
}

export default LogoutButton
