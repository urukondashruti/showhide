import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    count: true,
    counts: true,
  }

  onChange = () => {
    const {count} = this.state
    this.setState(() => ({count: !count}))
  }

  onChange1 = () => {
    const {counts} = this.state
    this.setState(() => ({counts: !counts}))
  }

  onAdd = () => {
    const {count} = this.state

    if (count === false) {
      return (
        <div className="con">
          <p>Joe</p>
        </div>
      )
    }
    return null
  }

  onAdd1 = () => {
    const {counts} = this.state
    if (counts === false) {
      return (
        <div className="con">
          <p>Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="back">
        <h1>Show/Hide</h1>
        <div className="con1">
          <div className="con3">
            <button type="button" className="but" onClick={this.onChange}>
              Show/Hide Firstname
            </button>
            {this.onAdd()}
          </div>
          <div className="con4">
            <button type="button" className="but" onClick={this.onChange1}>
              Show/Hide Lastname
            </button>
            {this.onAdd1()}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
