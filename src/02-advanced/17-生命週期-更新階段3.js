import React, { Component } from 'react'

class Child extends Component {
  state = {
    title: ''
  }

  render() {
    return <div>Child - {this.state.title}</div>
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)

    // 最先獲得父組件傳來的屬性, 可以利用屬性進行 ajax 或是其他邏輯處理
    // 把屬性轉換成自己的狀態

    this.setState({ title: nextProps.text + 'hello' })
  }
}

export default class App extends Component {
  state = {
    text: '111'
  }
  render() {
    return (
      <div>
        {this.state.text}
        <button onClick={() => this.setState({ text: '222' })}>click</button>
        <Child text={this.state.text} />
      </div>
    )
  }
}
