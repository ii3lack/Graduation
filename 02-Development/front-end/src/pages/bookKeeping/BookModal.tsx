import React, { useCallback, useState } from 'react'
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
import { store } from '@/store'
import { IncomeRecordParams } from '@/services/api/bills'
import { changeResult } from '@/services/func/httpUtils'
import { incomeRecordAPI } from '@services/api/bills'

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
	const [billsTags, setBillsTags] = useState(BILLSTAGS.RESTAURANT)
	const [billsDate, setBillsDate] = useState(new Date())
	const [billsNum, setBillsNum] = useState(100)
	const [billsInfo, setBillsInfo] = useState('')

	const submit = async (e: React.MouseEvent) => {
		handleOk(e)
		const params: IncomeRecordParams = {
			billsName: title,
			billsTags: billsTags,
			billsDate: billsDate.toString(),
			billsNum: billsNum.toString(),
			billsInfo: billsInfo,
			userEmail: store.getState().loginWeb.userEmailState
		}
		console.log(params)
		const result = changeResult(await incomeRecordAPI(params))
		console.log(result)
	}

	const changeTags = useCallback((value) => {
		setBillsTags(value.target.value)
	}, [])

	const changeDate = useCallback((value) => {
		setBillsDate(value)
	}, [])

	const changeNum = useCallback((value) => {
		setBillsNum(value)
	}, [])

	const changeInfo = useCallback((value) => {
		setBillsInfo(value)
	}, [])

	return (
		<Modal
			style={{
				width: 500
			}}
			title={title}
			visible={visible}
			onOk={submit}
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
					value={billsTags}
					onChange={changeTags}
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
						value={billsDate}
						onChange={changeDate}
					/>
				</div>
				<div>
					<Title heading={6} style={{ margin: '8px 0' }}>
						金额
					</Title>
					<InputNumber
						value={billsNum}
						min={0}
						onChange={changeNum}
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
			<TextArea
				maxCount={100}
				showClear
				value={billsInfo}
				onChange={changeInfo}
			/>
		</Modal>
	)
}

export default BookModal
