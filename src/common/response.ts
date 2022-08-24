export interface Response<T> {
	code: number,
	message: string,
	details: string,
	data: T
}

export const SuccessResponse = <T>(data: T): Response<T> => {
	return {
		code: 200,
		message: 'Success',
		details: '',
		data: data
	};
}