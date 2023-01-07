import { FC } from 'react'
import styles from './Heading.module.scss'

interface IHeading {
	text: string
}

const Heading: FC<IHeading> = ({ text }) => {
	return (
		<div className={styles.container}>
			<h3>{text}</h3>
		</div>
	)
}

export default Heading
