import React from 'react'
import ReactEcharts from 'echarts-for-react'

const DataBars: React.FC = () => {
	const stateCharts = {
		sales: [5, 20, 36, 10, 10, 20],
		stores: [15, 120, 36, 110, 110, 20]
	}
	const getOption = (sales: number[], stores: number[]) => {
		return {
			title: {
				text: '本月收支对比柱状图'
			},
			tooltip: {},
			legend: {
				data: ['收入', '支出']
			},
			xAxis: {
				data: [
					'餐饮',
					'休闲娱乐',
					'购物',
					'交通',
					'生活日用',
					'人情社交'
				]
			},
			yAxis: {},
			series: [
				{
					name: '收入',
					type: 'bar',
					data: sales
				},
				{
					name: '支出',
					type: 'bar',
					data: stores
				}
			]
		}
	}

	return (
		<div>
			<ReactEcharts
				option={getOption(stateCharts.sales, stateCharts.stores)}
			/>
		</div>
	)
}

export default DataBars
