import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div className="button">
        <button onClick={this.props.randomize}>Randomize</button>
      </div>
    )
  }
}

export default Button
