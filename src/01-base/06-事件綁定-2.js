import React, { Component } from 'react'

export default class App extends Component {
  a = 100

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={() => console.log('clicked', '如果邏輯過多, 不推薦此寫法', this.a)}>
          add 1
        </button>

        <button onClick={this.handleClick2.bind(this)}>add 2 - 不推薦這種寫法</button>
        <button onClick={this.handleClick3}>add 3 - 推薦</button>
        <button onClick={() => this.handleClick4()}>add 4 - 比較推薦</button>
      </div>
    )
  }

  handleClick2() {
    console.log('clicked 2', this.a)
  }

  handleClick3 = (evt) => {
    console.log('clicked 3', this.a, evt.target)
  }

  handleClick4 = () => {
    console.log('clicked 4', this.a)
  }
}

/*
  React 並不會真正的綁定事件到每一個具體的元素上, 而是採用事件代理的模式
*/

/*
  call: 改變 this, 自動執行函式
  apply: 改變 this, 自動執行函式
  bind: 改變 this, 不會自動執行, 需手動加括弧執行函式
*/
const obj1 = {
  name: 'obj1',
  getName() {
    console.log(this.name)
  }
}

const obj2 = {
  name: 'obj2',
  getName() {
    console.log(this.name)
  }
}

obj1.getName.bind(obj2)()
// obj2.getName()
