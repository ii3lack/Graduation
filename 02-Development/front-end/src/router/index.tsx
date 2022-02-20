import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppContainer from '@/pages/index'

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={AppContainer} />
		</Switch>
	)
}
