import { FC } from 'react'
import Heading from '@components/Heading/Heading'
import UIButton from '@components/UI/UIButton/UIButton'
import styles from './TasksManager.module.scss'
import { HiOutlineDotsHorizontal, HiOutlineViewGridAdd } from 'react-icons/hi'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react'

const TasksManager: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<div className={styles.container}>
			<Heading text='Остальные задачи' />
			<UIButton onClick={onOpen} className='bg-slate-300'>
				<HiOutlineDotsHorizontal /> Посмотреть все задачи
			</UIButton>
			<UIButton className='bg-slate-300'>
				<HiOutlineViewGridAdd /> Добавить новую задачу
			</UIButton>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<p>Тест</p>
				</ModalContent>
			</Modal>
		</div>
	)
}

export default TasksManager
