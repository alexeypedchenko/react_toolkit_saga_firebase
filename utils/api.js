const users = 'https://jsonplaceholder.typicode.com/users?_limit=10'

export const fetchUsersFromApi = () => fetch(users)
  .then((res) => res.ok ? res.json() : Promise.reject('error'))
  .then((data) => ({ success: true, data }))
  .catch((err) => ({ success: false, error: err }))
