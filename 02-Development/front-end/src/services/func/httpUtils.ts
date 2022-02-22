import { AxiosResponse } from 'axios'

export const changeResult = (result: any) => {
	return JSON.parse(JSON.stringify(result))
}
