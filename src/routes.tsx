import DashboardPage from '@pages/DashboardPage/DashboardPage'
import SettingsPage from '@pages/SettingsPage/SettingsPage'
import AuthPage from '@pages/AuthPage/AuthPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DashboardPage />,
	},
	{
		path: '/settings',
		element: <SettingsPage />,
	},
	{
		path: '/auth',
		element: <AuthPage />,
	},
])

