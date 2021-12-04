import React from 'react'
import styles from './Layout.module.scss'
import Header from '../header/Header'
import { useAuthWatcher } from '../../hooks/useAuthWatcher'

const Layout = ({ children }) => {
  useAuthWatcher()

  return (
    <div className={styles.layout}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
