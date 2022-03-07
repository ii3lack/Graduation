import React, { useState } from 'react'
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

interface Props {
	homeState: HomeState
}

const HomeComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 0 ? 'block' : 'none'
	const { Text } = Typography
	const [spacing, setSpacing] = useState(60)
	const { Meta } = Card

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
					{jsonData.map((v, idx) => (
						<Card
							key={idx}
							style={{ maxWidth: 340 }}
							title={
								<Meta
									title={v.title}
									description={v.tips}
									avatar={
										<Avatar
											alt="Card meta img"
											size="default"
											src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg"
										/>
									}
								/>
							}
							headerExtraContent={<Text link>更多</Text>}
							cover={
								<img
									alt="example"
									src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg"
								/>
							}
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
							{v.info}
						</Card>
					))}
				</CardGroup>
			</Skeleton>
		</div>
	)
}

export default HomeComponent
