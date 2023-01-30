import { FC } from 'react'
import { BiRocket } from 'react-icons/bi'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import StatLayout from '../Statistics/StatLayout/StatLayout'
import styles from './EmployeesStat.module.scss'
import { reducePositions } from '@utils/reducePositions'

const EmployeesStat: FC = () => {
	const { data: users } = useFetchUsersQuery()
	const managers = reducePositions(users, 'Менеджер')
	return (
		<StatLayout icon={<BiRocket />}>
			<div className={styles.container}>Stat</div>
		</StatLayout>
	)
}

export default EmployeesStat
