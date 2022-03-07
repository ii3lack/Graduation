import React, { CSSProperties } from 'react'
import { Skeleton, Button } from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'
import '@assets/style/booking.scss'

interface Props {
	homeState: HomeState
}

const BookComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 2 ? 'block' : 'none'

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
				<div className="book-container">
					<div className="booking-box">
						<img
							src="src/assets/images/income.gif"
							className="book-img"
						/>
						<Button size='large'>记一笔收入</Button>
					</div>
					<div className="booking-box">
						<img
							src="src/assets/images/comeout.gif"
							className="book-img"
						/>
						<Button size='large'>记一笔支出</Button>
					</div>
				</div>
			</Skeleton>
		</div>
	)
}

export default BookComponent
