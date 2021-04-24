import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLObjectTypeConfig } from 'graphql'


const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	})
})

const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {

			}
		}
	}
})

export default new GraphQLSchema({ query })
