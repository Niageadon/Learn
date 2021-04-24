import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } from 'graphql'

interface IDirector {
	id: string
	name: string
	age: number
}

export const directors: IDirector[] = [
	{ id: '1', name: 'Boba', age: 43 },
	{ id: '2', name: 'Biba', age: 34 },
	{ id: '3', name: 'Ilon Mask', age: 11 },
	{ id: '4', name: 'Bobantino', age: 128 },
]

export const directorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
	})
})

const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: directorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return directors.find(el => el.id == args.id)
			}
		}
	}
})

export default new GraphQLSchema({ query })
