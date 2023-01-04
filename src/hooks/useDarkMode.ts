import { useEffect, useState } from 'react'

export const useDarkMode = () => {
	//#TODO: LocalStorage persist
	const [theme, setTheme] = useState<'dark' | 'light'>(localStorage.mode ?? 'dark')
	const mode = theme == 'dark' ? 'light' : 'dark'

	useEffect(() => {
		const root = window.document.documentElement
		theme == 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
		localStorage.setItem('mode', theme)
	}, [theme, mode])

	return { theme, toggle: () => setTheme(mode) }
}
