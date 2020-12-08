export interface IHttpService<T> {
	get: (id: number) => T
	getAll: () => T[]
}
export class HttpService<T> {
	private http: (input: RequestInfo, init?: RequestInit) => Promise<Response>
	get(id: number) {
		throw new Error('method get should be implemented')
	}
	getAll() {
		throw new Error('method getAll should be implemented')
	}

	constructor() {
	}
}
