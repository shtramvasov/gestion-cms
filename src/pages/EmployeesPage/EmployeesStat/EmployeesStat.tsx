import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BiRocket } from 'react-icons/bi'
import StatLayout from '../Statistics/StatLayout/StatLayout'
import { Button } from '@components/UI'
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
			<div className={styles.container}>
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
				<Link to='/signup'>
					<Button secondary>Добавить сотрудника</Button>
				</Link>
			</div>
		</StatLayout>
	)
}

export default EmployeesStat
