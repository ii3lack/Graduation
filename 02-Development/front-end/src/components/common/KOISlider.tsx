import React from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui'
import {
	IconHome,
	IconHistogram,
	IconLive,
	IconSetting
} from '@douyinfe/semi-icons'

const KOISlider: React.FC = () => {
	const { Sider } = Layout

	return (
		<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
			<Nav
				defaultSelectedKeys={['Home']}
				style={{ maxWidth: 220, height: '100%' }}
				items={[
					{
						itemKey: 'Home',
						text: '首页',
						icon: <IconHome size="large" />
					},
					{
						itemKey: 'Histogram',
						text: '理财可视化',
						icon: <IconHistogram size="large" />
					},
					{
						itemKey: 'Live',
						text: '记账',
						icon: <IconLive size="large" />
					},
					{
						itemKey: 'Setting',
						text: '设置',
						icon: <IconSetting size="large" />
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
