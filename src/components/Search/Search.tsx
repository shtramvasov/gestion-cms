import { FC, useState } from 'react'
import { Input } from '@components/UI'
import { GoSearch } from 'react-icons/go'
import styles from './Search.module.scss'

interface IProps {
	search: string
	setSearch: (e: any) => void
}

const Search: FC<IProps> = ({ search, setSearch }) => {
	const [value, setValue] = useState(search)
	return (
		<div className={styles.container}>
			<GoSearch className={styles.icon} />
			<Input
				placeholder='Искать...'
				className={styles.search}
				value={value}
				onChange={e => {
					setValue(e.target.value), setSearch(e.target.value)
				}}
			/>
		</div>
	)
}
export default Search
