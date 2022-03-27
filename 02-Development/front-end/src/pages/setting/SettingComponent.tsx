import React from 'react'
import { Skeleton, List } from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'

interface Props {
	homeState: HomeState
}

const SettingComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 3 ? 'block' : 'none'
	const data = [
		'从明天起，做一个幸福的人',
		'喂马，劈柴，周游世界',
		'从明天起，关心粮食和蔬菜',
		'退出登录'
	]

	return (
		<div
			style={{
				borderRadius: '10px',
				border: '1px solid var(--semi-color-border)',
				display: judge,
				height: '376px',
				padding: '32px'
			}}
		>
			<Skeleton
				placeholder={<Skeleton.Paragraph rows={2} />}
				loading={false}
			>
				<div style={{ marginRight: 16 }}>
					<List
						size="large"
						bordered
						dataSource={data}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</div>
			</Skeleton>
		</div>
	)
}

export default SettingComponent
