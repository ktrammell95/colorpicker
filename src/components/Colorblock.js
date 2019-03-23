import React, { Component } from 'react'

class Colorblock extends Component {
  render() {
    return (
      <div className="color-picker">
        <h1>Color Picker</h1>
        <div className="color-block" />
        <h2>
          hsla({this.props.hue}, {this.props.saturation}%, {this.props.light}%,{' '}
          {this.props.alpha})
        </h2>
      </div>
    )
  }
}

export default Colorblock