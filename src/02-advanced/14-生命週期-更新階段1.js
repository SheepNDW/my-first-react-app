import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myName: 'Sheep',
    list: []
  }

  componentDidMount() {
    axios.get('/test.json').then((res) => {
      this.setState({ list: res.data.data.films })
    })
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
        <span id="myName">{this.state.myName}</span>

        <div id="wrapper" style={{ height: '100px', background: 'pink', overflow: 'hidden' }}>
          <ul>
            {this.state.list.map((item) => (
              <li key={item.filmId}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  UNSAFE_componentWillUpdate() {
    console.log('will update', document.getElementById('myName').innerHTML)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update', document.getElementById('myName').innerHTML)

    // 更新後, 想要獲取 DOM 節點
    console.log(prevState.list)
    if (prevState.list.length === 0) {
      new BScroll('#wrapper')
    }
  }
}
