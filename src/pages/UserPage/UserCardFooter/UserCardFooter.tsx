import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Modal } from '@components/UI'
import { AiOutlineUserDelete } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { IUser } from '@interfaces/IUser'
import { useAuth } from '@hooks/useAuth'
import { useDeleteUserMutation } from '@store/slices/usersSlice'
import { toast } from 'react-toastify'
import styles from './UserCardFooter.module.scss'

interface IProps {
	user: IUser | undefined
}

const UserCardFooter: FC<IProps> = ({ user }) => {
	const [openModal, setOpenModal] = useState(false)
	const { id, isAuth } = useAuth()
	const navigate = useNavigate()
	const [deleteUser] = useDeleteUserMutation()

	const handleDelete = () => {
		deleteUser(user?.uid as string)
		navigate('/employees')
		toast.success('Сотрудник удален')
	}
	return (
		<div className={styles.buttons}>
			{id == user?.uid ? (
				<Button className='w-full' disabled secondary>
					<BiLockAlt />
					Себя уволить нельзя
				</Button>
			) : !isAuth ? (
				<Link className='w-full' to='/signin'>
					<Button className='w-full' secondary>
						Войдите, чтобы удалить
					</Button>
				</Link>
			) : (
				<Button className='w-full' danger onClick={() => setOpenModal(true)}>
					<AiOutlineUserDelete />
					Уволить {user?.name}
				</Button>
			)}
			<Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
				<div className={styles.warning}>
					<h2>Вы действительно хотите уволить {user?.name}?</h2>
					<div className='flex gap-4'>
						<Button danger className='w-full' onClick={() => handleDelete()}>
							Да
						</Button>
						<Button
							secondary
							className='w-full'
							onClick={() => setOpenModal(false)}
						>
							Нет
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default UserCardFooter
