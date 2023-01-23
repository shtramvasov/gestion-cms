import { FC } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { HiSun } from 'react-icons/hi2'
import { useDarkMode } from '@hooks/useDarkMode'
import styles from './DarkModeToggle.module.scss'

const DarkModeToggle: FC = () => {
	const { toggle, theme } = useDarkMode()
	return (
		<div onClick={toggle} className={styles.container}>
			{theme == 'dark' ? <MdDarkMode /> : <HiSun />}
		</div>
	)
}

export default DarkModeToggle
