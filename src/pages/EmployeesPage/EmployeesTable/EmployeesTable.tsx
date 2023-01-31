{
	/* eslint-disable react/jsx-key */
}
import { FC, useEffect, useMemo, useState } from 'react'
import { useTable, TableOptions } from 'react-table'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import { IUser } from '@interfaces/IUser'
import { convertToDate } from '@utils/convertToDate'
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
					{rows.map(row => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
