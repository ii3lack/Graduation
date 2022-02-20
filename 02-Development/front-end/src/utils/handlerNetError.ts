import { Notification } from '@douyinfe/semi-ui'

const title = '网络提示'

const handleNetError = (value: unknown) => {
	let msg = '未知错误'
	switch (value) {
		case '400':
			msg = '请求错误(400)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '401':
			msg = '未授权(401)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '403':
			msg = '拒绝访问(403)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '404':
			msg = '请求出错(404)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '408':
			msg = '请求超时(408)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '500':
			msg = '服务器错误(500)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '501':
			msg = '服务未实现(501)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '502':
			msg = '网络错误(502)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '503':
			msg = '服务不可用(503)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '504':
			msg = '网络超时(504)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		case '505':
			msg = 'HTTP版本不受支持(505)'
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
			break
		default:
			msg = `连接出错(${value})!`
			Notification.warning({
				title: title,
				content: msg,
				duration: 3
			})
	}
}

export default handleNetError
