import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import positionReducer from './position'

const rootReducer = combineReducers({
  position: positionReducer,
  routing: routerReducer
})

export default rootReducer
