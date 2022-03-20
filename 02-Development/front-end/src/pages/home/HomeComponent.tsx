import React, { useEffect, useState } from 'react'
import {
	Skeleton,
	Card,
	CardGroup,
	Typography,
	Avatar,
	Button,
	Space
} from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'
import { queryNewsApi } from '@/services/api/news'
import { changeResult } from '@/services/func/httpUtils'

interface Props {
	homeState: HomeState
}

interface NewsProps {
	newsId: string
	newsTitle: string
	newsAuth: string
	newsAvatar: string
	newsTips: string
	newsImg: string
	newsContent: string
}

const HomeComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 0 ? 'block' : 'none'
	const { Text } = Typography
	const [spacing, setSpacing] = useState(60)
	const [loading, setLoading] = useState(false)
	const [newsList, setNewsList] = useState([
		{
			newsId: '',
			newsTitle: '',
			newsAuth: '',
			newsAvatar: '',
			newsTips: '',
			newsImg: '',
			newsContent: ''
		}
	])
	const { Meta } = Card

	useEffect(() => {
		const queryNews = async () => {
			const result = changeResult(await queryNewsApi())
			setLoading(true)
			setNewsList(result.data.list)
			console.log(newsList)
		}
		queryNews()
	}, [loading])

	const jsonData = [
		{
			title: '标题',
			tips: '这是副标题',
			img: '图片地址',
			info: '描述'
		},
		{
			title: '标题',
			tips: '这是副标题',
			img: '图片地址',
			info: '描述'
		},
		{
			title: '标题',
			tips: '这是副标题',
			img: '图片地址',
			info: '描述'
		}
	]

	return (
		<div
			style={{
				borderRadius: '10px',
				border: '1px solid var(--semi-color-border)',
				display: judge,
				padding: '32px'
			}}
		>
			<Skeleton
				placeholder={<Skeleton.Paragraph rows={2} />}
				loading={false}
			>
				<CardGroup spacing={spacing}>
					{newsList.map((v, idx) => (
						<Card
							key={idx}
							style={{ maxWidth: 340 }}
							title={
								<Meta
									title={v.newsTitle}
									description={v.newsTips}
									avatar={
										<Avatar
											alt="Card meta img"
											size="default"
											src={v.newsAvatar}
										/>
									}
								/>
							}
							headerExtraContent={<Text link>更多</Text>}
							cover={<img alt="example" src={v.newsImg} />}
							footerLine={true}
							footerStyle={{
								display: 'flex',
								justifyContent: 'flex-end'
							}}
							footer={
								<Space>
									<Button theme="solid" type="primary">
										开始阅读
									</Button>
								</Space>
							}
						>
							{v.newsTips}
						</Card>
					))}
				</CardGroup>
			</Skeleton>
		</div>
	)
}

export default HomeComponent
