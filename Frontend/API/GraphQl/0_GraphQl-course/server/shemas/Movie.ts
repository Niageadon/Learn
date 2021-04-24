import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } from 'graphql'
import { directorType, directors } from './Director'

interface IMovie {
	id: string
	name: string
	genre: "Crime" | "Horror" | "Western" | "Erotic"
	directorId: string
}

const items: IMovie[] = [
	{ id: '1', name: '3 bobi', genre: "Western", directorId: '1' },
	{ id: '2', name: 'boba 2', genre: "Crime", directorId: '2' },
	{ id: '3', name: 'silence of boba', genre: "Horror", directorId: '3' },
	{ id: '4', name: '1001 boba', genre: "Erotic", directorId: '4' },
]

const type = new GraphQLObjectType({
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

const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return items.find(el => el.id == args.id)
			}
		}
	}
})

export default new GraphQLSchema({ query })
