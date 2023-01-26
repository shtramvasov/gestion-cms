import { firebaseApi } from '@store/api/firebaseApi'
import { database } from '@store/api/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { getTodaysDate } from '@utils/getTodaysDate'
import { ITask } from '@interfaces/ITask'

const tasksdb = collection(database, 'tasks')

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
					return {
						data: tasks.sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
					}
				} catch (error: any) {
					return error.message
				}
			},
			providesTags: ['Tasks'],
		}),
		addTask: builder.mutation<null, ITask>({
			async queryFn(data) {
				try {
					await addDoc(tasksdb, {
						title: data.title,
						description: data.description,
						tag: data.tag,
						isPinned: data.isPinned,
						taggedUsers: data.taggedUsers,
						author: data.author,
						createdAt: getTodaysDate(),
						// createdAt
					})
					return { data: null }
				} catch (error: any) {
					return error.message
				}
			},
			invalidatesTags: ['Tasks'],
		}),
	}),
})

export const { useFetchTasksQuery, useAddTaskMutation } = tasksApi
