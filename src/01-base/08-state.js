import React, { Component } from 'react'

export default class App extends Component {
  a = 1
  // state = {
  //   myText: '收藏',
  //   isLiked: true
  // }

  constructor() {
    super()
    this.state = {
      myText: '收藏',
      isLiked: true,
      myName: 'Sheep'
    }
  }

  render() {
    return (
      <div>
        <h1>歡迎來到 react 開發 - {this.state.myName}</h1>
        <button
          onClick={() => {
            // this.state.myText = "取消" // 不要直接修改狀態
            this.setState({
              // myText: '取消收藏'
              isLiked: !this.state.isLiked,
              myName: 'Hank'
            }) // 間接修改

            if (this.state.isLiked) {
              console.log('收藏的邏輯')
            } else {
              console.log('取消收藏的邏輯')
            }
          }}
        >
          {this.state.isLiked ? '收藏' : '取消收藏'}
        </button>
      </div>
    )
  }
}
