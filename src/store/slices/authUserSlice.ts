import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	email: null | string
	token: null | string
	id: null | string | number
}

const initialState: IInitialState = {
	email: null,
	token: null,
	id: null,
}

const authUserSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthUser: (state, action: PayloadAction<IInitialState>) => {
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser: state => {
			state.email = null
			state.token = null
			state.id = null
		},
	},
})

export const { setAuthUser, removeUser } = authUserSlice.actions

export default authUserSlice.reducer
