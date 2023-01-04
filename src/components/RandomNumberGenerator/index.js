import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onGenerateRandomNum = () => {
    const updateRandomNum = Math.ceil(Math.random() * 100)
    this.setState({
      randomNum: updateRandomNum,
    })
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="random-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="btn"
            type="button"
            onClick={this.onGenerateRandomNum}
          >
            Generate
          </button>
          <p className="radom-num">{randomNum}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
