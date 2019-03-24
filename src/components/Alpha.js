import React, { Component } from 'react'

class Alpha extends Component {
  render() {
    return (
      <div className="alpha">
        <h3>Alpha</h3>
        <input
          id="alpha"
          type="range"
          value={this.value}
          min="0"
          max="1"
          step=".01"
          onChange={this.props.updateAlpha}
        />
        <span id="">{this.props.alpha}</span>
      </div>
    )
  }
}

export default Alpha
