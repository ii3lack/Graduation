interface ResponseData {
	success: boolean
	code: string
	data: unknown
	message: string
}

interface MockOptions{
	url: string
	type: string
	body: string
}

export type { ResponseData, MockOptions }
