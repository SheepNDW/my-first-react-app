import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={() => console.log('clicked', '如果邏輯過多, 不推薦此寫法')}>add 1</button>

        <button onClick={this.handleClick2}>add 2</button>
        <button onClick={this.handleClick3}>add 3</button>
        <button
          onClick={() => {
            this.handleClick4() // 比較推薦
          }}
        >
          add 4
        </button>
      </div>
    )
  }

  handleClick2() {
    console.log('clicked 2')
  }

  handleClick3 = () => {
    console.log('clicked 3')
  }

  handleClick4 = () => {
    console.log('clicked 4')
  }
}
