import React, { useEffect, useState } from 'react'
import { Table, Avatar } from '@douyinfe/semi-ui'
import { IconMore } from '@douyinfe/semi-icons'

const DataTable: React.FC = () => {
	const pageSize = 5
	const columns = [
		{
			title: '类型',
			dataIndex: 'name',
			render: (
				text:
					| boolean
					| React.ReactChild
					| React.ReactFragment
					| React.ReactPortal
					| null
					| undefined,
				record: { nameIconSrc: string | undefined },
				index: any
			) => {
				return <div>{text}</div>
			}
		},
		{
			title: '金额',
			dataIndex: 'size'
		},
		{
			title: '描述',
			dataIndex: 'owner',
			render: (
				text: {} | null | undefined,
				record: { avatarBg: string | undefined },
				index: any
			) => {
				return <div>{text}</div>
			}
		},
		{
			title: '日期',
			dataIndex: 'updateTime'
		}
	]
	const data = [
		{
			key: '1',
			name: '支出-餐饮',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
			size: '20元',
			owner: '张亮麻辣烫',
			updateTime: '2022-02-02 05:13',
			avatarBg: 'grey'
		},
		{
			key: '2',
			name: '支出-购物',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
			size: '215元',
			owner: '买衣服',
			updateTime: '2022-01-17 05:31',
			avatarBg: 'red'
		},
		{
			key: '3',
			name: '收入-工资',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
			size: '15602元',
			owner: '12月工资',
			updateTime: '2022-01-26 11:01',
			avatarBg: 'light-blue'
		},
		{
			key: '4',
			name: '收入-奖金',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
			size: '5602元',
			owner: '1月奖金',
			updateTime: '2022-01-26 11:01',
			avatarBg: 'light-blue'
		},
		{
			key: '5',
			name: '支出-人情社交',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
			size: '1499元',
			owner: '带女朋友出去玩',
			updateTime: '2022-01-26 11:01',
			avatarBg: 'light-blue'
		},
		{
			key: '6',
			name: '支出-购物',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
			size: '622元',
			owner: '买衣服',
			updateTime: '2022-01-26 11:01',
			avatarBg: 'light-blue'
		},
		{
			key: '7',
			name: '支出-运动',
			nameIconSrc:
				'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
			size: '4999元',
			owner: '健身房年卡',
			updateTime: '2022-01-26 11:01',
			avatarBg: 'light-blue'
		}
	]

	const [dataSource, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setPage] = useState(1)

	const fetchData = (currentPage = 1) => {
		setLoading(true)
		setPage(currentPage)
		return new Promise((res, rej) => {
			setTimeout(() => {
				let dataSource = data.slice(
					(currentPage - 1) * pageSize,
					currentPage * pageSize
				)
				res(dataSource)
			}, 300)
		}).then((dataSource) => {
			setLoading(false)
			setData(dataSource)
		})
	}

	const handlePageChange = (page: number | undefined) => {
		fetchData(page)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Table
			columns={columns}
			dataSource={dataSource}
			pagination={{
				currentPage,
				pageSize: 5,
				total: data.length,
				onPageChange: handlePageChange
			}}
			loading={loading}
		/>
	)
}

export default DataTable
