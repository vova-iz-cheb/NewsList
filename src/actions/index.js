import { ADD_USER, LOGIN, LOGOUT, CREATE_NEWS, SPECIFY_EDITABLE_NEWS, EDIT_NEWS, DELETE_NEWS } from '../constants'

let nextUserId = 2; // 0 - anonymous, 1 - admin
let nextNewsId = 4;

export const addUser = (user) => {
  return {
    type: ADD_USER,
    id: nextUserId++,
    user
  }
}

export const login = (id) => {
  return {
    type: LOGIN,
    id
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const createNews = ( {title, content, author} ) => {
  return {
    type: CREATE_NEWS,
    news: {
      id: nextNewsId++,
      title,
      content,
      author,
      timestamp: new Date().getTime()
    }
  }
}

export const specifyEditableNews = (id) => {
  return {
    type: SPECIFY_EDITABLE_NEWS,
    id
  }
}

export const editNews = (news) => {
  return {
    type: EDIT_NEWS,
    news
  }
}

export const deleteNews = (id) => {
  return {
    type: DELETE_NEWS,
    id
  }
}