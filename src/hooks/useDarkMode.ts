import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@hooks/useTypedReduxHooks'
import { setTheme } from '@store/slices/settingsSlice'

export const useDarkMode = () => {
	const dispatch = useAppDispatch()
	const { theme } = useAppSelector(
		state => state.persistedReducer.settingsSlice,
	)
	const mode = theme == 'dark' ? 'light' : 'dark'

	useEffect(() => {
		const root = window.document.documentElement
		theme == 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
	})

	return {
		theme,
		toggle: () => dispatch(setTheme({ theme: mode })),
	}
}
