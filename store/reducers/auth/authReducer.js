import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    load: false,
    user: null,
    error: '',
  },
  reducers: {
    fetchUser: (state, action) => {
      state.load = true
    },
    setUser: (state, action) => {
      state.load = false
      state.user = action.payload
    },
    errorUser: (state, action) => {
      state.load = false
      state.error = action.payload
    },
    fetchLogout: (state) => {
      state.load = true
    },
    logoutUser: (state) => {
      state.load = false
      state.user = null
    },
  }
})

export const {
  fetchUser,
  setUser,
  errorUser,
  fetchLogout,
  logoutUser,
} = authSlice.actions

export const getUser = state => state.auth

export default authSlice.reducer
