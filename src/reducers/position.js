import { MOVE_PIECE } from '../constants/actionTypes'

const positionReducer = (state = [0, 0], action) => {
  switch(action.type) {
    case MOVE_PIECE:
      return action.position
    default:
      return state
  }
}

export default positionReducer
