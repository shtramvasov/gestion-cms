import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import UserCard from './UserCard/UserCard'
import UserCardFooter from './UserCardFooter/UserCardFooter'
import { Loader } from '@components/UI'
import { MdArrowBack } from 'react-icons/md'
import { useFetchUserQuery } from '@store/slices/usersSlice'
import styles from './UserPage.module.scss'

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
				<UserCardFooter user={data} />
			</section>
		</Layout>
	)
}

export default UserPage
