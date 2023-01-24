import { FC, forwardRef } from 'react'
import { IInput } from './Input.interface'
import classnames from 'classnames'
import styles from './Input.module.scss'

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
	({ error, label, type = 'text', className, ...rest }, ref) => {
		return (
			<div className={classnames(styles.input, className)}>
				{label ? (
					<label className={styles.radio}>
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

Input.displayName = 'Input'

export default Input
