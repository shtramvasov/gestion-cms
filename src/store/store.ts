import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { firebaseApi } from './api/firebaseApi'
import authUserSlice from './slices/authUserSlice'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, authUserSlice)

export const store = configureStore({
	reducer: {
		[firebaseApi.reducerPath]: firebaseApi.reducer,
		persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(firebaseApi.middleware),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
