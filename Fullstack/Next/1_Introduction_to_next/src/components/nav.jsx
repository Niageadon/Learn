/**  @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
	<header sx={{ height: '60px', width: '12px', bg: 'red' }}>
		<nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Link>
				<a>dd</a>
			</Link>

			<Link>
				<a>dd</a>
			</Link>
		</nav>
	</header>
)
