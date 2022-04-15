import React, { Component } from 'react'

export default class App extends Component {
  myUsername = React.createRef()

  render() {
    return (
      <div>
        <h1>登入頁</h1>
        <input type="text" ref={this.myUsername} defaultValue="Sheep123" />

        <button
          onClick={() => {
            console.log(this.myUsername.current.value)
          }}
        >
          登入
        </button>
        <button
          onClick={() => {
            this.myUsername.current.value = ''
          }}
        >
          重置
        </button>
      </div>
    )
  }
}
