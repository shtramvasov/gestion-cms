import { FC } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import styles from './Loader.module.scss'

const Loader: FC = () => {
	return <BiLoaderAlt className={styles.loader} />
}

export default Loader
