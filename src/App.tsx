import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { useDarkMode } from '@hooks/useDarkMode'

const App: FC = () => {
	useDarkMode()
	return <RouterProvider router={router} />
}

export default App
