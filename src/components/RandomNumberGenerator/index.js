// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  buttonClicked = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg">
        <div className="innerCard">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="btnEl" onClick={this.buttonClicked}>
            Generate
          </button>
          <p className="numberPara">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
