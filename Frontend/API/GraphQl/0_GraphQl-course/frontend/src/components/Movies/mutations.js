import { gql } from 'apollo-boost'

export const addMoviesMutation = gql`
	mutation addMovie($name: String!, $directorId: ID!, $genre: String!) {
		addMovie(name: $name, directorId: $directorId, genre: $genre) {
			name
		}
	}
`
