import { FC, PropsWithChildren } from 'react'
import { IButton } from './UIButton.interface'
import classnames from 'classnames'
import styles from './UIButton.module.scss'

const UIButton: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={(classnames(styles.button, className))} {...rest}>
			{children}
		</button>
	)
}

export default UIButton
