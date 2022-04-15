import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent2/Film'
import Cinema from './maizuoComponent2/Cinema'
import Center from './maizuoComponent2/Center'
import Tabbar from './maizuoComponent2/Tabbar'
import Navbar from './maizuoComponent2/Navbar'

export default class App extends Component {
  state = {
    current: 0,
    list: [
      { id: 1, text: '電影' },
      { id: 2, text: '影院' },
      { id: 3, text: '我的' }
    ]
  }

  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>

      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Navbar
          changeIndex={() => {
            console.log('navbar - center')
            this.setState({ current: 2 })
          }}
        />

        {
          // 表達式 - 支持函式表達式
          this.which()
        }

        <Tabbar
          changeIndex={(index) => {
            console.log('父組件定義的回調', index)
            this.setState({
              current: index
            })
          }}
          current={this.state.current}
          list={this.state.list}
        />
      </div>
    )
  }
}
