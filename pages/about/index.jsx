import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, getUsers } from '../../store/reducers/users/usersReducer'

const index = () => {
  const dispatch = useDispatch()
  const { load, users, error } = useSelector(getUsers)

  if (load) {
    return (<p>loading...</p>)
  }

  return (
    <div>
      <h1>
        hello from about
      </h1>
      <button onClick={() => dispatch(fetchUsers())}>
        get users
      </button>
      {error && (<p>error: {error}</p>)}
      {users.map((user) => (
        <div key={user.name}>
          {user.name}
        </div>
      ))}
    </div>
  )
}

export default index
