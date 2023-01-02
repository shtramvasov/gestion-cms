import { useEffect } from 'react'

export const useDarkMode = () => {
	//#TODO: LocalStorage persist

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.add('dark')
	}, [])
}
