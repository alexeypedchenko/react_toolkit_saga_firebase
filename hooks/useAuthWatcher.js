import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authWatcher } from '../firebase/firebaseAuth'
import { setUser, getUser } from '../store/reducers/auth/authReducer'

export const useAuthWatcher = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    authWatcher((user) => dispatch(setUser(user)))
  }, [])
}