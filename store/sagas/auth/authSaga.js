import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchUser,
  setUser,
  errorUser,
  fetchLogout,
  logoutUser,
} from '../../reducers/auth/authReducer'
// side effects
import { signin, signout } from '../../../firebase/firebaseAuth'

function* auth(action) {
  try {
    const user = yield call(signin, action.payload)
    // yield put(setUser(user))
  } catch (err) {
    yield put(errorUser(err))
  }
}

function* logout() {
  try {
    yield call(signout)
    yield put(logoutUser())
  } catch (err) {
    yield put(errorUser(err))
  }
}

function* authWatcher() {
  yield takeEvery(fetchUser, auth)
  yield takeEvery(fetchLogout, logout)
}

export default authWatcher
