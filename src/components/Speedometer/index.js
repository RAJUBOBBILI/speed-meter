import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelation = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="image"
        />
        <h1 className="sub-heading">
          Speed is <span className="count">{count}</span>mph
        </h1>
        <p className="para">Min limit is 0mph,Max limit is 200mph</p>
        <div className="button-container">
          <button onClick={this.accelation} className="button1">
            Accelarate
          </button>
          <button onClick={this.brake} className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
