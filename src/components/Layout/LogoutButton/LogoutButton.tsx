import Button from '@components/UI/Button/Button'
import { FC } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { useAppDispatch } from '@hooks/useTypedReduxHooks'
import { logout } from '@store/slices/authUserSlice'
import styles from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	const dispatch = useAppDispatch()
	return (
		<Button onClick={() => dispatch(logout())} className={styles.logout}>
			<BiLogIn />
			<span>Выйти из аккаунта</span>
		</Button>
	)
}

export default LogoutButton
