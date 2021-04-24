import * as express from 'express'
import { graphqlHTTP }  from 'express-graphql'
import { Schema } from './shemas'

const app = express()
const PORT = 8081

app.use('/graphql', graphqlHTTP({
	schema: Schema,
	graphiql: true
}))
app.listen(PORT, () => {
	console.log(`Server listen at ${PORT}`)
})
