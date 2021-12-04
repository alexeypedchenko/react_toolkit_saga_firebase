import { call, put, takeEvery } from "redux-saga/effects"
import { fetchUsers, fetchUsersSuccess, fetchUsersError } from '../../reducers/users/usersReducer'
import { fetchUsersFromApi } from "../../../utils/api"

function* fetchUsersWorker() {
  const { success, data, error } = yield call(fetchUsersFromApi)
  if (success) {
    yield put(fetchUsersSuccess(data))
  } else {
    yield put(fetchUsersError(error))
  }
}

function* usersWatcher() {
  yield takeEvery(fetchUsers, fetchUsersWorker)
}

export default usersWatcher
