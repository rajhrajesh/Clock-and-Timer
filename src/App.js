import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {ShowClock: false}

  onToggleClock = () => {
    this.setState(prevState => {
      const {ShowClock} = prevState
      return {
        ShowClock: !ShowClock,
      }
    })
  }

  render() {
    const {ShowClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {ShowClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {ShowClock && <Clock />}
      </div>
    )
  }
}

export default App
