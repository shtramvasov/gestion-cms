import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Heading from '@components/Heading/Heading'
import Input from '@components/UI/Input/Input'
import Button from '@components/UI/Button/Button'
import TextArea from '@components/UI/TextArea/TextArea'
import { ITask } from '@interfaces/ITask'
import styles from './AddTaskForm.module.scss'

const AddTaskForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ITask>()

	const onSubmit: SubmitHandler<ITask> = async data => {
		reset()
	}

	return (
		<div className={styles.container}>
			<Heading text='Добавить новую задачу' />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					placeholder='Название'
					error={errors.title}
					{...register('title', {
						required: 'Введите название задачи',
					})}
				/>
				<TextArea
					placeholder='Описание задачи'
					error={errors.description}
					{...register('description', {
						required: 'Введите описание',
					})}
				/>
			</form>
		</div>
	)
}

export default AddTaskForm
