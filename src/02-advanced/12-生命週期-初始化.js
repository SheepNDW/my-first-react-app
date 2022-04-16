import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myName: 'Sheep'
  }

  UNSAFE_componentWillMount() {
    console.log('第一次 will mount', this.state.myName, document.getElementById('myName'))

    // 第一次上樹前的最後一次修改狀態
    this.setState({
      myName: 'Sheep11'
    })

    // 初始化資料的作用
  }

  componentDidMount() {
    console.log('第一次 did mount', document.getElementById('myName'))

    // axios 請求
    // 訂閱函式調用
    // setInterval
    // 基於創建完的 DOM 進行初始化... (ex: BetterScroll)
  }

  render() {
    console.log('render')
    return (
      <div>
        <span id="myName">{this.state.myName}</span>
      </div>
    )
  }
}
