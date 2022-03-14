import http from '@utils/axios'

export interface IncomeRecordParams {
	billsName: String
	billsTags: String
	billsDate: String
	billsNum: String
	billsInfo: String
	userEmail: String
}

export const incomeRecordAPI = (params: IncomeRecordParams) => {
	return http.request({
		params,
		method: 'post',
		url: '/bills/incomeRecord'
	})
}
