import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	theme: 'dark' | 'light'
}

const initialState: IInitialState = {
	theme: 'dark',
}

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<IInitialState>) => {
			state.theme = action.payload.theme
		},
	},
})

export const { setTheme } = settingsSlice.actions

export default settingsSlice.reducer
