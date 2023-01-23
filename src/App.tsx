import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: FC = () => {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer
				autoClose={1500}
				position='bottom-center'
				hideProgressBar
				pauseOnFocusLoss={false}
			/>
		</>
	)
}

export default App
