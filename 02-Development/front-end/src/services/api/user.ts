import http from '@utils/axios'

export interface LoginParams {
	userEmail: string
	userPassword: string
}

export const loginApi = (params: LoginParams) => {
	return http.request({
		data: params,
		method: 'post',
		url: '/user/loginUser'
	})
}
