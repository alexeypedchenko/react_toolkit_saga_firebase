import React from 'react'
import styles from './Header.module.scss'
import Navbar from './Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, getUser, fetchLogout } from '../../store/reducers/auth/authReducer'

const Header = () => {
  const dispatch = useDispatch()
  const { load, user, error } = useSelector(getUser)

  const signin = () => {
    dispatch(fetchUser({ email: 'main@mail.com', password: '123456' }))
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Navbar />
        <div className={styles.actions}>
          {user ? (
            <>
              <p>hello {user.email}</p>
              <button onClick={() => dispatch(fetchLogout())}>signout</button>
            </>
          ) : (
            <button onClick={signin}>signin</button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
