import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } from 'graphql'
import { directorType } from './Director'
import { movies, directors } from '../data'

export const movieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		director: {
			type: directorType,
			resolve(parent, args) {
				return directors.find(el => el.id == parent.id)
			}
		},
	})
})

