import React, { Component } from 'react'
import Colorblock from './components/Colorblock'
import Saturation from './components/Saturation'
import Hue from './components/Hue'
import Light from './components/Light'
import Alpha from './components/Alpha'

import './App.css'
import './styles/colorpicker.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hue: 130,
      saturation: 100,
      light: 55,
      alpha: 1
    }
  }

  updateSaturation = event => {
    this.setState({ saturation: event.target.value })
    console.log('Saturation:' + event.target.value)
  }

  updateHue = event => {
    this.setState({ hue: event.target.value })
    console.log('Hue:' + event.target.value)
  }

  updateLight = event => {
    this.setState({ light: event.target.value })
    console.log('Light:' + event.target.value)
  }

  updateAlpha = event => {
    this.setState({ alpha: event.target.value })
    console.log('Alpha:' + event.target.value)
  }

  render() {
    return (
      <div className="App">
        <Colorblock
          hue={this.state.hue}
          saturation={this.state.saturation}
          light={this.state.light}
          alpha={this.state.alpha}
        />
        <Saturation
          saturation={this.state.saturation}
          updateSaturation={this.updateSaturation}
        />
        <Hue hue={this.state.hue} updateHue={this.updateHue} />
        <Light light={this.state.light} updateLight={this.updateLight} />
        <Alpha alpha={this.state.alpha} updateAlpha={this.updateAlpha} />
      </div>
    )
  }
}

export default App
