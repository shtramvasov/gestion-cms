import { FC } from 'react'
import { Input } from '@components/UI'
import { GoSearch } from 'react-icons/go'
import styles from './Search.module.scss'

interface IProps {
	search: string
	onChange: (e) => void
}

const Search: FC<IProps> = ({ search, onChange }) => {
	return (
		<div className={styles.container}>
			<GoSearch className={styles.icon} />
			<Input
				placeholder='Искать...'
				className={styles.search}
				value={search}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	)
}
export default Search
