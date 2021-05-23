import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo'
import { styles } from './styles';
import {addDirectorMutation} from '../Directors/mutations'
import {directorsQuery} from '../DirectorsTable/queries'

const withDirectorsMutation = graphql(addDirectorMutation, {
	props: ({ mutate }) => ({
		addDirector: director => mutate({
			variables: director,
			refetchQueries: [{ query: directorsQuery }]
		})
	})
})
export default compose(withStyles(styles), withDirectorsMutation);
