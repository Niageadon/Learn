/**  @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
const Nav = () => (
	<header sx={{ height: '60px', width: '100%', bg: 'red' }}>
		<nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
			<Link href='/'>
				<a>home</a>
			</Link>

			<Link href='/notes'>
				<a>notes</a>
			</Link>
		</nav>
	</header>
)
export default Nav
