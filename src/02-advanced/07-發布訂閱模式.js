import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return <div>App</div>
  }
}

// 調度中心
const bus = {
  list: [],
  // 訂閱
  subscribe(callback) {
    this.list.push(callback)
  },
  // 發佈
  publish(text) {
    // 遍歷所有的 list, 將回調函式執行
    this.list.forEach((callback) => {
      callback && callback(text)
    })
  }
}

// 訂閱者
bus.subscribe((value) => {
  console.log('111', value)
})

bus.subscribe((value) => {
  console.log('222', value)
})

// 發佈者
setTimeout(() => {
  bus.publish('邦邦')
}, 1000)

setTimeout(() => {
  bus.publish('PICO')
}, 2000)

// Redux 基於訂閱發佈
