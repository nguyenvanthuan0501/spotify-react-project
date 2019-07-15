import {combineReducers} from 'redux'
import api from './api'
import menu from './menu'
import track from './track'
import errors from './errors'
import library from './library'

export default combineReducers({
  api,
  menu,
  track,
  library,
  errors
})