export const LOGINSUCCESS = 'LOGIN'
export const EXITLOGIN = 'EXIT'

export const loginAction = { type: LOGINSUCCESS }
export const exitAction = { type: EXITLOGIN }

interface ReduxState {
	loginState: boolean
}

interface Action {
	type: string
	login: boolean	
}

// TODO: 登陆状态更改为false
const initData = {
	loginState: false
}

const loginWeb = (state: ReduxState = initData, action: Action) => {
	switch (action.type) {
		case LOGINSUCCESS:
			return { loginState: true }
		case EXITLOGIN:
			return { loginState: false }
		default:
			return state
	}
}

export { loginWeb }
