import {GraphQLID, GraphQLObjectType, GraphQLSchema} from "graphql";
import {directors, movies} from "../data";
import {directorType} from "./Director";
import {movieType} from "./Movie";


export const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movies: {
			type: directorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return directors.find(el => el.id == args.id)
			}
		},
		directors: {
			type: movieType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return movies.find(el => el.id == args.id)
			}
		}
	}
})
export const Schema = new GraphQLSchema({ query })
