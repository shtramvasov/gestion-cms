import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	theme: 'dark' | 'light'
	notifications: boolean
}

const initialState: IInitialState = {
	theme: 'dark',
	notifications: true,
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
	},
})

export const { setTheme, setNotifications } = settingsSlice.actions

export default settingsSlice.reducer
