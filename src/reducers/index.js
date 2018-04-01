import { combineReducers } from 'redux'
import found from './found'
import myFavorite from './myFavorite'
import bet from './bet'
import user from './user'

export default combineReducers({
  found,
  myFavorite,
  bet,
  user
});
