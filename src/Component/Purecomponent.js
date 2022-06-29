import React, { Component, PureComponent } from 'react'

export default class Purecomponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
  render() {
    // console.log('Count is not updating still i am being called everytime')
    console.log('Since data is not changing i am not getting called everyttime on button click')
    return (
      <div>Purecomponent {this.state.count}
      <br></br>
      <button onClick={()=>this.setState({count: 10})}>PureComponent Demo</button>
      </div>
    )
  }
}
