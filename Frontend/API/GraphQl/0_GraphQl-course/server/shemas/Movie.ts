import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } from 'graphql'

interface IMovie {
	id: string
	name: string
	genre: "Crime" | "Horror" | "Western" | "Erotic"
}

const items: IMovie[] = [
	{ id: '1', name: '3 bobi', genre: "Western" },
	{ id: '2', name: 'boba 2', genre: "Crime" },
	{ id: '3', name: 'silence of boba', genre: "Horror" },
	{ id: '4', name: '1001 boba', genre: "Erotic" },
]

const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	})
})

const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return items.find(el => el.id == args.id)
			}
		}
	}
})

export default new GraphQLSchema({ query })
