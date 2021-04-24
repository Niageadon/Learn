const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()
const PORT = 8081

app.use('/graphql', graphqlHTTP({}))
app.listen(PORT, () => {
	console.log(`Server listen at ${PORT}`)
})
