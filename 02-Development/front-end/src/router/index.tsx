import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppContainer from '@/pages/index'
import SignHome from '@pages/sign/index'

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={AppContainer} />
			<Route path="/sign" component={SignHome} />
		</Switch>
	)
}
