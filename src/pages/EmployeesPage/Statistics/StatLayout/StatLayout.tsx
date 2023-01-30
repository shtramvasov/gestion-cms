import { FC, PropsWithChildren, ReactNode } from 'react'
import classnames from 'classnames'
import styles from './StatLayout.module.scss'

interface IProps {
	icon: ReactNode
	monochrome?: boolean
}

const StatLayout: FC<PropsWithChildren<IProps>> = ({
	icon,
	children,
	monochrome,
}) => {
	return (
		<div className={styles.container}>
			<span
				className={classnames(styles.icon, { [styles.icon__monochrome]: monochrome })}
			>
				{icon}
			</span>
			{children}
		</div>
	)
}
export default StatLayout
