import { FC, PropsWithChildren } from 'react'
import styles from './SettingsWrapper.module.scss'

interface IProps {
	heading: string
}

const SettingsWrapper: FC<PropsWithChildren<IProps>> = ({
	children,
	heading,
}) => {
	return (
		<div className={styles.wrapper}>
			<h3>{heading}</h3>
			<div className={styles.container}>{children}</div>
		</div>
	)
}

export default SettingsWrapper
