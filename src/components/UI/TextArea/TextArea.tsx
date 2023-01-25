import { FC, forwardRef } from 'react'
import { ITextArea } from './TextArea.interface'
import classnames from 'classnames'
import styles from './TextArea.module.scss'

const TextArea: FC<ITextArea> = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, className, ...rest }, ref) => {
		return (
			<div className={classnames(styles.textarea, className)}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

TextArea.displayName = 'TextArea'

export default TextArea
