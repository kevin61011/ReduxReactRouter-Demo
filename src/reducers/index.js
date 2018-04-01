import { combineReducers } from 'redux'
import found from './found'
import myFavorite from './myFavorite'
import bet from './bet'

export default combineReducers({
  found,
  myFavorite,
  bet
});
