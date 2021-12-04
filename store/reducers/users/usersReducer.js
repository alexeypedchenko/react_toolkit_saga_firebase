import { createReducer, createAction } from '@reduxjs/toolkit'

// https://jsonplaceholder.typicode.com/users?_limit=9

const initialState = {
  load: false,
  users: [],
  error: '',
}

export const fetchUsers = createAction('FETCH_USERS')
export const fetchUsersSuccess = createAction('FETCH_USERS_SUCCESS')
export const fetchUsersError = createAction('FETCH_USERS_ERROR')

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsers, (state, action) => {
      state.load = true
    })
    .addCase(fetchUsersSuccess, (state, action) => {
      state.load = false
      state.users = action.payload
    })
    .addCase(fetchUsersError, (state, action) => {
      state.load = false
      state.error = action.payload
    })
})

export const getUsers = state => state.users

export default usersReducer
