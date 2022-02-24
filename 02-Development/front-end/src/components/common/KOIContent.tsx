import React from 'react'
import { Layout, Skeleton } from '@douyinfe/semi-ui'
import {
	HomeState,
	toHomeAction,
	toBookAction,
	toSettingAction,
	toDataAction
} from '@/store/homeState'
import { connect } from 'react-redux'
import BookComponent from '@pages/bookKeeping/BookComponent'
import DataComponent from '@pages/data/DataComponent'
import SettingComponent from '@/pages/setting/SettingComponent'
import HomeComponent from '@/pages/home/homeComponent'

interface Props {
	homeState: HomeState
	toHomeAction: () => any
	toBookAction: () => any
	toSettingAction: () => any
	toDataAction: () => any
}

const mapStateToProps = (state: any) => {
	return {
		homeState: state.homeCurrent.homeState,
		loginState: state.loginWeb.loginState
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	toHomeAction: () => dispatch(toHomeAction),
	toBookAction: () => dispatch(toBookAction),
	toSettingAction: () => dispatch(toSettingAction),
	toDataAction: () => dispatch(toDataAction)
})

const KOIContent: React.FC<Props> = (props) => {
	const { Content } = Layout

	return (
		<Content
			style={{
				padding: '24px',
				backgroundColor: 'var(--semi-color-bg-0)'
			}}
		>
			<HomeComponent homeState={props.homeState} />
			<BookComponent homeState={props.homeState} />
			<DataComponent homeState={props.homeState} />
			<SettingComponent homeState={props.homeState} />
		</Content>
	)
}

const KOIContentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(KOIContent)

export default KOIContentContainer
