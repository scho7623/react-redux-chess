import React, { PropTypes } from 'react'
import Board from '../containers/Board'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>React-Redux-Chess</h1>
        <Board />
      </div>
    )
  }
}

export default App
