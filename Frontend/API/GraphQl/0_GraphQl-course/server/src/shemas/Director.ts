import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} from 'graphql'
import {movieType} from './Movie'
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
				return movies.find({})
			}
		}
	})
})



