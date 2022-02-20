import React from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui'
import {
	IconHome,
	IconHistogram,
	IconLive,
	IconSetting
} from '@douyinfe/semi-icons'
import { store } from '@/store'
import {
	Action,
	toBookAction,
	toDataAction,
	toHomeAction,
	toSettingAction
} from '@/store/homeState'
import { useDispatch } from 'react-redux'
// import { browserHistory } from 'react-router'

interface Props {
	type: any
}

const KOISlider: React.FC<Props> = (props) => {
	const { Sider } = Layout
	const dispatch = useDispatch()
	// console.log(props)

	const changePages = (action: Action) => {
		const stateLogin = store.getState().loginWeb.loginState
		// console.log(stateLogin)
		switch (stateLogin) {
			case true:
				dispatch(action)
				break
			case false:
				// browserHistory.push('/sign')
				props.type.push('/sign')
				break
			default:
				break
		}
	}

	return (
		<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
			<Nav
				defaultSelectedKeys={['Home']}
				style={{ maxWidth: 220, height: '100%' }}
				items={[
					{
						itemKey: 'Home',
						text: '首页',
						icon: <IconHome size="large" />,
						onClick: () => changePages(toHomeAction)
					},
					{
						itemKey: 'Histogram',
						text: '理财可视化',
						icon: <IconHistogram size="large" />,
						onClick: () => changePages(toDataAction)
					},
					{
						itemKey: 'Live',
						text: '记账',
						icon: <IconLive size="large" />,
						onClick: () => changePages(toBookAction)
					},
					{
						itemKey: 'Setting',
						text: '设置',
						icon: <IconSetting size="large" />,
						onClick: () => changePages(toSettingAction)
					}
				]}
				header={{
					logo: (
						<img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />
					),
					text: 'KOI'
				}}
				footer={{
					collapseButton: true
				}}
			/>
		</Sider>
	)
}

export default KOISlider
