import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } from 'graphql'
import { directors, movies } from '../data'
const { movieType } = require('./Movie')

export const directorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		movies: {
			type: new GraphQLList(movieType),
			resolve(parent, args) {
				return movies.filter(el => el.directorId == parent.id)
			}
		}
	})
})



