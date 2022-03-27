import React from 'react'

import { Layout } from '@douyinfe/semi-ui'
import { IconBytedanceLogo } from '@douyinfe/semi-icons'

const KOIFooter: React.FC = () => {
	const { Footer } = Layout

	return (
		<Footer
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '20px',
				color: 'var(--semi-color-text-2)',
				backgroundColor: 'rgba(var(--semi-grey-0), 1)'
			}}
		>
			<span
				style={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<span>Copyright © 2022 沈俊豪，沈杨. All Rights Reserved. </span>
			</span>
			<span>
				<span style={{ marginRight: '24px' }}>平台客服</span>
				<span>反馈建议</span>
			</span>
		</Footer>
	)
}

export default KOIFooter
