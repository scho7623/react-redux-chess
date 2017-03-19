import { MOVE_PIECE } from '../constants/actionTypes'

export function movePiece(position) {
  return {
    type: MOVE_PIECE,
    position
  }
}
