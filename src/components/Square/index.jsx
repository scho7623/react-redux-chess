import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../../constants/itemTypes'
import './style.less'

const squareTarget = {
  drop(props) {
    props.movePiece(props.position)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const Square = ({ black, children, connectDropTarget, isOver }) => {
  const className = classNames({
    square: true,
    over: isOver,
    black
  })
  return connectDropTarget(
    <div className={className}>
      { children }
    </div>
  )
}

Square.propTypes = {
  black: PropTypes.bool,
  children: PropTypes.element
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(Square)
