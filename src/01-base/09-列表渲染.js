import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [
      { id: 1, text: '111' },
      { id: 2, text: '222' },
      { id: 3, text: '333' }
    ]
  }

  render() {
    // const newList = this.state.list.map((item) => <li>{item}</li>)
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {item.text} - {index}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
/*
  為了列表的複用和重排, 設置 key 值, 提高性能
  理想 key: item.id
  不涉及列表的增刪、重排, 設置成索引值 index 也可以
*/

/*
  原生js - map
*/
let list = ['aa', 'bb', 'cc']

let newList = list.map((item) => `<li>${item}</li>`)

console.log(newList.join(''))
