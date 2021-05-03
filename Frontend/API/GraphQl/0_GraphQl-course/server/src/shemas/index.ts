import {GraphQLSchema} from "graphql";
import {query} from './query'
import {mutation} from './mutation'


export const Schema = new GraphQLSchema({ query, mutation })
