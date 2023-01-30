import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'
import StatLayout from '../Statistics/StatLayout/StatLayout'
import { Button, Modal } from '@components/UI'
import { useAuth } from '@hooks/useAuth'
import styles from './AddNotification.module.scss'

const AddNotification: FC = () => {
	const { isAuth } = useAuth()
	const [openModal, setOpenModal] = useState(false)
	return (
		<StatLayout icon={<MdOutlineNotificationsActive />} monochrome>
			<div className={styles.container}>
				<span>Управляйте оповещениями компании</span>
				{isAuth ? (
					<Button secondary onClick={() => setOpenModal(true)}>
						Добавить оповещение
					</Button>
				) : (
					<Link to='/signin'>
						<Button secondary>
							<BiLockAlt /> Авторизируйтесь
						</Button>
					</Link>
				)}
				<Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
					Форма добвления
				</Modal>
			</div>
		</StatLayout>
	)
}

export default AddNotification
