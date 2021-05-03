import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {movieType} from "./Movie";
import * as mongoose from "mongoose";
import Movies from "../models/movie";
import {directorType} from "./Director";
import Director from "../models/director";
import Movie from "../models/movie";

export const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addDirector: {
			type: directorType,
			args: {
				name: { type: GraphQLString },
				age: { type: GraphQLInt },
			},
			async resolve(parent, args) {
				return new Director({
					name: args.name,
					age: args.age
				}).save()
			}
		},

		addMovie: {
			type: movieType,
			args: {
				name: { type: GraphQLString },
				genre: { type: GraphQLString },
				directorId: { type: GraphQLID},
			},
			async resolve(parent, args) {
				return new Movie({
					name: args.name,
					genre: args.genre,
					directorId: args.directorId
				}).save()
			}
		},

		deleteMovie: {
			type: movieType,
			args: {
				id: { type: GraphQLID },
			},
			async resolve(parent, args) {
				return Movie.findByIdAndDelete(args.id)
			}
		},

		deleteDirector: {
			type: directorType,
			args: {
				id: { type: GraphQLID },
			},
			async resolve(parent, args) {
				return Director.findByIdAndDelete(args.id)
			}
		},

		updateMovie: {
			type: movieType,
			args: {
				id: { type: GraphQLID },
				name: { type: GraphQLString },
				genre: { type: GraphQLString },
				directorId: { type: GraphQLString },
			},
			async resolve(parent, args) {
				return Movie.findByIdAndUpdate(args.id,
					{ $set: {name: args.name, genre: args.genre, directorId: args.directorId} },
					{ new: true }
				)
			}
		},

		updateDirector: {
			type: directorType,
			args: {
				id: { type: GraphQLID },
				name: { type: GraphQLString },
				age: { type: GraphQLInt },
			},
			async resolve(parent, args) {
				return Director.findByIdAndUpdate(args.id,
					{ $set: {name: args.name, age: args.age} },
					{ new: true }
					)
			}
		},
	}
})
