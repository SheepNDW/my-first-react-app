import React, { Component } from 'react'

/*
  1. npm i immutable
  2. import { Map } from 'immutable
*/
import { Map } from 'immutable'

const obj = {
  name: 'sheep',
  age: 18
}

const oldImmuObj = Map(obj)
const newImmuObj = oldImmuObj.set('name', 'hitsuji')
// console.log(oldImmuObj, newImmuObj)

// 1. get 獲取 immutable
console.log(oldImmuObj.get('name'), newImmuObj.get('name'))

// 2. immutable ===> 普通物件
console.log(oldImmuObj.toJS(), newImmuObj.toJS())

// export default class App extends Component {
//   state = {
//     info: Map({
//       name: 'sheep',
//       age: 100
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({
//               info: this.state.info.set('name', 'hitsuji').set('age', 30)
//             })
//           }}
//         >
//           click
//         </button>
//         {this.state.info.get('name')} - {this.state.info.get('age')}
//       </div>
//     )
//   }
// }

export default class App extends Component {
  state = {
    info: {
      name: 'sheep',
      age: 100
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            const old = Map(this.state.info)
            const newImmu = old.set('name', 'hitsuji').set('age', 30)
            this.setState({ info: newImmu.toJS() })
          }}
        >
          click
        </button>
        {this.state.info.name} - {this.state.info.age}
      </div>
    )
  }
}
