import * as express from 'express'
import { graphqlHTTP }  from 'express-graphql'
import { MovieSchema } from './shemas'

const app = express()
const PORT = 8081

app.use('/graphql', graphqlHTTP({
	schema: MovieSchema,
	graphiql: true
}))
app.listen(PORT, () => {
	console.log(`Server listen at ${PORT}`)
})
