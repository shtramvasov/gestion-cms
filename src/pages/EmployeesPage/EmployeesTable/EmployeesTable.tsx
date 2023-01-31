{
	/* eslint-disable react/jsx-key */
}
import { FC, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/Avatar/Avatar'
import { useTable, TableOptions } from 'react-table'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import { IUser } from '@interfaces/IUser'
import { convertToDate } from '@utils/convertToDate'
import { isEven } from '@utils/isEven'
import classnames from 'classnames'
import styles from './EmployeesTable.module.scss'

const EmployeesTable: FC = () => {
	const { data: users, isSuccess } = useFetchUsersQuery()
	const [employees, setEmployees] = useState<ReadonlyArray<IUser>>([])
	useEffect(() => {
		isSuccess && setEmployees(users)
	})

	const columns = useMemo<TableOptions<IUser>['columns']>(
		() => [
			{
				Header: 'Имя сотрдника',
				accessor: 'name',
				Cell: row => (
					<div className={styles.avatarcell}>
						<Avatar uid={row.row.original.uid} size='sm' />
						<Link to={`/employees/${row.row.original.uid}`}>
							<span>{row.value}</span>
						</Link>
					</div>
				),
			},
			{
				Header: 'Должность',
				accessor: 'position',
			},
			{
				Header: 'Рабочая почта',
				accessor: 'email',
			},
			{
				Header: 'Принят на работу',
				accessor: 'createdAt',
				Cell: row => <p>{convertToDate(row.value)}</p>,
			},
		],
		[],
	)

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: employees })

	return (
		<div className={styles.container}>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, index) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => (
									<td
										{...cell.getCellProps()}
										className={classnames({ [styles.stripped]: isEven(index) })}
									>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default EmployeesTable
