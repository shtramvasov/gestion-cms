import { FC } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import Heading from '@components/Heading/Heading'
import { Input, Button, TextArea } from '@components/UI'
import { ITask } from '@interfaces/ITask'
import { useFetchUserQuery, useFetchUsersQuery } from '@store/slices/usersSlice'
import { useAddTaskMutation } from '@store/slices/tasksSlice'
import { useAuth } from '@hooks/useAuth'
import styles from './AddTaskForm.module.scss'

interface IProps {
	close?: () => void
}

const AddTaskForm: FC<IProps> = ({ close }) => {
	const { data: users } = useFetchUsersQuery()
	const { id } = useAuth()
	const { data: author } = useFetchUserQuery(id)
	const [addTask] = useAddTaskMutation()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<ITask>()

	const onSubmit: SubmitHandler<ITask> = async data => {
		data.author = { name: author?.name, uid: author?.uid }
		addTask(data)
		reset()
		if (close) {
			close()
		}
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
				<Controller
					control={control}
					name='taggedUsers'
					rules={{ required: 'Выберите исполнителя' }}
					render={({ field: { onChange } }) => (
						<>
							<Select
								classNamePrefix='uiselect'
								isMulti
								placeholder='Исполнители'
								options={users?.map(user => ({
									label: user.name,
									value: user.uid,
								}))}
								onChange={values => {
									onChange(values.map(option => option.value))
								}}
							/>
							{errors?.taggedUsers && (
								<span className={styles.error}>
									{errors?.taggedUsers.message}
								</span>
							)}
						</>
					)}
				/>
				<div className={styles.radiogroup}>
					<Input
						type='radio'
						label='Срочная задача'
						value='Срочная задача'
						{...register('tag')}
					/>
					<Input
						type='radio'
						label='Для дизайнеров'
						value='Для дизайнеров'
						{...register('tag')}
					/>
					<Input
						type='radio'
						label='Для разработчиков'
						value='Для разработчиков'
						error={errors.tag}
						{...register('tag', {
							required: 'Выберите тег',
						})}
					/>
					<Input
						type='radio'
						label='Новости'
						value='Новости'
						{...register('tag')}
					/>
				</div>
				<TextArea
					placeholder='Описание задачи'
					error={errors.description}
					{...register('description', {
						required: 'Введите описание',
					})}
				/>
				<Input
					placeholder='Название'
					label='Закрепить?'
					type='checkbox'
					{...register('isPinned')}
				/>
				<Button accent>Добавить</Button>
			</form>
		</div>
	)
}

export default AddTaskForm
