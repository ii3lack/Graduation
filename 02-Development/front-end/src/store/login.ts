export const LOGINSUCCESS = 'LOGIN'
export const EXITLOGIN = 'EXIT'

export const loginAction = { type: LOGINSUCCESS }
export const exitAction = { type: EXITLOGIN }

interface ReduxState {
	loginState: boolean
	userEmailState: string
}

interface Action {
	type: string
	login: boolean
	email: string
}

// TODO: 登陆状态更改为false
const initData = {
	loginState: false,
	userEmailState: ''
}

const loginWeb = (state: ReduxState = initData, action: Action) => {
	switch (action.type) {
		case LOGINSUCCESS:
			return {
				loginState: true,
				userEmailState: action.email
			}
		case EXITLOGIN:
			return {
				loginState: false,
				userEmailState: ''
			}
		default:
			return state
	}
}

export { loginWeb }
