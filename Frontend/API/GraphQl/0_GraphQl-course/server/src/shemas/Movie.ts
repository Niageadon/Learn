import {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt} from 'graphql'
import { directorType } from './Director'
import directors from '../models/director'

export const movieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		_id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		directorId: { type: GraphQLInt },
		director: {
			type: directorType,
			resolve(parent, args) {
				return directors.findById(parent._id)
			}
		},
	})
})

