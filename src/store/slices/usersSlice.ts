import { firebaseApi } from '@store/api/firebaseApi'
import { database } from '@store/api/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { IUser } from '@interfaces/IUser'

const usersdb = collection(database, 'users')

export const usersApi = firebaseApi.injectEndpoints({
	endpoints: builder => ({
		fetchUsers: builder.query<IUser[], void>({
			async queryFn() {
				try {
					const querySnapshot = await getDocs(usersdb)
					const users: IUser[] = []
					querySnapshot?.forEach(doc => {
						users.push({ uid: doc.id, ...doc.data() } as IUser)
					})
					return {
						data: users,
					}
				} catch (error: any) {
					return error.message
				}
			},
			providesTags: ['Users'],
		}),
		addUser: builder.mutation<null, IUser>({
			async queryFn(data) {
				try {
					await addDoc(usersdb, {
						email: data.email,
						name: data.name,
						uid: data.uid,
						position: data.position,
						photoUrl: data.photoUrl,
					})
					return { data: null }
				} catch (error: any) {
					return error.message
				}
			},
			invalidatesTags: ['Users'],
		}),
	}),
})

export const { useFetchUsersQuery, useAddUserMutation } = usersApi
