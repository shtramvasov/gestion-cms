import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiPaperAirplane } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { Button, Input } from '@components/UI'
import { IMessage } from '@interfaces/IMessage'
import { useAuth } from '@hooks/useAuth'
import { useFetchUserQuery } from '@store/slices/usersSlice'
import { useAddMessageMutation } from '@store/slices/messagesSlice'
import styles from './ChatFooter.module.scss'

const ChatFooter: FC = () => {
	const { id, isAuth } = useAuth()
	const { data: user } = useFetchUserQuery(id)
	const [addMessage] = useAddMessageMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IMessage>()

	const onSubmit: SubmitHandler<IMessage> = async data => {
		try {
			data.author = user?.name as string
			data.userid = id as string
			addMessage(data)
			reset()
		} catch (error: any) {
			console.error(error.message)
		}
	}

	return (
		<form className={styles.footer} onSubmit={handleSubmit(onSubmit)}>
			{!isAuth && (
				<div className={styles.block}>
					<BiLockAlt />
				</div>
			)}
			<Button className={styles.submit} accent>
				<HiPaperAirplane className={styles.icon} />
			</Button>
			<Input
				className='w-full'
				placeholder='Введите сообщение...'
				error={errors.text}
				{...register('text', {
					required: 'Введите сообщение',
				})}
			/>
		</form>
	)
}

export default ChatFooter
