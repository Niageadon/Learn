export {getUsers, getUser, createUser, setUser, deleteUser}
import {OakContext, User} from './interfaces.ts'
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let users: User[] = [
    {id: 1, name: 'admin'},
    {id: 2, name: 'badmin'},
]

const getUsers = ({response}: OakContext) => {
    console.log(response)
    response.status = 200;

    response.body = {users}
}
const getUser = ({response, params}: OakContext) => {
    const user: User|undefined = users?.find(el => el.id == params?.id);
    if(user) {
        response.status = 200;
        response.body = user
    } else {
        response.status = 404;
        response.body = 'User not found'
    }
}
const createUser = async ({response, request}: OakContext) => {
    const body = await request.body()
    if(request.hasBody()) {
        const user: User = body.value
        user.id = v4.generate()
        users.push(user)
        response.status = 201
        response.body = user
    } else {
        response.status = 400
        response.body = {message: 'invalid data'}
    }
}
const setUser = async ({response, request, params}: OakContext) => {
    const user: User|undefined = users.find(u => u.id == params?.id) 
    if(user) {
        const body = await request.body()
        users = users.map(u => u.id == user.id? {...u, ...body.value}: u)
        response.status = 201
        response.body = user
    } else {
        response.status = 404;
        response.body = {message: 'User not found'}
    }
}
const deleteUser = async({response, params}: OakContext) => {
    users = users.filter(u => u.id !== params?.id)
    response.status = 200
    response.body = users
}