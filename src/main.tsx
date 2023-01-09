import ReactDOM from 'react-dom/client'
import App from './App'
import './firebase'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import '@assets/styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
