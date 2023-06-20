import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  increaseCount = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button Has been clicked <span className="span">{count}</span>{' '}
          Times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button onClick={this.increaseCount} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
