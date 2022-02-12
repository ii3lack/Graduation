export const LOGINSUCCESS = 'INCREMENT'
export const EXITLOGIN = 'REDUCE'

export const loginAction = { type: LOGINSUCCESS, login: true }
export const exitAction = { type: EXITLOGIN, login: false }

interface ReduxState {
	loginState: boolean
}

interface Action {
	type: string
	login: boolean
}

const initData = {
	loginState: false
}

const loginWeb = (state: ReduxState = initData, action: Action) => {
	switch (action.type) {
		case LOGINSUCCESS:
			return { loginState: !state.loginState }
		case EXITLOGIN:
			return { loginState: !state.loginState }
		default:
			return state
	}
}

export { loginWeb }
