import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './routes'

const App: FC = () => {
	return (
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	)
}

export default App
