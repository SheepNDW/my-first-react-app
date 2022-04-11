// class Test {
//   constructor() {
//     this.a = 1
//   }

//   testA() {
//     console.log('testA')
//   }
// }

// class ChildTest extends Test {
//   testB() {
//     console.log('testB')
//   }
// }

// var obj = new ChildTest()
// obj.testA()
// console.log(obj.a)

import React from 'react'

class App extends React.Component {
  render() {
    return (
      <section>
        hello react Component
        <ul>
          <li>111</li>
          <li>222</li>
        </ul>
        <div>新的內容1</div>
        <div>新的內容2</div>
      </section>
    )
  }
}

export default App
