import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, getUser, fetchLogout } from '../store/reducers/auth/authReducer'

const index = () => {
  const dispatch = useDispatch()
  const { load, user, error } = useSelector(getUser)

  const signin = () => {
    dispatch(fetchUser({ email: 'main@mail.com', password: '123456' }))
  }

  if (load) return (<p>loading...</p>)

  return (
    <div>
      <h1>hello from react next home page!</h1>
      {user && (
        <>
          <p>
            hello {user.email}
          </p>
          <button onClick={() => dispatch(fetchLogout())}>
            signout
          </button>
        </>
      )}
      {!user && (
        <button onClick={signin}>
          signin
        </button>
      )}
    </div>
  )
}

export default index
