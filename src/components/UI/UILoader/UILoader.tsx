import { FC } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import styles from './UILoader.module.scss'

const UILoader: FC = () => {
	return <BiLoaderAlt className={styles.loader} />
}

export default UILoader
