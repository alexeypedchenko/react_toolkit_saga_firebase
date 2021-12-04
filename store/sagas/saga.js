import { all } from 'redux-saga/effects'
import usersWatcher from './users/usersSaga'
import authWatcher from './auth/authSaga'

function* rootWatcher() {
  yield all([
    usersWatcher(),
    authWatcher(),
  ])
}

export default rootWatcher
