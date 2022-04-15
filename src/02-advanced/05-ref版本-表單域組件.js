import React, { Component } from 'react'

class Field extends Component {
  state = {
    value: ''
  }

  clearForm = () => {
    this.setState({ value: '' })
  }

  setValue = (value) => {
    this.setState({ value: value })
  }

  render() {
    return (
      <div style={{ background: 'orange' }}>
        <label>{this.props.label}: </label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.setState({ value: evt.target.value })
          }}
          value={this.state.value}
        />
      </div>
    )
  }
}

export default class App extends Component {
  username = React.createRef()
  password = React.createRef()

  render() {
    return (
      <div>
        <h1>登入頁面</h1>
        <Field label="用戶名" type="text" ref={this.username} />
        <Field label="密碼" type="password" ref={this.password} />

        <button
          onClick={() => {
            console.log(this.username.current.state.value, this.password.current.state.value)
          }}
        >
          登入
        </button>
        <button
          onClick={() => {
            this.username.current.clearForm()
            this.password.current.clearForm()
          }}
        >
          取消
        </button>
      </div>
    )
  }
}
