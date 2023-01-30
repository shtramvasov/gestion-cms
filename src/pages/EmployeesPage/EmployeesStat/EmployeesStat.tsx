import { FC } from 'react'
import { BiRocket } from 'react-icons/bi'
import StatLayout from '../Statistics/StatLayout/StatLayout'
import styles from './EmployeesStat.module.scss'

const EmployeesStat: FC = () => {
	return (
		<StatLayout icon={<BiRocket />}>
			<div className={styles.container}>Stat</div>
		</StatLayout>
	)
}

export default EmployeesStat
