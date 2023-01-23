import UIButton from '@components/UI/UIButton/UIButton'
import { FC } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { useAppDispatch } from '@hooks/useTypedReduxHooks'
import { logout } from '@store/slices/authUserSlice'
import styles from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	const dispatch = useAppDispatch()
	return (
		<UIButton onClick={() => dispatch(logout())} className={styles.logout}>
			<BiLogIn />
			<span>Выйти из аккаунта</span>
		</UIButton>
	)
}

export default LogoutButton
