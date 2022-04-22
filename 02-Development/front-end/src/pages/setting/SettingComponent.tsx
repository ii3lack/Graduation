import React, { useState } from 'react'
import {
	Upload,
	Avatar,
	Toast,
	Typography,
	Input,
	Button
} from '@douyinfe/semi-ui'
import { HomeState } from '@/store/homeState'
import { store } from '@/store/index'
import '@assets/style/setting.scss'

interface Props {
	homeState: HomeState
}

const SettingComponent: React.FC<Props> = (props) => {
	const judge = props.homeState === 3 ? 'flex' : 'none'
	const email = store.getState().loginWeb.userEmailState

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

	const submit = () => {
		Toast.info('修改成功')
	}

	return (
		<div
			style={{
				borderRadius: '10px',
				border: '1px solid var(--semi-color-border)',
				display: judge,
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'start',
				height: '376px',
				padding: '32px'
			}}
		>
			<img src="src/assets/images/vr.png" alt="" width="200px" />
			<div className="input-box">
				<Title heading={5} style={{ margin: '8px 0' }}>
					用户邮箱:&emsp;
				</Title>
				<Title heading={5} style={{ margin: '8px 0' }}>
					{email}
				</Title>
			</div>
			<div className="input-box">
				<Title heading={5} style={{ margin: '8px 0' }}>
					用户名:&emsp;&emsp;
				</Title>
				<Input style={inputStyle} />
			</div>
			<div className="input-box">
				<Title heading={5} style={{ margin: '8px 0' }}>
					个性签名:&emsp;
				</Title>
				<Input style={inputStyle} />
			</div>
			<Button
				theme="solid"
				type="primary"
				style={{ marginRight: 8 }}
				onClick={submit}
			>
				确认修改
			</Button>
		</div>
	)
}

export default SettingComponent
