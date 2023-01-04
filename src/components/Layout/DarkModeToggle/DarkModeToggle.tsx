import { FC } from 'react'
import { Switch } from '@chakra-ui/react'
import { MdDarkMode } from 'react-icons/md'
import { HiSun } from 'react-icons/hi2'
import styles from './DarkModeToggle.module.scss'
import { useDarkMode } from '@hooks/useDarkMode'

const DarkModeToggle: FC = () => {
	const { toggle, theme } = useDarkMode()
	return (
		<div className={styles.container}>
			<HiSun />
			<Switch isChecked={theme == 'dark'} size='md' onChange={toggle} />
			<MdDarkMode />
		</div>
	)
}

export default DarkModeToggle
