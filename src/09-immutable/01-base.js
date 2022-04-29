import React, { Component } from 'react'

// 引用複製 (淺複製、淺拷貝)
// var obj = {
//   name: 'sheep'
// }
// var obj2 = obj
// obj2.name = 'hitsuji'
// console.log(obj, obj2)

// 比淺複製多複製一層
// var myObj = {
//   name: 'sheep',
//   arr: [1, 2, 3]
// }

// var myObj2 = { ...myObj }

// myObj2.name = 'hitsuji'
// myObj2.arr.splice(1, 1)

// console.log(myObj, myObj2)

// json-parse json-stringify
var jsonObj = {
  name: 'sheep',
  arr: [1, 2, 3],
  address: undefined
}

var jsonObj2 = JSON.parse(JSON.stringify(jsonObj))

jsonObj2.name = 'hitsuji'
jsonObj2.arr.splice(1, 1)

console.log(jsonObj, jsonObj2)

export default class App extends Component {
  render() {
    return <div>App</div>
  }
}
