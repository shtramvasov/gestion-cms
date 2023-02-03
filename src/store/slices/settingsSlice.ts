import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	theme: 'dark' | 'light'
	notifications: boolean
	dateformat: 'D MMMM YYYY' | 'D.MM.YYYY'
}

const initialState: IInitialState = {
	theme: 'dark',
	notifications: true,
	dateformat: 'D MMMM YYYY',
}

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<{ theme: 'dark' | 'light' }>) => {
			state.theme = action.payload.theme
		},
		setNotifications: (
			state,
			action: PayloadAction<{ notifications: boolean }>,
		) => {
			state.notifications = action.payload.notifications
		},
		setFormat: (
			state,
			action: PayloadAction<{ dateformat: 'D MMMM YYYY' | 'D.MM.YYYY' }>,
		) => {
			state.dateformat = action.payload.dateformat
		},
	},
})

export const { setTheme, setNotifications, setFormat } = settingsSlice.actions

export default settingsSlice.reducer
