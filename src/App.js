import React, { Component } from 'react'
import Colorblock from './components/Colorblock'
import Saturation from './components/Saturation'
import Hue from './components/Hue'
import Light from './components/Light'
import Alpha from './components/Alpha'
import Button from './components/Button'

import './App.css'
import './styles/colorpicker.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hue: 130,
      saturation: 100,
      light: 55,
      alpha: 1,
      hsla: ''
    }
  }
  min = 0
  max = 100
  hueMax = 300

  randomColor = () => {
    this.setState({
      hue: Math.round(this.min + Math.random() * (this.hueMax - this.min)),
      saturation: Math.round(this.min + Math.random() * (this.max - this.min)),
      light: Math.round(this.min + Math.random() * (this.max - this.min))
    })
  }

  componentDidMount() {
    this.randomColor()
  }

  randomize = () => {
    this.randomColor()
  }

  updateSaturation = event => {
    this.setState({ saturation: event.target.value })
    // console.log('Saturation:' + event.target.value)
  }

  updateHue = event => {
    this.setState({ hue: event.target.value })
    // console.log('Hue:' + event.target.value)
  }

  updateLight = event => {
    this.setState({ light: event.target.value })
    // console.log('Light:' + event.target.value)
  }

  updateAlpha = event => {
    this.setState({ alpha: event.target.value })
    // console.log('Alpha:' + event.target.value)
  }

  getHsla = () => {
    return `hsla(${this.state.hue}, ${this.state.sat}%, ${this.state.light}%, ${
      this.state.alpha
    })`
  }

  render() {
    return (
      <div className="App">
        <Colorblock
          hue={this.state.hue}
          saturation={this.state.saturation}
          light={this.state.light}
          alpha={this.state.alpha}
          getHsla={this.getHsla}
        />
        <Hue hue={this.state.hue} updateHue={this.updateHue} />
        <Saturation
          saturation={this.state.saturation}
          updateSaturation={this.updateSaturation}
        />
        <Light light={this.state.light} updateLight={this.updateLight} />
        <Alpha alpha={this.state.alpha} updateAlpha={this.updateAlpha} />
        <Button randomize={this.randomize} />
      </div>
    )
  }
}

export default App
