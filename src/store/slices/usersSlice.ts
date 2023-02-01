import { firebaseApi } from '@store/api/firebaseApi'
import { database } from '@store/api/firebase'
import {
	collection,
	doc,
	getDocs,
	getDoc,
	setDoc,
	serverTimestamp,
	deleteDoc,
} from 'firebase/firestore'
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
		fetchUser: builder.query<IUser, any>({
			async queryFn(uid) {
				try {
					const userRef = doc(database, 'users', uid)
					const responce = await getDoc(userRef)
					return { data: responce.data() }
				} catch (error: any) {
					return error.message
				}
			},
			providesTags: ['Users'],
		}),
		addUser: builder.mutation<null, IUser>({
			async queryFn(data) {
				try {
					const userRef = doc(database, 'users', data.uid)
					await setDoc(userRef, {
						email: data.email,
						name: data.name,
						uid: data.uid,
						position: data.position,
						photoUrl: data.photoUrl,
						createdAt: serverTimestamp(),
					})
					return { data: null }
				} catch (error: any) {
					return error.message
				}
			},
			invalidatesTags: ['Users'],
		}),
		deleteUser: builder.mutation<null, string>({
			async queryFn(id) {
				try {
					await deleteDoc(doc(database, 'users', id))
					return { data: null }
				} catch (error: any) {
					return error.message
				}
			},
			invalidatesTags: ['Users'],
		}),
	}),
})

export const {
	useFetchUsersQuery,
	useFetchUserQuery,
	useAddUserMutation,
	useDeleteUserMutation,
} = usersApi
