import Button from '@components/UI/Button/Button'
import { FC } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { RiCopyrightLine } from 'react-icons/ri'
import { useAppDispatch } from '@hooks/useTypedReduxHooks'
import { logout } from '@store/slices/authUserSlice'
import { useAuth } from '@hooks/useAuth'
import classnames from 'classnames'
import styles from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	const { isAuth } = useAuth()
	const dispatch = useAppDispatch()
	return (
		<>
			{isAuth ? (
				<Button onClick={() => dispatch(logout())} className={styles.logout}>
					<BiLogIn />
					<span>Выйти из аккаунта</span>
				</Button>
			) : (
				<Button className={classnames(styles.logout, 'px-12')}>
					<RiCopyrightLine />
					<span>Gestion</span>
				</Button>
			)}
		</>
	)
}

export default LogoutButton
