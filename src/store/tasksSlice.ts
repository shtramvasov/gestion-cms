import { firebaseApi } from '@store/api/firebaseApi'
import { database } from '@store/api/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { ITask } from '@interfaces/ITask'

export const tasksApi = firebaseApi.injectEndpoints({
	endpoints: builder => ({
		fetchTasks: builder.query<ITask[], void>({
			async queryFn() {
				try {
					const ref = collection(database, 'tasks')
					const querySnapshot = await getDocs(ref)
					const tasks: ITask[] = []
					querySnapshot?.forEach(doc => {
						tasks.push({ id: doc.id, ...doc.data() } as ITask)
					})
					return { data: tasks }
				} catch (error: any) {
					return error.message
				}
			},
			providesTags: ['Tasks'],
		}),
	}),
})

export const { useFetchTasksQuery } = tasksApi
