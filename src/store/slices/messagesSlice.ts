import { firebaseApi } from '@store/api/firebaseApi'
import { database } from '@store/api/firebase'
import {
	collection,
	getDocs,
	addDoc,
	serverTimestamp,
} from 'firebase/firestore'
import { IMessage } from '@interfaces/IMessage'

const messagesdb = collection(database, 'messages')

export const notificationsApi = firebaseApi.injectEndpoints({
	endpoints: builder => ({
		fetchMessages: builder.query<IMessage, void>({
			async queryFn() {
				try {
					const querySnapshot = await getDocs(messagesdb)
					const messages: IMessage[] = []
					querySnapshot?.forEach(doc => {
						messages.push({ uid: doc.id, ...doc.data() } as IMessage)
					})
					return { data: messages }
				} catch (error: any) {
					return error.message
				}
			},
			providesTags: ['Messages'],
		}),
		addMessage: builder.mutation<null, IMessage>({
			async queryFn(data) {
				try {
					await addDoc(messagesdb, {
						text: data.text,
						author: data.author,
						createdAt: serverTimestamp(),
					})
				} catch (error: any) {
					return error.message
				}
			},
			invalidatesTags: ['Messages'],
		}),
	}),
})

export const { useFetchMessagesQuery, useAddMessageMutation } =
	notificationsApi
