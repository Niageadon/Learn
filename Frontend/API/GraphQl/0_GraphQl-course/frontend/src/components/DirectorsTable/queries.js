import { gql } from 'apollo-boost'

export const directorsQuery = gql`
	query movieQuery {
		directors {
			_id
			name
			age
			movies {
				name
				_id
			}
		}
	}
`
