import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import Layout from '@components/Layout/Layout'
import { useFetchUserQuery } from '@store/slices/usersSlice'
import styles from './UserPage.module.scss'
import { Button, Loader } from '@components/UI'
import UserCard from './UserCard/UserCard'

const UserPage: FC = () => {
	const { id } = useParams()
	const { data, isFetching } = useFetchUserQuery(id)
	return (
		<Layout>
			<section className={styles.container}>
				<Link className={styles.return} to='/employees'>
					<MdArrowBack /> <p>Вернуться назад</p>
				</Link>
				{isFetching ? <Loader /> : <UserCard user={data} />}
				<div className={styles.buttons}>
					<Button className='w-full' secondary>
						Редактировать
					</Button>
					<Button className='w-full' danger>
						Удалить
					</Button>
				</div>
			</section>
		</Layout>
	)
}

export default UserPage
