import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { firebaseApi } from './api/firebaseApi'
import authUserSlice from './slices/authUserSlice'

export const store = configureStore({
	reducer: {
		[firebaseApi.reducerPath]: firebaseApi.reducer,
		auth: authUserSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({}).concat(firebaseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
