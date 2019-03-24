import React, { Component } from 'react'

class Hue extends Component {
  render() {
    return (
      <div className="hue">
        <h3>Hue</h3>
        <input
          id="hue"
          type="range"
          value={this.value}
          min="0"
          max="300"
          step="1"
          onChange={this.props.updateHue}
        />
        <span id="">{this.props.hue}</span>
      </div>
    )
  }
}

export default Hue
