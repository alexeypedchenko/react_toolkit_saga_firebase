import React from 'react'
import styles from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
