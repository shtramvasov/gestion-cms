import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { router } from './routes'

const theme = extendTheme({
	fonts: {
		body: 'Source Sans Pro',
	},
})

const App: FC = () => {
	return (
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	)
}

export default App
