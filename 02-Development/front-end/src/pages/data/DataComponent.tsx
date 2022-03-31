import React from 'react'
import { Skeleton, Typography } from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'
import DataBars from './DataBars'
import { Link } from 'react-router-dom'

interface Props {
	homeState: HomeState
}

const DataComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 1 ? 'block' : 'none'
	const { Text } = Typography

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
				<DataBars />
				<Text link={{ href: 'http://127.0.0.1:8082/' }}>数据大屏</Text>
			</Skeleton>
		</div>
	)
}

export default DataComponent
