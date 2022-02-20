export const LOGINSUCCESS = 'INCREMENT'
export const EXITLOGIN = 'REDUCE'

export enum HomeState {
	Home,
	Data,
	BookKeeping,
	Setting
}

export const toHomeAction = { type: HomeState.Home }
export const toBookAction = { type: HomeState.BookKeeping }
export const toSettingAction = { type: HomeState.Setting }
export const toDataAction = { type: HomeState.Data }

interface ReduxState {
	homeState: HomeState
}

export interface Action {
	type: HomeState
}

const initData = {
	homeState: HomeState.Home
}

const homeCurrent = (state: ReduxState = initData, action: Action) => {
	switch (action.type) {
		case HomeState.Home:
			return { homeState: HomeState.Home }
		case HomeState.Data:
			return { homeState: HomeState.Data }
		case HomeState.Setting:
			return { homeState: HomeState.Setting }
		case HomeState.BookKeeping:
			return { homeState: HomeState.BookKeeping }
		default:
			return state
	}
}

export { homeCurrent }
