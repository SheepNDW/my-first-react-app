import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myName: 'sheep',
    myAge: 100
  }

  // componentWillMount 初始化
  static getDerivedStateFromProps(nextProps, nextState) {
    // console.log(this) // undefined
    console.log('getDerivedStateFromProps', nextState)
    return {
      myName: nextState.myName.substring(0, 1).toUpperCase() + nextState.myName.substring(1)
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              myName: 'hitsuji'
            })
          }
        >
          click
        </button>
        App - {this.state.myName} - {this.state.myAge}
      </div>
    )
  }
}
