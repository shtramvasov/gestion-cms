import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	email: null | string
	id: null | string
}

const initialState: IInitialState = {
	email: null,
	id: null,
}

const authUserSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthUser: (state, action: PayloadAction<IInitialState>) => {
			state.email = action.payload.email
			state.id = action.payload.id
		},
		removeUser: state => {
			state.email = null
			state.id = null
		},
	},
})

export const { setAuthUser, removeUser } = authUserSlice.actions

export default authUserSlice.reducer
