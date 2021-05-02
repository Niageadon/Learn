import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } from 'graphql'
const { movieType } = require('./Movie')
import directors from '../models/director'
import movies from '../models/movie'

export const directorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		_id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		movies: {
			type: new GraphQLList(movieType),
			resolve(parent, args) {
				return movies.findById(parent._id)
			}
		}
	})
})



