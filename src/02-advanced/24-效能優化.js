import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  state = {
    myName: 'Sheep'
  }

  render() {
    console.log('render')
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ myName: 'Hitsuji' })
          }}
        >
          click
        </button>

        {this.state.myName}
      </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return true  應該更新
  //   // return false 阻止更新
  //   // this.state 舊的狀態
  //   // nextState  新的狀態
  //   if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
  //     return true
  //   }
  //   return false
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}
