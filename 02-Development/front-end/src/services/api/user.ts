import http from '@utils/axios'

export const loginApi = (params: any) => {
	return http.request({
		data: params,
		method: 'post',
		url: '/users/login'
	})
}
