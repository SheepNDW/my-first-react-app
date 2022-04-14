import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    list: []
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>click</button>
        <div
          className="wrapper"
          style={{ height: '200px', background: 'orange', overflow: 'hidden' }}
        >
          <ul className="content">
            {this.state.list.map((item) => (
              <li key={item}>item</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getData() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    // this.setState(
    //   {
    //     list: list
    //   },
    //   () => {
    //     console.log(this.state.list)
    //     console.log(document.querySelectorAll('li'))
    //     new BScroll('.wrapper')
    //   }
    // )

    setTimeout(() => {
      this.setState({
        list: list
      })

      console.log(this.state.list)
      console.log(document.querySelectorAll('li'))
      new BScroll('.wrapper')
    }, 0)
  }
}
