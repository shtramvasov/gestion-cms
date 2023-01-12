import { FC, PropsWithChildren } from 'react'
import { IModal } from './UIModal.interface'
import classnames from 'classnames'
import styles from './UIModal.module.scss'


const UIModal: FC<PropsWithChildren<IModal>> = ({ children, className, ...rest }) => {
	return (
		<div className={classnames(styles.button, className)} {...rest}>
			{children}
		</div>
	)
}

export default UIModal
