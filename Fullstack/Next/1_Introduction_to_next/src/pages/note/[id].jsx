/**  @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'

const Page = ({ note }) => {
	return (
		<div sx={{ variant: 'containers.page' }}>
			<h1>Note { note.title }</h1>
		</div>
	)
}
export default Page
export async function getServerSideProps({ params, req, res }) {
	console.log(22, params)
	const resp = await fetch(`${process.env.API_URL}/api/note/${ params.id }`)
	if (!resp.ok) {
		res.writeHead(302, {
			Location: '/note'
		})
		res.end()
		return {
			props: {}
		}
	}
	const { data } = await resp.json()
	return {
		props: { note: data }
	}
}
