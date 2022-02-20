import React from 'react'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import { Router } from 'react-router-dom'
import Routers from '@/router/index'

const history = createBrowserHistory()

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routers />
			</Router>
		</Provider>
	)
}

export default App
