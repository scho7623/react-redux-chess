import React from 'react'
import classnames from 'classnames'
import { DragSource } from 'react-dnd'
import { ItemTypes } from '../../constants/itemTypes'

const knightSource = {
  beginDrag(props) {
    return {}
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const Knight = ({ connectDragSource, isDragging }) => {
  const classNames = classnames({
    knight: true,
    drag: isDragging
  })
  return connectDragSource(
    <span className={classNames}>&#9816;</span>
  )
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
