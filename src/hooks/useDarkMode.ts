import { useEffect, useState } from 'react'

export const useDarkMode = () => {
	//#TODO: LocalStorage persist
	const [isDarkMode, setDarkMode] = useState<boolean>(true)

	useEffect(() => {
		const root = window.document.documentElement
		isDarkMode ? root.classList.add('dark') : root.classList.remove('dark')
	}, [isDarkMode])

	return { isDarkMode, toggle: () => setDarkMode(prev => !prev) }
}
