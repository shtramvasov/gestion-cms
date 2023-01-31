import { FC } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import { useFetchUserQuery } from '@store/slices/usersSlice'
import styles from './UserPage.module.scss'

const UserPage: FC = () => {
	const { id } = useParams()
	const {data} = useFetchUserQuery(id)
	return (
		<Layout>
			<h1>{data?.name} {data?.position}</h1>
		</Layout>
	)
}

export default UserPage
