import React from 'react'
import styles from './Navbar.module.scss'

import { useRouter } from 'next/router'
import Link from 'next/link'

const links = [
  { id: '0', name: 'Home', path: '/' },
  { id: '1', name: 'About', path: '/about' }
]

const Navbar = () => {
  const { pathname } = useRouter()
  return (
    <nav className={styles.navbar}>
      {links.map((link) => (
        <Link key={link.id} href={link.path}>
          <a className={`
            ${styles.link}
            ${pathname === link.path ? styles.active : ''}
          `}>
            {link.name}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
