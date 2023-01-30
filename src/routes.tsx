import DashboardPage from '@pages/DashboardPage/DashboardPage'
import EmployeesPage from '@pages/EmployeesPage/EmployeesPage'
import ChatPage from '@pages/ChatPage/ChatPage'
import SettingsPage from '@pages/SettingsPage/SettingsPage'
import SignInPage from '@pages/SignInPage/SignInPage'
import SignUpPage from '@pages/SignUpPage/SignUpPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DashboardPage />,
	},
	{
		path: '/employees',
		element: <EmployeesPage />,
	},
	{
		path: '/chat',
		element: <ChatPage />,
	},
	{
		path: '/settings',
		element: <SettingsPage />,
	},
	{
		path: '/signin',
		element: <SignInPage />,
	},
	{
		path: '/signup',
		element: <SignUpPage />,
	},
])
