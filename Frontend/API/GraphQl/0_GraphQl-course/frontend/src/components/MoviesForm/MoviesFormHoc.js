import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo'
import { styles } from './styles';
import {addMoviesMutation} from '../Movies/mutations'
import {moviesQuery} from '../MoviesTable/queries'
import {directorsQuery} from './queries'

const withMoviesMutation = graphql(addMoviesMutation, {
	props: ({ mutate }) => ({
		addMovie: movie => mutate({
			variables: movie,
			refetchQueries: [{ query: moviesQuery }]
		})
	})
})
export default compose(withStyles(styles), withMoviesMutation, graphql(directorsQuery));
