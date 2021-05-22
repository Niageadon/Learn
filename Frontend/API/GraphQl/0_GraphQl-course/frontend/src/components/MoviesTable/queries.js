import { gql } from 'apollo-boost'

export const moviesQuery = gql`
	query movieQuery {
		movies {
			_id
			name
			genre
		}
	}
`
