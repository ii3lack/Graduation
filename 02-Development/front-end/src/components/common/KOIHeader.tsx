import React from 'react'
import { Layout, Nav, Button, Avatar, Dropdown } from '@douyinfe/semi-ui'
import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons'
import { store } from '@/store'
import { useDispatch } from 'react-redux'
import { exitAction } from '@/store/login'

interface Props {
	type: any
}

const KOIHeader: React.FC<Props> = (props) => {
	const { Header } = Layout
	const dispatch = useDispatch()

	const toLogin = () => {
		props.type.push('/sign')
	}
	const toExit = () => {
		dispatch(exitAction)
		props.type.push('/sign')
	}

	return (
		<Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
			<Nav
				mode="horizontal"
				footer={
					<>
						<Button
							theme="borderless"
							icon={<IconBell size="large" />}
							style={{
								color: 'var(--semi-color-text-2)',
								marginRight: '12px'
							}}
						/>
						<Button
							theme="borderless"
							icon={<IconHelpCircle size="large" />}
							style={{
								color: 'var(--semi-color-text-2)',
								marginRight: '12px'
							}}
						/>
						<Dropdown
							render={
								<Dropdown.Menu>
									<Dropdown.Item
										style={{
											display:
												store.getState().loginWeb
													.loginState === true
													? 'block'
													: 'none'
										}}
										onClick={toLogin}
									>
										登录
									</Dropdown.Item>
									<Dropdown.Item
										style={{
											display:
												store.getState().loginWeb
													.loginState === false
													? 'block'
													: 'none'
										}}
										onClick={toExit}
									>
										退出登录
									</Dropdown.Item>
								</Dropdown.Menu>
							}
						>
							<Avatar color="orange" size="small" />
						</Dropdown>
					</>
				}
			/>
		</Header>
	)
}

export default KOIHeader
