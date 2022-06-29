import React, { Component } from 'react'

export default class HideAndShowClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show: true
      }
    }
  render() {
    return (
      <div>
        {
            this.state.show ? <h1>HideAndShowClass</h1> : null
        }
        <button onClick={() => {this.setState({show: !this.state.show})}}>Hide/Show</button>
      </div>
    )
  }
}
