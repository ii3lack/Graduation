import React from 'react'
import { Form, Toast, Button } from '@douyinfe/semi-ui'
import '@assets/style/sign.scss'

const SignUp: React.FC = () => {
	const handleSubmit = (values: any) => {
		console.log(values)
		Toast.info('表单已提交')
	}
	return (
		<div className="container">
			<img src="src/assets/images/signUp.gif" className="imgBox" />

			<Form
				onSubmit={(values) => handleSubmit(values)}
				style={{ width: 400 }}
			>
				{({ formState, values, formApi }) => (
					<>
						<Form.Input
							field="name"
							label="用户名"
							style={{ width: '100%' }}
							placeholder="请输入您的用户名"
						/>
						<Form.Input
							field="email"
							label="邮箱号"
							style={{ width: '100%' }}
							placeholder="请输入您的邮箱号"
						/>
						<Form.Input
							field="password"
							label="密码"
							mode="password"
							style={{ width: '100%' }}
							placeholder="请输入您的密码"
						/>
						<Form.Input
							field="passwordChecked"
							label="密码"
							mode="password"
							style={{ width: '100%' }}
							placeholder="请确认您的密码"
						/>
						<Form.Checkbox field="agree" noLabel>
							我已阅读并同意服务条款
						</Form.Checkbox>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<p>
								<Button
									theme="borderless"
									style={{
										color: 'var(--semi-color-primary)',
										marginLeft: 10,
										cursor: 'pointer'
									}}
								>
									{/* <Link to="/signUp"></Link> */}
								</Button>
							</p>
							<Button
								disabled={!values.agree}
								htmlType="submit"
								type="tertiary"
							>
								注册
							</Button>
						</div>
					</>
				)}
			</Form>
		</div>
	)
}

export default SignUp
