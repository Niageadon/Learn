import http = require('http')
import express = require('express')
import bodyParser = require('body-parser')
import { productRoutes, shopRoutes, route404 } from './routes'
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(require('path').join(__dirname, 'public')))

app.use('/', (req, res, next) => {
	next()
})

app.use('/product', productRoutes)
app.use('/shop', shopRoutes)
app.use(route404)

app.listen(3000)
