// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark'}

  onDarkMode = () => {
    this.setState(item => ({mode: 'Light'}))
  }

  onLightMode = () => {
    this.setState(item => ({mode: 'Dark'}))
  }

  render() {
    const {mode} = this.state
    let result
    if (mode === 'Dark') {
      result = (
        <div className="card-container-dark">
          <h1 className="main-heading-dark">Click To Change Mode</h1>
          <button
            type="button"
            className="button-style"
            onClick={this.onDarkMode}
          >
            Light Mode
          </button>
        </div>
      )
    } else {
      result = (
        <div className="card-container-light">
          <h1>Click To Change Mode</h1>
          <button
            type="button"
            className="button-style"
            onClick={this.onLightMode}
          >
            Dark Mode
          </button>
        </div>
      )
    }

    return <div className="bg-container">{result}</div>
  }
}

export default LightDarkMode
