import React from 'react'
import Link from 'next/link'
const Page = ({ notes }) => (
	<div>
		<h1>notes base path</h1>
		<Link href="/note/[id]" as={'/note/1'}>
			Note 1
		</Link>
		{notes.map((el, i) =>
			<Link href={'/note/' + i}>
				<a>
					Note {i}
				</a>
			</Link>
		)}
	</div>
)
export default Page
export async function getServerSideProps() {
	const resp = await fetch('http://localhost:3000/api/note/')
	const {data} = await resp.json()
	console.log(22, data)
	
	return {
		props: {
			notes: data
		}
	}
}
