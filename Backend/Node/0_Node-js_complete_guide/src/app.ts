import http = require('http')
import express = require('express')
import bodyParser = require('body-parser')
import { adminRoutes, shopRoutes } from './routes'
const app = express()

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use('/', (req, res, next) => {
	next()
})

app.use(adminRoutes)
app.use(shopRoutes)

app.listen(3000)
