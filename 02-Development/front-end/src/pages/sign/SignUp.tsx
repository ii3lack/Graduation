import React from 'react'
import { Form, Toast, Button } from '@douyinfe/semi-ui'
import { regesterApi, RegesterParams } from '@/services/api/user'
import '@assets/style/sign.scss'
import { changeResult } from '@/services/func/httpUtils'
import { useDispatch } from 'react-redux'
// import { loginAction } from '@/store/login'

interface History {
	history: any
}

const SignUp: React.FC<History> = (props) => {
	const handleSubmit = async (values: any) => {
		// console.log(values)
		const { history } = props
		// const dispatch = useDispatch()

		if (values.userPassword !== values.passwordChecked) {
			Toast.info('两次密码输入不一致,请重新输入')
		} else {
			const params: RegesterParams = {
				userEmail: values.userEmail,
				userName: values.userName,
				userPassword: values.userPassword
			}
			const result = changeResult(await regesterApi(params))
			console.log(result)

			if (result.message === '注册成功') {
				history.push('/sign')
				// dispatch(loginAction)
			} else {
				Toast.info('用户名已存在')
			}
		}
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
							field="userName"
							label="用户名"
							style={{ width: '100%' }}
							placeholder="请输入您的用户名"
						/>
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
