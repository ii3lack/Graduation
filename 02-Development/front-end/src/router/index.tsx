import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppContainer from '@/pages/index'
import SignHome from '@pages/sign/index'
import SignUp from '@pages/sign/SignUp'

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={AppContainer} />
			<Route path="/sign" component={SignHome} />
			<Route path="/signUp" component={SignUp} />
		</Switch>
	)
}
