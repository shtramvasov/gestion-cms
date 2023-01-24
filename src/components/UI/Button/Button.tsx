import { FC, PropsWithChildren } from 'react'
import { IButton } from './Button.interface'
import classnames from 'classnames'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	secondary,
	success,
	warning,
	danger,
	accent,
	rounded,
	large,
	...rest
}) => {
	return (
		<button
			className={classnames(styles.button, className, {
				[styles.secondary]: secondary,
				[styles.success]: success,
				[styles.warning]: warning,
				[styles.danger]: danger,
				[styles.accent]: accent,
				[styles.rounded]: rounded,
				[styles.large]: large,
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
