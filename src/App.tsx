import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { router } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = extendTheme({
	fonts: {
		body: 'Source Sans Pro',
	},
})

const App: FC = () => {
	return (
		<ChakraProvider theme={theme} resetCSS={false}>
			<RouterProvider router={router} />
			<ToastContainer
				autoClose={1500}
				position='bottom-center'
				hideProgressBar
				pauseOnFocusLoss={false}
			/>
		</ChakraProvider>
	)
}

export default App
