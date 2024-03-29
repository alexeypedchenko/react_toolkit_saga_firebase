import app from './firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

const auth = getAuth()

export const signin = ({email, password}) => new Promise((res, rej) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user
    res(user.providerData[0])
  }).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    rej(errorMessage)
  })
})

export const signup = ({email, password}) => new Promise((res, rej) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user
    res(user.providerData[0])
  }).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    rej(errorMessage)
  })
})

export const signout = () => new Promise((res, rej) => {
  signOut(auth).then(() => {
    res(true)
  }).catch((error) => {
    res(false)
  })
})

export const authWatcher = (cb) => onAuthStateChanged(auth, (user) => {
  if (user) cb(user.providerData[0])
})
