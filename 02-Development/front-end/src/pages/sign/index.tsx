import React from 'react'
import { Form, Toast, Button, Typography } from '@douyinfe/semi-ui'
import { LoginParams, loginApi } from '@/services/api/user'
import '@assets/style/sign.scss'
import { changeResult } from '@/services/func/httpUtils'
import { useDispatch } from 'react-redux'
import { loginAction } from '@/store/login'

interface ResponseResult {
	success: boolean
	status: number
	message: string
	data: Object
}

interface History {
	history: any
}

const SignHome: React.FC<History> = (props) => {
	const { Text } = Typography
	// console.log(props)
	const { history } = props
	const dispatch = useDispatch()
	
	const handleSubmit = async (values: any) => {
		const params: LoginParams = {
			userEmail: values.userEmail,
			userPassword: values.userPassword
		}
		const result = changeResult(await loginApi(params))
		console.log(result.message)
		if (result.message === '登陆成功') {
			dispatch(loginAction)
			history.push('/')
		} else {
			Toast.info('登陆失败，用户名或密码错误')
		}
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
							minLength={6}
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
