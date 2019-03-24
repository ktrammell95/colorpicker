import React, { Component } from 'react'

class Colorblock extends Component {
  render() {
    return (
      <div className="color-picker">
        <h1>Color Picker</h1>
        <div className="img-block">
          <div
            className="color-block"
            style={{
              backgroundColor: `hsla(${this.props.hue}, ${
                this.props.saturation
              }%, ${this.props.light}%, ${this.props.alpha})`
            }}
          />
        </div>
        <h2>
          <span>hsla</span>
          <span>({this.props.hue},</span>
          <span>{this.props.saturation}%,</span>
          <span>{this.props.light}%,</span>
          <span>{this.props.alpha})</span>
        </h2>
      </div>
    )
  }
}

export default Colorblock
