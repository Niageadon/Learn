export interface User {
    id: number|string
    name: string
}
export interface OakContext {
    response: any,
    request?: any,
    params?: {id?: number|string}
}