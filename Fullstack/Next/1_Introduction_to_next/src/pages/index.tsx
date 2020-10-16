/**  @jsx jsx */
import Link from 'next/link'
import { jsx } from 'theme-ui'

const Page = () => (
	<div sx={{ height: 'calc(100vh - 50px)' }}>
		<h1>index page</h1>
		<Link href="/note">
			<a>Notes</a>
		</Link>
	</div>
)
export default Page
/*export function getStaticProps(context) {
	console.log(11, context)
	return {
		props: {}
	}
}*/
