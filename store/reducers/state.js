import { combineReducers } from 'redux'
import usersReducer from './users/usersReducer'
import authReducer from './auth/authReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
})

export default rootReducer
