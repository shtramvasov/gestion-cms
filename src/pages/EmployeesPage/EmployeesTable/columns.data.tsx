import { Link } from 'react-router-dom'
import Avatar from '@components/Avatar/Avatar'
import { Column } from 'react-table'
import { IUser } from '@interfaces/IUser'
import { convertToDate } from '@utils/convertToDate'
import styles from './EmployeesTable.module.scss'

export const columns: Column<IUser>[] = [
	{
		Header: 'Имя сотрудника',
		accessor: 'name',
		Cell: row => (
			<div className={styles.avatarcell}>
				<Avatar
					uid={row.row.original.uid}
					size='sm'
					className='hidden lg:flex'
				/>
				<Link to={`/employees/${row.row.original.uid}`}>
					<span>{row.value}</span>
				</Link>
			</div>
		),
	},
	{
		Header: 'Должность',
		accessor: 'position',
		Cell: row => (
			<p className={styles.badge}>
				{row.value === 'Дизайнер' && `🎨 ${row.value}`}
				{row.value === 'Менеджер' && `📧 ${row.value}`}
				{row.value === 'Разработчик' && `🖱️ ${row.value}`}
				{row.value === 'Тестировщик' && `🧪 ${row.value}`}
			</p>
		),
	},
	{
		Header: 'Рабочая почта',
		accessor: 'email',
	},
	{
		Header: 'Работает с',
		accessor: 'createdAt',
		Cell: row => <p>{convertToDate(row.value)}</p>,
	},
]
