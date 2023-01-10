import { createSlice } from '@reduxjs/toolkit'
import { ITasksState } from '@interfaces/ITasksState'

const initialState: ITasksState = {
	tasks: [],
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
})

export default tasksSlice.reducer
