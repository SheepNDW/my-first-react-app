import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: '#333', color: 'white' }}>
        <button
          onClick={() => {
            console.log('通知父組件, 將 isShow 取反')
            this.props.event() // 調用父組件傳來的函式
          }}
        >
          click
        </button>
        <span>navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: 'pink', width: '200px' }}>
        <ul>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    isShow: true
  }

  handleEvent = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    return (
      <div>
        <Navbar event={this.handleEvent} />

        {/* <button
          onClick={() => {
            this.setState({ isShow: !this.state.isShow })
          }}
        >
          click
        </button> */}
        {this.state.isShow && <Sidebar />}
      </div>
    )
  }
}

/*
  父傳子: props
  子傳父: callback
*/
