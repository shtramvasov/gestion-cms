import { FC, PropsWithChildren } from 'react'
import { IModal } from './Modal.interface'
import { MdClose } from 'react-icons/md'
import classnames from 'classnames'
import styles from './Modal.module.scss'

const Modal: FC<PropsWithChildren<IModal>> = ({
	isOpen,
	onClose,
	children,
}) => {
	return (
		<div
			className={classnames(styles.modal, {
				[styles.modal__active]: isOpen,
			})}
		>
			<div className={styles.container}>
				<MdClose className={styles.close} onClick={onClose} />
				{children}
			</div>
		</div>
	)
}

export default Modal
