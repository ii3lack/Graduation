import React from 'react'
import { Layout, Breadcrumb, Skeleton } from '@douyinfe/semi-ui'
import {
	HomeState,
	toHomeAction,
	toBookAction,
	toSettingAction,
	toDataAction
} from '@/store/homeState'
import { connect } from 'react-redux'

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
	// console.log(props)
	const { Content } = Layout

	return (
		<Content
			style={{
				padding: '24px',
				backgroundColor: 'var(--semi-color-bg-0)'
			}}
		>
			<div
				style={{
					borderRadius: '10px',
					border: '1px solid var(--semi-color-border)',
					height: '376px',
					padding: '32px'
				}}
			>
				<Skeleton
					placeholder={<Skeleton.Paragraph rows={2} />}
					loading={false}
				>
					<p>{props.homeState}</p>
					<p>Hi, Bytedance dance dance.</p>
				</Skeleton>
			</div>
		</Content>
	)
}

const KOIContentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(KOIContent)

export default KOIContentContainer
