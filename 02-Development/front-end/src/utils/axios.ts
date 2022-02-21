/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Notification } from '@douyinfe/semi-ui'
import { handleNetError } from '@utils/index'
import { ResponseData } from '@/interfaces/httpApi'

class HttpRequest {
	private readonly baseUrl: string

	constructor() {
		this.baseUrl = 'http://localhost:8080'
	}

	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			headers: {
				'Content-Type':
					'application/x-www-form-urlencoded;charset = UTF-8'
			},
			timeout: 5000
		}
		return config
	}

	// 请求拦截

	interceptors(instance: AxiosInstance, url: string | number | undefined) {
		instance.interceptors.request.use(
			(config) => {
				// 添加全局的loading..
				// 请求头携带token
				config.url = `${this.baseUrl}${url}`
				return config
			},
			(error: string) => {
				return Promise.reject(error)
			}
		)
		// 响应拦截
		instance.interceptors.response.use(
			(res) => {
				// 返回数据
				const data: ResponseData = res.data
				try {
					if (data.code !== '200') {
						const codeState = String(data.code)
						throw new Error(codeState)
					}
				} catch (error) {
					handleNetError(error)
				}

				return data
			},
			(error) => {
				console.log('err' + error)
				Notification.error({
					title: '请求提示',
					content: `出现了错误${error}`,
					duration: 3
				})
				return Promise.reject(error.message)
			}
		)
	}

	request(options: AxiosRequestConfig) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
}

const http = new HttpRequest()
export default http
