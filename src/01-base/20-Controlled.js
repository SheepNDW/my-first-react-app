import React, { Component } from 'react'

export default class App extends Component {
  state = {
    username: 'Sheep123'
  }

  render() {
    return (
      <div>
        <h1>登入頁</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={(evt) => {
            console.log('onChange', evt.target.value)

            this.setState({
              username: evt.target.value
            })
          }}
        />

        <button
          onClick={() => {
            console.log(this.state.username)
          }}
        >
          登入
        </button>
        <button
          onClick={() => {
            this.setState({
              username: ''
            })
          }}
        >
          重置
        </button>

        {/* <Child myValue={this.state.username} /> */}
      </div>
    )
  }
}
