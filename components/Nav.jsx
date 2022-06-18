import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

function Nav() {
  return (
    <header className={navStyles.header}>
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav