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

export const messagesApi = firebaseApi.injectEndpoints({
	endpoints: builder => ({
		fetchMessages: builder.query<IMessage[], void>({
			async queryFn() {
				try {
					const querySnapshot = await getDocs(messagesdb)
					const messages: IMessage[] = []
					querySnapshot?.forEach(doc => {
						messages.push({ uid: doc.id, ...doc.data() } as IMessage)
					})
					return {
						data: messages.sort((a, b) =>
							a.createdAt.toString().localeCompare(b.createdAt.toString()),
						),
					}
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
						userid: data.userid,
						createdAt: serverTimestamp(),
					})
					return { data: null }
				} catch (error: any) {
					return error.message
				}
			},
			invalidatesTags: ['Messages'],
		}),
	}),
})

export const { useFetchMessagesQuery, useAddMessageMutation } = messagesApi
