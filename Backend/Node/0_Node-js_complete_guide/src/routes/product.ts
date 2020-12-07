import express = require('express')
import { product } from '../controllers'
export const routes = express.Router()
export const items = []

routes.get('/add', product.get)
routes.post('/add', product.post)
