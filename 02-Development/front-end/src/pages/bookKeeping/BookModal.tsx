import React from 'react'
import {
	Modal,
	InputNumber,
	TextArea,
	Typography,
	RadioGroup,
	Radio,
	Space,
	DatePicker
} from '@douyinfe/semi-ui'
import '@assets/style/booking.scss'
import { TitleModal } from './BookComponent'

interface BookModalProps {
	title: TitleModal
	visible: boolean
	handleOk: (e: React.MouseEvent) => void
	handleCancel: (e: React.MouseEvent) => void
}

enum BILLSTAGS {
	RESTAURANT = '餐饮',
	FREEHAPPY = '休闲娱乐',
	SHOPPING = '购物',
	TRAFFIC = '交通',
	LIFE = '生活日用',
	HUMANSOCIAL = '人情社交',
	SPORT = '运动',
	LIFESERVICE = '生活服务'
}

const BookModal: React.FC<BookModalProps> = (props) => {
	const { title, visible, handleOk, handleCancel } = props
	const { Title } = Typography

	return (
		<Modal
			style={{
				width: 500
			}}
			title={title}
			visible={visible}
			onOk={handleOk}
			onCancel={handleCancel}
			maskClosable={false}
		>
			<Title heading={6} style={{ margin: '8px 0' }}>
				类型
			</Title>
			<Space vertical spacing="tight" align="end">
				<RadioGroup
					type="button"
					buttonSize="large"
					defaultValue={BILLSTAGS.RESTAURANT}
					aria-label="单选组合示例"
				>
					<Radio value={BILLSTAGS.RESTAURANT}>餐&emsp;&emsp;饮</Radio>
					<Radio value={BILLSTAGS.FREEHAPPY}>休闲娱乐</Radio>
					<Radio value={BILLSTAGS.SHOPPING}>购&emsp;&emsp;物</Radio>
					<Radio value={BILLSTAGS.TRAFFIC}>交&emsp;&emsp;通</Radio>
					<Radio value={BILLSTAGS.LIFE}>生活日用</Radio>
					<Radio value={BILLSTAGS.HUMANSOCIAL}>人情社交</Radio>
					<Radio value={BILLSTAGS.SPORT}>运&emsp;&emsp;动</Radio>
					<Radio value={BILLSTAGS.LIFESERVICE}>生活服务</Radio>
				</RadioGroup>
			</Space>
			<div className="box-date-bills">
				<div>
					<Title heading={6} style={{ margin: '8px 0' }}>
						日期及时间
					</Title>
					<DatePicker
						type="dateTime"
						timePickerOpts={{
							scrollItemProps: { cycled: false }
						}}
					/>
				</div>
				<div>
					<Title heading={6} style={{ margin: '8px 0' }}>
						金额
					</Title>
					<InputNumber
						// onChange={log}
						defaultValue={1000}
						min={0}
						formatter={(value) =>
							`￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
						}
						parser={(value) => value.replace(/\￥\s?|(,*)/g, '')}
					/>
				</div>
			</div>

			<Title heading={6} style={{ margin: '8px 0' }}>
				备注
			</Title>
			<TextArea maxCount={100} showClear />
		</Modal>
	)
}

export default BookModal
