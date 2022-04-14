import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 1
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add 1</button>
        <button onClick={this.handleAdd2}>add 2</button>
      </div>
    )
  }

  handleAdd1 = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count)
        // 狀態和真實 DOM 已經更新完了
      }
    )

    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count)
      }
    )

    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count)
      }
    )
  }

  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })

      console.log(this.state.count)

      this.setState({
        count: this.state.count + 1
      })

      console.log(this.state.count)

      this.setState({
        count: this.state.count + 1
      })

      console.log(this.state.count)
    }, 0)
  }
}

/*
  setState 處於同步的邏輯中時:   非同步更新狀態、更新真實 DOM
  setState 處於非同步的邏輯中時: 同步更新狀態、更新真實 DOM

  setState 可接受第二個參數, 第二個參數是 callback , 狀態和 DOM 更新完後就會觸發
*/
