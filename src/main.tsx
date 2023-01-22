import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from '@store/store'
import { PersistGate } from 'redux-persist/integration/react'
import '@store/api/firebase'
import '@assets/styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={null}>
			<App />
		</PersistGate>
	</Provider>,
)
