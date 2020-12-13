import express = require('express')
import bodyParser = require('body-parser')
import { shopRoutes, route404, adminRoutes } from './routes'
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(require('path').join(__dirname, 'public')))

app.use('/', (req, res, next) => {
	next()
})

app.use('/', shopRoutes)
app.use('/admin', adminRoutes)
app.use(route404)

app.listen(3000)
