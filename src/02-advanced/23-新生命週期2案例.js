import React, { Component } from 'react'
import './css/04-clear.css'

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  myRef = React.createRef()

  getSnapshotBeforeUpdate() {
    // 取得容器高度
    return [this.myRef.current.scrollHeight, this.myRef.current.scrollTop]
  }

  componentDidUpdate(prevProps, PrevState, snapShot) {
    this.myRef.current.scrollTop = this.myRef.current.scrollHeight - snapShot[0] + snapShot[1]
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              list: [...[11, 12, 13, 14, 15, 16, 17, 18, 19], ...this.state.list]
            })
          }
        >
          新郵件
        </button>
        <h1>Email 應用</h1>
        <div style={{ height: '200px', overflow: 'auto' }} ref={this.myRef}>
          <ul>
            {this.state.list.map((item) => (
              <li key={item} style={{ height: '100px', background: 'yellow' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
