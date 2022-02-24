import React, { CSSProperties } from 'react'
import { Skeleton } from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'

interface Props {
	homeState: HomeState
}

const SettingComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 3 ? 'block' : 'none'

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
				<p>设置</p>
				<p>Hi, Bytedance dance dance.</p>
			</Skeleton>
		</div>
	)
}

export default SettingComponent