import { firebaseApi } from '@store/api/firebaseApi'
import { database } from '@store/api/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { INotification } from '@interfaces/INotification'
import { randomIndex } from '@utils/randomIndex'

const notificationsdb = collection(database, 'notifications')

export const notificationsApi = firebaseApi.injectEndpoints({
	endpoints: builder => ({
		fetchRandomNotification: builder.query<INotification[], void>({
			async queryFn() {
				try {
					const querySnapshot = await getDocs(notificationsdb)
					const notifications: INotification[] = []
					querySnapshot?.forEach(doc => {
						notifications.push({ uid: doc.id, ...doc.data() } as INotification)
					})
					const index = randomIndex(notifications)
					return { data:  notifications[index]}
				} catch (error: any) {
					return error.message
				}
			},
			providesTags: ['Notifications'],
		}),
	}),
})

export const { useFetchRandomNotificationQuery } = notificationsApi