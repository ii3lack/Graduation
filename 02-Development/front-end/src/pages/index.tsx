/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from 'react'
import {
	KOIContentContainer,
	KOIFooter,
	KOIHeader,
	KOISlider
} from '@components/common/index'
import { Layout } from '@douyinfe/semi-ui'

interface Props {
	loginState: boolean
	loginAction: () => any
	exitAction: () => any
}
import { loginAction, exitAction } from '@/store/login'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
	return {
		loginState: state.loginWeb.loginState
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	loginAction: () => dispatch(loginAction),
	exitAction: () => dispatch(exitAction)
})

const AppHome: React.FC<Props> = (props) => {
	const style = { border: '1px solid var(--semi-color-border)' }
	// console.log(props)

	return (
		<Layout style={style}>
			<KOISlider />
			<Layout>
				<KOIHeader />
				<KOIContentContainer />
				<KOIFooter />
			</Layout>
		</Layout>
	)
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppHome)

export default AppContainer
