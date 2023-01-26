import { FC } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import Heading from '@components/Heading/Heading'
import Input from '@components/UI/Input/Input'
import Button from '@components/UI/Button/Button'
import TextArea from '@components/UI/TextArea/TextArea'
import { ITask } from '@interfaces/ITask'
import { useFetchUsersQuery } from '@store/slices/usersSlice'
import styles from './AddTaskForm.module.scss'

const AddTaskForm: FC = () => {
	const { data: users } = useFetchUsersQuery()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<ITask>()

	const onSubmit: SubmitHandler<ITask> = async data => {
		console.log(data)
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
				<Controller
					control={control}
					name='taggedUsers'
					render={({ field: { onChange } }) => (
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
						label='Для разрабочков'
						value='Для разрабочков'
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
