import React from 'react'
import { useRouter, withRouter } from 'next/router'
const Page = () => {
	const router = useRouter()
	const { id } = router.query
	return (
		<h1>
			Note { id }
		</h1>
	)
}

export default Page
