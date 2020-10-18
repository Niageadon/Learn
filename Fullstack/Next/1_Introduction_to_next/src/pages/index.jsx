/**  @jsx jsx */
import Link from 'next/link'
import dynamic from 'next/dynamic';
const Browser = dynamic(() => import('../components/browser'),
	{
		ssr: false,
		loading: () => <span>loading</span>
	})
import { jsx } from 'theme-ui'

const Page = ({ content }) => (
	<div sx={{ height: 'calc(100vh - 50px)' }}>
		<h1>{ content.title }</h1>
		<Link href="/note">
			<a>Notes</a>
		</Link>

		<Browser/>
	</div>
)
export default Page
/*export function getStaticProps(context) {
	console.log(11, context)
	return {
		props: {}
	}
}*/
export function getStaticProps() {
	return {
		props: {
			content: {
				title: 'content title'
			}
		}
	}
}
