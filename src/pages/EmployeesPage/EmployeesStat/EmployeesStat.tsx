import { FC } from 'react'
import { BiRocket } from 'react-icons/bi'
import StatLayout from '../Statistics/StatLayout/StatLayout'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import { reducePositions } from '@utils/reducePositions'
import styles from './EmployeesStat.module.scss'

const EmployeesStat: FC = () => {
	const { data: users } = useFetchUsersQuery()
	const data = {
		managers: reducePositions(users, 'Менеджер'),
		designers: reducePositions(users, 'Дизайнер'),
		developers: reducePositions(users, 'Разработчик'),
		testers: reducePositions(users, 'Тестировщик'),
	}
	return (
		<StatLayout icon={<BiRocket />}>
			<ul className={styles.stat}>
				<li>
					<span>{data.managers}</span> Менеджеров
				</li>
				<li>
					<span>{data.developers}</span> Разработчиков
				</li>
				<li>
					<span>{data.designers}</span> Дизайнеров
				</li>
				<li>
					<span>{data.testers}</span> Тестировщиков
				</li>
			</ul>
		</StatLayout>
	)
}

export default EmployeesStat
