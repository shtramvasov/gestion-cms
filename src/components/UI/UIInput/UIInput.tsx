import { FC, forwardRef } from 'react'
import { IInput } from './UIInput.interface'
import classnames from 'classnames'
import styles from './UIInput.module.scss'

const UIInput: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
	({ error, label, type = 'text', className, ...rest }, ref) => {
		return (
			<div className={classnames(styles.input, className)}>
				{label ? (
					<label>
						<input ref={ref} type={type} {...rest} />
						{label}
					</label>
				) : (
					<input ref={ref} type={type} {...rest} />
				)}
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

UIInput.displayName = 'UIInput'

export default UIInput
