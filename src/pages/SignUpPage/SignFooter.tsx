import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
	className: string
	isSigningUp: boolean
}

const SignFooter: FC<IProps> = ({ className, isSigningUp }) => {
	return (
		<footer className={className}>
			{isSigningUp ? (
				<Link to={'/signin'}>
					<p>Я зарегестрирован</p>
				</Link>
			) : (
				<Link to={'/signup'}>
					<p>Нет аккаунта?</p>
				</Link>
			)}
			<Link to={'/'}>
				<p>Вернуться на главную</p>
			</Link>
		</footer>
	)
}

export default SignFooter
