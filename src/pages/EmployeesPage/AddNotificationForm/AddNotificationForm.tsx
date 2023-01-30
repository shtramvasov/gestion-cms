import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Heading from '@components/Heading/Heading'
import { Input, Button, TextArea } from '@components/UI'
import { INotification } from '@interfaces/INotification'
import { useAddNotificationMutation } from '@store/slices/notificationsSlice'
import { toast } from 'react-toastify'
import styles from './AddNotificationForm.module.scss'

interface IProps {
	close?: () => void
}

const AddNotificationForm: FC<IProps> = ({ close }) => {
	const [addNotification] = useAddNotificationMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<INotification>()

	const onSubmit: SubmitHandler<INotification> = async data => {
		addNotification(data)
		toast.success('Оповещение добавлено')
		reset()
		if (close) {
			close()
		}
	}
	return (
		<div className={styles.container}>
			<Heading text='Добавить оповещение' />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					placeholder='Название'
					error={errors.title}
					{...register('title', {
						required: 'Введите название оповещения',
					})}
				/>
				<TextArea
					placeholder='Описание'
					error={errors.description}
					{...register('description', {
						required: 'Введите описание оповещения',
					})}
				/>
				<Button accent>Добавить</Button>
			</form>
		</div>
	)
}

export default AddNotificationForm
