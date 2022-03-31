import React, { useState } from 'react'
import { Upload, Avatar, Toast, Typography, Input } from '@douyinfe/semi-ui'
import { IconCamera } from '@douyinfe/semi-icons'
import { HomeState } from '@/store/homeState'
import '@assets/style/setting.scss'

interface Props {
	homeState: HomeState
}

const SettingComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 3 ? 'block' : 'none'
	const [url, setUrl] = useState(
		'https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg'
	)
	const onSuccess = (response: any, file: any) => {
		Toast.success('头像更新成功')
		setUrl(
			'https://sf6-cdn-tos.douyinstatic.com/obj/ttfe/ies/semi/ttmoment.jpeg'
		)
	}

	const { Title } = Typography

	const style = {
		backgroundColor: 'var(--semi-color-overlay-bg)',
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'var(--semi-color-white)'
	}
	const inputStyle = {
		width: '300px'
	}

	const hoverMask = (
		<div style={style}>
			<IconCamera />
		</div>
	)

	const api = 'https://run.mocky.io/v3/d6ac5c9e-4d39-4309-a747-7ed3b5694859'
	let imageOnly = 'image/*'

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
			<Upload
				className="avatar-upload"
				action={api}
				onSuccess={onSuccess}
				accept={imageOnly}
				showUploadList={false}
				onError={() => Toast.error('上传失败')}
			>
				<Avatar src={url} style={{ margin: 4 }} hoverMask={hoverMask} />
			</Upload>
			<div className="input-box">
				<Title heading={5} style={{ margin: '8px 0' }}>
					用户名:&emsp;&emsp;
				</Title>
				<Input style={inputStyle} />
			</div>
			<div className="input-box">
				<Title heading={5} style={{ margin: '8px 0' }}>
					个性签名:&emsp;&emsp;
				</Title>
				<Input style={inputStyle} />
			</div>
		</div>
	)
}

export default SettingComponent
