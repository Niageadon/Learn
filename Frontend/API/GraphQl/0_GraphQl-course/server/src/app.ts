import * as express from 'express'
import { graphqlHTTP }  from 'express-graphql'
import { Schema } from './shemas'
import {initDb} from "./initDb";
const mongoose = require('mongoose');
const dbConnection = mongoose.connection;
mongoose.set('debug', true)

dbConnection.on('error', console.error)
dbConnection.on('open', () => console.log('db open'))

const app = express()
const PORT = 8081

mongoose.connect('mongodb+srv://admin:admin@cluster0.dzuva.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use('/graphql', graphqlHTTP({
	schema: Schema,
	graphiql: true
}))
app.listen(PORT, () => {
	console.log(`Server listen at ${PORT}`)
})

initDb()
