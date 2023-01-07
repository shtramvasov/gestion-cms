import { FC } from 'react'
import styles from './Heading.module.scss'

interface IHeading {
	text: string
	date?: string
}

const Heading: FC<IHeading> = ({ text, date }) => {
	return (
		<div className={styles.container}>
			<h3>{text}</h3>
			{date ? <p>{date}</p> : null}
		</div>
	)
}

export default Heading
