import React from 'react'
import { Skeleton } from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'
import ReactEcharts from 'echarts-for-react'
import DataBars from './DataBars'

interface Props {
	homeState: HomeState
}

const DataComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 1 ? 'block' : 'none'

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
			</Skeleton>
		</div>
	)
}

export default DataComponent
