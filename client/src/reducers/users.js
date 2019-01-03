import axios from 'axios'
const USERS = 'USERS'
const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/my_friends')
      .then( res => {
        dispatch({ type: USERS, users: res.data })
      })
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    axios.post('/api/my_friends', { user })
      .then( res => {
        dispatch({ type: ADD_USER, user: res.data })
      })
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    axios.delete(`/api/my_friends/${id}`)
      .then( res => dispatch({ type: DELETE_USER, id }) )
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case USERS:
      return action.users
    case ADD_USER:
      return [action.user, ...state]
    case DELETE_USER:
      return state.filter( a => a.id !== action.id )
    default:
      return state
  }
}