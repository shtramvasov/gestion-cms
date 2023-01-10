import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
	reducerPath: 'api',
	tagTypes: ['Tasks'],
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		fetchTasks: builder.query({
			queryFn() {
				return { data: 'ok' }
			},
		}),
	}),
})

export const { useFetchTasksQuery } = storeApi
