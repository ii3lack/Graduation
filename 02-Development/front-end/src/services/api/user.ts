import http from '@utils/axios'

export interface LoginParams {
	userEmail: string
	userPassword: string
}

export interface RegesterParams {
	userEmail: string
	userName: string
	userPassword: string
}

export const loginApi = (params: LoginParams) => {
	return http.request({
		params,
		method: 'post',
		url: '/user/loginUser'
	})
}

export const regesterApi = (params: RegesterParams) => {
	return http.request({
		params,
		method: 'post',
		url: '/user/registerUser'
	})
}
