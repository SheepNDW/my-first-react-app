import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myText: '111'
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => this.setState({ myText: '222' })}>click</button>
        {this.state.myText}
      </div>
    )
  }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  componentDidUpdate(prevProps, prevState, value) {
    console.log('componentDidUpdate', value)
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
}
