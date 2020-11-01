import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {User, OakContext} from './interfaces.ts'
import {getUsers, getUser, createUser, setUser, deleteUser} from './controller.ts'

const app = new Application();
const router = new Router();


router
    .get('/api/users', getUsers)
    .get('/api/users/:id', getUser)
    .post('/api/users', createUser)
    .put('/api/users/:id', setUser)
    .delete('/api/users/:id', deleteUser)

app.use(router.routes());
await app.listen({ port: 8000 });