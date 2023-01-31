{
	/* eslint-disable react/jsx-key */
}
import { FC, useEffect, useState } from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import Search from '@components/Search/Search'
import Heading from '@components/Heading/Heading'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import { IUser } from '@interfaces/IUser'
import { isEven } from '@utils/isEven'
import { columns } from './columns.data'
import classnames from 'classnames'
import styles from './EmployeesTable.module.scss'

const EmployeesTable: FC = () => {
	const { data: users, isSuccess } = useFetchUsersQuery()
	const [employees, setEmployees] = useState<ReadonlyArray<IUser>>([])
	useEffect(() => {
		isSuccess && setEmployees(users)
	})

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable({ columns, data: employees }, useGlobalFilter, useSortBy)
	const { globalFilter } = state

	return (
		<div className={styles.container}>
			<Heading text='Искать сотрудников' />
			<Search search={globalFilter} onChange={setGlobalFilter} />
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									{column.isSorted ? (
										column.isSortedDesc ? (
											<MdOutlineArrowDropDown />
										) : (
											<MdOutlineArrowDropUp />
										)
									) : (
										''
									)}
								</th>
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
