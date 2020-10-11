import React from 'react'
import Link from 'next/link'
const Page = () => (
	<div>
		<h1>notes base path</h1>
		<Link href="/notes/[id]" as={'/notes/1'}>
			Note 1
		</Link>
	</div>
)
export default Page
