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

const BookModal: React.FC<BookModalProps> = (props) => {
	const { title, visible, handleOk, handleCancel } = props
	const { Title } = Typography
	// const log = (v) => {
	// 	console.log(`Changed to: [${typeof v}] ${v}`)
	// }

	return (
		<Modal
			style={{
				width: 1000
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
					defaultValue={1}
					aria-label="单选组合示例"
				>
					<Radio value={1}>即时推送</Radio>
					<Radio value={2}>定时推送</Radio>
					<Radio value={3}>动态推送</Radio>
					<Radio value={4}>即时推送</Radio>
					<Radio value={5}>定时推送</Radio>
					<Radio value={6}>动态推送</Radio>
				</RadioGroup>
			</Space>
			<Title heading={6} style={{ margin: '8px 0' }}>
				日期及时间
			</Title>
			<DatePicker
				type="dateTime"
				timePickerOpts={{
					scrollItemProps: { cycled: false }
				}}
			/>
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
			<Title heading={6} style={{ margin: '8px 0' }}>
				备注
			</Title>
			<TextArea maxCount={100} showClear />
		</Modal>
	)
}

export default BookModal
