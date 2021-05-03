import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType} from "graphql";
import {movieType} from "./Movie";
import * as mongoose from "mongoose";
import Movies from "../models/movie";
import {directorType} from "./Director";
import Directors from "../models/director";

export const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: movieType,
			args: { _id: { type: GraphQLID } },
			async resolve(parent, args) {
				console.log('mov by id ', args._id)
				const _id = mongoose.Types.ObjectId(args._id)
				const a = await Movies.findOne({_id})
				console.log(22, a)
				return a
			}
		},
		director: {
			type: directorType,
			args: { _id: { type: GraphQLID } },
			resolve(parent, args) {
				console.log('dir by id ', args._id)

				return Directors.findById(args._id)
			}
		},
		movies: {
			type: GraphQLNonNull(new GraphQLList(new GraphQLNonNull(movieType))),
			args: { _id: { type: GraphQLID } },
			async resolve(parent, args) {
				console.log('mov')
				console.log(111, await Movies.find({}))
				//const movies = await Movies.find({})
				return [{name: 'bobo'}]
			}
		},
		directors: {
			type: GraphQLNonNull(new GraphQLList(new GraphQLNonNull(directorType))),
			args: { _id: { type: GraphQLID } },
			async resolve(parent, args) {
				console.log('directors', args)
				console.log(111, await Directors.find({}))
				return Directors.find({})
			}
		},
	}
})
