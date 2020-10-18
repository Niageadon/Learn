import React from 'react'
import Link from 'next/link'
const Page = ({ notes }) => (
	<div>
		<h1>notes base path</h1>
		{notes.map((el, i) =>
			<Link key={new Date() + i} href={'/note/' + el.id}>
				<a>
					Note {i}
				</a>
			</Link>
		)}
	</div>
)
export default Page
export async function getServerSideProps() {
	const resp = await fetch('${process.env.API_URL}/api/note/')
	const {data} = await resp.json()
	
	return {
		props: {
			notes: data
		}
	}
}
