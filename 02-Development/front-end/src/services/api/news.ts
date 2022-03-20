import http from '@utils/axios'

export const queryNewsApi = () => {
	return http.request({
		method: 'post',
		url: '/news/queryNews'
	})
}
