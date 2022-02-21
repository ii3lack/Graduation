import React from 'react'
import { Form, Toast, Button, Typography } from '@douyinfe/semi-ui'
import { LoginParams, loginApi } from '@/services/api/user'

import '@assets/style/sign.scss'

const SignHome: React.FC = () => {
	const { Text } = Typography

	const handleSubmit = (values: any) => {
		// console.log(values)
		const params: LoginParams = {
			userEmail: values.userEmail,
			userPassword: values.userPassword
		}
		// Toast.info('表单已提交')
		loginApi(params).then((res) => {
			console.log(params)

			switch (res.data) {
				case true:
					console.log(res)
					// message.success({ content: '登陆成功', duration: 5 })
					// navigate('/home')
					break
				case false:
					console.log(res)
					// message.success({
					// 	content: '登陆失败，用户名或者密码错误',
					// 	duration: 5,
					// })
					break
			}
		})
	}

	const loginWeb = (values: LoginParams) => {
		loginApi(values).then((res) => {
			switch (res.data) {
				case true:
					console.log(res)
					// message.success({ content: '登陆成功', duration: 5 })
					// navigate('/home')
					break
				case false:
					console.log(res)
					// message.success({
					// 	content: '登陆失败，用户名或者密码错误',
					// 	duration: 5,
					// })
					break
			}
		})
	}

	return (
		<div className="container">
			<img src="src/assets/images/signIn.gif" className="imgBox" />

			<Form
				onSubmit={(values) => handleSubmit(values)}
				style={{ width: 400 }}
			>
				{({ formState, values, formApi }) => (
					<>
						<Form.Input
							field="userEmail"
							label="邮箱号"
							style={{ width: '100%' }}
							placeholder="请输入您的邮箱号"
						/>
						<Form.Input
							field="userPassword"
							label="密码"
							mode="password"
							style={{ width: '100%' }}
							placeholder="请输入您的密码"
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
								<span>Or</span>
								<Button
									theme="borderless"
									style={{
										color: 'var(--semi-color-primary)',
										marginLeft: 10,
										cursor: 'pointer'
									}}
								>
									<Text link={{ href: '/signUp' }}>注册</Text>
								</Button>
							</p>
							<Button
								disabled={!values.agree}
								htmlType="submit"
								type="tertiary"
							>
								登录
							</Button>
						</div>
					</>
				)}
			</Form>
		</div>
	)
}

export default SignHome
