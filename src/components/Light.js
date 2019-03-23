import React, { Component } from 'react'

class Light extends Component {
  render() {
    return (
      <div className="light">
        <input
          id="light"
          type="range"
          value={this.value}
          min="0"
          max="100"
          step="1"
          onChange={this.props.updateLight}
        />
        <span>{this.props.light}</span>
      </div>
    )
  }
}

export default Light
