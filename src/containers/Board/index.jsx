import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { movePiece } from '../../actions/positionActions'
import Board from '../../components/Board'

function mapStateToProps(state) {
  return {
    knightPosition: state.position
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movePiece: function (position) {
      dispatch(movePiece(position))
    }
  }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(Board))
