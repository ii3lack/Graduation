import React, { useState } from 'react'
import { Skeleton, Button } from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'
import '@assets/style/booking.scss'
import BookModal from './BookModal'

interface Props {
	homeState: HomeState
}

export enum TitleModal {
	TITLEIN = '收入',
	TITLEOUT = '支出'
}

const BookComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 2 ? 'block' : 'none'

	const [visible, setVisible] = useState(false)
	const [title, setTitle] = useState(TitleModal.TITLEIN)

	const showDialog = (value: TitleModal) => {
		let newVisible = visible
		let newTitle = title
		setVisible((newVisible = true))
		setTitle((newTitle = value))
	}
	const handleOk = (e: React.MouseEvent) => {
		let newVisible = visible
		setVisible((newVisible = false))
	}
	const handleCancel = (e: React.MouseEvent) => {
		let newVisible = visible
		setVisible((newVisible = false))
	}

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
				<div className="book-container">
					<div className="booking-box">
						<img
							src="src/assets/images/income.gif"
							className="book-img"
						/>
						<Button
							size="large"
							onClick={() => showDialog(TitleModal.TITLEIN)}
						>
							{TitleModal.TITLEIN}
						</Button>
					</div>
					<div className="booking-box">
						<img
							src="src/assets/images/comeout.gif"
							className="book-img"
						/>
						<Button
							size="large"
							onClick={() => showDialog(TitleModal.TITLEOUT)}
						>
							{TitleModal.TITLEOUT}
						</Button>
					</div>
				</div>
				<BookModal
					title={title}
					visible={visible}
					handleOk={handleOk}
					handleCancel={handleCancel}
				/>
			</Skeleton>
		</div>
	)
}

export default BookComponent
