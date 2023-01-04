import { FC } from 'react'
import { BiLogIn } from 'react-icons/bi'
import styles from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	return (
		<div className={styles.logout}>
			<BiLogIn />
			<span>Выйти из аккаунта</span>
		</div>
	)
}

export default LogoutButton
