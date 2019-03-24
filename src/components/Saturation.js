import React, { Component } from 'react'

class Saturation extends Component {
  render() {
    return (
      <div className="saturation">
        <h3>Saturation</h3>
        <input
          id="saturation"
          type="range"
          value={this.value}
          min="0"
          max="100"
          step="1"
          onChange={this.props.updateSaturation}
        />
        <span id="">{this.props.saturation}</span>
      </div>
    )
  }
}

export default Saturation
